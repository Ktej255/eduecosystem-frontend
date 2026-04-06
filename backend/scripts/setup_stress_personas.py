import sys
import os
import random
from datetime import datetime
from sqlalchemy import text
from sqlalchemy.orm import Session

# Add paths
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.db.session import SessionLocal
from app.models.user import User
from app.models.student_concept_mastery import StudentConceptMastery

def setup_personas():
    db = SessionLocal()
    try:
        print("Setting up Stress Testing Personas...")
        
        personas = [
            {"email": "early@test.com", "name": "Early Student", "type": "early"},
            {"email": "mid@test.com", "name": "Mid Student", "type": "mid"},
            {"email": "threshold@test.com", "name": "Threshold Student", "type": "threshold"},
            {"email": "strong@test.com", "name": "Strong Student", "type": "strong"},
            {"email": "fragile@test.com", "name": "Fragile Student", "type": "fragile"},
        ]
        
        for p in personas:
            # Raw check for user to avoid schema drift issues with ORM
            user_row = db.execute(text("SELECT id FROM users WHERE email = :e"), {"e": p["email"]}).fetchone()
            
            if not user_row:
                db.execute(text("""
                    INSERT INTO users (email, full_name, hashed_password, is_active, is_superuser, role)
                    VALUES (:e, :n, 'test', 1, 0, 'student')
                """), {"e": p["email"], "n": p["name"]})
                db.commit()
                user_id = db.execute(text("SELECT id FROM users WHERE email = :e"), {"e": p["email"]}).fetchone()[0]
            else:
                user_id = user_row[0]
            
            # Clear old mastery
            db.execute(text("DELETE FROM student_concept_mastery WHERE student_id = :sid"), {"sid": user_id})
            
            # Seed mastery based on persona type
            nodes = db.execute(text("SELECT id FROM concept_nodes")).fetchall()
            node_ids = [n[0] for n in nodes]
            
            count = 0
            for node_pk in node_ids:
                if p["type"] == "early":
                    if random.random() > 0.1: continue # only 10% coverage
                    mastery = random.uniform(10, 40)
                elif p["type"] == "mid":
                    if random.random() > 0.5: continue # 50% coverage
                    mastery = random.uniform(40, 65)
                elif p["type"] == "threshold":
                    if random.random() > 0.8: continue # 80% coverage
                    mastery = random.uniform(65, 75)
                elif p["type"] == "strong":
                    if random.random() > 0.95: continue # 95% coverage
                    mastery = random.uniform(85, 98)
                elif p["type"] == "fragile":
                    if random.random() > 0.7: continue
                    mastery = random.uniform(70, 95) # High but...
                
                # Raw INSERT for mastery
                db.execute(text("""
                    INSERT INTO student_concept_mastery 
                    (student_id, node_id, mastery_score, attempt_count, ease_factor, interval, last_activity_date)
                    VALUES (:sid, :nid, :ms, :ac, 2.5, :iv, :la)
                """), {
                    "sid": user_id, "nid": node_pk, "ms": mastery, 
                    "ac": random.randint(1, 5), "iv": random.randint(1, 10),
                    "la": datetime.utcnow()
                })
                count += 1
            
            print(f"  [OK] Created {p['type']} persona with {count} mastery nodes.")
            
        db.commit()
        print("Stress Personas Ready!")
        
    except Exception as e:
        print(f"Setup Failed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    setup_personas()
