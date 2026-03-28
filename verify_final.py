import os
from sqlalchemy import create_engine, text

def verify_final():
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("DATABASE_URL not set")
        return
        
    engine = create_engine(db_url)
    with engine.connect() as conn:
        print("--- FINAL VERIFICATION (STEP 5) ---")
        sql = """
        SELECT subject, COUNT(*) as total,
        COUNT(DISTINCT text) as unique_questions
        FROM bank_questions
        GROUP BY subject ORDER BY subject;
        """
        res = conn.execute(text(sql)).fetchall()
        for row in res:
            print(list(row))
        print("--- END VERIFICATION ---")

if __name__ == "__main__":
    verify_final()
