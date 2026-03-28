from sqlalchemy import create_engine, text
import os
import json

def run_audit():
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("DATABASE_URL not set")
        return
        
    engine = create_engine(db_url)
    with engine.connect() as conn:
        # 1. Identify valid column (text vs question_text)
        cols_res = conn.execute(text("SELECT column_name FROM information_schema.columns WHERE table_name = 'bank_questions'"))
        col_names = [c[0] for c in cols_res.fetchall()]
        q_col = 'text' if 'text' in col_names else ('question_text' if 'question_text' in col_names else 'question')
        
        # 2. Query 1: Distribution
        print("--- RAW OUTPUT: QUERY 1 (Difficulty Distribution) ---")
        q1 = text("""
            SELECT subject, difficulty, COUNT(*) 
            FROM bank_questions 
            WHERE subject IN ('Modern History', 'Medieval History', 'Ancient History', 'Polity')
            GROUP BY subject, difficulty
            ORDER BY subject, difficulty;
        """)
        res1 = conn.execute(q1).fetchall()
        for row in res1:
            print(list(row))
            
        # 3. Query 2: Total Counts
        print("\n--- RAW OUTPUT: QUERY 2 (Total Counts by Subject) ---")
        q2 = text("""
            SELECT subject, COUNT(*) as total
            FROM bank_questions
            GROUP BY subject
            ORDER BY total DESC;
        """)
        res2 = conn.execute(q2).fetchall()
        for row in res2:
            print(list(row))
            
        # 4. Query 3: Duplicates
        print("\n--- RAW OUTPUT: QUERY 3 (Duplicate Check) ---")
        q3 = text(f"""
            SELECT subject, COUNT(*) as total_rows,
            COUNT(DISTINCT ({q_col})) as unique_questions,
            COUNT(*) - COUNT(DISTINCT ({q_col})) as duplicates
            FROM bank_questions
            WHERE subject IN ('Modern History', 'Medieval History', 'Ancient History')
            GROUP BY subject;
        """)
        res3 = conn.execute(q3).fetchall()
        for row in res3:
            print(list(row))

if __name__ == "__main__":
    run_audit()
