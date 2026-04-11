import pytest
import sys
sys.argv = ["pytest", "tests/api/test_question_banks.py::test_generate_quiz_from_banks", "-q", "-s"]
pytest.main()
