import pytest
from app.utils.fsrs import update_stability_on_grade, FSRS_PARAMS

def test_update_stability_on_grade_1_again():
    # Grade 1 - Again. Major setback in stability, increase in difficulty.
    current_stability = 10.0
    current_difficulty = 5.0
    grade = 1
    days_elapsed = 2.0

    new_stability, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # max(0.5, 10.0 * 0.2) = 2.0
    assert new_stability == 2.0
    # min(10, 5.0 + 0.5) = 5.5
    assert new_difficulty == 5.5

def test_update_stability_on_grade_2_hard():
    # Grade 2 - Hard. Small gain in stability, difficulty unchanged.
    current_stability = 10.0
    current_difficulty = 5.0
    grade = 2
    # Ensure retrievability >= 0.8 by keeping days_elapsed low.
    # retrievability = exp(-days_elapsed / current_stability)
    # exp(0) = 1.0 > 0.8
    days_elapsed = 0.0

    new_stability, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # difficulty_modifier = (11 - 5.0) / 10 = 0.6
    # multiplier = 1.2
    # new_stability = 10.0 * 1.2 * 0.6 = 7.2
    assert abs(new_stability - 7.2) < 1e-5
    assert new_difficulty == 5.0

def test_update_stability_on_grade_3_good():
    # Grade 3 - Good. Moderate gain in stability, difficulty unchanged.
    current_stability = 10.0
    current_difficulty = 5.0
    grade = 3
    days_elapsed = 0.0

    new_stability, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # difficulty_modifier = 0.6
    # multiplier = 2.5
    # new_stability = 10.0 * 2.5 * 0.6 = 15.0
    assert abs(new_stability - 15.0) < 1e-5
    assert new_difficulty == 5.0

def test_update_stability_on_grade_4_easy():
    # Grade 4 - Easy. Large gain in stability, decrease in difficulty.
    current_stability = 10.0
    current_difficulty = 5.0
    grade = 4
    days_elapsed = 0.0

    new_stability, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # difficulty_modifier = 0.6
    # multiplier = 3.5
    # new_stability = 10.0 * 3.5 * 0.6 = 21.0
    assert abs(new_stability - 21.0) < 1e-5
    # new_difficulty = max(1, 5.0 - 0.3) = 4.7
    assert abs(new_difficulty - 4.7) < 1e-5

def test_update_stability_invalid_grade_defaults_to_3():
    # Invalid grade should default to 3 (Good)
    current_stability = 10.0
    current_difficulty = 5.0
    grade = 99
    days_elapsed = 0.0

    new_stability, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # Same expectation as Grade 3
    assert abs(new_stability - 15.0) < 1e-5
    assert new_difficulty == 5.0

def test_low_retrievability_bonus():
    # If retrievability < 0.8, successful reviews get a stability bonus
    current_stability = 10.0
    current_difficulty = 5.0
    grade = 3
    # exp(-days_elapsed / 10.0) < 0.8 -> -days_elapsed / 10.0 < ln(0.8) -> days_elapsed > -10.0 * ln(0.8) -> days_elapsed > 2.23
    days_elapsed = 5.0

    new_stability, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # Expected:
    # retrievability = exp(-5.0 / 10.0) = exp(-0.5) ~= 0.60653
    # difficulty_modifier = 0.6
    # multiplier = 2.5 * (1 + (1 - 0.60653) * 0.3) = 2.5 * (1 + 0.39347 * 0.3) = 2.5 * 1.11804 = 2.7951
    # new_stability = 10.0 * 2.7951 * 0.6 = 16.7706
    assert new_stability > 15.0  # Should be greater than the baseline without low retrievability bonus
    assert new_difficulty == 5.0

def test_max_difficulty_cap():
    # Grade 1 increases difficulty, capped at 10
    current_stability = 10.0
    current_difficulty = 9.8
    grade = 1
    days_elapsed = 2.0

    _, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # 9.8 + 0.5 = 10.3, max is 10
    assert new_difficulty == 10.0

def test_min_difficulty_cap():
    # Grade 4 decreases difficulty, capped at 1
    current_stability = 10.0
    current_difficulty = 1.2
    grade = 4
    days_elapsed = 2.0

    _, new_difficulty = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # 1.2 - 0.3 = 0.9, min is 1
    assert new_difficulty == 1.0

def test_min_stability_on_failure():
    # Grade 1 stability drops significantly, but has minimum 0.5
    current_stability = 2.0
    current_difficulty = 5.0
    grade = 1
    days_elapsed = 1.0

    new_stability, _ = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # 2.0 * 0.2 = 0.4, but max(0.5, 0.4) = 0.5
    assert new_stability == 0.5

def test_max_stability_cap():
    # Stability is capped at maximum_interval (365)
    current_stability = 300.0
    current_difficulty = 1.0 # Easiest difficulty gives 1.0 modifier
    grade = 4 # 3.5 multiplier
    days_elapsed = 0.0 # High retrievability

    new_stability, _ = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    # Calculated new stability: 300.0 * 3.5 * 1.0 = 1050.0 -> capped at maximum_interval
    assert new_stability == FSRS_PARAMS["maximum_interval"]

def test_low_retrievability_calculation():
    # Additional precision test for low retrievability bonus
    import math
    current_stability = 10.0
    current_difficulty = 5.0
    grade = 3
    days_elapsed = 5.0

    retrievability = math.exp(-5.0 / 10.0)
    expected_difficulty_modifier = 0.6
    expected_multiplier = 2.5 * (1 + (1 - retrievability) * 0.3)
    expected_stability = 10.0 * expected_multiplier * expected_difficulty_modifier

    new_stability, _ = update_stability_on_grade(
        current_stability, current_difficulty, grade, days_elapsed
    )

    assert abs(new_stability - expected_stability) < 1e-5
