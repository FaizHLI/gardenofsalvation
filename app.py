from flask import Flask, request, jsonify
from flask_cors import CORS
from idea_seperation import QueryParser
from querydetector import classify_query
from searching_subqueries import handle_search_result, search_query
from ai import ai

app = Flask(__name__)
CORS(app)

@app.route('/process_query', methods=['POST'])
def process_query():
    data = request.json
    question = data.get("question")
    if not question:
        return jsonify({"error": "No question provided"}), 400

    parser = QueryParser()
    chunks = parser.parse(question)
    search_scores = [classify_query(x) for x in chunks]
    results = [
        handle_search_result(search_query(chunk)) if score == "factual" else ai(chunk)
        for chunk, score in zip(chunks, search_scores)
    ]

    response = {
        "chunks": chunks,
        "search_scores": search_scores,
        "results": results
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)