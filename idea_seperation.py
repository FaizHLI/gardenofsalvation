# STEP ONE
# TOKENIZATION

import spacy
from spacy.matcher import Matcher
import re
spacy.load('en_core_web_sm')

class QueryParser:
    def __init__(self, model="en_core_web_sm"):
        try:
            self.nlp = spacy.load(model)
        except OSError:
            print(f"Model {model} not found. Using blank model instead.")
            print("For full functionality, install the model with: python -m spacy download en_core_web_sm")
            self.nlp = spacy.blank("en")
            
        pipe_names = [name for name, _ in self.nlp.pipeline]
        if "sentencizer" not in pipe_names:
            self.nlp.add_pipe("sentencizer")
    
    def _identify_question_type(self, text):
        text_lower = text.lower()

        if " and " in text_lower and any(q in text_lower for q in ["what", "how", "why", "who", "when", "where", "can you"]):
            return "compound"

        if text_lower.count(",") >= 2 or "including" in text_lower:
            return "list"

        if any(word in text_lower for word in ["explain", "describe", "elaborate", "clarify"]):
            return "explanatory"

        if text_lower.startswith(("what is", "what are", "what was", "what were")):
            return "conceptual"

        if "how does" in text_lower or "how do" in text_lower:
            return "process"

        return "general"
    
    def _extract_main_entities(self, text):
        doc = self.nlp(text)

        main_entities = []
        for token in doc:
            if token.dep_ == "dobj" and token.pos_ == "NOUN":
                span = self._get_span_for_token(doc, token)
                if span:
                    main_entities.append(span.text)

        if not main_entities:
            for token in doc:
                if token.dep_ in ("nsubj", "nsubjpass") and token.pos_ == "NOUN":
                    span = self._get_span_for_token(doc, token)
                    if span:
                        main_entities.append(span.text)

        if not main_entities:
            for chunk in doc.noun_chunks:
                if chunk.root.pos_ == "NOUN":
                    main_entities.append(chunk.text)

        filtered_entities = [e for e in main_entities 
                           if e.lower() not in ("thing", "things", "way", "question", "someone", "something")]
        
        if filtered_entities:
            return filtered_entities

        for token in doc:
            if token.pos_ == "NOUN":
                return [token.text]
        
        return []
    
    def _get_span_for_token(self, doc, token):
        start = token.i
        while start > 0 and doc[start - 1].dep_ in ("compound", "amod", "det", "nummod", "advmod", "poss"):
            start -= 1

        end = token.i + 1
        while end < len(doc) and doc[end].dep_ in ("prep", "pobj", "compound", "conj"):
            if doc[end].dep_ in ("prep", "pobj"):
                prep_end = end + 1
                while prep_end < len(doc) and (doc[prep_end].dep_ in ("pobj", "amod", "compound") or 
                                              doc[prep_end].pos_ in ("ADP", "DET")):
                    prep_end += 1
                end = prep_end
            else:
                end += 1
        
        return doc[start:end]
    
    def _resolve_pronouns(self, chunks):
        if len(chunks) <= 1:
            return chunks
            
        resolved_chunks = [chunks[0]]

        first_chunk = chunks[0]
        main_entities = self._extract_main_entities(first_chunk)

        pronoun_types = {
            "it": "singular",
            "they": "plural",
            "them": "plural",
            "these": "plural",
            "this": "singular",
            "those": "plural",
            "that": "singular",
        }

        for i, chunk in enumerate(chunks[1:], 1):
            chunk_lower = chunk.lower()
            modified_chunk = chunk

            for pronoun, p_type in pronoun_types.items():
                pattern = r'\b' + pronoun + r'\b'
                if re.search(pattern, chunk_lower):
                    if main_entities:
                        referent = main_entities[0] 

                        for entity in main_entities:
                            is_plural = entity.endswith('s')
                            if (is_plural and p_type == "plural") or (not is_plural and p_type == "singular"):
                                referent = entity
                                break

                        if chunk_lower.startswith(pronoun + " "):
                            replacement = referent[0].upper() + referent[1:]
                            modified_chunk = re.sub(r'^' + pronoun + r'\b', replacement, chunk, flags=re.IGNORECASE)
                        else:
                            modified_chunk = re.sub(r'\b' + pronoun + r'\b', referent, modified_chunk, flags=re.IGNORECASE)
            
            resolved_chunks.append(modified_chunk)
        
        return resolved_chunks
    
    def _split_compound_question(self, text):
        pattern = r',?\s+and\s+'

        list_pattern = r'[^,]+,\s+[^,]+,\s+and\s+[^,]+'
        if re.search(list_pattern, text):
            return self._split_by_topic(text)

        parts = re.split(pattern, text)

        if len(parts) <= 1:
            return [text]
        
        chunks = []
        first_part = parts[0].strip()
        if first_part and not first_part.endswith("?"):
            first_part += "?"
        chunks.append(first_part)

        for i, part in enumerate(parts[1:], 1):
            if not part:
                continue

            prev_part = parts[i-1]
            
            needs_prefix = not any(part.lower().startswith(q) for q in ["what", "how", "why", "who", "when", "where", "can you"])
            
            if needs_prefix:
                if "explain" in prev_part.lower():
                    part = f"Can you explain {part}"
                elif "describe" in prev_part.lower():
                    part = f"Can you describe {part}"
                elif "how" in prev_part.lower() and "work" in prev_part.lower():
                    part = f"How does {part} work"
                elif "what is" in prev_part.lower():
                    part = f"What is {part}"
                elif "what are" in prev_part.lower():
                    part = f"What are {part}"
                else:
                    doc = self.nlp(prev_part)
                    main_verb = None
                    for token in doc:
                        if token.pos_ == "VERB" and token.dep_ in ("ROOT", "ccomp"):
                            main_verb = token.text
                            break
                            
                    if main_verb and main_verb.lower() not in ("is", "are", "was", "were"):
                        part = f"Can you {main_verb} {part}"
                    else:
                        if "impact" in part.lower() or "effect" in part.lower() or "influence" in part.lower():
                            part = f"What is the impact of {part}"
                        elif "development" in part.lower() or "evolution" in part.lower():
                            part = f"How did {part} develop"
                        elif "role" in part.lower():
                            part = f"What role does {part} play"
                        else:
                            part = f"What about {part}"

            if not part.endswith("?"):
                part += "?"
                
            chunks.append(part)

        return self._resolve_pronouns(chunks)
    
    def _split_by_topic(self, text):
        doc = self.nlp(text)
        
        question_verbs = []
        for token in doc:
            if token.lemma_ in ["explain", "describe", "discuss", "elaborate", "clarify"] and token.dep_ in ["ROOT", "xcomp"]:
                question_verbs.append(token.text)

        if question_verbs:
            main_verb = question_verbs[0]
            verb_pos = text.lower().find(main_verb.lower())
            if verb_pos > -1:
                topics_text = text[verb_pos + len(main_verb):].strip()

                topics = re.split(r',\s+(?:and\s+)?|\s+and\s+', topics_text)

                chunks = []
                for topic in topics:
                    topic = topic.strip()
                    topic = re.sub(r'[.?!]$', '', topic).strip()
                    
                    if topic:
                        chunk = f"Can you {main_verb} {topic}?"
                        chunks.append(chunk)
                
                return chunks

        return [text]
    
    def _extract_list_items(self, text):
        main_question = text
        list_items = []

        if "including" in text.lower():
            parts = re.split(r"(?i)including", text, 1)
            if len(parts) > 1:
                main_question = parts[0].strip()
                items_text = parts[1].strip()

                items = re.split(r",\s+(?:and\s+)?|\s+and\s+", items_text)
                for item in items:
                    item = item.strip()
                    if item and len(item) > 3:
                        list_items.append(f"{main_question} {item}")

        elif "," in text and " and " in text:
            match = re.search(r"^([^,]+)", text)
            if match:
                question_part = match.group(1).strip()

                list_part = text[len(question_part):].strip()
                items = re.split(r",\s+(?:and\s+)?|\s+and\s+", list_part)
                
                for item in items:
                    item = item.strip()
                    if item and len(item) > 3:
                        if question_part.lower().startswith("what"):
                            list_items.append(f"What is {item}")
                        elif question_part.lower().startswith("how"):
                            list_items.append(f"How does {item} work")
                        else:
                            list_items.append(f"{question_part} {item}")

        if list_items:
            return [main_question] + list_items

        return [text]
    
    def _extract_subtopics(self, text):
        if "explain" in text.lower() and (text.count(",") >= 1 or " and " in text):
            return self._split_by_topic(text)

        main_topic = text
        subtopics = []

        patterns = [r"(?i)such as", r"(?i)like", r",\s+"]
        
        for pattern in patterns:
            if re.search(pattern, text):
                parts = re.split(pattern, text, 1)
                if len(parts) > 1:
                    main_topic = parts[0].strip()
                    subtopic_text = parts[1].strip()

                    subtopic_items = re.split(r",\s+(?:and\s+)?|\s+and\s+", subtopic_text)
                    for item in subtopic_items:
                        item = item.strip()
                        if item and len(item) > 3:
                            if "explain" in main_topic.lower():
                                subtopics.append(f"Explain {item}")
                            elif "describe" in main_topic.lower():
                                subtopics.append(f"Describe {item}")
                            elif main_topic.lower().startswith("what is"):
                                subtopics.append(f"What is {item}")
                            elif main_topic.lower().startswith("how does"):
                                subtopics.append(f"How does {item} work")
                            else:
                                subtopics.append(f"{main_topic} - {item}")
                    
                    break
        
        if subtopics:
            return [main_topic] + subtopics
        
        return [text]
    
    def parse(self, text):
        question_type = self._identify_question_type(text)

        if question_type == "compound":
            chunks = self._split_compound_question(text)
        elif question_type == "list":
            chunks = self._extract_list_items(text)
        elif question_type == "explanatory":
            chunks = self._extract_subtopics(text)
        else:
            if " and " in text:
                doc = self.nlp(text)
                has_multiple_subjects = False

                subject_count = 0
                for token in doc:
                    if token.dep_ in ("nsubj", "nsubjpass"):
                        subject_count += 1

                if subject_count > 1:
                    chunks = self._split_compound_question(text)
                else:
                    chunks = [text]
            else:
                chunks = [text]

        return self._clean_chunks(chunks)
    
    def _clean_chunks(self, chunks):
        if not chunks:
            return []
            
        cleaned = []
        for chunk in chunks:
            if len(chunk) < 5:
                continue

            chunk = re.sub(r'\s+', ' ', chunk).strip()
            chunk = re.sub(r'^[,;:\s]+', '', chunk).strip()

            if any(chunk.lower().startswith(q) for q in ["what", "how", "why", "who", "when", "where", "can you"]):
                if not chunk.endswith("?"):
                    chunk += "?"

            if chunk not in cleaned:
                cleaned.append(chunk)
        
        return cleaned

"""
# Example usage
if __name__ == "__main__":
    parser = QueryParser()
    
    # Test with various example questions
    test_questions = [
        
        "Explain black hole formation, including its definition, the process of stellar collapse, the Schwarzschild radius, Hawking radiation, and its role in astrophysical research."

    ]
    
    for question in test_questions:
        chunks = parser.parse(question)
        print("\nOriginal question:", question)
        print("Broken down into chunks:")
        for i, chunk in enumerate(chunks, 1):
            print(f"{i}. {chunk}")"
"""