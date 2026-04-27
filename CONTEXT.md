# EDUECSYSTEM — AGENT CONTEXT FILE
# READ THIS BEFORE TOUCHING ANYTHING

## PROTECTED ZONE — DO NOT MODIFY WITHOUT EXPLICIT APPROVAL

These are the only files a real student touches.
Any change here requires: show diff -> get approval -> then commit.

### Backend Protected Files
- backend/app/api/api_v1/endpoints/focused_portal.py
- backend/app/api/api_v1/endpoints/auth.py
- backend/app/api/api_v1/endpoints/payment.py

### Frontend Protected File
- frontend/src/app/(student-portal)/student/focused/page.tsx

### Protected API Endpoints (19 total)
GET  /focused/subject-gates
GET  /focused/dashboard
GET  /focused/current-subject
GET  /focused/clusters/{subject}
POST /focused/pomodoro/complete
GET  /focused/trap-cards/{subject}/{cluster}
GET  /focused/test/{subject}/{cluster}
POST /focused/test/submit
GET  /focused/gate/{subject}
POST /focused/gate/submit
GET  /focused/revision-priorities
GET  /focused/history
GET  /focused/progress
POST /auth/access-token
POST /auth/register
POST /payment/create-guest-order
POST /payment/webhook
GET  /payment/verify/{order_id}
POST /study/sessions/record

## PRODUCTION DETAILS
Backend URL: https://eduecosystem-backend-503001969959.us-central1.run.app
Frontend URL: https://eduecosystem-frontend-503001969959.us-central1.run.app
Backend live revision: eduecosystem-backend-00196-klj
Frontend live revision: eduecosystem-frontend-00083-dwf
Database: Cloud SQL PostgreSQL — eduecosystem_prod
GCP Project: eduecosystem-prod
Region: us-central1

## KEY DATABASE TABLES (student-facing)
focused_portal_enrollments
focused_subject_gates
focused_study_sessions
focused_test_reports
focused_questions
bank_questions
users

## RULES FOR EVERY AGENT
1. Read this file first before any task
2. Never touch protected files without explicit approval
3. Always show diff before committing
4. Never deploy without Tej's confirmation
5. One file per task maximum
6. Test with curl or DB query before claiming done
7. If unsure — stop and ask. Never guess.

## NEVER TOUCH
- backend/app/main.py
- backend/app/api/api_v1/api.py
- Any alembic migration file that already exists
- Any file outside the protected zone unless explicitly instructed

## INTELLIGENT ENGINES (System A — being wired in Week 3)
These exist in code but are NOT yet connected to students:
- learning_engine.py — adaptive path
- adaptive_learning.py — BKT mastery
- knowledge_graph.py — concept nodes
- rag_service.py — DO NOT INITIALIZE AT STARTUP (causes 403 crash)
