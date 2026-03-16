import sys
import os
from sqlalchemy import create_engine, text
from pathlib import Path
from datetime import datetime, timezone

# Add backend to path
sys.path.append(str(Path(__file__).resolve().parent.parent))

from app.core.security import get_password_hash

# Production Database URL (from previous authorize_ras_user.py)
PROD_DB_URL = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"

TARGET_EMAIL = "namariya306@gmail.com"
TARGET_NAME = "Riyaaa Nama"
PASSWORD = "Edueco@2026"  # Standard default password

def provision_user():
    engine = create_engine(PROD_DB_URL)
    hashed_password = get_password_hash(PASSWORD)
    
    print(f"Provisioning user {TARGET_EMAIL} in PROD RDS...")
    try:
        with engine.connect() as conn:
            # 1. Check if user exists
            result = conn.execute(text("SELECT id FROM users WHERE email = :email"), {"email": TARGET_EMAIL}).fetchone()
            
            if not result:
                print(f"Creating new user: {TARGET_EMAIL}")
                res = conn.execute(text("""
                    INSERT INTO users (email, hashed_password, full_name, role, is_active, is_approved, is_verified, created_at)
                    VALUES (:email, :hashed_password, :full_name, 'student', TRUE, TRUE, TRUE, NOW())
                    RETURNING id
                """), {
                    "email": TARGET_EMAIL, 
                    "hashed_password": hashed_password, 
                    "full_name": TARGET_NAME
                })
                user_id = res.fetchone()[0]
                print(f"Created User ID: {user_id}")
            else:
                user_id = result[0]
                print(f"Found existing user: ID={user_id}")
            
            # 2. Update Access Flags
            # - is_batch1_authorized: Morning Classes
            # - is_batch2_authorized: Night Classes & UPSC Dashboard
            # - is_premium: General Premium / Meditation
            # - purchased_subjects: Full UPSC access
            conn.execute(text("""
                UPDATE users 
                SET is_batch1_authorized = TRUE,
                    is_batch2_authorized = TRUE,
                    is_premium = TRUE,
                    is_active = TRUE,
                    is_approved = TRUE,
                    full_name = :full_name,
                    purchased_subjects = '["full_upsc", "geography", "polity", "history", "economy", "environment", "scitech"]'::jsonb
                WHERE id = :id
            """), {"id": user_id, "full_name": TARGET_NAME})
            
            # 3. Provision Meditation Progress
            # Check if meditation_progress exists
            med_res = conn.execute(text("SELECT id FROM meditation_progress WHERE user_id = :user_id"), {"user_id": user_id}).fetchone()
            
            if not med_res:
                print("Creating Meditation Progress...")
                conn.execute(text("""
                    INSERT INTO meditation_progress (user_id, current_level, current_day, total_streak, unlocked_levels, created_at)
                    VALUES (:user_id, 1, 1, 0, 4, NOW())
                """), {"user_id": user_id})
            else:
                print("Updating Meditation Progress (Unlocking all 4 levels)...")
                conn.execute(text("""
                    UPDATE meditation_progress 
                    SET unlocked_levels = 4, 
                        updated_at = NOW() 
                    WHERE user_id = :user_id
                """), {"user_id": user_id})
                
            conn.commit()
            print(f"User {TARGET_EMAIL} successfully provisioned for all portals.")
            return True


            
    except Exception as e:
        print(f"Error during provisioning: {e}")
        return False

if __name__ == "__main__":
    if provision_user():
        print("\nVerification Complete.")
    else:
        print("\nFailed to provision user. Ensure the user exists in the database first.")
