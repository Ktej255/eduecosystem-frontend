import sys
import time
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload
from app.db.base import Base
from app.models.order import Order, OrderItem, OrderStatus
from app.models.bundle import CourseBundle
from app.models.course import Course
from app.models.user import User
from app.services.order_service import OrderService

# Use a purely in-memory SQLite database for benchmark
engine = create_engine('sqlite:///:memory:', connect_args={'check_same_thread': False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def setup_data():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        # Create user
        user = User(id=1, email="test@example.com", hashed_password="test", is_active=True)
        db.add(user)
        db.commit()

        # create courses and bundles
        courses = []
        for i in range(1, 11):
            course = Course(id=i, title=f"Test Course {i}", slug=f"test-course-{i}", description=f"Test Course {i}", price=10.0, is_published=True, instructor_id=1)
            courses.append(course)
        db.add_all(courses)

        bundles = []
        for i in range(1, 11):
            bundle = CourseBundle(id=i, title=f"Test Bundle {i}", slug=f"test-bundle-{i}", description=f"Test Bundle {i}", price=100.0, is_published=True, instructor_id=1)
            bundle.courses.extend(courses)
            bundles.append(bundle)
        db.add_all(bundles)
        db.commit()

        # create an order with N items belonging to the bundles
        order = Order(
            order_number="PERF-TEST",
            user_id=1,
            guest_email="test@example.com",
            cart_id=1,
            status=OrderStatus.PENDING,
            subtotal=1000.0,
            discount=0.0,
            tax=0.0,
            total=1000.0,
            currency="INR",
            billing_name="Perf",
            billing_email="perf@example.com"
        )
        db.add(order)
        db.commit()

        # Add 500 bundle items to the order to exacerbate the N+1 problem
        for i in range(500):
            item = OrderItem(
                order_id=order.id,
                bundle_id=(i % 10) + 1,
                item_name=f"Bundle Item {i}",
                quantity=1,
                unit_price=10.0,
                discount=0.0,
                total=10.0
            )
            db.add(item)
        db.commit()
        return order.id

    finally:
        db.close()

def run_benchmark(order_id):
    db = SessionLocal()
    try:
        start_time = time.time()
        OrderService.process_order(db, order_id)
        end_time = time.time()
        return end_time - start_time
    finally:
        db.close()

if __name__ == "__main__":
    try:
        order_id = setup_data()
        duration = run_benchmark(order_id)
        print(f"Benchmark duration (N=500 bundle items, 10 bundles): {duration:.4f} seconds")
    except Exception as e:
        print(f"Error: {e}")
