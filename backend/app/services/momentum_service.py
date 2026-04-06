from datetime import datetime, timedelta
from typing import List, Optional, Union
import math
from sqlalchemy import func
from sqlalchemy.orm import Session
from app.models.adaptive_learning import StudentMomentumMetrics, StudentMastery, InteractionLog
from app.models.user import User

class MomentumService:
    @staticmethod
    def calculate_momentum(db: Session, student_id: Union[str, int]):
        """
        Calculates 0-100 Momentum Score and Risk States.
        Formula Weights:
        - Consistency: 35%
        - Mastery Growth: 30%
        - Recall Efficiency: 20%
        - Session Regularity: 15%
        """
        metrics = db.query(StudentMomentumMetrics).filter(StudentMomentumMetrics.student_id == student_id).first()
        now = datetime.utcnow()
        if not metrics:
            metrics = StudentMomentumMetrics(
                id=f"mom_{student_id}",
                student_id=student_id,
                momentum_score=70.0,
                last_activity_date=now  # default so we don't crash on .total_seconds()
            )
            db.add(metrics)
            db.flush()  # get an id without committing
        
        # 1. Consistency (35%) - Active days in last 14 days
        last_14_days = now - timedelta(days=14)
        active_days_count = db.query(func.date(InteractionLog.created_at))\
            .filter(InteractionLog.user_id == student_id, InteractionLog.created_at >= last_14_days)\
            .group_by(func.date(InteractionLog.created_at)).count()
        # Normalize to 0-100 (if 14/14 days, score=100)
        consistency_score = min((active_days_count / 14.0) * 100, 100)

        # 2. Mastery Growth (30%) - Delta mastery over last 7 days
        # Simplified: Avg mastery level
        avg_mastery = db.query(StudentMastery.mastery_probability)\
            .filter(StudentMastery.user_id == student_id).all()
        # mastery_probability is 0-1, convert to 0-100 logic
        mastery_score = (sum([m[0] for m in avg_mastery]) / len(avg_mastery) * 100) if avg_mastery else 50.0

        # 3. Recall Efficiency (20%) - Succesful reviews (SM-2 principles)
        # Mocking for now from node mastery distribution
        strong_nodes = db.query(StudentMastery)\
            .filter(StudentMastery.user_id == student_id, StudentMastery.mastery_probability >= 0.8).count()
        total_nodes = db.query(StudentMastery).filter(StudentMastery.user_id == student_id).count()
        recall_efficiency = (strong_nodes / total_nodes * 100) if total_nodes > 0 else 70.0

        # 4. Session Regularity (15%) - Time between last activity
        # If last activity was < 24h ago, score is high.
        last_active = metrics.last_activity_date or now
        hours_since_last = (now - last_active).total_seconds() / 3600
        regularity_score = max(100 - (hours_since_last / 2.4), 0) # Fades over 10 days

        # Composite Score
        new_score = (consistency_score * 0.35) + (mastery_score * 0.30) + (recall_efficiency * 0.20) + (regularity_score * 0.15)
        
        # Trend
        if new_score > metrics.momentum_score + 2:
            metrics.momentum_trend = "up"
        elif new_score < metrics.momentum_score - 2:
            metrics.momentum_trend = "down"
        else:
            metrics.momentum_trend = "stable"
            
        metrics.momentum_score = round(new_score, 1)
        metrics.last_activity_date = now
        metrics.recalculated_at = now

        # Risk Detection
        # Dropout Risk: > 96h inactivity
        metrics.dropout_risk = hours_since_last > 96

        # Burnout Risk: Simplified logic check for demonstration
        # Real logic would check InteractionLog for failure density
        burnout_node = db.query(StudentMastery)\
            .filter(StudentMastery.user_id == student_id, 
                    StudentMastery.mastery_probability < 0.55).first()
        metrics.burnout_risk = burnout_node is not None

        db.commit()
        return metrics

momentum_service = MomentumService()
