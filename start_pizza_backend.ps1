Set-Location "d:\MasterSoftware\EduEcosystem_MIGRATED\restaurant-portal\backend"
Write-Host "Starting Pizza Blitz backend on port 8000..."
D:\DevTools\Python\python.exe -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload > "d:\Development\EduEcosystem\backend_log.txt" 2>&1
