import math
import pytest
from unittest.mock import patch

from app.utils.fsrs import calculate_next_interval, FSRS_PARAMS

class TestCalculateNextInterval:
    def test_stability_less_than_or_equal_to_zero(self):
        """Test that stability <= 0 always returns 1 day."""
        assert calculate_next_interval(0.0) == 1
        assert calculate_next_interval(-5.0) == 1

    @pytest.mark.parametrize(
        "stability, target_retention, expected_interval",
        [
            (10.0, 0.9, int(-10.0 * math.log(0.9))), # ~1 day
            (20.0, 0.9, int(-20.0 * math.log(0.9))), # ~2 days
            (100.0, 0.8, int(-100.0 * math.log(0.8))), # ~22 days
        ]
    )
    def test_standard_calculation(self, stability, target_retention, expected_interval):
        """Test the standard formula calculation."""
        assert calculate_next_interval(stability, target_retention) == max(1, min(expected_interval, FSRS_PARAMS["maximum_interval"]))

    @patch.dict("app.utils.fsrs.FSRS_PARAMS", {"maximum_interval": 365})
    def test_minimum_interval_boundary(self):
        """Test that interval never goes below 1."""
        # A very small positive stability with high target retention
        # e.g., stability=0.1, target=0.9 -> interval = int(-0.1 * -0.105) = int(0.0105) = 0
        # Should be clamped to 1
        assert calculate_next_interval(0.1, 0.9) == 1

    @patch.dict("app.utils.fsrs.FSRS_PARAMS", {"maximum_interval": 100})
    def test_maximum_interval_boundary(self):
        """Test that interval never exceeds maximum_interval."""
        # High stability and lower target retention
        # e.g., stability=1000, target=0.5 -> interval = int(-1000 * -0.693) = 693
        # Should be clamped to 100
        assert calculate_next_interval(1000.0, 0.5) == 100

    @patch.dict("app.utils.fsrs.FSRS_PARAMS", {"maximum_interval": 365})
    def test_default_target_retention(self):
        """Test that default target retention is 0.9."""
        stability = 50.0
        expected = max(1, min(int(-stability * math.log(0.9)), 365))
        assert calculate_next_interval(stability) == expected
