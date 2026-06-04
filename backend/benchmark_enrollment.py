import time
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from app.db.session import Base
from app.models.user import User
from app.models.course import Course
from app.models.bundle import CourseBundle
from app.models.order import Order, OrderItem, OrderStatus
from app.models.enrollment import Enrollment
from app.services.order_service import OrderService

# Use an in-memory SQLite database for benchmarking
engine = create_engine("sqlite:///:memory:")
Base.metadata.create_all(engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def setup_benchmark_data(db):
    user = User(email="benchmark@example.com", is_active=True, hashed_password="pw")
    db.add(user)
    db.commit()
    db.refresh(user)

    bundle = CourseBundle(title="Mega Bundle", slug="mega-bundle", price=100.0, instructor_id=user.id)
    db.add(bundle)

    courses = []
    for i in range(50):
        course = Course(title=f"Course {i}", slug=f"course-{i}", instructor_id=user.id, price=10.0)
        courses.append(course)
        db.add(course)

    db.commit()

    # Add courses to bundle
    for course in courses:
        bundle.courses.append(course)

    db.commit()
    db.refresh(bundle)

    order = Order(
        order_number="ORD-1234", user_id=user.id,
        status=OrderStatus.PENDING,
        subtotal=100.0,
        total=100.0,
    )
    db.add(order)
    db.commit()
    db.refresh(order)

    order_item = OrderItem(
        order_id=order.id,
        bundle_id=bundle.id,
        item_name="Mega Bundle",
        quantity=1,
        unit_price=100.0,
        total=100.0
    )
    db.add(order_item)
    db.commit()

    return order.id

def run_benchmark():
    db = SessionLocal()
    try:
        order_id = setup_benchmark_data(db)

        start_time = time.perf_counter()

        # This is the function we are optimizing
        OrderService.process_order(db, order_id=order_id)

        end_time = time.perf_counter()

        duration = end_time - start_time
        print(f"Time to process order with 50-course bundle: {duration:.4f} seconds")

        # Verify it created 50 enrollments
        enrollments = db.query(Enrollment).count()
        print(f"Created {enrollments} enrollments.")

    finally:
        db.close()

if __name__ == "__main__":
    run_benchmark()
