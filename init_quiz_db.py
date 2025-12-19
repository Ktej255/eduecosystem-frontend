import sys
import os

# Add the parent directory to sys.path to allow imports from app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.session import engine, Base
from app.models.quiz import Quiz, Question, QuestionOption, QuizAttempt, StudentAnswer

def init_db():
    print("Creating Quiz tables...")
    Base.metadata.create_all(bind=engine)
    print("Quiz tables created successfully!")

if __name__ == "__main__":
    init_db()
