from sqlalchemy import create_engine, text

PROD_DB_URL = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"

def standardize_user_flags(email):
    engine = create_engine(PROD_DB_URL)
    with engine.connect() as conn:
        print(f"Standardizing flags for {email}...")
        conn.execute(text("""
            UPDATE users 
            SET is_superuser = COALESCE(is_superuser, FALSE),
                is_ras_authorized = COALESCE(is_ras_authorized, FALSE),
                is_batch1_authorized = COALESCE(is_batch1_authorized, FALSE),
                is_batch2_authorized = COALESCE(is_batch2_authorized, FALSE),
                is_premium = COALESCE(is_premium, FALSE),
                is_active = COALESCE(is_active, TRUE),
                is_approved = COALESCE(is_approved, TRUE),
                is_graphotherapy_exclusive = COALESCE(is_graphotherapy_exclusive, FALSE)
            WHERE email = :email
        """), {"email": email})
        conn.commit()
        print("Done.")

if __name__ == "__main__":
    standardize_user_flags("namariya306@gmail.com")
