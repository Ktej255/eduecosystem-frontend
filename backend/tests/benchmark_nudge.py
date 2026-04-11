import time
from datetime import datetime, timedelta
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.models.user import User
from app.models.nudge import StudentNudgeWorkflow, NudgeHistory
from app.db.base_class import Base

engine = create_engine('sqlite:///:memory:')
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

def setup_data(db):
    workflow = StudentNudgeWorkflow(
        id=1,
        name="Test Workflow",
        trigger_type="INACTIVITY",
        action_type="PUSH",
        is_active=True,
        message_template="Hello {{name}}",
        reward_amount=0
    )
    db.add(workflow)

    # Create 1000 users
    users = []
    for i in range(1, 1001):
        u = User(id=i, email=f"user{i}@test.com", hashed_password="pw", role="student", is_active=True, coins=0)
        users.append(u)
    db.add_all(users)
    db.commit()

    # Create 500 nudge histories for some users
    now = datetime.utcnow()
    histories = []
    for i in range(1, 501):
        h = NudgeHistory(
            workflow_id=1,
            user_id=i,
            sent_at=now - timedelta(hours=12),
            action_taken="PUSH_SENT"
        )
        histories.append(h)
    db.add_all(histories)
    db.commit()

    return workflow, users

def original_logic(db, workflow, target_users):
    now = datetime.utcnow()
    count = 0
    for user in target_users:
        already_nudged = db.query(NudgeHistory).filter(
            NudgeHistory.workflow_id == workflow.id,
            NudgeHistory.user_id == user.id,
            NudgeHistory.sent_at > (now - timedelta(hours=24))
        ).first()

        if not already_nudged:
            count += 1
            # Mocking execute_nudge
            pass
    return count

def optimized_logic(db, workflow, target_users):
    now = datetime.utcnow()
    count = 0
    if not target_users:
        return 0

    user_ids = [user.id for user in target_users]
    nudged_records = db.query(NudgeHistory.user_id).filter(
        NudgeHistory.workflow_id == workflow.id,
        NudgeHistory.user_id.in_(user_ids),
        NudgeHistory.sent_at > (now - timedelta(hours=24))
    ).all()

    nudged_user_ids = {r[0] for r in nudged_records}

    for user in target_users:
        if user.id not in nudged_user_ids:
            count += 1
            pass
    return count

def run_benchmark():
    db = SessionLocal()
    workflow, target_users = setup_data(db)

    start = time.time()
    res1 = original_logic(db, workflow, target_users)
    orig_time = time.time() - start

    start = time.time()
    res2 = optimized_logic(db, workflow, target_users)
    opt_time = time.time() - start

    print(f"Original Time: {orig_time:.4f}s, Processed: {res1}")
    print(f"Optimized Time: {opt_time:.4f}s, Processed: {res2}")
    if orig_time > 0:
        print(f"Speedup: {orig_time / opt_time:.2f}x")

    db.close()

if __name__ == "__main__":
    run_benchmark()
