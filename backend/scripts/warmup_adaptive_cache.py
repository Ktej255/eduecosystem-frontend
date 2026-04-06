import os
import sys
from sqlalchemy.orm import Session

# Add the parent directory to sys.path to allow importing from 'app'
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.db.session import SessionLocal
from app.services.adaptive_simulator_service import adaptive_simulator_service

def warmup():
    print("🚀 Initializing Adaptive Question Pool Cache...")
    db = SessionLocal()
    try:
        count = adaptive_simulator_service.refresh_cache(db)
        print(f"✅ Success! Cached {count} questions in Redis.")
    except Exception as e:
        print(f"❌ Error warming up cache: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    warmup()
