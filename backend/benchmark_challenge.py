import time
from datetime import date
from unittest.mock import MagicMock
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), ".")))

# Set environment variables for testing
os.environ["TESTING"] = "true"

from app.db.session import engine, SessionLocal
from app.db.base_class import Base
from app.models.user import User
from app.models.challenge import Challenge, UserChallenge
from app.services.challenge_service import get_active_challenges_for_user

Base.metadata.create_all(bind=engine)

def setup_db():
    db = SessionLocal()
    # Clean up
    db.query(UserChallenge).delete()
    db.query(Challenge).delete()
    db.query(User).delete()

    # Create user
    user = User(email="bench@example.com", is_active=True, hashed_password="pw")
    db.add(user)
    db.commit()
    db.refresh(user)

    return db, user

def run_benchmark():
    db, user = setup_db()

    # First run will generate challenges and create user challenges
    start = time.perf_counter()
    res1 = get_active_challenges_for_user(db, user)
    end = time.perf_counter()
    print(f"First run (generation + insertion): {end - start:.4f} seconds")

    # Second run will fetch existing challenges and user challenges
    runs = 100
    start = time.perf_counter()
    for _ in range(runs):
        res2 = get_active_challenges_for_user(db, user)
    end = time.perf_counter()
    avg_time = (end - start) / runs
    print(f"Subsequent runs (fetching existing): {avg_time:.4f} seconds/run")

    # To measure queries, we can use an event listener
    from sqlalchemy import event
    query_count = 0

    @event.listens_for(engine, "before_cursor_execute")
    def receive_before_cursor_execute(conn, cursor, statement, parameters, context, executemany):
        nonlocal query_count
        query_count += 1

    query_count = 0
    get_active_challenges_for_user(db, user)
    print(f"Number of queries per call: {query_count}")
    print(f"Total challenges expected: 5 (3 daily, 2 weekly)")

if __name__ == "__main__":
    run_benchmark()
