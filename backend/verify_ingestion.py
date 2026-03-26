import os
from sqlalchemy import create_engine, text

def verify():
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("DATABASE_URL not set")
        return
        
    engine = create_engine(db_url)
    with engine.connect() as conn:
        try:
            # TASK 1A: Get count by subject and difficulty
            print("--- SUBJECT, DIFFICULTY, COUNT ---")
            sql_groups = text("""
                SELECT subject, difficulty, COUNT(*) 
                FROM bank_questions 
                GROUP BY subject, difficulty 
                ORDER BY subject, difficulty;
            """)
            results = conn.execute(sql_groups).fetchall()
            for row in results:
                print(f"{row[0]}, {row[1]}, {row[2]}")
                
            # TASK 1B: Get total count
            print("\n--- TOTAL COUNT ---")
            sql_total = text("SELECT COUNT(*) FROM bank_questions;")
            total = conn.execute(sql_total).scalar()
            print(f"Total: {total}")
            
        except Exception as e:
            print(f"ERROR: {e}")
        finally:
            engine.dispose()

if __name__ == "__main__":
    verify()
