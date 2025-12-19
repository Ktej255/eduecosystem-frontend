# Start Both Backend and Frontend Servers
# Run this from the project root directory

Write-Host "==================================" -ForegroundColor Cyan
Write-Host " Eduecosystem Development Servers" -ForegroundColor Cyan  
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Start Backend in a new window
Write-Host "Starting Backend API Server..." -ForegroundColor Green
Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd "d:\Graphology\Master Software\Eduecosystem\backend"; .\start_backend.ps1'

# Wait a bit for backend to start
Write-Host "Waiting for backend to initialize..." -ForegroundColor Yellow
Start-Sleep -Seconds 8

# Start Frontend in a new window
Write-Host "Starting Frontend (Next.js)..." -ForegroundColor Green
Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd "d:\Graphology\Master Software\Eduecosystem\frontend"; npm run dev'

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host " Servers Starting!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend API: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "API Docs: http://localhost:8000/docs" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
