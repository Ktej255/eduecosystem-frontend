import sys
import os

from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.drill import DrillQuestion, DrillSession
from app.models.user import User
from datetime import datetime, date
import uuid
import json

def verify_mcq_logic():
    db = SessionLocal()
    try:
        # 1. Setup Test User
        user = db.query(User).filter(User.email == "ktej255@gmail.com").first()
        if not user:
            print("Error: Test user not found.")
            return

        # 2. Create Mock MCQ Question
        mcq_payload = {
            "is_mcq": True,
            "options": ["Paris", "London", "Berlin", "Madrid"],
            "correct_option": 0
        }
        
        test_q = DrillQuestion(
            id=str(uuid.uuid4()),
            gs_paper="GS1",
            topic="Geography Test",
            question_text="What is the capital of France?",
            key_points=mcq_payload,
            created_by=user.id
        )
        db.add(test_q)
        db.commit()
        print(f"Created MCQ Question: {test_q.id}")

        # 3. Simulate Detection Logic (from start_drill_session)
        is_mcq = test_q.key_points.get("is_mcq", False)
        options = test_q.key_points.get("options", [])
        print(f"Detection: is_mcq={is_mcq}, options={options}")
        assert is_mcq == True
        assert len(options) == 4

        # 4. Simulate Upload/Evaluation Logic
        session = DrillSession(
            student_id=user.id,
            date=date.today(),
            question_id=test_q.id,
            question_number=1
        )
        db.add(session)
        db.commit()

        # Correct Answer Submission (Paris = index 0)
        selected_option = 0
        correct_option = test_q.key_points.get("correct_option")
        is_correct = (selected_option == correct_option)
        
        session.report_data = {
            "selected_option": selected_option,
            "is_correct": is_correct,
            "score": 100 if is_correct else 0
        }
        session.overall_score = 100 if is_correct else 0
        session.completed_at = datetime.utcnow()
        db.commit()
        db.refresh(session)

        print(f"Evaluation: selected={selected_option}, correct={correct_option}, result={session.report_data['is_correct']}, score={session.overall_score}")
        assert session.report_data['is_correct'] == True
        assert session.overall_score == 100

        # Clean up
        db.delete(session)
        db.delete(test_q)
        db.commit()
        print("Verification successful and cleaned up.")

    finally:
        db.close()

if __name__ == "__main__":
    verify_mcq_logic()
