import sys
import os

# Add backend directory to path
backend_path = os.path.join(os.getcwd(), "backend")
sys.path.append(backend_path)
print(f"Added to path: {backend_path}")

from sqlalchemy import create_engine
from app.core.config import settings
from app.models.lesson_drip import LessonDripSetting
from app.db.session import Base

def init_db():
    print(f"Connecting to: {settings.DATABASE_URL}")
    engine = create_engine(settings.DATABASE_URL)
    print("Creating lesson_drip_settings table...")
    LessonDripSetting.__table__.create(engine)
    print("Table created successfully!")

if __name__ == "__main__":
    init_db()
