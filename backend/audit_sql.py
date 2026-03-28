import os
from sqlalchemy import create_engine, text

DATABASE_URL = os.environ.get("DATABASE_URL")
engine = create_engine(DATABASE_URL)

q1 = """
SELECT
    subject,
    topic_tag as chapter,
    difficulty,
    COUNT(*) as question_count
FROM bank_questions
WHERE subject IN ('Polity','Modern History','Medieval History','Ancient History')
GROUP BY subject, topic_tag, difficulty
ORDER BY subject, topic_tag, difficulty;
"""

q2 = """
SELECT
    subject,
    topic_tag as chapter,
    COUNT(*) as total,
    SUM(CASE WHEN difficulty='easy' THEN 1 ELSE 0 END) as level1,
    SUM(CASE WHEN difficulty='medium' THEN 1 ELSE 0 END) as level2,
    SUM(CASE WHEN difficulty='hard' THEN 1 ELSE 0 END) as level3
FROM bank_questions
WHERE subject IN ('Polity','Modern History','Medieval History','Ancient History')
GROUP BY subject, topic_tag
ORDER BY subject, total ASC;
"""

print("=== AUDIT 1: RAW OUTPUT Q1 ===")
try:
    with engine.connect() as conn:
        result = conn.execute(text(q1))
        for row in result:
            print(f"{row[0]} | {row[1]} | {row[2]} | {row[3]}")
except Exception as e:
    print(f"Error running Q1: {e}")

print("\n=== AUDIT 2: RAW OUTPUT Q2 ===")
try:
    with engine.connect() as conn:
        result = conn.execute(text(q2))
        for row in result:
            print(f"{row[0]} | {row[1]} | {row[2]} | {row[3]} | {row[4]} | {row[5]}")
except Exception as e:
    print(f"Error running Q2: {e}")
