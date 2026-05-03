import os
import sys
from sqlalchemy import text

sys.path.append(os.path.join(os.getcwd(), 'backend'))
from app.db.session import SessionLocal

def find_broken():
    db = SessionLocal()
    try:
        rows = db.execute(text("""
            SELECT id, subject, cluster_number, question_text 
            FROM focused_questions 
            WHERE question_text IS NULL OR option_a IS NULL OR correct_answer IS NULL
        """)).fetchall()
        
        print(f"Found {len(rows)} broken questions:")
        for r in rows:
            print(f"ID: {r[0]} | {r[1]} | Cl {r[2]} | {r[3][:50]}...")
            
    finally:
        db.close()

if __name__ == "__main__":
    find_broken()
