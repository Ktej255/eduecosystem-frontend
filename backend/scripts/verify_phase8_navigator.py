import sys
import os
import uuid
from datetime import datetime, timedelta

# Add the backend directory to sys.path
sys.path.append(os.getcwd())

from app.db.session import SessionLocal, engine, Base
from app.models.user import User
from app.models.adaptive_learning import Concept, StudentMastery, LearningMission, StudentMomentumMetrics
from app.services.recommendation_service import recommendation_service
from app.services.motivation_service import motivation_service

def setup_test_data(db):
    """Creates a test student and some concepts to verify the Navigator."""
    # 1. Create Test User
    test_email = f"navigator_test_{uuid.uuid4().hex[:6]}@example.com"
    user = User(
        email=test_email,
        full_name="Navigator Tester",
        hashed_password="fake",
        streak_days=0,
        xp=0
    )
    db.add(user)
    db.flush()
    
    # 2. Create Test Concepts
    c1 = Concept(id=uuid.uuid4(), title="Test Concept: High weakness", subject="Geography", exam_importance=0.9)
    c2 = Concept(id=uuid.uuid4(), title="Test Concept: High Mastery", subject="Geography", exam_importance=0.5)
    db.add_all([c1, c2])
    db.flush()
    
    # 3. Create Mastery (Weak for c1, Strong for c2)
    m1 = StudentMastery(user_id=user.id, concept_id=c1.id, mastery_probability=0.1) # Weak
    m2 = StudentMastery(user_id=user.id, concept_id=c2.id, mastery_probability=0.9) # Strong
    
    # 4. Create Momentum
    mom = StudentMomentumMetrics(
        id=str(uuid.uuid4()),
        student_id=user.id,
        last_activity_date=datetime.utcnow() - timedelta(days=1) # Yesterday
    )
    db.add_all([m1, m2, mom])
    db.commit()
    
    return user, c1, c2

def test_recommendation_logic(db, user, c1, c2):
    print("\n[STEP 1] Testing Recommendation Engine...")
    plan = recommendation_service.get_daily_plan(db, user.id, "Geography")
    
    print(f"Generated Plan: {plan}")
    
    # c1 should be the top priority because it's weak and high importance
    top_mission = plan[0]
    if "High weakness" in top_mission['title']:
        print("✅ SUCCESS: Weak/High-yield concept prioritized.")
    else:
        print("❌ FAIL: Priority scoring logic mismatch.")

def test_motivation_logic(db, user, c1):
    print("\n[STEP 2] Testing Motivation Engine (Streaks & XP)...")
    initial_xp = user.xp
    initial_streak = user.streak_days
    
    # Simulate completing a mission for c1
    motivation_service.process_study_event(db, user.id, "MCQ_SUBMISSION", str(c1.id), success=True)
    
    db.refresh(user)
    print(f"New XP: {user.xp} (Gain: {user.xp - initial_xp})")
    print(f"New Streak: {user.streak_days}")
    
    if user.xp > initial_xp:
        print("✅ SUCCESS: XP Awarded.")
    if user.streak_days > initial_streak or user.streak_days == 1:
         print("✅ SUCCESS: Streak updated.")

    # Check if mission marked as complete
    mission = db.query(LearningMission).filter(LearningMission.user_id == user.id, LearningMission.concept_id == c1.id).first()
    if mission and mission.is_completed:
        print("✅ SUCCESS: Mission automatically marked as COMPLETED.")
    else:
        print("❌ FAIL: Mission completion hook failed.")

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        user, c1, c2 = setup_test_data(db)
        test_recommendation_logic(db, user, c1, c2)
        test_motivation_logic(db, user, c1)
    finally:
        db.close()
        print("\nPhase 8 Verification Complete.")
