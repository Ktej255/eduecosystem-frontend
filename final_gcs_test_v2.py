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
TEST_EMAIL = "gcs_test_final@saritclasses.com"

engine = sqlalchemy.create_engine(DB_URL)

def run_test():
    user_id = None
    attempt_id = None
    question_id = None
    batch_id = None
    plan_id = None
    
    try:
        # Step 1: Create Test Infrastructure (User + Batch + Plan + Question)
        print("\n--- Step 1: Creating Test Data in DB ---")
        with engine.connect() as conn:
            with conn.begin():
                # Cleanup existing
                conn.execute(text("DELETE FROM users WHERE email = :email"), {"email": TEST_EMAIL})
                
                # User
                result = conn.execute(text("""
                    INSERT INTO users (
                        email, full_name, hashed_password, is_active, is_verified, 
                        purchased_subjects, is_batch1_authorized, token_version, role
                    ) VALUES (
                        :email, 'GCS Test User', 'not_a_real_hash', true, true, 
                        '["polity"]', true, 1, 'admin'
                    ) RETURNING id;
                """), {"email": TEST_EMAIL})
                user_id = result.scalar()
                
                # Batch (needed for FK if question depends on it)
                batch_id = uuid.uuid4()
                conn.execute(text("""
                    INSERT INTO upsc_batches (id, name, start_date, is_active)
                    VALUES (:id, 'Test Batch', '2026-01-01', true);
                """), {"id": batch_id})
                
                # Plan
                plan_id = uuid.uuid4()
                conn.execute(text("""
                    INSERT INTO upsc_plans (id, batch_id, title, plan_type, start_date, end_date, sequence_order, ai_generated)
                    VALUES (:id, :batch_id, 'Test Plan', 'daily', '2026-01-01', '2026-12-31', 1, false);
                """), {"id": plan_id, "batch_id": batch_id})
                
                # Question
                question_id = uuid.uuid4()
                conn.execute(text("""
                    INSERT INTO upsc_questions (id, plan_id, question_number, title, question_text, marks, subject, microtopics)
                    VALUES (:id, :plan_id, 1, 'Test Question', 'What is AI?', 10, 'Polity', '["AI"]');
                """), {"id": question_id, "plan_id": plan_id})
                
        print(f"Test data setup: User={user_id}, Question={question_id}")

        # Step 2: Generate JWT Token
        print("\n--- Step 2: Generating JWT Token ---")
        expire = datetime.now(timezone.utc) + timedelta(minutes=60)
        to_encode = {"exp": expire, "sub": str(user_id), "v": 1}
        token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

        # Step 3: Submit Test Upload
        print("\n--- Step 3: Submitting Test Upload ---")
        test_file = "final_gcs_test.jpg"
        with open(test_file, "w") as f:
            f.write("GCS Test File Content - Final Pass")
            
        headers = {"Authorization": f"Bearer {token}"}
        
        with open(test_file, "rb") as f_in:
            files = {"image": (test_file, f_in, "image/jpeg")}
            data = {
                "question_id": str(question_id),
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
                print(f"\nFinal Image URL in DB: {image_url}")
                
                if image_url and image_url.startswith("https://storage.googleapis.com"):
                    print("\n[SUCCESS] MIGRATION CONFIRMED: image_url is a GCS signed URL.")
                else:
                    print("\n[FAILURE] Not a GCS URL.")
        else:
            print("\n[FAILURE] Upload failed.")

    except Exception as e:
        print(f"\n[ERROR] {str(e)}")
        
    finally:
        # Step 5: Clean Up
        print("\n--- Step 5: Cleaning Up ---")
        try:
            with engine.connect() as conn:
                with conn.begin():
                    if attempt_id:
                        conn.execute(text("DELETE FROM upsc_attempts WHERE id = :id"), {"id": attempt_id})
                    if question_id:
                        conn.execute(text("DELETE FROM upsc_questions WHERE id = :id"), {"id": question_id})
                    if plan_id:
                        conn.execute(text("DELETE FROM upsc_plans WHERE id = :id"), {"id": plan_id})
                    if batch_id:
                        conn.execute(text("DELETE FROM upsc_batches WHERE id = :id"), {"id": batch_id})
                    if user_id:
                        conn.execute(text("DELETE FROM users WHERE id = :id"), {"id": user_id})
                    print("Cleaned up database.")
        except Exception as e:
            print(f"Cleanup failed: {e}")
            
        if os.path.exists("final_gcs_test.jpg"):
            try: os.remove("final_gcs_test.jpg")
            except: pass

if __name__ == "__main__":
    run_test()
