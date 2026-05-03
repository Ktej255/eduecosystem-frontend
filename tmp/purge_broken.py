"""
PURGE LOGIC: PHASE 2 FINAL
==========================
Purge the 26 broken Polity fragments from bank_questions.
"""
from sqlalchemy import create_engine, text

DB_URL = "postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod"
engine = create_engine(DB_URL, connect_args={"connect_timeout": 15, "sslmode": "require"})

with engine.begin() as conn:
    # 1. Final count check
    count_before = conn.execute(text("SELECT COUNT(*) FROM bank_questions WHERE subject='Polity' AND LENGTH(text) < 30")).scalar()
    print(f"Broken Polity rows found: {count_before}")
    
    # 2. Delete
    if count_before > 0:
        res = conn.execute(text("DELETE FROM bank_questions WHERE subject='Polity' AND LENGTH(text) < 30"))
        print(f"Successfully deleted {res.rowcount} broken Polity fragments.")
    else:
        print("Nothing to delete.")

    # 3. Final bank verify
    total = conn.execute(text("SELECT COUNT(*) FROM bank_questions")).scalar()
    print(f"Final Question Bank Count: {total:,} unique questions.")
