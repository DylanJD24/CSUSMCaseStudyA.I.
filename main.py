import os
from dotenv import load_dotenv
from flask import Flask, render_template
from flask_cors import CORS

#reportlab stuff#
from flask import send_file
from reportlab.pdfgen import canvas
from io import BytesIO

load_dotenv()  # Load environment variables from .env

app = Flask(__name__)
CORS(app)

# Serve the homepage
@app.route('/')
def home():
    return render_template('index.html')


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
    # Optional: Extract info from frontend
    data = request.get_json()
    case_id = data.get('caseId', 1)  # Optional handling if needed
    subtitle = data.get('caseSubtitle', 'Unknown Subtitle')

     # 👇 Use f-string to embed case_id
    prompt = f"""
    You are ALMA, an assistant professor A.I. helping students with case studies.

    The student is about to begin **Case Study {case_id}** titled: *"{subtitle}"*.
    Give them a motivational and analytical message such as:
    "Here’s what you should focus on for this case..." — tailored to case study number {case_id}.

    Include helpful academic tips, and sound supportive and engaging.
    """

    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    try:
        response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are ALMA, an expert A.I. professor assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=300,
            timeout=20
        )
        message = response.choices[0].message.content.strip()
        return jsonify({'reply': message})

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

#PDF gen endpoinnt

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    print("📥 Received PDF request!")
    data = request.get_json()
    answers = data.get('answers', [])
    case_id = data.get('caseId', 'Unknown Case')

    print(f"📊 Total answers received: {len(answers)}")

    buffer = BytesIO()
    pdf = canvas.Canvas(buffer)
    pdf.setTitle(f"Case Study {case_id} - Student Answers")

    y = 800
    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(50, y, f"Case Study {case_id} - Student Answers")
    y -= 40
    pdf.setFont("Helvetica", 12)

    for idx, qa in enumerate(answers, start=1):
        question = qa.get('question', '').strip()
        answer = qa.get('answer', '').strip()

        # Wrap text manually if it's too long
        lines = [f"Q{idx}: {question}", f"A{idx}: {answer}"]
        for line in lines:
            wrapped = []
            while len(line) > 100:
                wrapped.append(line[:100])
                line = line[100:]
            wrapped.append(line)

            for wline in wrapped:
                if y < 80:
                    pdf.showPage()
                    y = 800
                    pdf.setFont("Helvetica", 12)
                pdf.drawString(50, y, wline)
                y -= 20
        y -= 10  # space between questions

    pdf.save()
    buffer.seek(0)

    return send_file(buffer, as_attachment=True,
                     download_name=f"Case_Study_{case_id}_Answers.pdf",
                     mimetype='application/pdf')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=True)
