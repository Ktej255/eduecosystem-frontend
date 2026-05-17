import time
from datetime import datetime, timedelta
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.session import Base
from app.models.user import User
from app.models.nudge import StudentNudgeWorkflow, NudgeHistory

def run_benchmark():
    engine = create_engine('sqlite:///:memory:', echo=False)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    db = Session()

    # Seed data
    workflow = StudentNudgeWorkflow(
        name="Test Workflow",
        trigger_type="INACTIVITY",
        message_template="Miss you {{name}}",
        is_active=True
    )
    db.add(workflow)
    db.commit()

    now = datetime.utcnow()
    # Create 1000 users
    users = []
    for i in range(1000):
        user = User(
            email=f"user{i}@test.com",
            role="student",
            last_login=now - timedelta(days=4),
            is_active=True,
            full_name=f"User {i}"
        )
        db.add(user)
        users.append(user)
    db.commit()

    # Add nudge history for half of them
    for i in range(500):
        history = NudgeHistory(
            workflow_id=workflow.id,
            user_id=users[i].id,
            sent_at=now - timedelta(hours=12),
            action_taken="PUSH_SENT"
        )
        db.add(history)
    db.commit()

    # We mock the evaluate_rules / process_workflow logic to measure before/after
    # Baseline logic
    start_time = time.time()

    target_users = db.query(User).filter(
        User.role == "student",
        User.last_login < now - timedelta(days=3),
        User.is_active == True
    ).all()

    nudged_count = 0
    for user in target_users:
        already_nudged = db.query(NudgeHistory).filter(
            NudgeHistory.workflow_id == workflow.id,
            NudgeHistory.user_id == user.id,
            NudgeHistory.sent_at > (now - timedelta(hours=24))
        ).first()

        if not already_nudged:
            nudged_count += 1
            # Simulate execute_nudge without committing to avoid slowing down the benchmark too much
            pass

    baseline_time = time.time() - start_time
    print(f"Baseline (N+1): {baseline_time:.4f} seconds, Nudged: {nudged_count}")

    # Optimized logic
    start_time = time.time()

    target_users = db.query(User).filter(
        User.role == "student",
        User.last_login < now - timedelta(days=3),
        User.is_active == True
    ).all()

    nudged_count = 0
    if target_users:
        target_user_ids = [u.id for u in target_users]
        history_records = db.query(NudgeHistory.user_id).filter(
            NudgeHistory.workflow_id == workflow.id,
            NudgeHistory.user_id.in_(target_user_ids),
            NudgeHistory.sent_at > (now - timedelta(hours=24))
        ).all()

        nudged_user_ids = {r[0] for r in history_records}

        for user in target_users:
            if user.id not in nudged_user_ids:
                nudged_count += 1

    optimized_time = time.time() - start_time
    print(f"Optimized (Batch): {optimized_time:.4f} seconds, Nudged: {nudged_count}")
    print(f"Improvement: {baseline_time / optimized_time:.2f}x faster")

if __name__ == '__main__':
    run_benchmark()
