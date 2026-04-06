"""Quick check of production DB state."""
import sys, os
os.environ["DATABASE_URL"] = "postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod"
sys.path.insert(0, r"d:\Development\EduEcosystem\backend")

from app.db.session import engine
from sqlalchemy import text

with engine.connect() as c:
    total = c.execute(text("SELECT COUNT(*) FROM bank_questions")).fetchone()[0]
    print(f"Total rows: {total}")

    cols = c.execute(text(
        "SELECT column_name FROM information_schema.columns "
        "WHERE table_name='bank_questions' ORDER BY column_name"
    )).fetchall()
    print("Columns:", [r[0] for r in cols])

    by_subject = c.execute(text(
        "SELECT subject, COUNT(*) FROM bank_questions GROUP BY subject ORDER BY subject"
    )).fetchall()
    print("\nBy subject:")
    for row in by_subject:
        print(f"  {row[0]}: {row[1]}")
