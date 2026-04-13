import time
import os
import uuid
from sqlalchemy import create_engine, Column, Integer, String, Boolean, ForeignKey, DateTime, Date, Text, DECIMAL, JSON
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class UPSCBatch(Base):
    __tablename__ = "upsc_batches"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)

class UPSCStudentProfile(Base):
    __tablename__ = "upsc_student_profiles"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(Integer, nullable=False)
    batch_id = Column(String, ForeignKey("upsc_batches.id"))

class UPSCPlan(Base):
    __tablename__ = "upsc_plans"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    batch_id = Column(String, ForeignKey("upsc_batches.id"))

class UPSCStudentProgress(Base):
    __tablename__ = "upsc_student_progress"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    student_id = Column(Integer, nullable=False)
    plan_id = Column(String, ForeignKey("upsc_plans.id"))
    is_locked = Column(Boolean, default=True)

engine = create_engine('sqlite:///:memory:')
Base.metadata.create_all(engine)
SessionLocal = sessionmaker(bind=engine)

db = SessionLocal()
batch = UPSCBatch(id=str(uuid.uuid4()), name="Test Batch")
db.add(batch)
db.commit()

plan = UPSCPlan(id=str(uuid.uuid4()), batch_id=batch.id)
db.add(plan)
db.commit()

# Create 1000 students
for i in range(1000):
    student = UPSCStudentProfile(id=str(uuid.uuid4()), user_id=i, batch_id=batch.id)
    db.add(student)
db.commit()

def run_n_plus_one():
    start = time.time()

    students = db.query(UPSCStudentProfile).filter(UPSCStudentProfile.batch_id == plan.batch_id).all()
    for student in students:
        existing = db.query(UPSCStudentProgress).filter(
            UPSCStudentProgress.student_id == student.user_id,
            UPSCStudentProgress.plan_id == plan.id
        ).first()
        if not existing:
            progress = UPSCStudentProgress(student_id=student.user_id, plan_id=plan.id, is_locked=True)
            db.add(progress)
    db.commit()

    return time.time() - start

def run_optimized():
    # clear progress
    db.query(UPSCStudentProgress).delete()
    db.commit()

    start = time.time()

    students = db.query(UPSCStudentProfile).filter(UPSCStudentProfile.batch_id == plan.batch_id).all()
    student_ids = [student.user_id for student in students]

    existing_progress = db.query(UPSCStudentProgress.student_id).filter(
        UPSCStudentProgress.student_id.in_(student_ids),
        UPSCStudentProgress.plan_id == plan.id
    ).all()

    existing_student_ids = {progress.student_id for progress in existing_progress}

    for student in students:
        if student.user_id not in existing_student_ids:
            progress = UPSCStudentProgress(student_id=student.user_id, plan_id=plan.id, is_locked=True)
            db.add(progress)
    db.commit()

    return time.time() - start

# clear progress
db.query(UPSCStudentProgress).delete()
db.commit()
t1 = run_n_plus_one()
print(f"N+1 time: {t1:.4f} seconds")

# run again to test case where it already exists
t1_exists = run_n_plus_one()
print(f"N+1 time (already exists): {t1_exists:.4f} seconds")

db.query(UPSCStudentProgress).delete()
db.commit()

t2 = run_optimized()
print(f"Optimized time: {t2:.4f} seconds")

# run again to test case where it already exists
t2_exists = run_optimized()
print(f"Optimized time (already exists): {t2_exists:.4f} seconds")
