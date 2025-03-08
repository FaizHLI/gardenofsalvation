import spacy
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline, Pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from sklearn.preprocessing import FunctionTransformer
import numpy as np
from sklearn.pipeline import FeatureUnion

nlp = spacy.load("en_core_web_sm")

data = [
# Factual Queries
("What is quantum entanglement?", "factual"),
("How does the stock market work?", "factual"),
("What is the capital of France?", "factual"),
("When was the Declaration of Independence signed?", "factual"),
("How far is the Earth from the Sun?", "factual"),
("Who was the first president of the United States?", "factual"),
("What is the speed of light?", "factual"),
("What is the largest mammal?", "factual"),
("Where is Mount Everest located?", "factual"),
("Who wrote 'Romeo and Juliet'?", "factual"),
("What is the boiling point of water?", "factual"),
("What is the chemical symbol for gold?", "factual"),
("What is the longest river in the world?", "factual"),
("When did World War I start?", "factual"),
("What causes a solar eclipse?", "factual"),
("How does the human brain work?", "factual"),
("What is the formula for water?", "factual"),
("What are the primary colors?", "factual"),
("How many countries are there in the world?", "factual"),
("What are the stages of the water cycle?", "factual"),
("What is the process of photosynthesis?", "factual"),
("Who invented the telephone?", "factual"),
("What is the largest desert on Earth?", "factual"),
("How many continents are there?", "factual"),
("How does the heart pump blood?", "factual"),
("What is the freezing point of water?", "factual"),
("Who was the first man on the moon?", "factual"),
("What are black holes?", "factual"),
("Where is the Great Barrier Reef?", "factual"),
("How do bees produce honey?", "factual"),
("What is the smallest planet in our solar system?", "factual"),

# Subjective Queries
("What is your favorite movie?", "subjective"),
("What do you think of the new iPhone?", "subjective"),
("How do you feel about climate change?", "subjective"),
("What is your opinion on social media?", "subjective"),
("What is the best way to spend a weekend?", "subjective"),
("Do you like the taste of coffee?", "subjective"),
("What do you think of the latest trends in fashion?", "subjective"),
("How do you feel about the education system?", "subjective"),
("What's your favorite season of the year?", "subjective"),
("Do you think artificial intelligence will change the world?", "subjective"),
("What is your opinion on the latest superhero movie?", "subjective"),
("How do you feel about remote work?", "subjective"),
("What's your favorite book?", "subjective"),
("How do you feel about online dating?", "subjective"),
("What's your opinion on climate activism?", "subjective"),
("What's your favorite genre of music?", "subjective"),
("Do you like modern art?", "subjective"),
("What's your opinion on fast food?", "subjective"),
("What is your favorite vacation destination?", "subjective"),
("How do you feel about working from home?", "subjective"),
("What is your opinion on the education system?", "subjective"),
("Do you think remote learning is effective?", "subjective"),
("What's your opinion on the future of space exploration?", "subjective"),
("Do you believe in extraterrestrial life?", "subjective"),
("How do you feel about animal testing?", "subjective"),
("What's your favorite type of cuisine?", "subjective"),
("What is your opinion on cryptocurrency?", "subjective"),
("What's your favorite hobby?", "subjective"),
("How do you feel about the gig economy?", "subjective"),

# Instructional Queries (Revised to remove "What is" type)
("How to tie your shoes?", "instructional"),
("How do you bake a cake?", "instructional"),
("How to install a new software?", "instructional"),
("What are the steps to build a website?", "instructional"),
("How to make a cup of coffee?", "instructional"),
("How do you use Microsoft Excel?", "instructional"),
("What is the process for changing a tire?", "instructional"),
("How to start a business?", "instructional"),
("How to set up a wireless router?", "instructional"),
("How to write a resume?", "instructional"),
("How do I take care of a pet?", "instructional"),
("What is the process for applying to college?", "instructional"),
("How to write a book?", "instructional"),
("How do you prepare for an interview?", "instructional"),
("How to grow a garden?", "instructional"),
("How do you clean a house?", "instructional"),
("How to do a backflip?", "instructional"),
("What is the best way to learn a new language?", "instructional"),
("How to play the guitar?", "instructional"),
("How do you make a pizza?", "instructional"),
("How do you make a smoothie?", "instructional"),
("How do you organize your email inbox?", "instructional"),
("What are the steps to create a podcast?", "instructional"),
("How do you start a blog?", "instructional"),
("How to fold a shirt?", "instructional"),
("How to meditate?", "instructional"),
("How do you clean a laptop?", "instructional"),
("How do you install a new tire?", "instructional"),
("How to update your resume?", "instructional"),
("How do you get rid of stains?", "instructional"),
("How do you write a business plan?", "instructional"),
("How to grow tomatoes indoors?", "instructional"),

# More Factual Queries (Refining "What is" queries to factual)
("What is the chemical symbol for oxygen?", "factual"),
("How many languages are spoken in the world?", "factual"),
("Who was the first woman to fly solo across the Atlantic?", "factual"),
("What is the deepest part of the ocean?", "factual"),
("Who discovered penicillin?", "factual"),
("What is the capital of Japan?", "factual"),
("Who painted the Mona Lisa?", "factual"),
("What is the tallest mountain in the world?", "factual"),
("What is the smallest country in the world?", "factual"),
("When did World War II end?", "factual"),
("Who is the founder of Facebook?", "factual"),
("What is the longest ocean in the world?", "factual"),
("What is the hardest natural substance?", "factual"),
("What is the fastest bird?", "factual"),
("What is the longest-running TV show?", "factual"),

# More Subjective Queries
("Do you think people should work from home or in the office?", "subjective"),
("Do you prefer city life or rural life?", "subjective"),
("What are your thoughts on virtual reality?", "subjective"),
("How do you feel about fast fashion?", "subjective"),
("What is the best way to handle stress?", "subjective"),
("What do you think about climate change policies?", "subjective"),
("Do you think social media is damaging to mental health?", "subjective"),
("Do you believe in the concept of fate?", "subjective"),
("How do you feel about the rise of automation in workplaces?", "subjective"),
("What are your thoughts on space tourism?", "subjective"),
("Do you think cryptocurrencies will replace traditional currency?", "subjective"),
("How do you feel about renewable energy sources?", "subjective"),
("What is your favorite type of exercise?", "subjective"),
("How do you feel about working in a startup?", "subjective"),
("Do you believe in extraterrestrial life?", "subjective"),
("Do you think electric cars are the future?", "subjective"),
("What do you think about the global refugee crisis?", "subjective"),

# More Instructional Queries
("How do you set up a new email account?", "instructional"),
("What are the steps to change a flat tire?", "instructional"),
("How do you cook scrambled eggs?", "instructional"),
("How to apply for a passport?", "instructional"),
("How do you write an email?", "instructional"),
("How do you set up a VPN?", "instructional"),
("What are the steps to make homemade bread?", "instructional"),
("How to make a website from scratch?", "instructional"),
("How do you create a LinkedIn profile?", "instructional"),
("How do you make your own video game?", "instructional"),
("How to set up two-factor authentication?", "instructional"),
("How do you make a YouTube video?", "instructional"),
("How do you create a PowerPoint presentation?", "instructional"),
("What are the steps to start a YouTube channel?", "instructional"),
("How do you organize your closet?", "instructional"),
("How to create a website with WordPress?", "instructional"),
("What are the steps to install a new printer?", "instructional"),
("How to plant a tree?", "instructional"),
("What is the process of registering a domain name?", "instructional"),
("How do you write a blog post?", "instructional"),
("How to clean your house efficiently?", "instructional"),
("How do you fix a leaky faucet?", "instructional"),
("How do you cook pasta?", "instructional"),
("How to take a good photograph?", "instructional"),
("How do you declutter your home?", "instructional"),
("How to teach yourself a new skill?", "instructional"),
("What are the steps to start an online business?", "instructional"),

("How do you feel about the future of AI in education?", "subjective"),
("What are your thoughts on the social media privacy debate?", "subjective"),
("What do you think about the current political climate?", "subjective"),
("How do you feel about the expansion of electric vehicles?", "subjective"),
("Do you think universal healthcare is a good idea?", "subjective"),
("What do you think of the rise of influencer culture?", "subjective"),
("Do you think social media is beneficial for society?", "subjective"),
("How do you feel about modern art?", "subjective"),
("Do you believe in the power of mindfulness?", "subjective"),
("What do you think about veganism?", "subjective"),
("What is your opinion on the gig economy?", "subjective"),
("Do you think artificial intelligence can surpass human intelligence?", "subjective"),
("What is your opinion on universal basic income?", "subjective"),
("What do you think about the rise of digital currencies?", "subjective"),
("Do you feel positive about the future of space exploration?", "subjective")
]

def extract_query_features(queries):
    if isinstance(queries, pd.Series):
        queries = queries.tolist()
    
    features = []
    for query in queries:
        doc = nlp(query)

        starts_with_what = int(query.lower().startswith("what"))
        starts_with_how = int(query.lower().startswith("how"))
        contains_opinion = int(any(word in query.lower() for word in ["think", "opinion", "feel", "favorite", "best"]))
        contains_you = int("you" in query.lower())
        contains_steps_process = int(any(word in query.lower() for word in ["steps", "process", "how to", "procedure"]))
        is_question = int(query.endswith("?"))

        has_root_verb = 0
        root_is_modal = 0
        for token in doc:
            if token.dep_ == "ROOT" and token.pos_ == "VERB":
                has_root_verb = 1
            if token.dep_ == "ROOT" and token.pos_ == "AUX" and token.tag_ == "MD":
                root_is_modal = 1
        
        features.append([
            starts_with_what, 
            starts_with_how, 
            contains_opinion, 
            contains_you,
            contains_steps_process,
            is_question,
            has_root_verb,
            root_is_modal
        ])
    
    return np.array(features)

def enhanced_preprocess(text):
    doc = nlp(text)

    base_tokens = [token.lemma_ for token in doc if not token.is_stop and not token.is_punct]

    structural_words = [token.lemma_ for token in doc if token.lemma_ in ["what", "how", "why", "who", "where", "when", "do", "think", "feel", "opinion", "favorite", "best", "like", "steps", "process"]]

    bigrams = []
    for i in range(len(doc) - 1):
        if not (doc[i].is_stop or doc[i].is_punct or doc[i+1].is_stop or doc[i+1].is_punct):
            bigrams.append(f"{doc[i].lemma_}_{doc[i+1].lemma_}")

    all_features = base_tokens + structural_words + bigrams
    return " ".join(all_features)

df = pd.DataFrame(data, columns=["query", "label"])

df["processed_query"] = df["query"].apply(enhanced_preprocess)

additional_factual = [
    ("What is SQL?", "factual"),
    ("What is a database?", "factual"),
    ("What is machine learning?", "factual"),
    ("What is DNA?", "factual"),
    ("What is the definition of inflation?", "factual"),
    ("What is the meaning of SQL?", "factual"),
    ("What is a neural network?", "factual"),
    ("What is artificial intelligence?", "factual"),
    ("What is the definition of a black hole?", "factual"),
    ("What is a computer algorithm?", "factual")
]

additional_instructional = [
    ("What is the proper way to write a resume?", "instructional"),
    ("What is the process for changing engine oil?", "instructional"),
    ("What is the procedure for setting up a router?", "instructional"),
    ("What is the method to solve a quadratic equation?", "instructional"),
    ("What is the technique for making sourdough bread?", "instructional")
]

for examples, category in [(additional_factual, "factual"), (additional_instructional, "instructional")]:
    temp_df = pd.DataFrame(examples, columns=["query", "label"])
    temp_df["processed_query"] = temp_df["query"].apply(enhanced_preprocess)
    df = pd.concat([df, temp_df], ignore_index=True)

X_train, X_test, y_train, y_test = train_test_split(
    df[["processed_query", "query"]], 
    df["label"], 
    test_size=0.2, 
    random_state=42,
    stratify=df["label"]
)

combined_features = Pipeline([
    ('features', FeatureUnion([
        ('text_features', Pipeline([
            ('selector', FunctionTransformer(lambda x: x['processed_query'], validate=False)),
            ('tfidf', TfidfVectorizer(ngram_range=(1, 2), min_df=2))
        ])),
        ('syntactic_features', Pipeline([
            ('selector', FunctionTransformer(lambda x: x['query'], validate=False)),
            ('extractor', FunctionTransformer(extract_query_features, validate=False))
        ]))
    ]))
])

model = Pipeline([
    ('features', combined_features),
    ('classifier', SVC(kernel='linear', probability=True, class_weight='balanced'))
])

model.fit(X_train, y_train)

y_pred = model.predict(X_test)

def classify_query(query):
    processed_query = enhanced_preprocess(query)
    query_data = pd.DataFrame({"query": [query], "processed_query": [processed_query]})
    prediction = model.predict(query_data)
    confidence = max(model.predict_proba(query_data)[0])
    return prediction[0]


