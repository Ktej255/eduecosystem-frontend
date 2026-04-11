import math
import pytest
from app.utils.fsrs import calculate_retrievability

def test_calculate_retrievability_happy_path():
    """Test standard values for stability and days elapsed."""
    # When days_elapsed equals stability, retrievability should be e^-1
    stability = 10.0
    days_elapsed = 10.0
    expected = math.exp(-1)

    result = calculate_retrievability(stability, days_elapsed)
    assert result == pytest.approx(expected)

def test_calculate_retrievability_zero_days():
    """Test when no days have elapsed (should be 100% retrievability)."""
    result = calculate_retrievability(10.0, 0.0)
    assert result == 1.0

def test_calculate_retrievability_negative_stability():
    """Test edge case with negative or zero stability."""
    assert calculate_retrievability(0.0, 5.0) == 0.0
    assert calculate_retrievability(-5.0, 5.0) == 0.0

def test_calculate_retrievability_negative_days():
    """Test edge case with negative days elapsed."""
    assert calculate_retrievability(10.0, -1.0) == 0.0

def test_calculate_retrievability_typical_decay():
    """Test typical decay values."""
    # e.g., stability = 20, days = 5 => exp(-5/20) = exp(-0.25)
    result = calculate_retrievability(20.0, 5.0)
    assert result == pytest.approx(math.exp(-0.25))
