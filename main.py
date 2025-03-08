from idea_seperation import QueryParser
from querydetector import classify_query
from searching_subqueries import handle_search_result, search_query
from ai import ai


def main():
    parser = QueryParser()
    question = input("What is your question?\n")
    chunks = parser.parse(question)
    search_scores = []
    for x in chunks:
        search_scores.append(classify_query(x))
    results = []
    for x in range(len(chunks)):
        if(search_scores[x] == 'factual'):
            results.append(handle_search_result(search_query(chunks[x])))
        else:
            results.append(ai(chunks[x]))
    print(chunks)
    print(search_scores)
    print(results)
main()