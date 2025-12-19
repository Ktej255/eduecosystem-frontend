# eCommerce & Analytics Testing Guide

## 🎯 Quick Start

This guide provides step-by-step instructions for testing all newly integrated eCommerce and Analytics features.

---

## 📋 Pre-Testing Checklist

### Backend
- [x] Database migrations applied successfully
- [x] Backend server running on `http://localhost:8000`
- [x] All API endpoints registered
- [ ] Environment variables configured (`.env`)

### Frontend
- [ ] Frontend dev server running (`npm run dev`)
- [ ] API base URL configured
- [ ] Toast notifications working

---

## 🛒 1. Shopping Cart Testing

### Test Scenario 1: Add to Cart (Authenticated User)

**Steps:**
1. **Login** to your account
2. **Navigate** to Course Marketplace (`/lms/marketplace`)
3. **Find a course** card
4. **Click** the shopping cart icon (🛒 button)
5. **Verify** toast notification: "Added to cart successfully"

**Expected Result:**
- ✅ Toast shows success message
- ✅ No navigation occurs (stays on page)
- ✅ Course added to cart in database

**API Call:**
```bash
POST /api/v1/cart/items
Body: {
  "course_id": 1,
  "quantity": 1
}
```

### Test Scenario 2: View Cart

**Steps:**
1. **Click** "My Cart" in the sidebar
2. **Verify** cart page loads (`/student/cart`)
3. **Check** all cart items display correctly

**Expected Result:**
- ✅ Cart items show course thumbnails
- ✅ Prices display correctly
- ✅ Quantity controls work
- ✅ Total calculation is accurate

**API Call:**
```bash
GET /api/v1/cart
```

### Test Scenario 3: Apply Coupon

**Steps:**
1. **In cart**, enter coupon code (e.g., "SAVE10")
2. **Click** "Apply" button
3. **Verify** discount applies

**Expected Result:**
- ✅ Discount amount shows in green
- ✅ Total updates with discount
- ✅ Success message displays

**API Call:**
```bash
POST /api/v1/cart/apply-coupon
Body: {
  "coupon_code": "SAVE10"
}
```

### Test Scenario 4: Update Quantity

**Steps:**
1. **In cart**, click + or - buttons
2. **Verify** quantity updates
3. **Check** total recalculates

**Expected Result:**
- ✅ Quantity changes immediately
- ✅ Subtotal updates
- ✅ Total recalculates correctly

**API Call:**
```bash
PATCH /api/v1/cart/items/{item_id}
Body: {
  "quantity": 2
}
```

### Test Scenario 5: Remove Item

**Steps:**
1. **Click** "Remove" button on cart item
2. **Verify** item removed

**Expected Result:**
- ✅ Item disappears from cart
- ✅ Total updates
- ✅ Empty cart message if last item

**API Call:**
```bash
DELETE /api/v1/cart/items/{item_id}
```

---

## 💳 2. Checkout Flow Testing

### Test Scenario 6: Checkout Process

**Steps:**
1. **In cart**, click "Proceed to Checkout"
2. **Navigate** to checkout page (`/student/checkout`)
3. **Fill in** billing information
4. **Select** payment method
5. **Complete** purchase

**Expected Result:**
- ✅ Checkout form validates inputs
- ✅ Payment options display
- ✅ Order created successfully
- ✅ Redirect to confirmation page

**API Call:**
```bash
POST /api/v1/orders/create
Body: {
  "billing_name": "John Doe",
  "billing_email": "john@example.com",
  "payment_method": "stripe"
}
```

---

## 👤 3. Guest Checkout Testing

### Test Scenario 7: Guest Cart Creation

**Steps:**
1. **Open** browser in incognito/private mode (not logged in)
2. **Navigate** to courses
3. **Click** shopping cart icon
4. **Verify** guest session created

**Expected Result:**
- ✅ Guest cart created
- ✅ Cookie set with session ID
- ✅ Items added to guest cart

**API Call:**
```bash
POST /api/v1/guest/cart/create
```

### Test Scenario 8: Guest Checkout

**Steps:**
1. **As guest**, add items to cart
2. **Navigate** to checkout
3. **Enter** email and billing details
4. **Complete** checkout

**Expected Result:**
- ✅ Order created with guest email
- ✅ Tracking link sent to email
- ✅ Order number generated

**API Call:**
```bash
POST /api/v1/guest/checkout
Body: {
  "email": "guest@example.com",
  "billing_name": "Jane Guest"
}
```

### Test Scenario 9: Guest Order Tracking

**Steps:**
1. **Navigate** to order tracking page
2. **Enter** email and order number
3. **View** order details

**Expected Result:**
- ✅ Order found by email + order number
- ✅ Order details display
- ✅ Status shown correctly

**API Call:**
```bash
POST /api/v1/guest/track-order
Body: {
  "email": "guest@example.com",
  "order_number": "ORD-12345"
}
```

### Test Scenario 10: Convert Guest to User

**Steps:**
1. **As guest**, complete some purchases
2. **Register** account with same email
3. **Login** to new account
4. **Verify** past orders appear

**Expected Result:**
- ✅ Guest orders converted to user account
- ✅ All past orders visible
- ✅ Order history complete

**API Call:**
```bash
POST /api/v1/guest/convert-to-user
Body: {
  "guest_email": "guest@example.com"
}
```

---

## 📦 4. Order Management Testing

### Test Scenario 11: View Order History

**Steps:**
1. **Navigate** to `/student/orders`
2. **View** list of past orders
3. **Click** on an order to see details

**Expected Result:**
- ✅ All orders display with status
- ✅ Filters work (status, date)
- ✅ Order details show items purchased

**API Call:**
```bash
GET /api/v1/orders/my-orders
```

### Test Scenario 12: Download Invoice

**Steps:**
1. **In order history**, click "Download Invoice"
2. **Verify** PDF downloads

**Expected Result:**
- ✅ Invoice PDF generated
- ✅ File downloads with correct name
- ✅ PDF contains order details

**API Call:**
```bash
GET /api/v1/invoices/{invoice_id}/pdf
```

### Test Scenario 13: Cancel Order

**Steps:**
1. **Find** pending order
2. **Click** "Cancel Order"
3. **Confirm** cancellation

**Expected Result:**
- ✅ Order status changes to "cancelled"
- ✅ Refund processed (if applicable)
- ✅ Confirmation message shows

**API Call:**
```bash
POST /api/v1/orders/{order_id}/cancel
```

---

## 📊 5. Revenue Analytics Testing (Instructors)

### Test Scenario 14: View Revenue Forecast

**Steps:**
1. **Login as instructor**
2. **Navigate** to `/instructor/analytics/revenue`
3. **View** 30-day forecast

**Expected Result:**
- ✅ Forecast chart displays
- ✅ Predicted revenue shows
- ✅ Confidence interval visible
- ✅ Trend indicator (up/down/stable)

**API Call:**
```bash
GET /api/v1/analytics/revenue/forecast?days=30
```

### Test Scenario 15: Adjust Forecast Period

**Steps:**
1. **Select** "60 days" from dropdown
2. **Verify** chart updates

**Expected Result:**
- ✅ Chart refreshes with new data
- ✅ 60-day predictions shown
- ✅ Metrics recalculate

### Test Scenario 16: Revenue Breakdown

**Steps:**
1. **Scroll** to breakdown section
2. **View** pie chart (revenue by course)
3. **View** bar chart (revenue by day)

**Expected Result:**
- ✅ Pie chart shows course distribution
- ✅ Bar chart shows daily patterns
- ✅ Percentages calculated correctly

**API Call:**
```bash
GET /api/v1/analytics/revenue/breakdown?days=30
```

### Test Scenario 17: Period Comparison

**Steps:**
1. **View** comparison section
2. **Switch** between MoM, YoY, Custom
3. **Verify** calculations

**Expected Result:**
- ✅ Current vs previous period shown
- ✅ Change percentage accurate
- ✅ Color coding (green=up, red=down)

**API Call:**
```bash
GET /api/v1/analytics/revenue/comparison?type=month_over_month
```

### Test Scenario 18: Customer LTV Analysis

**Steps:**
1. **View** LTV section
2. **Check** top customers table
3. **Verify** metrics

**Expected Result:**
- ✅ Average LTV displayed
- ✅ Total customers count
- ✅ Repeat customer rate
- ✅ Top 10 customers listed

**API Call:**
```bash
GET /api/v1/analytics/revenue/ltv
```

### Test Scenario 19: Export Revenue CSV

**Steps:**
1. **Click** "Export Revenue Data" button
2. **Verify** CSV downloads

**Expected Result:**
- ✅ CSV file downloads
- ✅ Filename includes timestamp
- ✅ Data formatted correctly

**API Call:**
```bash
GET /api/v1/analytics/export/revenue/csv
```

### Test Scenario 20: Export Forecast CSV

**Steps:**
1. **Click** "Export Forecast" button
2. **Verify** CSV downloads with predictions

**Expected Result:**
- ✅ CSV contains forecast data
- ✅ Includes confidence intervals
- ✅ Future dates predicted

**API Call:**
```bash
GET /api/v1/analytics/export/forecast/csv
```

---

## 🔧 6. API Testing (Using Postman/curl)

### Setup Authentication

```bash
# Login and get token
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "instructor@example.com", "password": "password123"}'

# Use token in subsequent requests
TOKEN="your_access_token_here"
```

### Test All Endpoints

```bash
# 1. Cart Endpoints
curl -X GET http://localhost:8000/api/v1/cart \
  -H "Authorization: Bearer $TOKEN"

curl -X POST http://localhost:8000/api/v1/cart/items \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"course_id": 1, "quantity": 1}'

# 2. Order Endpoints
curl -X GET http://localhost:8000/api/v1/orders/my-orders \
  -H "Authorization: Bearer $TOKEN"

# 3. Analytics Endpoints
curl -X GET "http://localhost:8000/api/v1/analytics/revenue/forecast?days=30" \
  -H "Authorization: Bearer $TOKEN"

curl -X GET http://localhost:8000/api/v1/analytics/revenue/breakdown \
  -H "Authorization: Bearer $TOKEN"

# 4. Guest Endpoints
curl -X POST http://localhost:8000/api/v1/guest/cart/create

curl -X POST http://localhost:8000/api/v1/guest/checkout \
  -H "Content-Type: application/json" \
  -d '{"email": "guest@test.com", "billing_name": "Guest User"}'
```

---

## 🐛 7. Error Handling Testing

### Test Invalid Inputs

**Test Case 1: Add Invalid Course**
```bash
POST /api/v1/cart/items
Body: {"course_id": 99999, "quantity": 1}
Expected: 404 Not Found
```

**Test Case 2: Apply Invalid Coupon**
```bash
POST /api/v1/cart/apply-coupon
Body: {"coupon_code": "INVALID"}
Expected: 400 Bad Request
```

**Test Case 3: Checkout Empty Cart**
```bash
POST /api/v1/orders/create
Expected: 400 "Cart is empty"
```

**Test Case 4: Track Non-existent Order**
```bash
POST /api/v1/guest/track-order
Body: {"email": "test@test.com", "order_number": "INVALID"}
Expected: 404 Not Found
```

---

## ✅ Testing Checklist

### Shopping Cart
- [ ] Add item to cart (authenticated)
- [ ] Add item to cart (guest)
- [ ] View cart
- [ ] Update quantity
- [ ] Remove item
- [ ] Apply coupon
- [ ] Clear cart

### Checkout
- [ ] Checkout as user
- [ ] Guest checkout
- [ ] Payment method selection
- [ ] Order confirmation

### Orders
- [ ] View order history
- [ ] View order details
- [ ] Download invoice
- [ ] Cancel order
- [ ] Track guest order

### Analytics
- [ ] View revenue forecast
- [ ] Adjust forecast period
- [ ] View revenue breakdown
- [ ] Compare periods
- [ ] View LTV metrics
- [ ] Export revenue CSV
- [ ] Export forecast CSV

### Guest Features
- [ ] Create guest cart
- [ ] Guest checkout
- [ ] Track order by email
- [ ] Convert to user account
- [ ] Merge cart after login

---

## 🎬 Demo Data Setup

### Create Test Data

```sql
-- Create test coupon
INSERT INTO coupons (code, discount_type, discount_value, is_active)
VALUES ('SAVE10', 'percentage', 10, true);

-- Create test courses (if needed)
INSERT INTO courses (title, description, price, currency, is_published)
VALUES 
  ('Python Basics', 'Learn Python', 49.99, 'USD', true),
  ('Web Development', 'Build websites', 99.99, 'USD', true);
```

### Create Test Users

```python
# In Django shell or equivalent
from app.models import User
from app.core.security import get_password_hash

# Create instructor
instructor = User(
    email="instructor@test.com",
    hashed_password=get_password_hash("password123"),
    role="instructor",
    is_active=True
)
db.add(instructor)

# Create student
student = User(
    email="student@test.com",
    hashed_password=get_password_hash("password123"),
    role="student",
    is_active=True
)
db.add(student)
db.commit()
```

---

## 📝 Test Results Template

| Test # | Feature | Status | Notes |
|--------|---------|--------|-------|
| 1 | Add to Cart | ⬜ | |
| 2 | View Cart | ⬜ | |
| 3 | Apply Coupon | ⬜ | |
| 4 | Update Quantity | ⬜ | |
| 5 | Remove Item | ⬜ | |
| 6 | Checkout | ⬜ | |
| 7 | Guest Cart | ⬜ | |
| 8 | Guest Checkout | ⬜ | |
| 9 | Order Tracking | ⬜ | |
| 10 | Convert Guest | ⬜ | |
| 11 | Order History | ⬜ | |
| 12 | Download Invoice | ⬜ | |
| 13 | Cancel Order | ⬜ | |
| 14 | Revenue Forecast | ⬜ | |
| 15 | Forecast Period | ⬜ | |
| 16 | Revenue Breakdown | ⬜ | |
| 17 | Period Comparison | ⬜ | |
| 18 | LTV Analysis | ⬜ | |
| 19 | Export Revenue CSV | ⬜ | |
| 20 | Export Forecast CSV | ⬜ | |

**Legend:** ⬜ Not Tested | ✅ Pass | ❌ Fail

---

## 🚀 Next Steps

After testing:
1. **Document** any issues found
2. **Create** bug reports for failures
3. **Verify** fixes with regression testing
4. **Prepare** for production deployment

## 📞 Support

- API Documentation: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`
- GitHub Issues: `[your-repo]/issues`
