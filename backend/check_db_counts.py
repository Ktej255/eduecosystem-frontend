from sqlalchemy import create_engine, text

def check_counts():
    url = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"
    engine = create_engine(url)
    with engine.connect() as conn:
        try:
            upsc_count = conn.execute(text("SELECT count(*) FROM upsc_questions")).scalar()
            print(f"upsc_questions count: {upsc_count}")
        except Exception as e:
            print(f"Error upsc_questions: {e}")
            
        try:
            drill_count = conn.execute(text("SELECT count(*) FROM drill_questions")).scalar()
            print(f"drill_questions count: {drill_count}")
        except Exception as e:
            print(f"Error drill_questions: {e}")
            
        try:
            bank_count = conn.execute(text("SELECT count(*) FROM bank_questions")).scalar()
            print(f"bank_questions count: {bank_count}")
        except Exception as e:
            print(f"Error bank_questions: {e}")

if __name__ == "__main__":
    check_counts()
