from typing import List, Dict, Any, Optional
from sqlalchemy.orm import Session
from sqlalchemy import text, func
import logging
from datetime import datetime, timedelta

from app.models.adaptive_learning import Concept, StudentMastery, LearningMission, StudentLearningProfile
from app.models.lesson import Lesson, LessonType
from app.models.question_bank import BankQuestion

# Configure logging
logger = logging.getLogger(__name__)

class RecommendationService:
    """
    The 'Next-Best-Action' (NBA) Engine for Phase-8 AI Learning Navigator.
    Calculates priority scores and generates daily study missions.
    """

    def get_daily_plan(self, db: Session, student_id: int, subject: str) -> List[Dict[str, Any]]:
        """
        Generates the top 3-5 study missions for the student today.
        Logic: Combine Mastery, Recency, and Exam Importance.
        """
        # 1. Fetch all concepts for this subject
        concepts = db.query(Concept).filter(Concept.subject == subject).all()
        
        # 2. Fetch Student Mastery Profile
        mastery_map = {m.concept_id: m for m in db.query(StudentMastery).filter(StudentMastery.user_id == student_id).all()}
        
        scored_actions = []
        now = datetime.utcnow()

        for concept in concepts:
            mastery = mastery_map.get(concept.id)
            
            # Formula Components
            prob = mastery.mastery_probability if mastery else 0.0
            last_assessed = mastery.last_assessed_at if mastery else (now - timedelta(days=30))
            days_since = (now - last_assessed).days
            
            # Priority Score Calculation
            # Weakness (50%) + Recency (20%) + Importance (30%)
            priority = ((1.0 - prob) * 50.0) + (min(days_since * 2.0, 20.0)) + (concept.exam_importance * 30.0)
            
            # Determine Action Type
            if prob < 0.35:
                task_type = "WATCH"
                # Find a video lesson for this concept
                lesson = db.query(Lesson).filter(Lesson.node_id == concept.id, Lesson.type == LessonType.VIDEO).first()
                if not lesson: task_type = "PRACTICE" # Fallback if no video
            elif prob < 0.75:
                task_type = "PRACTICE"
            else:
                task_type = "RECALL" # High mastery node for review
                
            scored_actions.append({
                "concept_id": concept.id,
                "title": concept.title,
                "priority": priority,
                "task_type": task_type,
                "mastery": prob
            })

        # 3. Sort by priority descending
        scored_actions.sort(key=lambda x: x["priority"], reverse=True)
        top_actions = scored_actions[:5]

        # 4. Persistence: Sync with LearningMission table
        missions = []
        for action in top_actions:
            # Check if mission already exists for today
            existing = db.query(LearningMission).filter(
                LearningMission.user_id == student_id,
                LearningMission.concept_id == action["concept_id"],
                LearningMission.task_type == action["task_type"],
                LearningMission.is_completed == False
            ).first()
            
            if not existing:
                new_mission = LearningMission(
                    user_id=student_id,
                    concept_id=action["concept_id"],
                    task_type=action["task_type"],
                    priority_score=action["priority"],
                    xp_reward=30 if action["task_type"] == "WATCH" else 20
                )
                db.add(new_mission)
                missions.append(new_mission)
            else:
                missions.append(existing)

        db.commit()
        
        return [
            {
                "id": str(m.id),
                "title": action["title"],
                "task_type": m.task_type,
                "xp_reward": m.xp_reward,
                "mastery": action["mastery"]
            }
            for m, action in zip(missions, top_actions)
        ]

    def update_learning_dna(self, db: Session, student_id: int, signal_type: str, value: Any):
        """
        Updates the StudentLearningProfile based on behavioral signals.
        Signal Types: 'video_completion', 'mcq_time', 'mcq_accuracy'
        """
        profile = db.query(StudentLearningProfile).filter(StudentLearningProfile.user_id == student_id).first()
        if not profile:
            profile = StudentLearningProfile(user_id=student_id)
            db.add(profile)
        
        if signal_type == "video_completion":
            # Running average of video completion rate
            profile.avg_video_completion_rate = (profile.avg_video_completion_rate * 0.7) + (value * 0.3)
        elif signal_type == "mcq_accuracy":
            profile.avg_mcq_accuracy = (profile.avg_mcq_accuracy * 0.8) + (value * 0.2)
            
        profile.last_updated = datetime.utcnow()
        db.commit()
        logger.info(f"[NBA] Updated Learning DNA for user {student_id}")

recommendation_service = RecommendationService()
