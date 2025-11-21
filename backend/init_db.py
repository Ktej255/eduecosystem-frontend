"""
Database initialization script - Creates all tables directly without Alembic.
This is a simple alternative to migrations for quick setup.
"""
from app.db.session import engine, Base
from app.models.user import User
from app.models.group import Group
from app.models.task import Task
from app.models.submission import HandwritingSubmission
from app.models.meditation import MeditationSession
from app.models.activity_log import ActivityLog
from app.models.reward import UserReward
from app.models.mood import MoodEntry
from app.models.exam import ExamSession
from app.models.quiz import Quiz
from app.models.study_room import StudyRoom
from app.models.shadow_mode import ShadowModeSession

def init_db():
    """Create all database tables"""
    print("Creating database tables...")
    try:
        # This creates all tables defined in the models
        Base.metadata.create_all(bind=engine)
        print("✓ All tables created successfully!")
        print("\nTables created:")
        print("  - users")
        print("  - groups")
        print("  - tasks")
        print("  - handwriting_submissions")
        print("  - meditation_sessions")
        print("  - activity_logs")
        print("  - user_rewards")
        print("  - mood_entries")
        print("  - exam_sessions")
        print("  - quizzes")
        print("  - study_rooms")
        print("  - shadow_mode_sessions")
    except Exception as e:
        print(f"✗ Error creating tables: {e}")
        print("\nPlease ensure:")
        print("  1. PostgreSQL is running")
        print("  2. Database 'eduecosystem' exists")
        print("  3. Connection settings in app/core/config.py are correct")
        raise

if __name__ == "__main__":
    init_db()
