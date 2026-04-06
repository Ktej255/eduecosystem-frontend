"""
debug_adaptive.py
==================
Simple diagnostic to see if the session can even start.
"""
import os
import sys
from pathlib import Path

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_ROOT))

from app.db.session import SessionLocal
from app.models.user import User

def debug_setup():
    print("🔌 Attempting DB connection...")
    db = SessionLocal()
    try:
        print("👤 Querying user table...")
        user_count = db.query(User).count()
        print(f"📊 User count: {user_count}")
        
    except Exception as e:
        print(f"❌ DB Access Failed: {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close()

if __name__ == "__main__":
    debug_setup()
