import json, os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

DATABASE_URL = os.environ.get("DATABASE_URL")
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)

with open("all_mcqs_fixed.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

print(f"Loaded {len(questions)} questions")

with Session() as session:
    # Truncate first inside the same script! That accomplishes STEP 1 and 2 together!
    session.execute(text("TRUNCATE TABLE bank_questions RESTART IDENTITY CASCADE;"))
    session.commit()
    print("Truncated table bank_questions (Confirmed 0 rows)")
    
    # Need instructor_id
    result = session.execute(text("SELECT id FROM users LIMIT 1")).fetchone()
    instructor_id = result[0] if result else 1
    
    inserted = 0
    skipped = 0
    for q in questions:
        try:
            options = q.get('options', [])
            correct = q.get('correctAnswer', 0)
            difficulty = q.get('difficulty_tier') or q.get('difficulty') or 'medium'
            if isinstance(difficulty, str):
                difficulty = difficulty.lower().replace('moderate', 'medium')
            subject = q.get('subject', 'Polity')
            if subject == 'History':
                subject = 'Modern History'
            
            session.execute(text("""
                INSERT INTO bank_questions
                (text, type, points, difficulty, options, correct_answer, explanation, subject, instructor_id)
                VALUES (:text, :type, :points, :difficulty, :options, :correct, :explanation, :subject, :instructor_id)
            """), {
                "text": q.get("question", ""),
                "type": "multiple_choice",
                "points": 1,
                "difficulty": difficulty,
                "options": json.dumps(options),
                "correct": str(correct),
                "explanation": q.get("explanation", ""),
                "subject": subject,
                "instructor_id": instructor_id
            })
            inserted += 1
            if inserted % 2000 == 0:
                print(f"Processed {inserted} questions...")
        except Exception as e:
            skipped += 1
            if skipped <= 5:
                print(f"Error inserting question: {e}")
    session.commit()
    print(f"Inserted: {inserted}, Skipped: {skipped}")

with Session() as session:
    result = session.execute(text(
        "SELECT subject, COUNT(*) FROM bank_questions GROUP BY subject ORDER BY COUNT(*) DESC"
    )).fetchall()
    print("\nFinal counts:")
    for row in result:
        print(f"  {row[0]}: {row[1]}")
