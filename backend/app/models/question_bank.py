from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    DateTime,
    Text,
    Boolean,
    Table,
    Float,
    CHAR,
    TypeDecorator,
    ForeignKeyConstraint,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID as PGUUID
import uuid
from app.db.session import Base


class GUID(TypeDecorator):
    """Platform-independent GUID type.
    Uses PostgreSQL's UUID type for PostgreSQL,
    CHAR(36) for others (SQLite, etc.)
    """
    impl = CHAR
    cache_ok = True

    def load_dialect_impl(self, dialect):
        if dialect.name == 'postgresql':
            return dialect.type_descriptor(PGUUID())
        else:
            return dialect.type_descriptor(CHAR(36))

    def process_bind_param(self, value, dialect):
        if value is None:
            return value
        return str(value)

    def process_result_value(self, value, dialect):
        if value is None:
            return value
        if not isinstance(value, uuid.UUID):
            try:
                return uuid.UUID(value)
            except ValueError:
                return value
        return value


# Association table for many-to-many relationship between QuestionBank and Question
question_bank_questions = Table(
    "question_bank_questions",
    Base.metadata,
    Column(
        "question_bank_id", Integer, ForeignKey("question_banks.id"), primary_key=True
    ),
    Column("question_id", Integer, ForeignKey("bank_questions.id"), primary_key=True),
)

# Association table for many-to-many mapping between BankQuestions and Concept Nodes
bank_question_node_association = Table(
    "bank_question_node_association",
    Base.metadata,
    Column("bank_question_id", Integer, ForeignKey("bank_questions.id"), primary_key=True),
    Column("concept_node_id", Integer, ForeignKey("concept_nodes.id"), primary_key=True)
)


class QuestionBank(Base):
    """Reusable pool of questions for random quiz generation"""

    __tablename__ = "question_banks"

    id = Column(Integer, primary_key=True, index=True)
    course_id = Column(Integer, ForeignKey("courses.id"), nullable=False)
    instructor_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    title = Column(String(200), nullable=False, index=True)
    description = Column(Text, nullable=True)

    # Categorization
    category = Column(String(100), nullable=True)  # e.g., "Chapter 1", "Midterm", etc.
    difficulty_level = Column(String(20), default="medium")  # easy, medium, hard

    is_active = Column(Boolean, default=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    course = relationship("Course", backref="question_banks")
    instructor = relationship("User", backref="question_banks")
    questions = relationship(
        "BankQuestion",
        secondary=question_bank_questions,
        back_populates="question_banks",
    )


class BankQuestion(Base):
    """Questions stored in question banks"""

    __tablename__ = "bank_questions"

    id = Column(Integer, primary_key=True, index=True)
    instructor_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    text = Column(Text, nullable=False)
    type = Column(String(50), nullable=False, default="multiple_choice")  # multiple_choice, true_false, etc.
    points = Column(Integer, default=1)
    difficulty = Column(String(20), default="medium")  # easy, medium, hard

    # L1/L2/L3 level system
    # 1 = Easy (basic recall), 2 = Medium (UPSC Prelims), 3 = Hard (UPSC standard)
    level = Column(Integer, nullable=True, index=True)

    # Knowledge Graph Bridge (Legacy single node_id field preserved for migration)
    node_id = Column(GUID(), ForeignKey("concepts.id"), nullable=True, index=True)
    
    # Many-to-Many relationship with Concept Nodes (Stage-11 Architecture)
    nodes = relationship(
        "ConceptNode",
        secondary=bank_question_node_association,
        backref="bank_questions"
    )
    
    quality_score = Column(Float, default=1.0)

    # Question content (JSON)
    options = Column(Text, nullable=True)  # JSON string for multiple choice options
    correct_answer = Column(Text, nullable=True)  # For short answer, true/false
    explanation = Column(Text, nullable=True)

    # Metadata
    subject = Column(String(50), nullable=True, index=True)  # e.g., "Modern History", "Polity"
    topic_tag = Column(String(255), nullable=True, index=True)
    chapter_number = Column(Integer, nullable=True, index=True)
    source_id = Column(String(100), nullable=True, unique=True, index=True)  # Original TS file id for dedup
    tags = Column(Text, nullable=True)  # Comma-separated tags
    usage_count = Column(Integer, default=0)  # How many times used in quizzes

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    instructor = relationship("User", backref="bank_questions")
    question_banks = relationship(
        "QuestionBank", secondary=question_bank_questions, back_populates="questions"
    )


class StudentQuestionAttempt(Base):
    """Tracks per-student question history to prevent repetition and track performance"""

    __tablename__ = "student_question_attempts"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    question_id = Column(Integer, ForeignKey("bank_questions.id"), nullable=False, index=True)

    attempt_count = Column(Integer, default=1)
    last_attempt_at = Column(DateTime(timezone=True), server_default=func.now())
    is_correct = Column(Boolean, nullable=False)
    time_taken_seconds = Column(Integer, default=0)

    # Session tracking
    exam_id = Column(String(100), nullable=True, index=True) # To group attempts by exam session

    # Relationships
    student = relationship("User", backref="question_attempts")
    question = relationship("BankQuestion", backref="student_attempts")


class QuizQuestionPool(Base):
    """Configuration for random question selection from question banks"""

    __tablename__ = "quiz_question_pools"

    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey("quizzes.id"), nullable=False)
    question_bank_id = Column(Integer, ForeignKey("question_banks.id"), nullable=False)

    # Selection criteria
    num_questions = Column(Integer, nullable=False)  # How many questions to select
    difficulty_filter = Column(String(20), nullable=True)  # Filter by difficulty

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    quiz = relationship("Quiz", backref="question_pools")
    question_bank = relationship("QuestionBank", backref="quiz_pools")
