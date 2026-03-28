from sqlalchemy import create_engine, inspect, text

def list_tables():
    url = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"
    print(f"Connecting to RDS...")
    try:
        engine = create_engine(url)
        inspector = inspect(engine)
        tables = inspector.get_table_names()
        print(f"Items found: {len(tables)}")
        print(f"Tables: {sorted(tables)}")
        
        if "bank_questions" in tables:
            columns = [col['name'] for col in inspector.get_columns('bank_questions')]
            print(f"Columns in 'bank_questions': {columns}")
            
            with engine.connect() as conn:
                count = conn.execute(text("SELECT count(*) FROM bank_questions")).scalar()
                print(f"Total rows in 'bank_questions': {count}")
                if count > 0:
                    subjects = conn.execute(text("SELECT DISTINCT subject FROM bank_questions")).fetchall() if 'subject' in columns else "N/A (no subject column)"
                    print(f"Distinct subjects: {subjects}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    list_tables()
