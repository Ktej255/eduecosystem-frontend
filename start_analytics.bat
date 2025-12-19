@echo off
echo ========================================
echo  Starting Advanced Analytics Platform
echo ========================================
echo.

REM Check if backend is already running
echo [1/4] Checking backend...
curl -s http://localhost:8000/docs > nul 2>&1
if %errorlevel%==0 (
    echo ✅ Backend already running on port 8000
) else (
    echo Starting backend server...
    start "Backend Server" cmd /k "cd backend && python -m uvicorn main:app --reload --port 8000"
    timeout /t 3 > nul
    echo ✅ Backend started on http://localhost:8000
)

echo.
echo [2/4] Checking frontend...
curl -s http://localhost:3000 > nul 2>&1
if %errorlevel%==0 (
    echo ✅ Frontend already running on port 3000
) else (
    echo Starting frontend server...
    start "Frontend Server" cmd /k "cd frontend && npm run dev"
    timeout /t 5 > nul
    echo ✅ Frontend started on http://localhost:3000
)

echo.
echo [3/4] Opening browser tabs...
timeout /t 2 > nul
start http://localhost:8000/docs
timeout /t 1 > nul
start http://localhost:3000/analytics/comparison
timeout /t 1 > nul
start http://localhost:3000/analytics/cohorts
timeout /t 1 > nul
start http://localhost:3000/admin/executive

echo.
echo [4/4] Setup complete!
echo ========================================
echo  🎉 Platform Started Successfully!
echo ========================================
echo.
echo 📊 Opened Pages:
echo   → API Docs: http://localhost:8000/docs
echo   → Course Comparison: /analytics/comparison
echo   → Cohort Analysis: /analytics/cohorts
echo   → Executive Dashboard: /admin/executive
echo.
echo 📝 Next: Check the browser tabs and test features!
echo.
echo Press any key to exit...
pause > nul
