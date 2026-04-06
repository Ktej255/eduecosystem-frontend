"""
ingest_history_mcqs.py
======================
Step 1: Run prepare_history_json.py to create history_mcqs_extracted.json
Step 2: Run THIS script to load the JSON into the bank_questions table.

Usage (from project root, with DATABASE_URL set):
    cd D:\\Development\\EduEcosystem
    python backend/ingest_history_mcqs.py

What it does:
- Reads backend/history_mcqs_extracted.json
- Connects to the production PostgreSQL database
- Inserts all questions into bank_questions with the correct subject tag
- Uses ON CONFLICT DO NOTHING to skip exact duplicates
- Reports a per-subject count when done
"""

import json
import os
import sys
from pathlib import Path

# ─── Setup path so we can import app modules ──────────────────────────────────
ROOT = Path(__file__).parent
sys.path.insert(0, str(ROOT))

from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

# ─── Config ───────────────────────────────────────────────────────────────────

DB_URL = os.getenv("DATABASE_URL")
if not DB_URL:
    print("❌  DATABASE_URL environment variable is not set.")
    print("    Set it before running: set DATABASE_URL=postgresql://user:pass@host/db")
    sys.exit(1)

JSON_PATH = ROOT / "history_mcqs_extracted.json"
if not JSON_PATH.exists():
    print(f"❌  {JSON_PATH} not found.")
    print("    Run backend/prepare_history_json.py first to generate the file.")
    sys.exit(1)

# ─── Admin user ID (used as instructor_id — must exist in users table) ────────
# Change this if your admin user has a different ID
ADMIN_USER_ID = 1

# ─── Load data ────────────────────────────────────────────────────────────────

with open(JSON_PATH, "r", encoding="utf-8") as f:
    questions = json.load(f)

print(f"✅  Loaded {len(questions)} questions from {JSON_PATH.name}")

# ─── Connect ──────────────────────────────────────────────────────────────────

engine = create_engine(DB_URL)
Session = sessionmaker(bind=engine)
db = Session()

# ─── Verify admin user exists ─────────────────────────────────────────────────

user_check = db.execute(
    text("SELECT id FROM users WHERE id = :uid LIMIT 1"),
    {"uid": ADMIN_USER_ID}
).fetchone()

if not user_check:
    # Try to find any superuser
    su = db.execute(text("SELECT id FROM users WHERE is_superuser = true LIMIT 1")).fetchone()
    if su:
        ADMIN_USER_ID = su[0]
        print(f"ℹ️   Using superuser id={ADMIN_USER_ID} as instructor_id")
    else:
        print("❌  No admin user found in the database. Create a user first.")
        sys.exit(1)

# ─── Pre-flight: check existing counts ────────────────────────────────────────

existing = db.execute(text(
    "SELECT subject, COUNT(*) FROM bank_questions "
    "WHERE subject IN ('Modern History','Medieval History','Ancient History') "
    "GROUP BY subject"
)).fetchall()

if existing:
    print("\n⚠️   Existing History MCQ counts in DB:")
    for row in existing:
        print(f"     {row[0]}: {row[1]} rows")
    answer = input("\n   Continue and add new questions (duplicates skipped)? [y/N]: ")
    if answer.strip().lower() != "y":
        print("Aborted.")
        sys.exit(0)

# ─── Insert ───────────────────────────────────────────────────────────────────

INSERT_SQL = text("""
    INSERT INTO bank_questions
        (instructor_id, text, type, difficulty, options, correct_answer, subject, topic_tag, tags)
    VALUES
        (:instructor_id, :text, :type, :difficulty, :options, :correct_answer, :subject, :topic_tag, :tags)
    ON CONFLICT DO NOTHING
""")

inserted = 0
skipped = 0
errors = 0

for i, q in enumerate(questions):
    try:
        question_text = q.get("question", "").strip()
        if not question_text or len(question_text) < 10:
            skipped += 1
            continue

        options = q.get("options", [])
        correct_idx = q.get("correct_answer", 0)
        subject = q.get("subject", "History")
        difficulty = q.get("difficulty", "medium").lower()
        if difficulty not in ("easy", "medium", "hard"):
            difficulty = "medium"

        # Store options as JSON string
        options_json = json.dumps(options)

        # correct_answer stored as the option text (cleaner for drill UI)
        correct_text = options[correct_idx] if options and 0 <= correct_idx < len(options) else str(correct_idx)

        db.execute(INSERT_SQL, {
            "instructor_id": ADMIN_USER_ID,
            "text": question_text,
            "type": "multiple_choice",
            "difficulty": difficulty,
            "options": options_json,
            "correct_answer": correct_text,
            "subject": subject,
            "topic_tag": subject,
            "tags": f"history,upsc,{difficulty}",
        })
        inserted += 1

        # Commit in batches of 500
        if inserted % 500 == 0:
            db.commit()
            print(f"   ... {inserted} inserted so far")

    except Exception as e:
        errors += 1
        if errors <= 5:
            print(f"   ⚠️  Row {i} error: {e}")

# Final commit
db.commit()
db.close()

# ─── Report ───────────────────────────────────────────────────────────────────

print(f"\n{'='*50}")
print(f"✅  INGESTION COMPLETE")
print(f"   Inserted : {inserted}")
print(f"   Skipped  : {skipped}  (blank or too short)")
print(f"   Errors   : {errors}")
print(f"{'='*50}")

# Verification query
verify_engine = create_engine(DB_URL)
with verify_engine.connect() as conn:
    rows = conn.execute(text(
        "SELECT subject, COUNT(*) FROM bank_questions "
        "WHERE subject IN ('Modern History','Medieval History','Ancient History') "
        "GROUP BY subject ORDER BY subject"
    )).fetchall()
    print("\n📊  Final counts in bank_questions:")
    for row in rows:
        print(f"   {row[0]}: {row[1]:,}")
