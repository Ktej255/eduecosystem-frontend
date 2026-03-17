from sqlalchemy import create_engine, text

PROD_DB_URL = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"

def audit_user(email_pattern):
    engine = create_engine(PROD_DB_URL)
    with engine.connect() as conn:
        results = conn.execute(text("SELECT id, email, full_name FROM users WHERE email LIKE :pattern"), {"pattern": email_pattern}).fetchall()
        if results:
            for r in results:
                print(f"ID={r[0]}, Email='{r[1]}', Name='{r[2]}'")
        else:
            print("No users found matching pattern.")

if __name__ == "__main__":
    audit_user("namariya%")
