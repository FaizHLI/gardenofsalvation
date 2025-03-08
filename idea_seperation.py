# STEP ONE
# TOKENIZATION

import spacy
from spacy.matcher import Matcher
import re
spacy.load('en_core_web_sm')

class QueryParser:
    """
    A parser that breaks down complex sentences with nested queries into 
    more manageable chunks using spaCy.
    """
    
    def __init__(self, model="en_core_web_sm"):
        """Initialize the parser with a specific spaCy model."""
        self.nlp = spacy.load(model)
        # Add sentence segmentation rules
        self.nlp.add_pipe("sentencizer")
        # Set up matcher for query patterns
        self.matcher = Matcher(self.nlp.vocab)
        
        # Define patterns for different types of queries
        self._setup_matchers()
        
    def _setup_matchers(self):
        """Set up patterns to identify different types of queries and clauses."""
        # Direct question pattern
        question_pattern = [
            {"POS": "VERB", "DEP": "ROOT"},
            {"OP": "*"},
            {"IS_PUNCT": True, "ORTH": "?"}
        ]
        
        # Nested question/query patterns
        nested_pattern = [
            {"LOWER": {"IN": ["what", "who", "when", "where", "why", "how"]}},
            {"OP": "+"}
        ]
        
        # Command/request pattern
        command_pattern = [
            {"POS": "VERB", "IS_SENT_START": True},
            {"OP": "*"}
        ]
        
        # Add patterns to matcher
        self.matcher.add("DIRECT_QUESTION", [question_pattern])
        self.matcher.add("NESTED_QUERY", [nested_pattern])
        self.matcher.add("COMMAND", [command_pattern])
    
    def _find_clause_boundaries(self, doc):
        """Find boundaries of clauses based on dependency parsing."""
        clause_boundaries = []
        
        for token in doc:
            # Identify subordinate clauses
            if token.dep_ in ("ccomp", "xcomp", "advcl", "acl", "relcl"):
                # Get the span of this clause
                clause_start = token.i
                clause_end = token.i
                
                # Find end of the clause
                for child in token.subtree:
                    clause_end = max(clause_end, child.i)
                
                clause_boundaries.append((clause_start, clause_end + 1))
        
        return clause_boundaries
    
    def _split_by_conjunctions(self, doc):
        """Split text by coordinating conjunctions."""
        splits = []
        
        for token in doc:
            if token.dep_ == "cc" and token.head.dep_ in ("ROOT", "conj"):
                # Find the spans before and after the conjunction
                left_span = [t for t in token.head.subtree if t.i < token.i]
                right_span = []
                
                # Find the right part (the conjoined element)
                for t in doc:
                    if t.dep_ == "conj" and t.head == token.head:
                        right_span = list(t.subtree)
                        break
                
                if left_span and right_span:
                    left_ids = [t.i for t in left_span]
                    right_ids = [t.i for t in right_span]
                    
                    splits.append((min(left_ids), max(left_ids) + 1))
                    splits.append((min(right_ids), max(right_ids) + 1))
        
        return splits
    
    def _extract_parenthetical_content(self, text):
        """Extract content within parentheses as separate chunks."""
        parenthetical_spans = []
        stack = []
        
        for i, char in enumerate(text):
            if char == '(':
                stack.append(i)
            elif char == ')' and stack:
                start = stack.pop()
                # Only consider complete parenthetical expressions
                if not stack:
                    parenthetical_spans.append((start, i + 1))
        
        # Extract the spans
        parenthetical_content = []
        for start, end in parenthetical_spans:
            content = text[start:end].strip()
            if content:
                parenthetical_content.append(content)
                
        # Also return the text with parentheticals removed
        clean_text = text
        for start, end in sorted(parenthetical_spans, reverse=True):
            clean_text = clean_text[:start] + clean_text[end:]
            
        return clean_text, parenthetical_content
    
    def parse(self, text):
        """
        Parse complex text into smaller, more manageable chunks.
        
        Args:
            text (str): The complex text to parse
            
        Returns:
            list: A list of simpler text chunks
        """
        # First, handle parenthetical expressions
        clean_text, parentheticals = self._extract_parenthetical_content(text)
        
        # Process the cleaned text
        doc = self.nlp(clean_text)
        
        # Get sentence boundaries
        sentences = list(doc.sents)
        chunks = []
        
        for sent in sentences:
            sent_doc = self.nlp(sent.text)
            
            # Find clauses using dependency parsing
            clause_boundaries = self._find_clause_boundaries(sent_doc)
            
            # Find conjunctions
            conjunction_splits = self._split_by_conjunctions(sent_doc)
            
            # Combine all potential splits
            all_spans = clause_boundaries + conjunction_splits
            
            # If we found internal structures, add them as chunks
            if all_spans:
                for start, end in all_spans:
                    span_text = sent_doc[start:end].text.strip()
                    if span_text and len(span_text) > 5:  # Avoid tiny fragments
                        chunks.append(span_text)
            else:
                # If no internal structure, use the whole sentence
                chunks.append(sent.text)
            
            # Look for query patterns
            matches = self.matcher(sent_doc)
            for match_id, start, end in matches:
                match_span = sent_doc[start:end].text.strip()
                # Avoid duplicates
                if match_span not in chunks and len(match_span) > 5:
                    chunks.append(match_span)
        
        # Add parentheticals as separate chunks
        chunks.extend(parentheticals)
        
        # Clean up chunks (remove duplicates and subsumed chunks)
        return self._clean_chunks(chunks)
    
    def _clean_chunks(self, chunks):
        """Remove duplicates and chunks that are subsets of other chunks."""
        cleaned = []
        chunks.sort(key=len, reverse=True)
        
        for chunk in chunks:
            # Skip very small chunks
            if len(chunk) < 5:
                continue
                
            # Check if this chunk is already covered by an existing chunk
            if not any(chunk in existing and chunk != existing for existing in cleaned):
                cleaned.append(chunk)
        
        return cleaned

# Example usage
if __name__ == "__main__":
    parser = QueryParser()
    
    # Example complex sentence
    complex_query = "Explain quantum entanglement, including its definition, the EPR paradox, how it's tested in Bell's theorem experiments, and its applications in quantum cryptography."
    
    chunks = parser.parse(complex_query)
    print("Original query:", complex_query)
    print("\nBroken down into chunks:")
    for i, chunk in enumerate(chunks, 1):
        print(f"{i}. {chunk}")



# STEP TWO
# TYPE CLASSIFICATION
