"""
Seeder: Parse polity 30 Days .txt and insert all 250 questions into focused_questions table.
Creates the table if it doesn't exist.
"""
import psycopg2
import urllib.parse
import re

# DB connection
password = "Tej@1106"
encoded_password = urllib.parse.quote(password)
conn_string = f"postgresql://postgres:{encoded_password}@34.55.250.166/eduecosystem_prod"

# Read the file
FILE_PATH = r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\30 day Plan\Polity\polity 30 Days .txt"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    raw = f.read()

# â”€â”€â”€ PARSE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
# Split into clusters
cluster_blocks = re.split(r"Cluster\s+(\d+)", raw)
# cluster_blocks[0] = text before any cluster
# cluster_blocks[1] = "1", cluster_blocks[2] = body of cluster 1
# cluster_blocks[3] = "2", cluster_blocks[4] = body of cluster 2 ... etc

questions = []

i = 1
while i < len(cluster_blocks) - 1:
    cluster_num = int(cluster_blocks[i])
    cluster_body = cluster_blocks[i + 1]
    i += 2

    # Extract cluster name from header line
    # "UPSC Prelims 30-Day Sprint: Evening Practice\nSubject: Polity | Module: Cluster N (Name)"
    cluster_name_match = re.search(r"Cluster\s+\d+\s+\(([^)]+)\)", cluster_body)
    cluster_name = cluster_name_match.group(1).strip() if cluster_name_match else f"Cluster {cluster_num}"

    # Split into individual questions â€” each starts with Q{number}.
    q_blocks = re.split(r"\nQ(\d+)\.\s+", cluster_body)
    # q_blocks[0] = preamble text
    # q_blocks[1] = q_number, q_blocks[2] = q_text
    # q_blocks[3] = q_number, q_blocks[4] = q_text ... etc

    j = 1
    while j < len(q_blocks) - 1:
        q_num = int(q_blocks[j])
        q_body = q_blocks[j + 1].strip()
        j += 2

        # Extract answer + explanation
        answer_match = re.search(r"Answer:\s*\(([a-d])\)[^\n]*", q_body, re.IGNORECASE)
        answer_letter = answer_match.group(1).upper() if answer_match else None

        # Extract explanation (after "Integration & Semantic Feedback:")
        expl_match = re.search(r"Integration\s*&\s*Semantic\s*Feedback:\s*(.*)", q_body, re.DOTALL | re.IGNORECASE)
        explanation = expl_match.group(1).strip() if expl_match else ""
        # Trim explanation to just its block
        explanation = re.split(r"\nQ\d+\.", explanation)[0].strip()

        # Extract the question text (before options)
        # Remove everything from "Answer:" onwards
        q_text_raw = re.split(r"Answer:", q_body, flags=re.IGNORECASE)[0].strip()

        # Extract options
        options = {}
        for opt_letter in ["a", "b", "c", "d"]:
            # Match "(a) some text" style
            opt_match = re.search(rf"\({opt_letter}\)\s+(.+?)(?=\s*\([a-d]\)|\s*Answer:|\Z)", q_text_raw, re.IGNORECASE | re.DOTALL)
            if opt_match:
                options[opt_letter.upper()] = opt_match.group(1).strip().replace("\n", " ")

        # Question text is before first option
        main_q_match = re.split(r"\([a-d]\)", q_text_raw, flags=re.IGNORECASE)
        question_text = main_q_match[0].strip().replace("\n", " ") if main_q_match else q_text_raw

        questions.append({
            "subject": "Polity",
            "cluster_number": cluster_num,
            "cluster_name": cluster_name,
            "question_number": q_num,
            "question_text": question_text,
            "option_a": options.get("A", ""),
            "option_b": options.get("B", ""),
            "option_c": options.get("C", ""),
            "option_d": options.get("D", ""),
            "correct_answer": answer_letter,
            "explanation": explanation,
        })

print(f"[OK] Parsed {len(questions)} questions across clusters")
for c in range(1, 11):
    count = len([q for q in questions if q["cluster_number"] == c])
    print(f"   Cluster {c}: {count} questions")

# â”€â”€â”€ DATABASE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
conn = psycopg2.connect(conn_string)
cur = conn.cursor()

# Create table if not exists
cur.execute("""
CREATE TABLE IF NOT EXISTS focused_questions (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(100) NOT NULL,
    cluster_number INTEGER NOT NULL,
    cluster_name VARCHAR(255) NOT NULL,
    question_number INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    option_a TEXT,
    option_b TEXT,
    option_c TEXT,
    option_d TEXT,
    correct_answer CHAR(1),
    explanation TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
""")
conn.commit()
print("âœ… Table focused_questions created/verified")

# Clear existing Polity rows to allow re-running safely
cur.execute("DELETE FROM focused_questions WHERE subject = 'Polity';")
conn.commit()
print("âœ… Cleared existing Polity rows")

# Insert all questions
inserted = 0
for q in questions:
    cur.execute("""
        INSERT INTO focused_questions 
            (subject, cluster_number, cluster_name, question_number, question_text,
             option_a, option_b, option_c, option_d, correct_answer, explanation)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, (
        q["subject"], q["cluster_number"], q["cluster_name"], q["question_number"],
        q["question_text"], q["option_a"], q["option_b"], q["option_c"], q["option_d"],
        q["correct_answer"], q["explanation"]
    ))
    inserted += 1

conn.commit()
print(f"âœ… Inserted {inserted} questions into focused_questions")

# Verify
cur.execute("SELECT cluster_number, cluster_name, COUNT(*) FROM focused_questions WHERE subject='Polity' GROUP BY cluster_number, cluster_name ORDER BY cluster_number;")
rows = cur.fetchall()
print("\nâ”€â”€â”€ VERIFICATION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€")
total = 0
for row in rows:
    print(f"   Cluster {row[0]} â€” {row[1]}: {row[2]} questions")
    total += row[2]
print(f"   TOTAL: {total} questions\n")

# Sample one question
cur.execute("SELECT cluster_number, question_number, LEFT(question_text, 100), correct_answer FROM focused_questions WHERE subject='Polity' ORDER BY cluster_number, question_number LIMIT 3;")
samples = cur.fetchall()
print("â”€â”€â”€ SAMPLE ROWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€")
for s in samples:
    print(f"   C{s[0]}Q{s[1]} | Answer: {s[3]} | '{s[2]}...'")

cur.close()
conn.close()
print("\nâœ… DONE")
