import pytest
import time
from sqlalchemy.orm import Session
from app.services.order_service import OrderService
from app.models.order import Order, OrderStatus, OrderItem
from app.models.bundle import CourseBundle
from app.models.course import Course
from app.models.user import User
from app.models.enrollment import Enrollment

@pytest.fixture
def big_bundle_order(db: Session, normal_user: User):
    # Create 500 courses to exacerbate the N+1 issue
    courses = []
    for i in range(500):
        c = Course(title=f"Course {i}", slug=f"course-{i}", description="Desc", price=10.0, instructor_id=normal_user.id, total_enrollments=0)
        db.add(c)
        courses.append(c)
    db.flush()

    # Create a bundle with these 500 courses
    bundle = CourseBundle(title="Mega Bundle", slug="mega-bundle", description="Wow", price=100.0, instructor_id=normal_user.id)
    bundle.courses = courses
    db.add(bundle)
    db.flush()

    # Add a few existing enrollments for the user
    for i in range(10):
        enrollment = Enrollment(user_id=normal_user.id, course_id=courses[i].id, price_paid=10.0, status="active", progress_percentage=0)
        db.add(enrollment)
    db.flush()

    # Create an order
    order = Order(
        user_id=normal_user.id,
        order_number=Order.generate_order_number(),
        status=OrderStatus.PENDING,
        subtotal=100.0,
        total=100.0,
        currency="USD"
    )
    db.add(order)
    db.flush()

    # Create order item
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

    return order

def test_benchmark_process_order_with_bundle(db: Session, normal_user: User, big_bundle_order: Order):
    # Warm up / clear cache if necessary

    start = time.time()
    OrderService.process_order(db, big_bundle_order.id)
    end = time.time()
    print(f"\n--- BENCHMARK: process_order took {end - start:.4f} seconds ---")
    assert True
