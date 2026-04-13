import pytest
from datetime import date, timedelta
from app.api.api_v1.sm2 import score_to_quality, compute_sm2

@pytest.mark.parametrize("score,expected_quality", [
    (100, 5),
    (90, 5),
    (89.9, 4),
    (80, 4),
    (79.9, 3),
    (70, 3),
    (69.9, 2),
    (60, 2),
    (59.9, 1),
    (40, 1),
    (39.9, 0),
    (0, 0),
    (-10, 0),
    (110, 5),
])
def test_score_to_quality(score, expected_quality):
    assert score_to_quality(score) == expected_quality

def test_compute_sm2_first_review():
    # New item, first review (interval 0)
    # quality 5 (perfect)
    ef, interval, next_review = compute_sm2(2.5, 0, 5)

    # ef = 2.5 + (0.1 - (5-5) * (0.08 + (5-5) * 0.02)) = 2.5 + 0.1 = 2.6
    assert ef == 2.6
    assert interval == 1
    assert next_review == date.today() + timedelta(days=1)

def test_compute_sm2_second_review():
    # quality 4 (correct after hesitation)
    # ef = 2.5 + (0.1 - (5-4) * (0.08 + (5-4) * 0.02)) = 2.5 + (0.1 - 0.1) = 2.5
    ef, interval, next_review = compute_sm2(2.5, 1, 4)
    assert ef == 2.5
    assert interval == 6
    assert next_review == date.today() + timedelta(days=6)

def test_compute_sm2_subsequent_review():
    # quality 3 (correct+difficult)
    # ef = 2.5 + (0.1 - (5-3) * (0.08 + (5-3) * 0.02)) = 2.5 + (0.1 - 2 * (0.08 + 0.04)) = 2.5 + (0.1 - 0.24) = 2.36
    ef, interval, next_review = compute_sm2(2.5, 6, 3)
    assert ef == pytest.approx(2.36)
    assert interval == round(6 * 2.36)  # 14.16 -> 14
    assert interval == 14
    assert next_review == date.today() + timedelta(days=14)

def test_compute_sm2_fail_reset():
    # quality 2 (incorrect easy) -> interval reset
    ef, interval, next_review = compute_sm2(2.5, 6, 2)
    # ef = 2.5 + (0.1 - (5-2) * (0.08 + (5-2) * 0.02)) = 2.5 + (0.1 - 3 * (0.08 + 0.06)) = 2.5 + (0.1 - 0.42) = 2.18
    assert ef == pytest.approx(2.18)
    assert interval == 1
    assert next_review == date.today() + timedelta(days=1)

def test_compute_sm2_min_ef():
    # quality 0 (blackout)
    # ef = 1.3 + (0.1 - (5-0) * (0.08 + (5-0) * 0.02)) = 1.3 + (0.1 - 5 * (0.08 + 0.1)) = 1.3 + (0.1 - 0.9) = 0.5
    # clamped to 1.3
    ef, interval, next_review = compute_sm2(1.3, 1, 0)
    assert ef == 1.3
    assert interval == 1

def test_compute_sm2_quality_clamping():
    # quality > 5 should be treated as 5
    ef1, interval1, _ = compute_sm2(2.5, 6, 5)
    ef2, interval2, _ = compute_sm2(2.5, 6, 10)
    assert ef1 == ef2
    assert interval1 == interval2

    # quality < 0 should be treated as 0
    ef3, interval3, _ = compute_sm2(2.5, 6, 0)
    ef4, interval4, _ = compute_sm2(2.5, 6, -5)
    assert ef3 == ef4
    assert interval3 == interval4
