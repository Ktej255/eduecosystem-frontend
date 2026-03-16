from sqlalchemy import create_engine, text

PROD_DB_URL = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"

def check_user(email):
    engine = create_engine(PROD_DB_URL)
    with engine.connect() as conn:
        result = conn.execute(text("SELECT id, email, full_name, is_batch1_authorized, is_batch2_authorized FROM users WHERE email = :email"), {"email": email}).fetchone()
        return result

if __name__ == "__main__":
    user = check_user("namariya306@gmail.com")
    if user:
        print(f"User Found: ID={user[0]}, Email={user[1]}, Name={user[2]}, B1={user[3]}, B2={user[4]}")
    else:
        print("User NOT FOUND")
