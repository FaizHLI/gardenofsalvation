import nltk
import re
from serpapi import GoogleSearch


def search_query(query):
    params = {
        'q': query,
        'api_key': '697666a209ae95ce18a4ff552cb392c5f6d449ce79a9af43afc878ac7c8f1fe3' 
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    return results if results else None

def clean_text(text):
    text = re.sub(r'\s*\.\.\.', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def get_answer_box(results):
    if "answer_box" in results:
        return results["answer_box"].get("answer", None)
    return None

def get_snippet_and_link(results):
    if "organic_results" in results:
        first_result = results["organic_results"][0]
        snippet = clean_text(first_result.get("snippet", ""))
        link = first_result.get("link", "")
        return snippet, link
    return None, None


def handle_search_result(search_results):
    if search_results:
        answer_box = get_answer_box(search_results)
        if answer_box:
            return f"Answer: {answer_box}"
        else:
            snippet, link = get_snippet_and_link(search_results)
            if snippet and link:
                return f"{snippet}...\n  For more details visit: {link}"
            else:
                return None
    else:
        return None