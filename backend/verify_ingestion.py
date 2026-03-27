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
            # TASK 1A: Get count for history subjects
            print("--- HISTORY SUBJECT COUNTS ---")
            sql_groups = text("""
                SELECT subject, COUNT(*) 
                FROM bank_questions 
                WHERE subject IN ('Modern History', 'Medieval History', 'Ancient History')
                GROUP BY subject 
                ORDER BY subject;
            """)
            results = conn.execute(sql_groups).fetchall()
            for row in results:
                print(f"{row[0]}: {row[1]}")
                
            # TASK 1B: Get total count
            print("\n--- TOTAL BANK COUNT ---")
            sql_total = text("SELECT COUNT(*) FROM bank_questions;")
            total = conn.execute(sql_total).scalar()
            print(f"Total: {total}")
            
        except Exception as e:
            print(f"ERROR: {e}")
        finally:
            engine.dispose()

if __name__ == "__main__":
    verify()
