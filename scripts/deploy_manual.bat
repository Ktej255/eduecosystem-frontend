@echo off
echo ===================================================
echo 🚀 Starting MANUAL Deployment (Interactive Mode)
echo ===================================================

cd /d "d:\Graphology\Master Software\Eduecosystem"

echo.
echo [1/4] Logging into AWS ECR...
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 816902390376.dkr.ecr.us-east-1.amazonaws.com
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Login Failed!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/4] Building Docker Image (This may take time due to heavy ML libraries)...
echo Image URI: 816902390376.dkr.ecr.us-east-1.amazonaws.com/eduecosystem-backend:latest
cd backend
docker build -t 816902390376.dkr.ecr.us-east-1.amazonaws.com/eduecosystem-backend:latest .
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Build Failed! Please copy the error message above and share it.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [3/4] Pushing Image to ECR...
docker push 816902390376.dkr.ecr.us-east-1.amazonaws.com/eduecosystem-backend:latest
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Push Failed!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [4/4] Triggering App Runner Deployment...
aws apprunner start-deployment --service-arn arn:aws:apprunner:us-east-1:816902390376:service/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1 --region us-east-1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Deployment Trigger Failed!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ✅ SUCCESS! Deployment triggered.
echo Monitor here: https://console.aws.amazon.com/apprunner/home
