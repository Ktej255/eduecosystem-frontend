import re

with open("backend/app/services/order_service.py", "r") as f:
    content = f.read()

# Replace the loop in create_order_from_cart
search = """        # Create order items from cart items
        for cart_item in cart_items:
            # Get item details
            if cart_item.course_id:
                course = (
                    db.query(Course).filter(Course.id == cart_item.course_id).first()
                )
                if course:
                    item_name = course.title
                    item_description = course.description
                else:
                    item_name = f"Course ID {cart_item.course_id}"
                    item_description = None
            elif cart_item.bundle_id:
                bundle = (
                    db.query(CourseBundle)
                    .filter(CourseBundle.id == cart_item.bundle_id)
                    .first()
                )
                if bundle:
                    item_name = bundle.name
                    item_description = bundle.description
                else:
                    item_name = f"Bundle ID {cart_item.bundle_id}"
                    item_description = None
            else:
                continue  # Skip invalid items

            # Get coupon code if applied
            coupon_code = None
            if cart_item.coupon_id:
                coupon = (
                    db.query(Coupon).filter(Coupon.id == cart_item.coupon_id).first()
                )
                if coupon:
                    coupon_code = coupon.code

            # Create order item
            order_item = OrderItem(
                order_id=order.id,
                course_id=cart_item.course_id,
                bundle_id=cart_item.bundle_id,
                item_name=item_name,
                item_description=item_description,
                quantity=cart_item.quantity,
                unit_price=cart_item.unit_price,
                discount=cart_item.discount_amount or 0.0,
                total=cart_item.total,
                coupon_code=coupon_code,
            )

            db.add(order_item)"""

replace = """        # Bulk load data to prevent N+1 queries
        course_ids = [item.course_id for item in cart_items if item.course_id]
        bundle_ids = [item.bundle_id for item in cart_items if item.bundle_id]
        coupon_ids = [item.coupon_id for item in cart_items if item.coupon_id]

        courses_dict = {}
        if course_ids:
            courses = db.query(Course).filter(Course.id.in_(course_ids)).all()
            courses_dict = {c.id: c for c in courses}

        bundles_dict = {}
        if bundle_ids:
            bundles = db.query(CourseBundle).filter(CourseBundle.id.in_(bundle_ids)).all()
            bundles_dict = {b.id: b for b in bundles}

        coupons_dict = {}
        if coupon_ids:
            coupons = db.query(Coupon).filter(Coupon.id.in_(coupon_ids)).all()
            coupons_dict = {c.id: c for c in coupons}

        # Create order items from cart items
        for cart_item in cart_items:
            # Get item details
            if cart_item.course_id:
                course = courses_dict.get(cart_item.course_id)
                if course:
                    item_name = course.title
                    item_description = course.description
                else:
                    item_name = f"Course ID {cart_item.course_id}"
                    item_description = None
            elif cart_item.bundle_id:
                bundle = bundles_dict.get(cart_item.bundle_id)
                if bundle:
                    item_name = bundle.name
                    item_description = bundle.description
                else:
                    item_name = f"Bundle ID {cart_item.bundle_id}"
                    item_description = None
            else:
                continue  # Skip invalid items

            # Get coupon code if applied
            coupon_code = None
            if cart_item.coupon_id:
                coupon = coupons_dict.get(cart_item.coupon_id)
                if coupon:
                    coupon_code = coupon.code

            # Create order item
            order_item = OrderItem(
                order_id=order.id,
                course_id=cart_item.course_id,
                bundle_id=cart_item.bundle_id,
                item_name=item_name,
                item_description=item_description,
                quantity=cart_item.quantity,
                unit_price=cart_item.unit_price,
                discount=cart_item.discount_amount or 0.0,
                total=cart_item.total,
                coupon_code=coupon_code,
            )

            db.add(order_item)"""

if search in content:
    content = content.replace(search, replace)
    with open("backend/app/services/order_service.py", "w") as f:
        f.write(content)
    print("Patched successfully")
else:
    print("Search string not found")
