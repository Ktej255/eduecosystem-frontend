"""
ingest_upsc_mcqs_p7_safe_v4.py
==============================
Safe ingestion using plain sqlite3 for maximum reliability and zero circular dependencies.
"""
import sqlite3
import json
import os
from pathlib import Path

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
DB_PATH = BACKEND_ROOT / "eduecosystem_v2.db"

UPSC_MCQ_BANK = [
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
    print(f"🚀 Starting Phase-7 Safe Ingestion v4 (Plain Sqlite)... Target: {DB_PATH}")
    
    if not DB_PATH.exists():
        print(f"❌ Error: Database file not found at {DB_PATH}")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    try:
        # 1. Get Admin ID (from users table)
        cursor.execute("SELECT id FROM users WHERE is_superuser = 1 LIMIT 1")
        row = cursor.fetchone()
        instructor_id = row[0] if row else 1
        print(f"Using instructor_id: {instructor_id}")
        
        # 2. Check baseline
        cursor.execute("SELECT COUNT(*) FROM bank_questions")
        baseline_count = cursor.fetchone()[0]
        print(f"📊 Baseline count in bank_questions: {baseline_count}")
        
        new_count = 0
        dup_count = 0
        
        # 3. Ingest
        for q in UPSC_MCQ_BANK:
            # Deduplicate by source_id
            cursor.execute("SELECT 1 FROM bank_questions WHERE source_id = ?", (q["source_id"],))
            if cursor.fetchone():
                dup_count += 1
                continue
                
            cursor.execute("""
                INSERT INTO bank_questions 
                (instructor_id, source_id, text, type, difficulty, level, options, correct_answer, explanation, subject, topic_tag, tags, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            """, (
                instructor_id,
                q["source_id"],
                q["text"],
                "multiple_choice",
                q["difficulty"],
                q["level"],
                json.dumps(q["options"]),
                q["correct_answer"],
                q["explanation"],
                q["subject"],
                q["topic_tag"],
                f"upsc,phase7,{q['subject']},{q['difficulty']}"
            ))
            new_count += 1
            
        conn.commit()
        
        cursor.execute("SELECT COUNT(*) FROM bank_questions")
        final_count = cursor.fetchone()[0]
        print(f"✅ Ingestion Summary:")
        print(f"   - New added: {new_count}")
        print(f"   - Duplicates skipped: {dup_count}")
        print(f"   - Final total count: {final_count}")
        
    except Exception as e:
        print(f"❌ Error during ingestion: {e}")
        conn.rollback()
    finally:
        conn.close()

if __name__ == "__main__":
    run_ingestion()
