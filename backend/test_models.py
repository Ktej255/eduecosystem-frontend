import sys
sys.path.insert(0, ".")

try:
    print("Loading models...")
    from app.models.user import User
    from app.models.reward import UserReward
    from app.models.group import Group
    from app.models.task import Task
    from app.models.submission import HandwritingSubmission
    from app.models.shadow_mode import ShadowModeSession
    print("✓ All models loaded successfully")
    
    print("\nLoading database session...")
    from app.db.session import Base, engine
    print("✓ Database session loaded")
    
    print("\nCreating tables...")
    Base.metadata.create_all(bind=engine)
    print("✓ Tables created")
    
    print("\nStarting FastAPI app...")
    from main import app
    print("✓ FastAPI app module loaded")
    
    print("\n=== SUCCESS ===")
    print("All components loaded without errors!")
    
except Exception as e:
    print(f"\n✗ ERROR: {e}")
    import traceback
    traceback.print_exc()
