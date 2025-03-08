from serpapi import GoogleSearch
from sumy.parsers.plaintext import PlaintextParser
from sumy.summarizers.text_rank import TextRankSummarizer
from sumy.nlp.tokenizers import Tokenizer
def search_query(query):
    # Call the search API (e.g., SerpAPI)
    params = {
        'q': query, 
        'api_key': '697666a209ae95ce18a4ff552cb392c5f6d449ce79a9af43afc878ac7c8f1fe3',  # Replace with your actual API key
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    
    return results if results else None

def summarize_text(text, num_sentences=3):
    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    summarizer = TextRankSummarizer()
    summary = summarizer(parser.document, num_sentences)
    return ' '.join(str(sentence) for sentence in summary)