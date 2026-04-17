"""
FIXED Seeder: Parse polity 30 Days .txt with a robust cluster boundary detector.
The fix: only split on 'Cluster N' when it appears on its OWN line (not inside a sentence).
C4 boundary confirmed: Q1-Q25 contained between lines 666-918 in source file.
C5 starts at line 921 (the standalone 'Cluster 5' line).
"""
import psycopg2
import urllib.parse
import re
import sys

# Force UTF-8 output
sys.stdout.reconfigure(encoding="utf-8")

# DB connection
password = "Tej@1106"
encoded_password = urllib.parse.quote(password)
conn_string = f"postgresql://postgres:{encoded_password}@34.55.250.166/eduecosystem_prod"

FILE_PATH = r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\30 day Plan\Polity\polity 30 Days .txt"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    raw = f.read()

# ─── CLUSTER NAMES (from source file headers) ────────────────────────────────
CLUSTER_NAMES = {
    1: "Preamble & Basic Structure",
    2: "Fundamental Rights",
    3: "DPSP & Fundamental Duties",
    4: "Parliament",
    5: "President, VP, PM & CoM",
    6: "Indian Judiciary",
    7: "Constitutional & Statutory Bodies",
    8: "Federalism & Centre-State Relations",
    9: "Local Government",
    10: "Emergency Provisions",
}

# ─── ROBUST CLUSTER SPLIT ───────────────────────────────────────────────────
# Normalize line endings (Windows CRLF -> LF) to simplify regex matching.
raw = raw.replace('\r\n', '\n').replace('\r', '\n')

# Now split on lines that contain ONLY "Cluster N" (no colons, no trailing text).
# This correctly skips "a crucial link to Cluster 5: ..." mid-sentence references.
# Pattern: start-of-line, optional whitespace, "Cluster", space(s), digits, optional whitespace, end-of-line.
cluster_header_pattern = re.compile(r"(?m)^[ \t]*Cluster[ \t]+(\d+)[ \t]*$")

# Find all headers 1-10 (ignore any phantom > 10)
all_matches = list(cluster_header_pattern.finditer(raw))
print(f"All headers found ({len(all_matches)} total):")
for m in all_matches:
    line_num = raw[:m.start()].count('\n') + 1
    print(f"  Cluster {m.group(1)} at line {line_num}")

matches = [m for m in all_matches if int(m.group(1)) <= 10]
print(f"\nUsing {len(matches)} valid cluster headers (1-10)")

# Handle Cluster 1 specially: it starts at position 0 (before any \n),
# so the ^-anchor in multiline mode misses it. We detect it explicitly.
cluster_bodies = {}

# Cluster 1: from end of "Cluster 1\n" line to the start of the first found match
cluster1_end_pos = raw.index('\n') + 1  # skip the "Cluster 1" line itself
first_match_pos = matches[0].start() if matches else len(raw)
cluster_bodies[1] = raw[cluster1_end_pos:first_match_pos]
print(f"  Cluster 1 body extracted: pos 0 -> {first_match_pos} ({len(cluster_bodies[1])} chars)")

# Clusters 2-10: use the match positions
for idx, m in enumerate(matches):
    cluster_num = int(m.group(1))
    body_start = m.end()
    body_end = matches[idx + 1].start() if idx + 1 < len(matches) else len(raw)
    cluster_bodies[cluster_num] = raw[body_start:body_end]

print(f"Cluster bodies extracted: {sorted(cluster_bodies.keys())}\n")

# ─── PARSE QUESTIONS ────────────────────────────────────────────────────────
questions = []

for cluster_num in sorted(cluster_bodies.keys()):
    cluster_body = cluster_bodies[cluster_num]
    cluster_name = CLUSTER_NAMES.get(cluster_num, f"Cluster {cluster_num}")

    # Split on Q<number>. at the start of a line
    q_splits = re.split(r"(?m)^Q(\d+)\.\s*", cluster_body)
    # q_splits[0] = preamble, q_splits[1..] = (num, body) pairs

    j = 1
    while j < len(q_splits) - 1:
        q_num = int(q_splits[j])
        q_body = q_splits[j + 1].strip()
        j += 2

        # Extract answer letter
        answer_match = re.search(r"Answer:\s*\(([a-d])\)", q_body, re.IGNORECASE)
        answer_letter = answer_match.group(1).upper() if answer_match else None

        # Extract explanation (after "Integration & Semantic Feedback:")
        expl_match = re.search(r"Integration\s*&\s*Semantic\s*Feedback:\s*(.*)", q_body, re.DOTALL | re.IGNORECASE)
        explanation = ""
        if expl_match:
            explanation = re.split(r"(?m)^Q\d+\.", expl_match.group(1))[0].strip()

        # Question text: everything before the first option or "Answer:"
        q_text_and_opts = re.split(r"Answer:", q_body, flags=re.IGNORECASE)[0].strip()

        # Extract options A-D
        options = {}
        for opt in ["a", "b", "c", "d"]:
            opt_match = re.search(
                rf"\({opt}\)\s+(.*?)(?=\s*\([a-d]\)|\s*Answer:|\Z)",
                q_text_and_opts, re.IGNORECASE | re.DOTALL
            )
            if opt_match:
                options[opt.upper()] = opt_match.group(1).strip().replace("\n", " ")

        # Main question text: before first "(a)"
        main_parts = re.split(r"\([a-d]\)", q_text_and_opts, flags=re.IGNORECASE)
        question_text = main_parts[0].strip().replace("\n", " ") if main_parts else q_text_and_opts

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

print("Parsed questions per cluster:")
total = 0
for c in range(1, 11):
    count = len([q for q in questions if q["cluster_number"] == c])
    status = "[OK]" if count == 25 else "[UNEXPECTED]"
    print(f"  {status} Cluster {c} ({CLUSTER_NAMES.get(c, '?')}): {count} questions")
    total += count
print(f"  TOTAL: {total} questions")

if total != 250:
    print(f"\n[ERROR] Expected 250 questions, got {total}. Stopping.")
    exit(1)

# ─── DATABASE ────────────────────────────────────────────────────────────────
conn = psycopg2.connect(conn_string)
cur = conn.cursor()

# Ensure table exists
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

# Clear existing Polity rows and re-insert
cur.execute("DELETE FROM focused_questions WHERE subject = 'Polity';")
conn.commit()
print("\nCleared existing Polity rows. Inserting fresh data...")

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
print(f"Inserted {inserted} questions.")

# Final verification
cur.execute("""
    SELECT cluster_number, cluster_name, COUNT(*)
    FROM focused_questions
    WHERE subject = 'Polity'
    GROUP BY cluster_number, cluster_name
    ORDER BY cluster_number;
""")
rows = cur.fetchall()
print("\n--- FINAL VERIFICATION ---")
final_total = 0
all_correct = True
for row in rows:
    status = "[OK]" if row[2] == 25 else "[WARN]"
    print(f"  {status} Cluster {row[0]} - {row[1]}: {row[2]} questions")
    final_total += row[2]
    if row[2] != 25:
        all_correct = False
print(f"  TOTAL: {final_total}")

if final_total == 250 and all_correct:
    print("\nSUCCESS: All 10 clusters have exactly 25 questions each. Total = 250.")
else:
    print("\nWARNING: Some clusters don't have exactly 25 questions. Review above.")

cur.close()
conn.close()
