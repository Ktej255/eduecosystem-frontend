import pytest
from datetime import datetime, timezone
import time
from unittest.mock import MagicMock
from sqlalchemy.orm import Session

from app.models.user import User
from app.models.challenge import Challenge, UserChallenge
from app.services.challenge_service import update_challenge_progress
from sqlalchemy.sql import func

class MockQuery:
    def __init__(self, value):
        self.value = value
    def scalar(self):
        return self.value

@pytest.fixture
def mock_db():
    db = MagicMock(spec=Session)

    # We want to count how many times db.query(func.now()).scalar() is called
    query_count = [0]

    def mock_query(*args, **kwargs):
        if len(args) > 0 and hasattr(args[0], 'name') and args[0].name == 'now':
            query_count[0] += 1
            return MockQuery("2023-01-01 12:00:00")
        return MagicMock()

    db.query.side_effect = mock_query
    db.query_count = query_count
    return db

def test_update_challenge_progress_performance(mock_db, monkeypatch):
    # Create mock user
    user = User(id=1)

    # Create 10,000 UserChallenges that will hit the completion threshold to amplify the time diff
    num_challenges = 10000
    user_challenges = []
    for i in range(num_challenges):
        challenge = Challenge(id=i, requirement={"type": "quiz_complete"})
        user_challenge = UserChallenge(
            id=i,
            user_id=1,
            challenge_id=i,
            progress_percentage=80,  # +33 will exceed 100
            completed_at=None,
            challenge=challenge
        )
        user_challenges.append({"progress": user_challenge})

    # Mock get_active_challenges_for_user
    mock_active = {"daily": user_challenges[:num_challenges//2], "weekly": user_challenges[num_challenges//2:]}
    monkeypatch.setattr("app.services.challenge_service.get_active_challenges_for_user", lambda db, user: mock_active)

    # Run the function
    start_time = time.time()
    updated = update_challenge_progress(mock_db, user, "quiz_complete")
    end_time = time.time()

    print(f"\nExecution time: {end_time - start_time:.4f} seconds")
    print(f"Number of NOW() queries: {mock_db.query_count[0]}")

    assert len(updated) == num_challenges
    assert mock_db.query_count[0] == 0  # Should be exactly 0 after optimization!
