from google import genai

def ai(data):
    client = genai.Client(api_key="AIzaSyCLuqdmYKIl98P0TzBrc_h7wPkK9pnLgsY")
    response = client.models.generate_content(
        model="gemini-2.0-flash", contents = data + " be concise"
    )
    return response.text

#ai_answer = input("Hello, ask something to AI. \n")
#print(ai(ai_answer))