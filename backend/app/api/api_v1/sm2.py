"""
SM-2 Spaced Repetition Algorithm implementation.
Based on the original SM-2 algorithm by Piotr Wozniak (SuperMemo).
"""
from datetime import date, timedelta
from typing import Tuple


def compute_sm2(
    ease_factor: float,
    interval: int,
    quality: int,  # 0-5 | 5=perfect, 4=correct after hesitation, 3=correct+difficult, 2=incorrect easy, 1=incorrect hard, 0=blackout
) -> Tuple[float, int, date]:
    """
    Compute next SM-2 state.

    Returns:
        (new_ease_factor, new_interval, next_review_date)
    """
    # Clamp quality
    quality = max(0, min(5, quality))

    # Update ease factor
    new_ef = ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    new_ef = max(1.3, new_ef)  # Minimum ease factor per SM-2

    # Update interval
    if quality < 3:
        # Item failed — reset
        new_interval = 1
    elif interval == 0:
        new_interval = 1
    elif interval == 1:
        new_interval = 6
    else:
        new_interval = round(interval * new_ef)

    next_review = date.today() + timedelta(days=new_interval)
    return new_ef, new_interval, next_review


def score_to_quality(score: float) -> int:
    """
    Convert a 0-100 mastery score to an SM-2 quality rating (0-5).
    """
    if score >= 90:
        return 5
    elif score >= 80:
        return 4
    elif score >= 70:
        return 3
    elif score >= 60:
        return 2
    elif score >= 40:
        return 1
    else:
        return 0
