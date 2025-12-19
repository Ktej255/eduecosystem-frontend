import sys
import os

# Add backend directory to path
backend_path = os.path.join(os.getcwd(), "backend")
sys.path.append(backend_path)
print(f"Added to path: {backend_path}")

from sqlalchemy import create_engine
from app.core.config import settings
from app.models.bundle import CourseBundle, BundleEnrollment, bundle_courses
from app.db.session import Base

def init_db():
    print(f"Connecting to: {settings.DATABASE_URL}")
    engine = create_engine(settings.DATABASE_URL)
    
    print("Creating course_bundles table...")
    CourseBundle.__table__.create(engine)
    
    print("Creating course_bundle_items table...")
    bundle_courses.create(engine)
    
    print("Creating bundle_enrollments table...")
    BundleEnrollment.__table__.create(engine)
    
    print("Tables created successfully!")

if __name__ == "__main__":
    init_db()
