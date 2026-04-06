#!/bin/bash
# Production startup script with timeout protection
# Prevents container hanging when database is unreachable

echo "Starting Eduecosystem Backend..."


echo "Starting uvicorn server..."
# Run the application
exec uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000} --timeout-keep-alive 30
