from sqlalchemy import create_engine, text

PROD_DB_URL = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"

def fix_access():
    engine = create_engine(PROD_DB_URL)
    emails = ['tester_geography@eduecosystem.com', 'tester_jetski_2026@gmail.com']
    
    with engine.connect() as conn:
        for email in emails:
            print(f"Authorizing {email}...")
            conn.execute(text("UPDATE users SET is_batch1_authorized = true WHERE email = :email"), {"email": email})
        conn.commit()
    print("SUCCESS: Authorized 2 students.")

if __name__ == "__main__":
    fix_access()
