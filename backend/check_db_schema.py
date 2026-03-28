from sqlalchemy import inspect
from app.db.session import SessionLocal
from app.models.question_bank import BankQuestion

db = SessionLocal()
try:
    inst = inspect(db.bind)
    columns = inst.get_columns("bank_questions")
    print("Columns in bank_questions:")
    for c in columns:
        print(f"- {c['name']} ({c['type']})")
finally:
    db.close()
