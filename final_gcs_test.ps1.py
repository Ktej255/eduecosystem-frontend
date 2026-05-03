import os
import sys
import requests
import sqlalchemy
from sqlalchemy import text
from datetime import datetime, timedelta, timezone
from jose import jwt
import uuid

# Configuration
DB_URL = "postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod"
API_BASE_URL = "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1"
SECRET_KEY = "eduecosystem-gcp-secret-2026-final"
ALGORITHM = "HS256"
TEST_EMAIL = "gcs_test@saritclasses.com"

engine = sqlalchemy.create_engine(DB_URL)

def run_test():
    user_id = None
    attempt_id = None
    
    try:
        # Step 1: Create Test User
        print("\n--- Step 1: Creating Test User ---")
        with engine.connect() as conn:
            with conn.begin():
                # Cleanup existing first
                conn.execute(text("DELETE FROM users WHERE email = :email"), {"email": TEST_EMAIL})
                
                result = conn.execute(text("""
                    INSERT INTO users (
                        email, full_name, hashed_password, is_active, is_verified, 
                        purchased_subjects, is_batch1_authorized, token_version, role
                    ) VALUES (
                        :email, 'GCS Test User', 'not_a_real_hash', true, true, 
                        '["polity"]', true, 1, 'admin'
                    )
                    RETURNING id;
                """), {"email": TEST_EMAIL})
                user_id = result.scalar()
                print(f"User created with ID: {user_id}")

        # Step 2: Generate JWT Token
        print("\n--- Step 2: Generating JWT Token ---")
        expire = datetime.now(timezone.utc) + timedelta(minutes=60)
        to_encode = {"exp": expire, "sub": str(user_id), "v": 1}
        token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        print(f"Token (shorthand): {token[:20]}...")

        # Step 3: Submit Test Upload
        print("\n--- Step 3: Submitting Test Upload ---")
        test_file = "test_gcs_upload.jpg"
        with open(test_file, "w") as f:
            f.write("GCS Test File Content")
            
        headers = {"Authorization": f"Bearer {token}"}
        # Use a random UUID for question_id as the endpoint doesn't strictly validate foreign key constraint in Python logic (DB might, but we'll see)
        # Actually, let's try to find a real question_id just in case
        real_question_id = None
        with engine.connect() as conn:
            result = conn.execute(text("SELECT id FROM upsc_questions LIMIT 1"))
            row = result.fetchone()
            if row:
                real_question_id = str(row[0])
        
        q_id = real_question_id or str(uuid.uuid4())
        print(f"Using Question ID: {q_id}")
        
        files = {"image": (test_file, open(test_file, "rb"), "image/jpeg")}
        data = {
            "question_id": q_id,
            "attempt_type": "after",
            "subject": "Polity"
        }
        
        response = requests.post(f"{API_BASE_URL}/upsc/attempts", headers=headers, data=data, files=files)
        print(f"API Response [{response.status_code}]: {response.text}")
        
        if response.status_code == 200:
            attempt_data = response.json()
            attempt_id = attempt_data.get("id")
            
            # Step 4: Verify DB Result
            print("\n--- Step 4: Verifying Database ---")
            with engine.connect() as conn:
                result = conn.execute(text("SELECT image_url FROM upsc_attempts WHERE id = :id"), {"id": attempt_id})
                image_url = result.scalar()
                print(f"Final Image URL in DB: {image_url}")
                
                if image_url and image_url.startswith("https://storage.googleapis.com"):
                    print("\n✅ MIGRATION CONFIRMED: image_url is a GCS signed URL.")
                elif image_url and image_url.startswith("/uploads/"):
                    print("\n❌ MIGRATION FAILED: image_url is still using local storage.")
                else:
                    print(f"\n❓ UNEXPECTED VALUE: {image_url}")
        else:
            print("\n❌ UPLOAD FAILED: Check logs.")

    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        
    finally:
        # Step 5: Clean Up
        print("\n--- Step 5: Cleaning Up ---")
        with engine.connect() as conn:
            with conn.begin():
                if attempt_id:
                    conn.execute(text("DELETE FROM upsc_attempts WHERE id = :id"), {"id": attempt_id})
                    print(f"Deleted attempt {attempt_id}")
                if user_id:
                    conn.execute(text("DELETE FROM users WHERE id = :id"), {"id": user_id})
                    print(f"Deleted test user {user_id}")
        
        if os.path.exists("test_gcs_upload.jpg"):
            os.remove("test_gcs_upload.jpg")

if __name__ == "__main__":
    run_test()
