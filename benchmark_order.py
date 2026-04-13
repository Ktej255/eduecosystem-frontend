import sys
import os
import time

sys.path.append(os.path.join(os.getcwd(), 'backend'))

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.base_class import Base
from app.models.user import User
from app.models.course import Course
from app.models.bundle import CourseBundle
from app.models.order import Order, OrderStatus
from app.models.order import OrderItem
from app.models.enrollment import Enrollment

engine = create_engine('sqlite:///./benchmark.db')
Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

db = SessionLocal()

# Setup data
user = User(email="test@example.com", is_active=True, hashed_password="pw")
db.add(user)
db.commit()

user_id = user.id

courses = []
for i in range(100):
    c = Course(title=f"Course {i}", slug=f"course-{i}", description="Desc", price=10.0, instructor_id=user_id, is_published=True)
    courses.append(c)
    db.add(c)
db.commit()

bundle = CourseBundle(title="Bundle 1", slug="bundle-1", instructor_id=user_id, description="Desc", price=100.0)
bundle.courses.extend(courses[:50])
db.add(bundle)
db.commit()

order = Order(order_number="ORD-123", user_id=user_id, status=OrderStatus.PENDING, total=100.0)
db.add(order)
db.commit()

order_id = order.id

for i in range(50):
    item = OrderItem(order_id=order_id, course_id=courses[i].id, item_name="Item", unit_price=10.0, total=10.0)
    db.add(item)

item = OrderItem(order_id=order_id, bundle_id=bundle.id, item_name="Item 2", unit_price=100.0, total=100.0)
db.add(item)
db.commit()

db.close()

# Benchmark
from app.services.order_service import OrderService

db = SessionLocal()

# warmup
start = time.time()
try:
    OrderService.process_order(db, order_id)
except Exception as e:
    pass

import cProfile
import pstats

db = SessionLocal()
order2 = Order(order_number="ORD-124", user_id=user_id, status=OrderStatus.PENDING, total=100.0)
db.add(order2)
db.commit()
order_id2 = order2.id

# We need to get courses back from DB for IDs
courses2 = db.query(Course).all()

for i in range(50, 100):
    item = OrderItem(order_id=order_id2, course_id=courses2[i].id, item_name="Item", unit_price=10.0, total=10.0)
    db.add(item)
db.commit()

profiler = cProfile.Profile()
profiler.enable()

start = time.time()
try:
    OrderService.process_order(db, order_id2)
except Exception as e:
    import traceback
    traceback.print_exc()
end = time.time()

profiler.disable()
stats = pstats.Stats(profiler).sort_stats('cumtime')
stats.print_stats(20)

print(f"Time taken: {end - start:.4f} seconds")

db.close()
