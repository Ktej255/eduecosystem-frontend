"""
Challenge Service Tests

Tests for generating and managing daily challenges.
"""

from datetime import date
from unittest.mock import MagicMock, patch
from sqlalchemy.orm import Session

from app.services.challenge_service import generate_daily_challenges
from app.models.challenge import Challenge, ChallengeType

@patch("app.services.challenge_service.sample")
def test_generate_daily_challenges_new(mock_sample):
    """Test generating new daily challenges when none exist for the date."""
    target_date = date(2023, 10, 27)

    # Use a pure MagicMock for the DB instead of injecting the db fixture
    db = MagicMock(spec=Session)

    # Mock the database query to return empty list (no existing challenges)
    mock_query = MagicMock()
    db.query.return_value = mock_query
    mock_filter = MagicMock()
    mock_query.filter.return_value = mock_filter
    mock_filter.all.return_value = []

    # Mock sample to return a predictable set of templates
    mock_templates = [
        {
            "title": "Complete 2 Lessons",
            "description": "Finish any 2 lessons today",
            "requirement": {"type": "complete_lessons", "count": 2},
            "reward_coins": 30,
            "difficulty": 1,
        },
        {
            "title": "Take a Quiz",
            "description": "Complete any quiz with 70% or higher",
            "requirement": {"type": "quiz_score", "min_score": 70, "count": 1},
            "reward_coins": 40,
            "difficulty": 2,
        },
        {
            "title": "Study Session",
            "description": "Spend 30 minutes learning",
            "requirement": {"type": "time_spent", "minutes": 30},
            "reward_coins": 35,
            "difficulty": 2,
        },
    ]
    mock_sample.return_value = mock_templates

    challenges = generate_daily_challenges(db, target_date=target_date)

    # Verify existing query check
    db.query.assert_called_with(Challenge)

    # Verify mock_sample was called correctly
    assert mock_sample.call_count == 1
    args, kwargs = mock_sample.call_args
    # Check that sample was called with a list of templates
    assert isinstance(args[0], list)
    assert args[1] == 3

    # Verify the challenges created
    assert len(challenges) == 3
    assert challenges[0].title == "Complete 2 Lessons"
    assert challenges[0].type == ChallengeType.DAILY
    assert challenges[0].start_date == target_date
    assert challenges[0].end_date == target_date
    assert challenges[0].requirement == {"type": "complete_lessons", "count": 2}
    assert challenges[0].reward_coins == 30
    assert challenges[0].difficulty == 1
    assert challenges[0].is_active is True

    # Verify db interactions
    assert db.add.call_count == 3
    db.commit.assert_called_once()
    assert db.refresh.call_count == 3


@patch("app.services.challenge_service.date")
@patch("app.services.challenge_service.sample")
def test_generate_daily_challenges_default_date(mock_sample, mock_date):
    """Test that it defaults to today's date if target_date is not provided."""
    today_date = date(2023, 11, 1)
    mock_date.today.return_value = today_date
    # Allow date() to be called as usual by setting its side effect to the original date
    mock_date.side_effect = lambda *args, **kwargs: date(*args, **kwargs)

    db = MagicMock(spec=Session)

    # Mock the database query to return empty list (no existing challenges)
    mock_query = MagicMock()
    db.query.return_value = mock_query
    mock_filter = MagicMock()
    mock_query.filter.return_value = mock_filter
    mock_filter.all.return_value = []

    mock_sample.return_value = [
        {
            "title": "Complete 2 Lessons",
            "description": "Finish any 2 lessons today",
            "requirement": {"type": "complete_lessons", "count": 2},
            "reward_coins": 30,
            "difficulty": 1,
        }
    ]

    challenges = generate_daily_challenges(db)

    assert len(challenges) == 1
    assert challenges[0].start_date == today_date
    assert challenges[0].end_date == today_date


def test_generate_daily_challenges_existing():
    """Test that existing challenges are returned if they already exist for the date."""
    target_date = date(2023, 10, 27)

    mock_existing_challenge = Challenge(
        id=1,
        title="Existing Challenge",
        type=ChallengeType.DAILY,
        start_date=target_date,
        end_date=target_date
    )

    db = MagicMock(spec=Session)

    mock_query = MagicMock()
    db.query.return_value = mock_query
    mock_filter = MagicMock()
    mock_query.filter.return_value = mock_filter
    mock_filter.all.return_value = [mock_existing_challenge]

    challenges = generate_daily_challenges(db, target_date=target_date)

    assert len(challenges) == 1
    assert challenges[0] == mock_existing_challenge

    db.query.assert_called_with(Challenge)
    db.add.assert_not_called()
    db.commit.assert_not_called()
