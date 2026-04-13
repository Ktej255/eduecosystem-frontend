import sys
import os
import time
from decimal import Decimal
import asyncio

# Add backend directory to path so imports work
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from app.db.base_class import Base
from app.models.user import User
from app.models.course import Course
from app.models.bundle import CourseBundle, BundleEnrollment
from app.models.enrollment import Enrollment
from app.services.bundle_service import BundleService
from app.services.revenue_service import RevenueShareService

# Mock RevenueShareService.record_sale to avoid complex setup
class MockRevenueShareService:
    @staticmethod
    def record_sale(*args, **kwargs):
        pass

import app.services.bundle_service
app.services.bundle_service.RevenueShareService = MockRevenueShareService

# Setup sqlite db
engine = create_engine("sqlite:///:memory:", echo=False)
Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def setup_data(db, num_courses):
    user = User(email=f"test_{num_courses}@example.com", full_name="Test User", hashed_password="password")
    db.add(user)

    instructor = User(email=f"instructor_{num_courses}@example.com", full_name="Instructor", hashed_password="password")
    db.add(instructor)
    db.flush()

    courses = []
    for i in range(num_courses):
        course = Course(
            title=f"Course {i} for {num_courses}",
            slug=f"course-{num_courses}-{i}",
            description="A course",
            price=10.00,
            instructor_id=instructor.id,
            is_published=True
        )
        db.add(course)
        courses.append(course)
    db.flush()

    bundle = CourseBundle(
        title=f"Mega Bundle {num_courses}",
        slug=f"mega-bundle-{num_courses}",
        description="A mega bundle",
        instructor_id=instructor.id,
        price=num_courses * 8.00,
        original_price=num_courses * 10.00,
        discount_percentage=20.0
    )
    bundle.courses.extend(courses)
    db.add(bundle)
    db.commit()

    return user.id, bundle.id, [c.id for c in courses]

async def benchmark_enrollment(num_courses):
    db = SessionLocal()
    user_id, bundle_id, course_ids = setup_data(db, num_courses)

    # Pre-enroll in some courses to test the "already enrolled" logic
    # Enroll in 20% of the courses
    already_enrolled_count = int(num_courses * 0.2)
    for i in range(already_enrolled_count):
        course_id = course_ids[i]
        enrollment = Enrollment(
            user_id=user_id,
            course_id=course_id,
            payment_id=None
        )
        db.add(enrollment)
    db.commit()

    start_time = time.time()
    await BundleService.enroll_in_bundle(
        db=db,
        user_id=user_id,
        bundle_id=bundle_id,
        payment_id="pay_123",
        price_paid=Decimal(str(num_courses * 8.00))
    )
    end_time = time.time()

    duration = end_time - start_time
    print(f"Time for {num_courses} courses: {duration:.4f} seconds")
    db.close()
    return duration

if __name__ == "__main__":
    asyncio.run(benchmark_enrollment(10))
    asyncio.run(benchmark_enrollment(50))
    asyncio.run(benchmark_enrollment(100))
    asyncio.run(benchmark_enrollment(200))
    asyncio.run(benchmark_enrollment(500))
