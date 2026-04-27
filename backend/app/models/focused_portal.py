from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Text, ForeignKey
from sqlalchemy.sql import func
from app.db.base_class import Base

class FocusedPortalEnrollment(Base):
    __tablename__ = "focused_portal_enrollments"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    full_name = Column(String(150))
    email = Column(String(150))
    whatsapp = Column(String(20))
    amount_paid = Column(Float)
    payment_id = Column(String(100))
    enrolled_at = Column(DateTime, server_default=func.now())

class FocusedSubjectGate(Base):
    __tablename__ = "focused_subject_gates"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    subject = Column(String(100))
    gate_score = Column(Float, default=0)
    passed = Column(Boolean, default=False)
    is_unlocked = Column(Boolean, default=False)
    created_at = Column(DateTime, server_default=func.now())

class FocusedStudySession(Base):
    __tablename__ = "focused_study_sessions"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    date = Column(String(20))
    subject = Column(String(100))
    cluster_number = Column(Integer)
    cluster_name = Column(String(200))
    pomodoro_number = Column(Integer)
    confidence_pulse = Column(String(10))
    duration_minutes = Column(Integer)

class FocusedTestReport(Base):
    __tablename__ = "focused_test_reports"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    subject = Column(String(100))
    cluster_number = Column(Integer)
    score = Column(Float)
    total_questions = Column(Integer)
    submitted_at = Column(DateTime, server_default=func.now())

class FocusedQuestion(Base):
    __tablename__ = "focused_questions"
    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String(100))
    cluster_number = Column(Integer)
    question_text = Column(Text)
    option_a = Column(Text)
    option_b = Column(Text)
    option_c = Column(Text)
    option_d = Column(Text)
    correct_answer = Column(String(1))
    topic_tag = Column(String(200))
