"""
connect_and_run.py
==================
ONE-STOP script for EduEcosystem database operations from Windows.

Since the Cloud SQL socket format (?host=/cloudsql/...) is Linux-only,
this script uses Cloud SQL Auth Proxy via TCP (localhost:5432).

STEP 1: Download and run Cloud SQL Auth Proxy FIRST:
  Invoke-WebRequest -Uri "https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.14.2/cloud-sql-proxy.exe" -OutFile "cloud-sql-proxy.exe"
  .\cloud-sql-proxy.exe eduecosystem-prod:us-central1:eduecosystem-db --port=5432

STEP 2: Once proxy is running (wait for "Listening on 127.0.0.1:5432"), run this script:
  python connect_and_run.py

What this does: runs migrations + seeds MCQs + ingests History questions.
"""
import os
import sys
import json
import logging

# ─── Hardcoded real connection (TCP via Cloud SQL Auth Proxy) ─────────────────
# Password is Tej@1106 (the @ is encoded as %40 in URL format)
PROD_DB_URL = "postgresql://postgres:Tej%401106@localhost:5432/eduecosystem_prod"

# Set it for all downstream scripts
os.environ["DATABASE_URL"] = PROD_DB_URL

logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

# ─── Add backend to path ──────────────────────────────────────────────────────
ROOT = os.path.dirname(os.path.abspath(__file__))
BACKEND = os.path.join(ROOT, "backend")
sys.path.insert(0, BACKEND)

def test_connection():
    """Verify database is reachable before doing anything."""
    from sqlalchemy import create_engine, text
    logger.info("Testing connection to production database...")
    try:
        engine = create_engine(PROD_DB_URL, connect_args={"connect_timeout": 10})
        with engine.connect() as conn:
            result = conn.execute(text("SELECT current_database(), current_user")).fetchone()
            logger.info(f"  ✅ Connected! DB={result[0]}, User={result[1]}")
        return True
    except Exception as e:
        logger.error(f"  ❌ Connection failed: {e}")
        logger.error("")
        logger.error("  ─── MAKE SURE Cloud SQL Auth Proxy is running: ───")
        logger.error("  .\\cloud-sql-proxy.exe eduecosystem-prod:us-central1:eduecosystem-db --port=5432")
        return False

def run_alembic_migrations():
    """Apply all pending database migrations."""
    import subprocess
    logger.info("\n─── Running Alembic Migrations ───")
    alembic_exe = r"C:\Users\Sarit\AppData\Roaming\Python\Python311\Scripts\alembic.exe"
    if not os.path.exists(alembic_exe):
        # Fallback: try system alembic
        alembic_exe = "alembic"

    result = subprocess.run(
        [alembic_exe, "upgrade", "head"],
        cwd=BACKEND,
        env={**os.environ, "DATABASE_URL": PROD_DB_URL},
        capture_output=True,
        text=True
    )
    if result.returncode == 0:
        logger.info("  ✅ Migrations applied successfully")
        if result.stdout:
            for line in result.stdout.strip().split("\n"):
                logger.info(f"     {line}")
    else:
        logger.warning(f"  ⚠️  Migration output:\n{result.stdout}\n{result.stderr}")
    return result.returncode == 0

def seed_mcq_bank():
    """Seed 30 PYQ MCQs per subject for all 11 subjects."""
    logger.info("\n─── Seeding MCQ Bank (330 PYQ questions) ───")
    try:
        from app.db.session import SessionLocal
        from app.models.user import User
        from app.models.question_bank import BankQuestion

        MASTER_EMAIL = "ktej255@gmail.com"
        SUBJECT_MCQS = _get_subject_mcqs()

        db = SessionLocal()
        try:
            admin_user = db.query(User).filter(User.email == MASTER_EMAIL).first()
            if not admin_user:
                admin_user = db.query(User).filter(User.is_superuser == True).first()
            if not admin_user:
                logger.error("  ❌ No admin user found. Skipping MCQ seed.")
                return False

            total = 0
            for subject, questions in SUBJECT_MCQS.items():
                # Skip if already seeded
                existing = db.query(BankQuestion).filter(BankQuestion.subject == subject).count()
                if existing >= len(questions):
                    logger.info(f"  ⏭  {subject}: already has {existing} questions, skipping")
                    continue

                for q in questions:
                    correct_letter = q["correct"]  # "A", "B", "C", or "D"
                    correct_idx = ord(correct_letter) - ord("A")
                    options_list = q["options"]
                    correct_text = options_list[correct_idx] if correct_idx < len(options_list) else correct_letter

                    bank_q = BankQuestion(
                        instructor_id=admin_user.id,
                        text=q["text"],
                        type="multiple_choice",
                        difficulty=q.get("difficulty", "medium"),
                        options=json.dumps(options_list),
                        correct_answer=correct_text,
                        explanation=q.get("explanation", ""),
                        subject=subject,
                        topic_tag=q.get("topic_tag", subject),
                        tags=f"UPSC,{subject},{q.get('topic_tag', subject)}",
                        usage_count=0
                    )
                    db.add(bank_q)
                    total += 1

                db.commit()
                logger.info(f"  ✅ {subject}: {len(questions)} MCQs seeded")

            logger.info(f"\n  🎉 Total: {total} new questions added")
            return True
        finally:
            db.close()
    except Exception as e:
        logger.error(f"  ❌ Seed failed: {e}")
        import traceback
        traceback.print_exc()
        return False

def ingest_history_mcqs():
    """Load History MCQs from the extracted JSON into bank_questions."""
    json_path = os.path.join(ROOT, "backend", "history_mcqs_extracted.json")
    if not os.path.exists(json_path):
        # Try project root
        json_path = os.path.join(ROOT, "history_mcqs_extracted.json")
    if not os.path.exists(json_path):
        logger.warning("  ⚠️  history_mcqs_extracted.json not found.")
        logger.warning("  Run first: python backend\\prepare_history_json.py")
        return False

    with open(json_path, "r", encoding="utf-8") as f:
        questions = json.load(f)
    logger.info(f"\n─── Ingesting {len(questions):,} History MCQs ───")

    from sqlalchemy import create_engine, text
    engine = create_engine(PROD_DB_URL)

    # Get admin user ID
    with engine.connect() as conn:
        row = conn.execute(text("SELECT id FROM users WHERE email='ktej255@gmail.com' LIMIT 1")).fetchone()
        if not row:
            row = conn.execute(text("SELECT id FROM users WHERE is_superuser=true LIMIT 1")).fetchone()
        if not row:
            logger.error("  ❌ No admin user found in DB. Cannot ingest.")
            return False
        admin_id = row[0]

        # Check existing counts
        existing = conn.execute(text(
            "SELECT COUNT(*) FROM bank_questions WHERE subject IN ('Modern History','Medieval History','Ancient History')"
        )).scalar()
        if existing > 0:
            logger.info(f"  ℹ️  {existing:,} History questions already in DB — adding new ones (duplicates skipped)")

    INSERT_SQL = text("""
        INSERT INTO bank_questions
            (instructor_id, text, type, difficulty, options, correct_answer, subject, topic_tag, tags)
        VALUES
            (:instructor_id, :text, :type, :difficulty, :options, :correct_answer, :subject, :topic_tag, :tags)
        ON CONFLICT DO NOTHING
    """)

    inserted = 0
    skipped = 0

    with engine.begin() as conn:
        for i, q in enumerate(questions):
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

            correct_text = options[correct_idx] if options and 0 <= correct_idx < len(options) else str(correct_idx)

            conn.execute(INSERT_SQL, {
                "instructor_id": admin_id,
                "text": question_text,
                "type": "multiple_choice",
                "difficulty": difficulty,
                "options": json.dumps(options),
                "correct_answer": correct_text,
                "subject": subject,
                "topic_tag": subject,
                "tags": f"history,upsc,{difficulty}",
            })
            inserted += 1

            if inserted % 500 == 0:
                logger.info(f"  ... {inserted:,} inserted")

    logger.info(f"  ✅ Inserted: {inserted:,} | Skipped (blank): {skipped}")

    # Verify
    with engine.connect() as conn:
        rows = conn.execute(text(
            "SELECT subject, COUNT(*) FROM bank_questions "
            "WHERE subject IN ('Modern History','Medieval History','Ancient History') "
            "GROUP BY subject ORDER BY subject"
        )).fetchall()
        logger.info("\n  📊 Final History counts:")
        for row in rows:
            logger.info(f"     {row[0]}: {row[1]:,}")
    return True

def _get_subject_mcqs():
    """Returns the 30 PYQ MCQs per subject (pulled from seed_mcq_bank.py format)."""
    import importlib.util
    seed_path = os.path.join(ROOT, "seed_mcq_bank.py")
    spec = importlib.util.spec_from_file_location("seed_mcq_bank", seed_path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.SUBJECT_MCQS

if __name__ == "__main__":
    print("=" * 60)
    print("  EduEcosystem Production DB Operations")
    print("=" * 60)

    if not test_connection():
        sys.exit(1)

    run_alembic_migrations()
    seed_mcq_bank()
    ingest_history_mcqs()

    print("\n" + "=" * 60)
    print("  ✅ ALL DONE")
    print("=" * 60)
