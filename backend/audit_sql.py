import os
from sqlalchemy import create_engine, text

DATABASE_URL = os.environ.get("DATABASE_URL")
engine = create_engine(DATABASE_URL)

# First, discover actual columns
print("=== SCHEMA CHECK ===")
with engine.connect() as conn:
    cols = conn.execute(text("""
        SELECT column_name FROM information_schema.columns
        WHERE table_name = 'bank_questions'
        ORDER BY ordinal_position;
    """))
    for row in cols:
        print(f"  column: {row[0]}")

# Check what's in `tags` field for a sample
print("\n=== SAMPLE TAGS ===")
with engine.connect() as conn:
    result = conn.execute(text("""
        SELECT subject, tags, difficulty FROM bank_questions
        WHERE subject IN ('Polity','Modern History')
        AND tags IS NOT NULL AND tags != ''
        LIMIT 10
    """))
    for row in result:
        print(f"{row[0]} | {row[1]} | {row[2]}")

# Q1: by subject + difficulty
print("\n=== Q1: SUBJECT + DIFFICULTY BREAKDOWN ===")
with engine.connect() as conn:
    result = conn.execute(text("""
        SELECT subject, difficulty, COUNT(*) as question_count
        FROM bank_questions
        WHERE subject IN ('Polity','Modern History','Medieval History','Ancient History')
        GROUP BY subject, difficulty
        ORDER BY subject, difficulty;
    """))
    for row in result:
        print(f"{row[0]} | {row[1]} | {row[2]}")

# Q2: by subject total + per-difficulty
print("\n=== Q2: SUBJECT TOTALS ===")
with engine.connect() as conn:
    result = conn.execute(text("""
        SELECT subject,
            COUNT(*) as total,
            SUM(CASE WHEN difficulty='easy' THEN 1 ELSE 0 END) as level1,
            SUM(CASE WHEN difficulty='medium' THEN 1 ELSE 0 END) as level2,
            SUM(CASE WHEN difficulty='hard' THEN 1 ELSE 0 END) as level3
        FROM bank_questions
        WHERE subject IN ('Polity','Modern History','Medieval History','Ancient History')
        GROUP BY subject
        ORDER BY total DESC;
    """))
    for row in result:
        print(f"{row[0]} | Total={row[1]} | L1(easy)={row[2]} | L2(medium)={row[3]} | L3(hard)={row[4]}")

