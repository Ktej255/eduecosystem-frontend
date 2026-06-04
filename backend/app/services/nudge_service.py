from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.models.user import User
from app.models.nudge import StudentNudgeWorkflow, NudgeHistory
from app.models.activity_log import ActivityLog
from app.models.batch1 import Batch1TestResult

class NudgeService:
    @staticmethod
    def evaluate_rules(db: Session):
        """
        Evaluate all active nudge workflows against all students.
        This could be run as a daily cron/background task.
        """
        active_workflows = db.query(StudentNudgeWorkflow).filter(StudentNudgeWorkflow.is_active == True).all()
        
        for workflow in active_workflows:
            NudgeService.process_workflow(db, workflow)

    @staticmethod
    def process_workflow(db: Session, workflow: StudentNudgeWorkflow):
        # 1. Target Students based on trigger
        target_users = []
        now = datetime.utcnow()
        
        if workflow.trigger_type == "INACTIVITY":
            days = workflow.trigger_config.get("days", 3)
            cutoff = now - timedelta(days=days)
            # Find users whose last_login is older than cutoff
            target_users = db.query(User).filter(
                User.role == "student",
                User.last_login < cutoff,
                User.is_active == True
            ).all()
            
        elif workflow.trigger_type == "STREAK_DANGER":
            # Streak danger: logged in 24-48 hours ago, but not in last 24 hours
            # and streak > 0
            yesterday = now - timedelta(hours=24)
            day_before = now - timedelta(hours=48)
            target_users = db.query(User).filter(
                User.role == "student",
                User.streak_days > 0,
                User.last_login < yesterday,
                User.last_login > day_before
            ).all()

        # 2. Filter out users already nudged by this workflow in the last 24 hours
        if not target_users:
            return

        user_ids = [user.id for user in target_users]

        # Bulk fetch all nudge histories for these users in the last 24 hours
        recent_nudges = db.query(NudgeHistory.user_id).filter(
            NudgeHistory.workflow_id == workflow.id,
            NudgeHistory.user_id.in_(user_ids),
            NudgeHistory.sent_at > (now - timedelta(hours=24))
        ).all()

        nudged_user_ids = {record[0] for record in recent_nudges}

        for user in target_users:
            if user.id not in nudged_user_ids:
                NudgeService.execute_nudge(db, workflow, user)

    @staticmethod
    def execute_nudge(db: Session, workflow: StudentNudgeWorkflow, user: User):
        """Send the actual nudge."""
        message = workflow.message_template.replace("{{name}}", user.full_name or "Student")
        
        status = "PENDING"
        if workflow.action_type == "PUSH":
            # Integration with Phase 5 Push Service would go here
            # For now, we simulation by logging
            status = "PUSH_SENT"
        
        if workflow.reward_amount > 0:
            user.coins += workflow.reward_amount
            status += "_WITH_REWARD"

        # Record History
        history = NudgeHistory(
            workflow_id=workflow.id,
            user_id=user.id,
            action_taken=status
        )
        db.add(history)
        db.commit()

nudge_service = NudgeService()
