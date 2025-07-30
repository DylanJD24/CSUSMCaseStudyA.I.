import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from openai import OpenAI, APIError, RateLimitError

load_dotenv()  # Load .env variables

app = Flask(__name__)
CORS(app)

# Initialize OpenAI client with .env API key
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    case_id = data.get('caseId', 1)
    subtitle = data.get('caseSubtitle', 'Unknown Subtitle')
    context = data.get('caseContext', 'Unknown Context')

    alma_prompt = f"""
You are ALMA, an expert assistant professor A.I. helping students approach case studies with clarity and confidence.

The student is about to begin **Case Study {case_id}** titled: *"{subtitle}"*.

Here is the full case study content:
{context}

Your job is to guide the student with a clear, insightful overview (max 250 words). Do not include any asterisks ** in your answer. Cover the following:

1. The purpose of this case study — what is it fundamentally about?
2. The core challenges or dilemmas the student should watch for.
3. Any relevant academic principles, theories, or frameworks they should keep in mind.
4. What the student should focus on in order to succeed.

The tone should be warm, supportive, and intellectually engaging. Think like a professor giving an opening lecture — helping the student understand what matters and why.

Avoid summarizing the entire case; instead, **highlight what to think about** and **how to approach it like a thoughtful professional**.
"""


    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    try:
        # Step 1: ALMA's message
        alma_response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are ALMA, an expert A.I. professor assistant."},
                {"role": "user", "content": alma_prompt}
            ],
            max_tokens=1000,
            timeout=20
        )
        alma_message = alma_response.choices[0].message.content.strip()
        alma_message = alma_message.replace('*', '')  # ← clean asterisks
       

        # Step 2: TIA's follow-up
        tia_prompt = f"""
You are TIA, an expert A.I. tutor assistant dedicated to helping students prepare for case studies with clarity, encouragement, and practical insight.

The student is about to begin Case Study {case_id} titled: "{subtitle}".

Here is the full case study content:
{context}

The professor just gave the student this message:
"{alma_message}"

Your job is to build on the professor’s guidance by giving the student a thoughtful, motivating overview (max 250 words). Do not include any asterisks ** in your answer.

Cover the following:

1. What mindset or thinking strategy the student should adopt for this specific case.
2. Which practical considerations they should weigh when analyzing the case.

The tone should be friendly, focused, and actionable — like a tutor helping a student frame the problem and get ready to participate. Do not summarize the case or repeat the professor. Your goal is to complement their advice with applied thinking and critical reflection.
"""



        tia_response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are TIA, an expert A.I. tutor assistant."},
                {"role": "user", "content": tia_prompt}
            ],
            max_tokens=1000,
            timeout=20
        )
        tia_message = tia_response.choices[0].message.content.strip()
        tia_message = tia_message.replace('*', '')  # ← clean asterisks


        # ✅ Step 3: Generate case dialogue version
        dialogue_prompt = f"""
You are a formatting assistant. Transform the case study into a script that ONLY includes:

- A brief scene setup (1–2 lines)
- Character names
- Spoken dialogue

Do **not** include narration, internal thoughts, instructions, summaries, or analysis. Do not include any asterisks ** in your answer. Do not use word for word repetition of the case study.

Keep it simple and readable, as if it were a movie script the student is observing. The dialogue should cover all details within the case study. And do not put ** before or after the actor's name.

----
Title: {subtitle}

Case Study:
{context}

----
Return ONLY the character-based scene with no extra commentary.
"""


        dialogue_response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are a narrative assistant that transforms case studies into dialogue scenes."},
                {"role": "user", "content": dialogue_prompt}
            ],
            max_tokens=2000,
            timeout=20
        )
        case_dialogue = dialogue_response.choices[0].message.content.strip()
        case_dialogue = case_dialogue.replace('*', '')  # ← clean asterisks

        # ✅ Return all three
        return jsonify({
            'profReply': alma_message,
            'tutorPrompt': tia_message,
            'caseDialogue': case_dialogue
        })

    except APIError as e:
        return jsonify({'error': f"OpenAI API Error: {e}"}), 500
    except RateLimitError as e:
        return jsonify({'error': f"OpenAI Rate Limit Error: {e}"}), 429
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/askProfForHelp', methods=['POST'])
def ask_prof_for_help():
    data = request.get_json()
    case_id = data.get('caseId')
    question = data.get('question', '')

    if not question:
        return jsonify({'error': 'Missing question'}), 400

    prompt = f"""
    You are ALMA, a helpful professor assistant.

    A student is working on Case Study {case_id}. They asked for help with this question:
    
    "{question}"

    Please reply in a friendly, easy-to-understand tone. 
    Give useful hints, examples, or questions to guide the student’s thinking.
    Your message should be under 150 words, encouraging but not giving away the full answer.
    """

    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    try:
        response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are ALMA, a supportive professor assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            timeout=20
        )
        reply = response.choices[0].message.content.strip()

        return jsonify({'reply': reply})

    except APIError as e:
        return jsonify({'error': f"OpenAI API Error: {e}"}), 500
    except RateLimitError as e:
        return jsonify({'error': f"OpenAI Rate Limit Error: {e}"}), 429
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/askTutorForHelp', methods=['POST'])
def ask_tutor_for_help():
    data = request.get_json()
    case_id = data.get('caseId')
    question = data.get('question', '')

    if not question:
        return jsonify({'error': 'Missing question'}), 400

    prompt = f"""
    You are TIA, a helpful and approachable AI tutor.

    A student is working on Case Study {case_id} and asked for help with the following question:
    
    "{question}"

    Please reply in a friendly, easy-to-understand tone. 
    Give useful hints, examples, or questions to guide the student’s thinking.
    Your message should be under 150 words, encouraging but not giving away the full answer.
    """

    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    try:
        response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are TIA, a helpful AI tutor for students."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            timeout=20
        )
        reply = response.choices[0].message.content.strip()

        return jsonify({'reply': reply})

    except APIError as e:
        return jsonify({'error': f"OpenAI API Error: {e}"}), 500
    except RateLimitError as e:
        return jsonify({'error': f"OpenAI Rate Limit Error: {e}"}), 429
    except Exception as e:
        return jsonify({'error': str(e)}), 500



@app.route('/log-chat', methods=['POST'])
def log_chat():
    data = request.get_json()
    log_message = data.get('logMessage', 'No message provided')
    
    # For testing: Just print to console
    print("📥 Logged chat message:", log_message)
    
    return jsonify({'status': 'Chat message logged successfully'})

@app.route('/log-question', methods=['POST'])
def log_question():
    data = request.get_json()
    case_id = data.get('caseId', 'Unknown')
    question = data.get('question', 'No question provided')
    answer = data.get('answer', 'No answer provided')
    responder = data.get('responder', 'Unknown')  # e.g., "Student", "Professor", "Tutor"

    # Log it to the console for now (could log to a DB/file in production)
    print("📝 Logged Question Interaction:")
    print(f"  • Case ID: {case_id}")
    print(f"  • Responder: {responder}")
    print(f"  • Question: {question}")
    print(f"  • Answer: {answer}")

    return jsonify({'status': 'Question interaction logged successfully'})


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=True)
