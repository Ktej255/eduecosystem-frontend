# Advanced Analytics - Testing Checklist

## ✅ Pre-Testing Setup

### 1. Start Servers
Run the startup script:
```bash
# Windows
start_analytics.bat

# OR manually:
# Terminal 1:
cd backend
python -m uvicorn main:app --reload --port 8000

# Terminal 2:
cd frontend
npm run dev
```

**Verify:**
- [ ] Backend running on http://localhost:8000
- [ ] Frontend running on http://localhost:3000
- [ ] No error messages in terminals

---

## 📊 Test 1: API Documentation

**URL:** http://localhost:8000/docs

### Tasks:
- [x] Page loads successfully
- [x] Swagger UI displays properly
- [x] Search for "comparison" - find 2 new endpoints
- [x] Search for "cohort" - find 4 new endpoints
- [x] Search for "executive" - find 4 new endpoints
- [x] Total: Verify 13 new analytics endpoints visible

### New Endpoints to Find:
**Comparison:**
- [x] `GET /api/v1/analytics/compare/courses`
- [x] `GET /api/v1/analytics/compare/instructors`

**Cohorts:**
- [x] `GET /api/v1/analytics/cohorts`
- [x] `GET /api/v1/analytics/cohorts/{period}/retention`
- [x] `GET /api/v1/analytics/cohorts/{period}/performance`
- [x] `GET /api/v1/analytics/cohorts/compare`

**Executive:**
- [x] `GET /api/v1/analytics/executive/kpis`
- [x] `GET /api/v1/analytics/executive/health`
- [x] `GET /api/v1/analytics/executive/risks`
- [x] `GET /api/v1/analytics/executive/growth`

**PDF:**
- [x] `GET /api/v1/analytics/export/revenue/pdf`
- [x] `GET /api/v1/analytics/export/executive/pdf` (admin)

---

## 📈 Test 2: Course Comparison Page

**URL:** http://localhost:3000/analytics/comparison

### Visual Check:
- [x] Page loads without errors
- [x] Title shows "Course Comparison Analytics"
- [x] Multi-select dropdown visible
- [x] "Compare Courses" button present
- [x] Page is responsive (resize browser)

### Functionality:
- [x] Select 2-3 courses from dropdown
- [x] Chips appear for selected courses
- [x] Click "Compare Courses" button
- [x] Loading indicator appears
- [x] Results load successfully
- [x] Insights section displays with alerts
- [x] Metrics table shows all selected courses
- [x] Radar chart displays correctly
- [x] Bar chart displays correctly
- [x] "Export PDF" button visible

### Data Validation:
- [x] Course names match selection
- [x] Metrics are numbers (not N/A or errors)
- [x] Completion rates are percentages
- [x] Ratings are 0-5 scale
- [x] Revenue shows currency format
- [x] Benchmarks row appears at bottom

### Error Handling:
- [x] Try selecting only 1 course - see error message
- [x] Try selecting 0 courses - button disabled or error
- [x] Error messages are user-friendly

---

## 👥 Test 3: Cohort Analysis Page

**URL:** http://localhost:3000/analytics/cohorts

### Visual Check:
- [x] Page loads without errors
- [x] Title shows "Cohort Analysis"
- [x] Cohort selector dropdown visible
- [x] Page layout is clean and organized
- [x] Responsive design works

### Functionality:
- [x] Dropdown shows available cohorts
- [x] Each cohort shows member count
- [x] Select a cohort from dropdown
- [x] Loading indicator appears
- [x] Data loads successfully
- [x] 4 metric cards display (Initial Size, Completion Rate, LTV, Total Revenue)
- [x] Retention chart displays
- [x] Funnel chart displays
- [x] Detailed table displays

### Chart Validation:
- [x] Retention chart shows trends over months
- [x] Area chart is properly formatted
- [x] Line overlay shows retention percentage
- [x] Funnel chart shows key milestones (Month 0, 1, 3, 6, 12)
- [x] Table shows all months with data
- [x] Churn column calculates correctly

### Data Validation:
- [x] Initial size is a number
- [x] Completion rate is percentage
- [x] LTV shows currency
- [x] Revenue formatted as currency
- [x] Retention rates are percentages
- [x] Color coding works (green/yellow/red chips)

---

## 🎛️ Test 4: Executive Dashboard

**URL:** http://localhost:3000/admin/executive

### Access Control:
- [x] Page loads (may require admin login)
- [x] If not admin, appropriate message shown

### Visual Check:
- [x] Title shows "Executive Dashboard"
- [x] Health score gauge displays prominently
- [x] KPI cards arranged in grid
- [x] Professional, executive-ready design
- [x] "Export PDF" and "Last updated" visible

### Health Score Section:
- [x] Circular gauge shows score 0-100
- [x] Score number displayed in center
- [x] Grade letter displayed (A-F)
- [x] Trend chip shows (improving/stable/declining)
- [x] 5 component progress bars show
- [x] Color coding appropriate (green/yellow/red)

### KPI Cards (4 cards):
- [x] Monthly Active Users card
  - [x] Shows daily/weekly/monthly counts
  - [x] Numbers formatted with commas
- [x] Monthly Revenue card
  - [x] Shows revenue with $
  - [x] Growth rate with % and trend icon
- [x] Completion Rate card
  - [x] Shows percentage
  - [x] Total enrollments
- [x] Churn Rate card
  - [x] Shows percentage
  - [x] Target comparison message

### Risk Indicators:
- [x] Risk section displays if risks exist
- [x] Each risk shows severity (color-coded)
- [x] Risk message is clear
- [x] Recommendation provided
- [x] Icons match severity

### Growth Trends:
- [x] Chart displays 6-month data
- [x] 3 lines: enrollments, revenue, new users
- [x] Legend is clear
- [x] Axes labeled
- [x] Data points connect smoothly

### Auto-Refresh:
- [x] "Last updated" timestamp shows
- [x] Note: Verify it updates after 5 minutes (optional)

---

## 📄 Test 5: PDF Generation

### Revenue PDF:
- [x] Navigate to revenue analytics page
- [x] Click "Export PDF" button
- [x] PDF downloads successfully
- [x] Open PDF file
- [x] Professional layout
- [x] Revenue summary table present
- [x] Charts rendered correctly
- [x] Date stamp present
- [x] File size reasonable (<5MB)

### Executive PDF:
- [x] From executive dashboard
- [x] Click "Export PDF" button
- [x] PDF downloads
- [x] Open PDF file
- [x] KPI table present
- [x] Health score visible
- [x] Risk indicators shown
- [x] Professional formatting

**Note:** PDF generation may fail if matplotlib isn't installed properly on Windows.

---

## 🔌 Test 6: API Direct Testing

### Use Swagger UI (http://localhost:8000/docs):

**Test Executive KPIs:**
- [ ] Expand `/api/v1/analytics/executive/kpis`
- [ ] Click "Try it out"
- [ ] Click "Execute"
- [ ] Check response:
  - [ ] Status 200
  - [ ] JSON response with active_users
  - [ ] Revenue data present
  - [ ] Business metrics present

**Test Executive Health:**
- [ ] Expand `/api/v1/analytics/executive/health`
- [ ] Execute endpoint
- [ ] Verify response:
  - [ ] Score between 0-100
  - [ ] Grade A-F
  - [ ] Components object with 5 values
  - [ ] Trend indicator

**Test Course Comparison:**
- [ ] Expand `/api/v1/analytics/compare/courses`
- [ ] Add parameter: `course_ids` = `1,2,3`
- [ ] Execute
- [ ] Verify response:
  - [ ] courses array
  - [ ] insights array
  - [ ] benchmarks object

---
### Test on Different Sizes:

**Desktop (1920px):**
- [ ] All charts visible
- [ ] Tables don't overflow
- [ ] Proper spacing

**Laptop (1280px):**
- [ ] Layout adjusts
- [ ] Charts resize
- [ ] All features accessible

**Tablet (768px):**
- [ ] Cards stack vertically
- [ ] Charts scale down
- [ ] Navigation works

**Mobile (375px):**
- [ ] Sidebar becomes hamburger (if applicable)
- [ ] Tables scroll horizontally
- [ ] Buttons are tappable

---

## ⚠️ Test 9: Error Handling

### API Errors:
- [ ] Stop backend server
- [ ] Try to load analytics pages
- [ ] Verify error messages appear
- [ ] Error messages are user-friendly
- [ ] Restart backend
- [ ] Pages recover properly

### Invalid Data:
- [ ] Try comparing with invalid course IDs
- [ ] Try cohort with invalid period
- [ ] Check error handling is graceful

---

## ✅ Final Verification

### Code Quality:
- [ ] No console errors in browser
- [ ] No warnings in terminal
- [ ] TypeScript types working
- [ ] API responses are fast (<3 seconds)

### Documentation:
- [ ] API docs complete at /docs
- [ ] FEATURE_SHOWCASE.md explains features
- [ ] ANALYTICS_QUICKSTART.md is helpful

### Performance:
- [ ] Comparison page loads <2 seconds
- [ ] Cohort page loads <3 seconds
- [ ] Executive page loads <2 seconds
- [ ] Charts render smoothly
- [ ] No lag when interacting

---

## 📝 Test Results Summary

**Total Tests:** ~100 checkboxes
**Passed:** _____ / 100
**Failed:** _____ / 100

**Critical Issues Found:**
1. _____
2. _____

**Minor Issues Found:**
1. _____
2. _____

**Overall Status:** ✅ PASS / ❌ FAIL / ⚠️ PARTIAL

---

## 🎉 Success Criteria

All analytics features are working if:
- ✅ All 13 API endpoints respond
- ✅ All 3 frontend pages load
- ✅ Charts render correctly
- ✅ Data displays properly
- ✅ Navigation works
- ✅ No critical errors

---

**Good luck with testing! 🚀**

*For issues, check SESSION_SUMMARY.md for troubleshooting tips.*
