import asyncio
import time
import uuid
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String, Date, Float, Uuid
from sqlalchemy.orm import declarative_base

# Baseline test
import sys
sys.path.append('.')
from sqlalchemy import func, and_
from typing import Dict, Optional

Base = declarative_base()

class DrillSession(Base):
    __tablename__ = 'drill_sessions'
    id = Column(Integer, primary_key=True)
    student_id = Column(String, nullable=False)
    overall_score = Column(Float)
    improvement = Column(Float)
    date = Column(Date)

# Create a sqlite engine
engine = create_engine('sqlite:///:memory:', echo=False, connect_args={'check_same_thread': False})
Base.metadata.create_all(engine)
SessionLocal = sessionmaker(bind=engine)

# Populate with dummy data
db = SessionLocal()
from datetime import date
student_id = "test-student"
for i in range(1000):
    ds = DrillSession(student_id=student_id, overall_score=80.0, improvement=5.0, date=date.today())
    db.add(ds)
db.commit()


class AdminAnalyticsServiceOrig:
    async def get_student_performance(
        self,
        db,
        student_id,
        start_date = None,
        end_date = None
    ) -> Dict:
        # Original logic blocking
        query = db.query(
            func.count(DrillSession.id).label('total_drills'),
            func.avg(DrillSession.overall_score).label('avg_score'),
            func.avg(DrillSession.improvement).label('avg_improvement')
        ).filter(DrillSession.student_id == student_id)

        if start_date: query = query.filter(DrillSession.date >= start_date)
        if end_date: query = query.filter(DrillSession.date <= end_date)

        stats = query.first()
        return {
            "total_drills": int(stats.total_drills or 0),
            "average_score": round(float(stats.avg_score or 0), 1),
            "average_improvement": round(float(stats.avg_improvement or 0), 1)
        }

from starlette.concurrency import run_in_threadpool

class AdminAnalyticsServiceOpt:
    async def get_student_performance(
        self,
        db,
        student_id,
        start_date = None,
        end_date = None
    ) -> Dict:
        def fetch():
            # For testing with SQLite in multi-thread, we'll recreate the session, or just simulate
            # the blocking nature without causing SQlite multi-thread issues.
            pass

        # Instead of doing actual sqlite in run_in_threadpool which is problematic,
        # let's just do time.sleep to simulate DB latency.
        def fetch_simulate():
            time.sleep(0.01) # Simulate a 10ms DB query
            return type('obj', (object,), {'total_drills': 100, 'avg_score': 80.0, 'avg_improvement': 5.0})

        stats = await run_in_threadpool(fetch_simulate)
        return {
            "total_drills": int(stats.total_drills or 0),
            "average_score": round(float(stats.avg_score or 0), 1),
            "average_improvement": round(float(stats.avg_improvement or 0), 1)
        }

class AdminAnalyticsServiceOrigSim:
    async def get_student_performance(
        self,
        db,
        student_id,
        start_date = None,
        end_date = None
    ) -> Dict:
        # Simulate blocking DB query
        time.sleep(0.01) # Simulate a 10ms DB query
        stats = type('obj', (object,), {'total_drills': 100, 'avg_score': 80.0, 'avg_improvement': 5.0})

        return {
            "total_drills": int(stats.total_drills or 0),
            "average_score": round(float(stats.avg_score or 0), 1),
            "average_improvement": round(float(stats.avg_improvement or 0), 1)
        }

async def main():
    service_orig = AdminAnalyticsServiceOrigSim()
    service_opt = AdminAnalyticsServiceOpt()

    # Let's measure event loop blocking directly.
    print("Event loop blocking test:")
    print("We have a background task running that yields every 0.01s.")
    print("If the DB query blocks the event loop, the background task gets less ticks.")

    async def background_ticker():
        ticks = 0
        end_time = time.time() + 1.0 # run for 1 second
        while time.time() < end_time:
            await asyncio.sleep(0.01)
            ticks += 1
        return ticks

    # Test Original
    start = time.time()
    ticker_task = asyncio.create_task(background_ticker())
    tasks = [service_orig.get_student_performance(db, student_id) for _ in range(50)]
    await asyncio.gather(*tasks)
    ticks_orig = await ticker_task
    print(f"Original (Blocking): Event loop ticks in 1s while querying = {ticks_orig}")

    # Test Optimized
    start = time.time()
    ticker_task = asyncio.create_task(background_ticker())
    tasks = [service_opt.get_student_performance(db, student_id) for _ in range(50)]
    await asyncio.gather(*tasks)
    ticks_opt = await ticker_task
    print(f"Optimized (run_in_threadpool): Event loop ticks in 1s while querying = {ticks_opt}")

asyncio.run(main())
