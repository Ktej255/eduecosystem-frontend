# Admin Portal Setup Guide

## Quick Start

### 1. Run Database Migration

```bash
cd backend
alembic upgrade head
```

This will create all 7 tables:
- drill_questions
- drill_content
- drill_model_answers
- drill_sessions
- drill_daily_summaries
- student_activities
- curriculum_insights

### 2. Configure Environment Variables

Ensure your `.env` file has:

```bash
# Grok API (for AI insights)
GROK_API_KEY=your_openrouter_api_key
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
AI_PROVIDER=grok

# Database
DATABASE_URL=postgresql://user:password@localhost/dbname
```

### 3. Start Backend Server

```bash
cd backend
uvicorn app.main:app --reload
```

### 4. Access Admin Portal

Navigate to:
- Questions Management: `http://localhost:3000/admin/drill/questions`
- Analytics Dashboard: `http://localhost:3000/admin/drill/analytics`
- AI Insights: `http://localhost:3000/admin/drill/insights`

## Upload Sample GS2 Questions

### Option 1: Via API (Recommended)

```bash
# Upload sample questions
curl -X POST http://localhost:8000/api/admin/drill/bulk-upload \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -d @sample_gs2_questions.json
```

### Option 2: Via Admin Portal

1. Go to `/admin/drill/questions`
2. Click "Bulk Upload" button
3. Upload `sample_gs2_questions.json`
4. Review and confirm

## Testing the System

### 1. Test Question CRUD

```bash
# Create a question
POST /api/admin/drill/questions

# List questions
GET /api/admin/drill/questions?gs_paper=GS2

# Get question with content
GET /api/admin/drill/questions/{id}

# Update question
PUT /api/admin/drill/questions/{id}

# Delete question
DELETE /api/admin/drill/questions/{id}
```

### 2. Test Student Drill Flow

1. Student starts drill: `POST /api/drill/start-session`
2. Upload before answer: `POST /api/drill/upload-answer`
3. Upload after answer: `POST /api/drill/upload-answer`
4. Generate report: `POST /api/drill/generate-report`
5. Generate daily summary: `POST /api/drill/daily-summary`

### 3. Test Admin Analytics

```bash
# Get student performance
GET /api/admin/analytics/student/{student_id}/performance

# Get aggregate analytics
GET /api/admin/analytics/all-students/summary?gs_paper=GS2

# Get topic performance
GET /api/admin/analytics/all-students/by-topic?gs_paper=GS2

# Generate AI insights
POST /api/admin/analytics/generate-insights?gs_paper=GS2&days=30

# Get curriculum recommendations
GET /api/admin/analytics/curriculum-recommendations?gs_paper=GS2
```

## Admin Portal Features

### Questions Management
- ✅ List all questions with filters
- ✅ Search by text
- ✅ Filter by GS paper, difficulty
- ✅ View statistics (total, with content, with model answer)
- ✅ Create/Edit/Delete questions
- ✅ Bulk upload via JSON

### Analytics Dashboard
- ✅ Overview statistics (students, drills, avg score, improvement)
- ✅ Filter by GS paper
- ✅ Topic-wise performance table
- ✅ Color-coded performance indicators
- ✅ Quick actions (view students, generate insights, export)

### AI Insights
- ✅ Overall assessment from Grok
- ✅ Priority-based recommendations
- ✅ Content gaps identification
- ✅ Teaching method improvements
- ✅ High/low performing topics
- ✅ Generate new insights button

## Activity Tracking

All student activities are automatically tracked:
- Session started/completed
- Step started/completed
- Timer events (started/expired/skipped)
- Answer uploads
- Content reading
- Report viewing
- Break taken/skipped

View activities:
```bash
GET /api/admin/analytics/student/{student_id}/drill-history
```

## Troubleshooting

### Database Connection Error
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Verify DATABASE_URL in .env
```

### Grok API Error
```bash
# Verify GROK_API_KEY is set
echo $GROK_API_KEY

# Test API connection
curl https://openrouter.ai/api/v1/models \
  -H "Authorization: Bearer $GROK_API_KEY"
```

### Frontend Not Loading
```bash
# Restart Next.js dev server
cd frontend
npm run dev
```

## Next Steps

1. **Create More GS2 Content**: Add 100+ questions covering all topics
2. **Test with Students**: Have students complete drills
3. **Monitor Analytics**: Track performance in admin portal
4. **Generate Insights**: Use Grok to get curriculum recommendations
5. **Iterate**: Improve questions based on AI insights

## Support

For issues or questions:
- Check logs: `backend/logs/` and browser console
- Review API docs: `http://localhost:8000/docs`
- Test endpoints with Swagger UI
