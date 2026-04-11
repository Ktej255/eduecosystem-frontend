import pytest
from datetime import date, timedelta
from app.models.user import User
from app.models.challenge import Challenge, ChallengeType, UserChallenge
from app.services.challenge_service import get_active_challenges_for_user, generate_daily_challenges, generate_weekly_challenges

def create_mock_challenges(db_session, user_id):
    today = date.today()
    week_start = today - timedelta(days=today.weekday())

    # Let's generate some mock challenges if they don't exist
    daily_challenges = generate_daily_challenges(db_session, today)
    weekly_challenges = generate_weekly_challenges(db_session, week_start)
    return user_id

def test_benchmark_get_active_challenges(benchmark, db_session):
    # Set up a user
    user = User(email="test_benchmark@example.com", username="benchmark_user", hashed_password="pw")
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)

    create_mock_challenges(db_session, user.id)

    def run_get_challenges():
        # Clear out existing user challenges for testing clean run
        db_session.query(UserChallenge).filter(UserChallenge.user_id == user.id).delete()
        db_session.commit()
        return get_active_challenges_for_user(db_session, user)

    # Benchmark the function
    result = benchmark(run_get_challenges)

    assert len(result["daily"]) > 0
    assert len(result["weekly"]) > 0
