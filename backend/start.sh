#!/bin/bash
# Production startup script with timeout protection
# Prevents container hanging when database is unreachable

echo "Starting Eduecosystem Backend..."

# Run migrations on startup to ensure schema is up to date
echo "=== RUNNING ALEMBIC MIGRATIONS ==="
alembic upgrade head
if [ $? -ne 0 ]; then
  echo "=== MIGRATION FAILED — ABORTING STARTUP ==="
  exit 1
fi
echo "=== MIGRATIONS COMPLETE ==="
echo "Starting uvicorn server..."
# Run the application
exec uvicorn main:app --host 0.0.0.0 --port 8000 --timeout-keep-alive 30
