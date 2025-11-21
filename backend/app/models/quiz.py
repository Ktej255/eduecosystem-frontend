from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.db.session import Base

class Quiz(Base):
    __tablename__ = "quizzes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    topic = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))
    score = Column(Integer, nullable=True)

    questions = relationship("Question", back_populates="quiz")

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey("quizzes.id"))
    text = Column(String)
    options = Column(String) # JSON string of options
    correct_answer = Column(String)

    quiz = relationship("Quiz", back_populates="questions")
