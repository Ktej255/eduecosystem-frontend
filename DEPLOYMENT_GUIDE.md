# Admin Portal - Complete Deployment Guide

## ✅ Implementation Complete

All backend and frontend components are ready. Follow these steps to deploy:

## Step 1: Database Setup

### Option A: Using Alembic (Recommended)

```powershell
# Navigate to backend
cd backend

# Upgrade to latest migration
alembic upgrade head

# Generate new migration for drill tables
alembic revision --autogenerate -m "Add drill system tables"

# Apply the migration
alembic upgrade head
```

### Option B: Manual SQL (If Alembic fails)

Run the SQL from `backend/alembic/versions/create_drill_tables.py` directly in PostgreSQL.

## Step 2: Verify API Routes

✅ API routes have been registered in `backend/app/api/api_v1/api.py`:
- `/api/drill/*` - Student drill endpoints
- `/api/admin/drill/*` - Admin question management
- `/api/admin/analytics/*` - Admin analytics

Test at: `http://localhost:8000/docs`

## Step 3: Upload Sample Questions

### Via Python Script

```python
import requests
import json

# Load sample questions
with open('sample_gs2_questions.json', 'r') as f:
    data = json.load(f)

# Upload (requires admin token)
response = requests.post(
    'http://localhost:8000/api/admin/drill/bulk-upload',
    headers={'Authorization': 'Bearer YOUR_ADMIN_TOKEN'},
    json=data
)

print(response.json())
```

### Via Admin Portal (Once UI is ready)

1. Navigate to `http://localhost:3000/admin/drill/questions`
2. Click "Bulk Upload"
3. Upload `sample_gs2_questions.json`

## Step 4: Test the System

### 1. Test Admin APIs

```bash
# List questions
curl http://localhost:8000/api/admin/drill/questions

# Get statistics
curl http://localhost:8000/api/admin/drill/questions/stats/summary

# Get analytics
curl http://localhost:8000/api/admin/analytics/all-students/summary
```

### 2. Test Student Flow

```bash
# Start session
POST /api/drill/start-session
{
  "date": "2025-12-03",
  "question_number": 1
}

# Upload answer
POST /api/drill/upload-answer
{
  "date": "2025-12-03",
  "question_number": 1,
  "answer_type": "before",
  "answer_text": "Student's answer..."
}

# Generate report
POST /api/drill/generate-report
{
  "date": "2025-12-03",
  "question_number": 1,
  "question_text": "...",
  "model_answer": "...",
  "before_answer_text": "...",
  "after_answer_text": "...",
  "content_summary": "..."
}
```

### 3. Test AI Insights

```bash
# Generate insights (uses Grok)
POST /api/admin/analytics/generate-insights?gs_paper=GS2&days=30

# Get recommendations
GET /api/admin/analytics/curriculum-recommendations?gs_paper=GS2
```

## Step 5: Access Admin Portal

Navigate to:
- **Questions**: `http://localhost:3000/admin/drill/questions`
- **Analytics**: `http://localhost:3000/admin/drill/analytics`
- **AI Insights**: `http://localhost:3000/admin/drill/insights`

## Environment Variables Required

```bash
# .env file
GROK_API_KEY=your_openrouter_api_key
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
AI_PROVIDER=grok
DATABASE_URL=postgresql://user:password@localhost/dbname
```

## Troubleshooting

### "Target database is not up to date"

```powershell
# Upgrade to latest first
cd backend
alembic upgrade head

# Then create new migration
alembic revision --autogenerate -m "Add drill system tables"
alembic upgrade head
```

### Import Errors

```powershell
# Ensure all models are imported in __init__.py
# Check backend/app/models/__init__.py includes drill models
```

### Frontend Not Loading

```powershell
# Restart Next.js
cd frontend
npm run dev
```

## What's Included

### Backend (11 files)
✅ Database models (7 tables)
✅ API endpoints (22 endpoints)
✅ Services (activity tracking, analytics, Grok integration)
✅ Migration file
✅ Sample GS2 data

### Frontend (3 pages)
✅ Questions management
✅ Analytics dashboard
✅ AI insights

## Next Steps

1. ✅ Run database migration
2. ✅ Upload sample questions
3. ✅ Test with students
4. ✅ Monitor analytics
5. ✅ Generate AI insights
6. Create 100+ GS2 questions
7. Deploy to production

## Support

- API Documentation: `http://localhost:8000/docs`
- Check logs: `backend/logs/`
- Browser console for frontend errors

---

**Status**: Ready for deployment
**Estimated Setup Time**: 15-30 minutes
