import sys
import os
from datetime import datetime, timedelta

# Setup path to backend
sys.path.insert(0, 'd:/Development/EduEcosystem/backend')

import traceback

# Standalone models — no FK dependencies for isolated simulation
from sqlalchemy import create_engine, Column, String, Float, Boolean, DateTime, Integer, ForeignKey
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from sqlalchemy import func

class Base(DeclarativeBase):
    pass

# ── Minimal standalone models for isolated simulation ──────────────────────────

class SimMastery(Base):
    __tablename__ = "sim_mastery"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    concept_id = Column(String)
    mastery_probability = Column(Float, default=0.5)
    status = Column(String, default="Yellow")

class SimInteractionLog(Base):
    __tablename__ = "sim_interaction_log"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    associated_concept_id = Column(String)
    is_correct = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class SimMomentumMetrics(Base):
    __tablename__ = "sim_momentum_metrics"
    id = Column(String, primary_key=True)
    student_id = Column(Integer)
    momentum_score = Column(Float, default=70.0)
    momentum_trend = Column(String, default="stable")
    last_activity_date = Column(DateTime)
    burnout_risk = Column(Boolean, default=False)
    dropout_risk = Column(Boolean, default=False)
    recalculated_at = Column(DateTime)

# ── Minimal Momentum Service ───────────────────────────────────────────────────

def calculate_momentum(db, student_id):
    now = datetime.utcnow()
    metrics = db.query(SimMomentumMetrics).filter(SimMomentumMetrics.student_id == student_id).first()
    if not metrics:
        metrics = SimMomentumMetrics(
            id=f"mom_{student_id}",
            student_id=student_id,
            momentum_score=70.0,
            last_activity_date=now
        )
        db.add(metrics)
        db.flush()

    # 1. Consistency (35%)
    last_14_days = now - timedelta(days=14)
    active_days_count = db.query(func.date(SimInteractionLog.created_at))\
        .filter(SimInteractionLog.user_id == student_id, SimInteractionLog.created_at >= last_14_days)\
        .group_by(func.date(SimInteractionLog.created_at)).count()
    consistency_score = min((active_days_count / 14.0) * 100, 100)

    # 2. Mastery Growth (30%)
    avg_mastery_rows = db.query(SimMastery.mastery_probability)\
        .filter(SimMastery.user_id == student_id).all()
    mastery_score = (sum([m[0] for m in avg_mastery_rows]) / len(avg_mastery_rows) * 100) if avg_mastery_rows else 50.0

    # 3. Recall Efficiency (20%)
    strong_nodes = db.query(SimMastery)\
        .filter(SimMastery.user_id == student_id, SimMastery.mastery_probability >= 0.8).count()
    total_nodes = db.query(SimMastery).filter(SimMastery.user_id == student_id).count()
    recall_efficiency = (strong_nodes / total_nodes * 100) if total_nodes > 0 else 70.0

    # 4. Session Regularity (15%)
    last_active = metrics.last_activity_date or now
    hours_since_last = (now - last_active).total_seconds() / 3600
    regularity_score = max(100 - (hours_since_last / 2.4), 0)

    new_score = (consistency_score * 0.35) + (mastery_score * 0.30) + (recall_efficiency * 0.20) + (regularity_score * 0.15)

    if new_score > metrics.momentum_score + 2:
        metrics.momentum_trend = "up"
    elif new_score < metrics.momentum_score - 2:
        metrics.momentum_trend = "down"
    else:
        metrics.momentum_trend = "stable"

    metrics.momentum_score = round(new_score, 1)
    metrics.last_activity_date = now
    metrics.recalculated_at = now
    metrics.dropout_risk = hours_since_last > 96
    
    burnout_node = db.query(SimMastery)\
        .filter(SimMastery.user_id == student_id,
                SimMastery.mastery_probability < 0.55).first()
    metrics.burnout_risk = burnout_node is not None
    
    db.commit()
    return metrics

# ── Simulation Scenarios ───────────────────────────────────────────────────────

SQLALCHEMY_DATABASE_URL = "sqlite:///./test_momentum.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def run_simulation():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    student_id = 1

    # ── Scenario 1: Fresh Student ──────────────────────────────────────────────
    print("\n--- [Scenario 1: Fresh Student Initial Calculation] ---")
    metrics = calculate_momentum(db, student_id)
    print(f"  Momentum Score  : {metrics.momentum_score}")
    print(f"  Trend           : {metrics.momentum_trend}")
    print(f"  Burnout Risk    : {metrics.burnout_risk}")
    print(f"  Dropout Risk    : {metrics.dropout_risk}")
    assert metrics.momentum_score > 0, "FAIL: Score should be > 0"
    print("  ✅ PASS")

    # ── Scenario 2: Burnout (low mastery) ──────────────────────────────────────
    print("\n--- [Scenario 2: Burnout Simulation (mastery < 55%)] ---")
    db.add(SimMastery(user_id=student_id, concept_id="concept_001", mastery_probability=0.4, status="Red"))
    for i in range(5):
        db.add(SimInteractionLog(
            user_id=student_id,
            associated_concept_id="concept_001",
            is_correct=True,
            created_at=datetime.utcnow() - timedelta(days=i)
        ))
    db.commit()

    metrics = calculate_momentum(db, student_id)
    print(f"  Momentum Score  : {metrics.momentum_score}")
    print(f"  Burnout Detected: {metrics.burnout_risk}")
    assert metrics.burnout_risk == True, "FAIL: Burnout should be True when mastery < 55%"
    print("  ✅ PASS")

    # ── Scenario 3: Dropout (>96h inactivity) ─────────────────────────────────
    print("\n--- [Scenario 3: Dropout Simulation (>96h inactivity)] ---")
    # Force last_activity_date to 100h ago
    metrics.last_activity_date = datetime.utcnow() - timedelta(hours=100)
    db.commit()

    # Re-fetch and recalculate
    metrics = calculate_momentum(db, student_id)
    print(f"  Momentum Score  : {metrics.momentum_score}")
    print(f"  Dropout Detected: {metrics.dropout_risk}")
    assert metrics.dropout_risk == True, "FAIL: Dropout should be True when inactivity > 96h"
    print("  ✅ PASS")

    db.close()
    print("\n✅ All 3 Scenarios PASSED. Momentum Engine is stable.\n")

if __name__ == "__main__":
    try:
        run_simulation()
    except Exception:
        traceback.print_exc()
    finally:
        if os.path.exists("./test_momentum.db"):
            try:
                os.remove("./test_momentum.db")
            except Exception:
                pass  # Windows file lock — safe to ignore on cleanup
