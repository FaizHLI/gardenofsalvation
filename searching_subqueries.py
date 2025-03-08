import nltk
import re
from serpapi import GoogleSearch

nltk.download('punkt_tab')

def search_query(query):
    params = {
        'q': query,
        'api_key': '697666a209ae95ce18a4ff552cb392c5f6d449ce79a9af43afc878ac7c8f1fe3'  # Replace with actual API key
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    return results if results else None

def clean_text(text):
    """Remove trailing ellipses and normalize spacing."""
    text = re.sub(r'\s*\.\.\.', '', text)  # Remove cut-off phrases
    text = re.sub(r'\s+', ' ', text).strip()  # Normalize spaces
    return text

def get_answer_box(results):
    """Get the answer box from the search results if available."""
    if "answer_box" in results:
        return results["answer_box"].get("answer", None)
    return None

def get_snippet_and_link(results):
    """Get a snippet and a link from the organic results."""
    if "organic_results" in results:
        first_result = results["organic_results"][0]
        snippet = clean_text(first_result.get("snippet", ""))
        link = first_result.get("link", "")
        return snippet, link
    return None, None