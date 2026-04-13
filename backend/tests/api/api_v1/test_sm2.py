import pytest
from datetime import date, timedelta
from app.api.api_v1.sm2 import compute_sm2, score_to_quality

def test_score_to_quality():
    assert score_to_quality(95) == 5
    assert score_to_quality(90) == 5
    assert score_to_quality(85) == 4
    assert score_to_quality(80) == 4
    assert score_to_quality(75) == 3
    assert score_to_quality(70) == 3
    assert score_to_quality(65) == 2
    assert score_to_quality(60) == 2
    assert score_to_quality(50) == 1
    assert score_to_quality(40) == 1
    assert score_to_quality(30) == 0
    assert score_to_quality(0) == 0

def test_compute_sm2_clamp_quality():
    # Quality > 5 should be clamped to 5
    ef1, int1, _ = compute_sm2(2.5, 1, 6)
    ef2, int2, _ = compute_sm2(2.5, 1, 5)
    assert ef1 == ef2
    assert int1 == int2

    # Quality < 0 should be clamped to 0
    ef3, int3, _ = compute_sm2(2.5, 1, -1)
    ef4, int4, _ = compute_sm2(2.5, 1, 0)
    assert ef3 == ef4
    assert int3 == int4

def test_compute_sm2_failed_item():
    # If quality < 3, interval resets to 1
    _, new_interval, _ = compute_sm2(2.5, 10, 2)
    assert new_interval == 1
    _, new_interval, _ = compute_sm2(2.5, 10, 1)
    assert new_interval == 1
    _, new_interval, _ = compute_sm2(2.5, 10, 0)
    assert new_interval == 1

def test_compute_sm2_interval_zero():
    # If quality >= 3 and interval is 0, next interval is 1
    _, new_interval, _ = compute_sm2(2.5, 0, 3)
    assert new_interval == 1
    _, new_interval, _ = compute_sm2(2.5, 0, 4)
    assert new_interval == 1
    _, new_interval, _ = compute_sm2(2.5, 0, 5)
    assert new_interval == 1

def test_compute_sm2_interval_one():
    # If quality >= 3 and interval is 1, next interval is 6
    _, new_interval, _ = compute_sm2(2.5, 1, 3)
    assert new_interval == 6
    _, new_interval, _ = compute_sm2(2.5, 1, 4)
    assert new_interval == 6
    _, new_interval, _ = compute_sm2(2.5, 1, 5)
    assert new_interval == 6

def test_compute_sm2_interval_gt_one():
    # If quality >= 3 and interval > 1, next interval is round(interval * new_ef)
    new_ef, new_interval, _ = compute_sm2(2.5, 6, 4)
    assert new_interval == round(6 * new_ef)

def test_compute_sm2_ef_limits():
    # Ease factor should not drop below 1.3
    # If we repeatedly fail, ef should hit 1.3 and stay there
    ef = 1.4
    for _ in range(10):
        ef, _, _ = compute_sm2(ef, 10, 0)
    assert ef == 1.3

def test_compute_sm2_next_review_date():
    _, new_interval, next_review = compute_sm2(2.5, 10, 4)
    expected_date = date.today() + timedelta(days=new_interval)
    assert next_review == expected_date
