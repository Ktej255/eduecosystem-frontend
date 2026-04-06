"""
ingest_upsc_mcqs_p7_safe.py
===========================
Phase-7 Adaptive Exam Simulator - Safe Data Ingestion Script.

- NO DELETE/TRUNCATE.
- UPSERT logic via source_id to prevent duplicates.
- Tiered Difficulty: L1 (Foundation), L2 (Standard), L3 (Hard).
- Coverage: Indian Polity & Geography.
"""
import os
import sys
import json
from pathlib import Path
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

# Setup path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

# CRITICAL: Import base first to load ALL models into metadata
from app.db.base import Base # noqa
from app.db.session import engine
from app.models.question_bank import BankQuestion
from app.models.user import User

# --- Data Configuration ---
# Admin ID for instructor_id (Fallback to first superuser)
ADMIN_USER_ID = 1

UPSC_MCQ_BANK = [
    # --- INDIAN POLITY (L1 - Foundation) ---
    {
        "source_id": "P7-POL-L1-001",
        "text": "Which article of the Indian Constitution deals with the Right to Equality?",
        "options": ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"],
        "correct_answer": "Article 14-18",
        "difficulty": "easy",
        "level": 1,
        "subject": "Polity",
        "topic_tag": "Fundamental Rights",
        "explanation": "Articles 14 to 18 of the Indian Constitution deal with Right to Equality."
    },
    # --- INDIAN POLITY (L2 - Standard) ---
    {
        "source_id": "P7-POL-L2-001",
        "text": "The 42nd Constitutional Amendment Act (1976) added which words to the Preamble?",
        "options": ["Socialist, Secular, Integrity", "Socialist, Democratic, Integrity", "Secular, Republic, Unity", "Sovereign, Socialist, Unity"],
        "correct_answer": "Socialist, Secular, Integrity",
        "difficulty": "medium",
        "level": 2,
        "subject": "Polity",
        "topic_tag": "Preamble",
        "explanation": "The 42nd Amendment added 'Socialist', 'Secular' and 'Integrity' to the Preamble."
    },
    # --- INDIAN POLITY (L3 - Hard/UPSC Standard) ---
    {
        "source_id": "P7-POL-L3-001",
        "text": "Consider the following statements regarding the Basic Structure Doctrine: 1. It was first articulated in the Kesavananda Bharati case. 2. Judicial Review is considered a part of the basic structure. Which is correct?",
        "options": ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        "correct_answer": "Both 1 and 2",
        "difficulty": "hard",
        "level": 3,
        "subject": "Polity",
        "topic_tag": "Basic Structure",
        "explanation": "Both statements are correct. The doctrine was established in 1973."
    },
    # --- GEOGRAPHY (L1 - Foundation) ---
    {
        "source_id": "P7-GEO-L1-001",
        "text": "Which is the largest planet in our solar system?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "correct_answer": "Jupiter",
        "difficulty": "easy",
        "level": 1,
        "subject": "Geography",
        "topic_tag": "Solar System",
        "explanation": "Jupiter is the largest planet."
    },
    # --- GEOGRAPHY (L2 - Standard) ---
    {
        "source_id": "P7-GEO-L2-001",
        "text": "Which latitude passes through the middle of India?",
        "options": ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle"],
        "correct_answer": "Tropic of Cancer",
        "difficulty": "medium",
        "level": 2,
        "subject": "Geography",
        "topic_tag": "Indian Geography",
        "explanation": "The Tropic of Cancer (23.5° N) passes through 8 Indian states."
    },
    # --- GEOGRAPHY (L3 - Hard) ---
    {
        "source_id": "P7-GEO-L3-001",
        "text": "Which of the following is the correct sequence of Himalayan ranges from South to North?",
        "options": ["Shiwalik - Himachal - Himadri", "Himadri - Himachal - Shiwalik", "Himachal - Shiwalik - Himadri", "Shiwalik - Himadri - Himachal"],
        "correct_answer": "Shiwalik - Himachal - Himadri",
        "difficulty": "hard",
        "level": 3,
        "subject": "Geography",
        "topic_tag": "Himalayas",
        "explanation": "The sequence from South to North is Outer Himalayas (Shiwaliks), Lesser Himalayas (Himachal), and Greater Himalayas (Himadri)."
    }
]

def run_ingestion():
    print("🚀 Starting Phase-7 Safe Ingestion...")
    
    # 1. Ensure table exists (Safe: doesn't drop existing)
    # We use Base from app.db.base because it has all tables
    Base.metadata.create_all(bind=engine)
    
    Session = sessionmaker(bind=engine)
    db = Session()
    
    # 2. Get Admin/Instructor ID
    instructor = db.query(User).filter(User.is_superuser == True).first()
    instructor_id = instructor.id if instructor else ADMIN_USER_ID
    print(f"Using instructor_id: {instructor_id}")
    
    # 3. Check baseline
    baseline_count = db.query(BankQuestion).count()
    print(f"📊 Baseline count in bank_questions: {baseline_count}")
    
    new_count = 0
    dup_count = 0
    
    # 4. Ingest
    for q_data in UPSC_MCQ_BANK:
        # Check if source_id already exists to prevent duplicates
        exists = db.query(BankQuestion).filter(BankQuestion.source_id == q_data["source_id"]).first()
        if exists:
            dup_count += 1
            continue
            
        new_q = BankQuestion(
            instructor_id=instructor_id,
            source_id=q_data["source_id"],
            text=q_data["text"],
            type="multiple_choice",
            difficulty=q_data["difficulty"],
            level=q_data["level"],
            options=json.dumps(q_data["options"]),
            correct_answer=q_data["correct_answer"],
            explanation=q_data["explanation"],
            subject=q_data["subject"],
            topic_tag=q_data["topic_tag"],
            tags=f"upsc,phase7,{q_data['subject']},{q_data['difficulty']}"
        )
        db.add(new_q)
        new_count += 1
        
    db.commit()
    
    final_count = db.query(BankQuestion).count()
    print(f"✅ Ingestion Summary:")
    print(f"   - New added: {new_count}")
    print(f"   - Duplicates skipped: {dup_count}")
    print(f"   - Final total count: {final_count}")
    print(f"   - Integrity Check: {baseline_count + new_count == final_count}")
    
    db.close()

if __name__ == "__main__":
    run_ingestion()
