import sys
import os
from sqlalchemy import text

# Add the backend directory to sys.path
sys.path.append(os.getcwd())

from app.db.session import engine, Base

def apply_migrations():
    print("🚀 Starting Phase 8 Structural Migrations...")
    
    # 1. Create new tables first (LearningMission, StudentLearningProfile)
    # create_all will only create the ones that don't exist
    Base.metadata.create_all(bind=engine)
    print("✅ New tables (Missions, Profiles) created.")
    
    # 2. Add columns to existing tables using ALTER TABLE
    with engine.connect() as conn:
        print("🛠️  Adding 'exam_importance' to 'concepts' table...")
        try:
            conn.execute(text("ALTER TABLE concepts ADD COLUMN exam_importance FLOAT DEFAULT 0.5"))
            conn.commit()
            print("✅ 'exam_importance' added.")
        except Exception as e:
            if "duplicate column name" in str(e).lower() or "already exists" in str(e).lower():
                print("⚠️ 'exam_importance' already exists.")
            else:
                print(f"❌ Error adding 'exam_importance': {e}")
        
        print("🛠️  Adding 'node_id' to 'lessons' table...")
        try:
            conn.execute(text("ALTER TABLE lessons ADD COLUMN node_id CHAR(36)"))
            conn.commit()
            print("✅ 'node_id' added.")
        except Exception as e:
            if "duplicate column name" in str(e).lower() or "already exists" in str(e).lower():
                print("⚠️ 'node_id' already exists.")
            else:
                print(f"❌ Error adding 'node_id': {e}")

    print("\n🏁 Phase 8 Migration Complete.")

if __name__ == "__main__":
    apply_migrations()
