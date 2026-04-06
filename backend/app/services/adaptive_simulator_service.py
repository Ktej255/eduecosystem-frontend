from typing import List, Dict, Any, Optional
from sqlalchemy.orm import Session
from sqlalchemy import text, func
import logging
import random
import uuid
from datetime import datetime, timedelta

from app.models.question_bank import BankQuestion, StudentQuestionAttempt
from app.models.exam import ExamSession
from app.services.background_tasks import process_learning_event_task
from app.services.motivation_service import motivation_service
from app.core.redis_client import RedisClient

# Configure logging
logger = logging.getLogger(__name__)

# In-Memory Cache Fallback (for local development without Redis)
MEMORY_POOL_CACHE: Dict[str, List[int]] = {}

class AdaptiveSimulatorService:
    """
    Standard Engine for Phase-7 Adaptive Exam Simulator.
    Implements CA-style Difficulty Shifting, UPSC-standard Scoring, and Redis Question Caching.
    """

    def __init__(self):
        try:
            self.redis = RedisClient.get_instance()
            self.redis.ping() # Check connection
            self.use_redis = True
        except Exception as e:
            logger.warning(f"[ADAPTIVE] Redis unavailable, using In-Memory Fallback: {e}")
            self.use_redis = False
            self.redis = None
        
        self.cache_prefix = "pool"

    def refresh_cache(self, db: Session):
        """Pre-populates question pools into Redis or Memory."""
        questions = db.query(BankQuestion.id, BankQuestion.subject, BankQuestion.node_id, BankQuestion.level).all()
        
        # Clear Memory Cache
        global MEMORY_POOL_CACHE
        MEMORY_POOL_CACHE = {}
        
        db_count = 0
        for q_id, subject, node_id, level in questions:
            if not subject or not level:
                continue
            
            key = f"{self.cache_prefix}:{subject}:{node_id}:{level}"
            
            # 1. Update Memory (Always available)
            if key not in MEMORY_POOL_CACHE:
                MEMORY_POOL_CACHE[key] = []
            MEMORY_POOL_CACHE[key].append(q_id)
            
            # 2. Update Redis (If available)
            if self.use_redis:
                try:
                    self.redis.sadd(key, q_id)
                except:
                    self.use_redis = False # Disable Redis for this session if fail
            
            db_count += 1
            
        logger.info(f"[ADAPTIVE] Cache refreshed! {db_count} questions pooled.")
        return db_count

    def _fetch_from_cache(self, subject: str, level: int, node_id: str) -> Optional[int]:
        """High-speed selection from Cache (Redis or Memory)."""
        key = f"{self.cache_prefix}:{subject}:{node_id}:{level}"
        
        # 1. Try Redis First
        if self.use_redis:
            try:
                q_id = self.redis.srandmember(key)
                if q_id: return int(q_id)
            except:
                self.use_redis = False
        
        # 2. Fallback to Memory
        pool = MEMORY_POOL_CACHE.get(key, [])
        if pool:
            return random.choice(pool)
            
        return None

    def start_exam_session(
        self, db: Session, student_id: int, subject: str, num_questions: int = 10
    ) -> Dict[str, Any]:
        """Initializes an adaptive exam session."""
        
        # 1. Persist Session to Database for tracking and timer security
        new_session = ExamSession(
            user_id=student_id,
            exam_name=f"Adaptive_{subject}_{datetime.utcnow().strftime('%Y%m%d')}",
            start_time=datetime.utcnow(),
            is_active=True
        )
        db.add(new_session)
        db.commit() 
        db.refresh(new_session)
        
        exam_id = new_session.id
        
        return {
            "exam_id": exam_id,
            "status": "ready",
            "student_id": student_id,
            "subject": subject,
            "total_questions": num_questions,
            "current_ability": 50.0
        }

    def get_next_question(
        self, 
        db: Session, 
        student_id: int, 
        subject: str, 
        exam_id: int,
        current_ability: float = 50.0,
        excluded_ids: List[int] = []
    ) -> Optional[Dict[str, Any]]:
        """
        Selects the most statistically significant next question.
         Logic: Match current_ability to difficulty L1/L2/L3 using Soft Thresholds.
        """
        # 1. Determine target difficulty
        # Soft Thresholds: 0-35 -> L1, 35-65 -> L2, 65-100 -> L3
        if current_ability < 35:
            target_level = 1
        elif current_ability < 65:
            target_level = 2
        else:
            target_level = 3

        # 2. Weak Concept Targeting
        nodes_by_mastery = db.execute(text("""
            SELECT cn.node_id, scm.mastery_score
            FROM concept_nodes cn
            JOIN student_concept_mastery scm ON scm.node_id = cn.id
            WHERE scm.student_id = :sid AND cn.subject_slug = :slug
            ORDER BY scm.mastery_score ASC
        """), {"sid": student_id, "slug": subject}).fetchall()

        target_question = None
        for node_row in nodes_by_mastery:
            node_id_str = node_row[0]
            mastery = node_row[1]
            
            if mastery >= 80.0:
                continue

            # ATTEMPT 1: Redis Cache (Fast)
            cache_q_id = self._fetch_from_cache(subject, target_level, node_id_str)
            if cache_q_id and cache_q_id not in excluded_ids:
                # Basic repetition check
                is_repeated = db.query(StudentQuestionAttempt).filter(
                    StudentQuestionAttempt.student_id == student_id,
                    StudentQuestionAttempt.question_id == cache_q_id,
                    StudentQuestionAttempt.is_correct == True,
                    StudentQuestionAttempt.last_attempt_at >= datetime.utcnow() - timedelta(days=30)
                ).first()
                
                if not is_repeated:
                    target_question = db.query(BankQuestion).get(cache_q_id)
                    if target_question:
                        logger.info(f"[ADAPTIVE] Cache HIT: {node_id_str}")
                        break

            # ATTEMPT 2: DB Fallback
            query = db.query(BankQuestion).filter(
                BankQuestion.subject == subject,
                BankQuestion.level == target_level,
                BankQuestion.node_id == node_id_str
            )
            if excluded_ids:
                query = query.filter(BankQuestion.id.notin_(excluded_ids))
            
            target_question = query.order_by(func.random()).first()
            if target_question:
                logger.info(f"[ADAPTIVE] DB Fallback: {node_id_str}")
                break

        # Fallback to level-based selection
        if not target_question:
            query = db.query(BankQuestion).filter(
                BankQuestion.subject == subject,
                BankQuestion.level == target_level
            )
            if excluded_ids:
                query = query.filter(BankQuestion.id.notin_(excluded_ids))
            target_question = query.order_by(func.random()).first()

        if not target_question:
            return None

        return {
            "id": target_question.id,
            "text": target_question.text,
            "options": target_question.options,
            "level": target_question.level,
            "node_id": str(target_question.node_id) if target_question.node_id else None,
            "points": 2.0
        }

    def process_submission(
        self,
        db: Session,
        student_id: int,
        question_id: int,
        is_correct: bool,
        time_taken: int,
        current_ability: float,
        exam_id: int
    ) -> Dict[str, Any]:
        """Evaluates an answer and updates adaptive state synchronously + learning engine asynchronously."""
        
        question = db.query(BankQuestion).get(question_id)
        if not question:
            return {"error": "Question not found"}

        # 1. Update Ability (Stabilized)
        base_delta = 8.0 if is_correct else -6.0
        confidence = (question.level or 2) / 3.0
        
        session_attempt_count = db.query(func.count(StudentQuestionAttempt.id)).filter(
            StudentQuestionAttempt.exam_id == exam_id
        ).scalar()
        stability_weight = 0.8 if session_attempt_count > 15 else 1.0

        new_ability = current_ability + (base_delta * confidence * stability_weight)
        new_ability = max(0, min(100, new_ability))

        # 2. Record Attempt
        attempt = db.query(StudentQuestionAttempt).filter(
            StudentQuestionAttempt.student_id == student_id,
            StudentQuestionAttempt.question_id == question_id,
            StudentQuestionAttempt.exam_id == exam_id
        ).first()

        if attempt:
            attempt.attempt_count += 1
            attempt.is_correct = is_correct
            attempt.last_attempt_at = datetime.utcnow()
            attempt.time_taken_seconds = time_taken
        else:
            attempt = StudentQuestionAttempt(
                student_id=student_id,
                question_id=question_id,
                is_correct=is_correct,
                time_taken_seconds=time_taken,
                exam_id=exam_id
            )
            db.add(attempt)

        db.commit()

        # 3. Asynchronous Event Handover (Intelligence & Motivation)
        # Stage-11 M2M Architecture: Check all linked nodes
        node_ids = []
        if question.nodes:
            node_ids = [str(n.node_id) for n in question.nodes]
        elif question.node_id:
            node_ids = [str(question.node_id)]

        if node_ids:
            # Stage-11: Pass the entire list to the background task to apply 1/N weighting
            process_learning_event_task.delay(
                student_id, 
                node_ids, 
                is_correct, 
                time_taken
            )
            logger.info(f"[ADAPTIVE] Async learning events ({len(node_ids)} nodes) queued for user {student_id}")

        return {
            "is_correct": is_correct,
            "score_delta": 2.0 if is_correct else -0.66,
            "new_ability": new_ability
        }

    def generate_final_report(self, db: Session, exam_id: int) -> Dict[str, Any]:
        """Generates a detailed diagnostic report."""
        attempts = db.query(StudentQuestionAttempt).filter(StudentQuestionAttempt.exam_id == exam_id).all()
        total_q = len(attempts)
        correct = sum(1 for a in attempts if a.is_correct)
        raw_score = (correct * 2.0) - ((total_q - correct) * 0.66)
        
        concept_stats = {}
        for a in attempts:
            q = db.query(BankQuestion).get(a.question_id)
            if q and q.node_id:
                node_name = db.execute(text("SELECT node_name FROM concept_nodes WHERE node_id = :nid"), 
                                     {"nid": str(q.node_id)}).scalar()
                if node_name not in concept_stats:
                    concept_stats[node_name] = {"total": 0, "correct": 0}
                concept_stats[node_name]["total"] += 1
                if a.is_correct: concept_stats[node_name]["correct"] += 1

        return {
            "total_questions": total_q,
            "correct_answers": correct,
            "final_score": round(raw_score, 2),
            "accuracy": round((correct / total_q * 100), 1) if total_q > 0 else 0,
            "concept_performance": concept_stats,
            "recommendation": "Focus on nodes with accuracy below 70%."
        }

adaptive_simulator_service = AdaptiveSimulatorService()
