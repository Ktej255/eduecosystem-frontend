import os
from sqlalchemy import create_engine, text

def wipe_table():
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("DATABASE_URL not set")
        return
        
    engine = create_engine(db_url)
    with engine.connect() as conn:
        trans = conn.begin()
        try:
            print("--- WIPING TABLE bank_questions ---")
            conn.execute(text("TRUNCATE TABLE bank_questions RESTART IDENTITY CASCADE;"))
            print("Truncate successful.")
            
            # Verify count
            res = conn.execute(text("SELECT COUNT(*) FROM bank_questions;")).fetchone()
            print(f"COUNT AFTER WIPE: {res[0]}")
            
            trans.commit()
        except Exception as e:
            trans.rollback()
            print(f"ERROR: {e}")
        finally:
            engine.dispose()

if __name__ == "__main__":
    wipe_table()
