## DEPLOY REQUEST
Date: 2026-03-29
Project: Pizza Blitz

### Changed Files:
- backend/app/api/api_v1/api.py (Router registration)
- backend/app/api/api_v1/endpoints/stats.py (Weekly summary & Breakeven)
- backend/app/api/api_v1/endpoints/orders.py (POS & Invoicing)
- backend/app/api/api_v1/endpoints/shifts.py [NEW]
- backend/app/api/api_v1/endpoints/vendors.py [NEW]
- frontend/src/app/(dashboard)/shifts/page.tsx [NEW]
- frontend/src/app/(dashboard)/orders/page.tsx [NEW]
- frontend/src/app/(dashboard)/breakeven/page.tsx [NEW]
- frontend/src/app/(dashboard)/invoices/page.tsx [NEW]
- frontend/src/app/(dashboard)/vendors/page.tsx (Updated with Price Tracker)
- frontend/src/app/(dashboard)/ceo/page.tsx (Updated with Weekly Report)
- frontend/src/components/layout/Sidebar.tsx (Navigation updated)

### New Endpoints Added:
- POST /api/v1/restaurant/shifts/ (Log Shift)
- GET /api/v1/restaurant/shifts/performance (Staff Metrics)
- POST /api/v1/restaurant/orders/ (POS Order Creation)
- GET /api/v1/restaurant/orders/tables (Table Status)
- POST /api/v1/restaurant/orders/{id}/invoice (Generate Tax Invoice)
- GET /api/v1/restaurant/stats/insights/weekly-summary-report (WhatsApp Report)
- GET /api/v1/restaurant/vendors/prices/{item} (Price Tracking)

### Services Needing Redeploy:
- [x] backend
- [x] frontend

### Pre-Deploy Action Required:
- [IMPORTANT] Execute `MIGRATIONS.sql` in the production database to create 7 new tables (`shift_log`, `tables`, `orders`, `invoices`, `fixed_costs`, `vendors`, `vendor_price_history`).

### Test After Deploy:
- Navigate to `/ceo` and click "Cast Weekly Pulse" -> should open WhatsApp with summary text.
- Navigate to `/orders` and try creating an order for Table 1 -> should update table color and subtotal.
