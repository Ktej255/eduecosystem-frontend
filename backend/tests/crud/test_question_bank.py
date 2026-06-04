import pytest
from unittest.mock import MagicMock
from sqlalchemy.orm import Session
from app.crud.question_bank import CRUDQuizGeneration
from app.models.question_bank import BankQuestion
from app.schemas.question_bank import QuizQuestionPoolCreate
from app.models.quiz import Quiz, Question

def test_generate_quiz_from_pools_json_decode_error():
    db = MagicMock(spec=Session)

    # Mock the quiz
    mock_quiz = MagicMock(spec=Quiz)
    mock_quiz.id = 1

    # Setup query chain for getting the quiz
    db.query.return_value.filter.return_value.first.return_value = mock_quiz

    # Mock a bank question with invalid JSON options
    mock_bank_question = MagicMock(spec=BankQuestion)
    mock_bank_question.text = "Test Question"
    mock_bank_question.type = "multiple_choice"
    mock_bank_question.points = 1
    mock_bank_question.explanation = "Test explanation"
    mock_bank_question.options = 'invalid_json_string' # This will trigger JSONDecodeError
    mock_bank_question.correct_answer = "Option A"
    mock_bank_question.usage_count = 0

    # Setup query chain for getting available questions
    db.query.return_value.join.return_value.filter.return_value.all.return_value = [mock_bank_question]

    # Create the generator
    generator = CRUDQuizGeneration()

    # Setup pool
    pool = QuizQuestionPoolCreate(
        quiz_id=1,
        question_bank_id=1,
        num_questions=1,
        difficulty_filter=None
    )

    # Capture the added Question
    added_questions = []
    def db_add_side_effect(obj):
        if isinstance(obj, Question):
            added_questions.append(obj)
    db.add.side_effect = db_add_side_effect

    # Execute
    result = generator.generate_quiz_from_pools(db, quiz_id=1, pools=[pool])

    # Verify execution was successful despite JSON error
    assert result["quiz_id"] == 1
    assert result["total_questions_added"] == 1
    assert result["questions_by_pool"] == {1: 1}
    assert result["message"] == "Successfully added 1 questions to quiz"

    # Verify we added the question despite invalid options
    assert len(added_questions) == 1
    assert len(added_questions[0].options) == 0  # Options should be empty due to parsing error
