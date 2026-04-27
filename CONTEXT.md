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

## WEEK 1 FINDINGS (April 27 2026)

### Real Production Tables Confirmed
- focused_portal_enrollments ✅
- focused_subject_gates ✅ (has: gate_score, total_questions, passed, flagged_for_revision, completed_at, updated_at)
- focused_study_sessions ✅ (has: date, subject, cluster_number, cluster_name, pomodoro_number, confidence_pulse, duration_minutes)
- focused_test_reports ✅ (has: percentage, weak_topics, trap_questions_missed, correct_answers, wrong_answers)
- focused_questions ✅ (has: question_text, option_a/b/c/d, correct_answer, topic_tag)
- focused_cluster_progress ✅ (has: subject, cluster_number, status, last_accessed_at)
- bank_questions ✅ (16,700+ questions)

### Known Issues Found This Week
- focused_test_reports model missing columns: percentage, weak_topics, trap_questions_missed, correct_answers, wrong_answers
- RAG service was crashing backend at startup — FIXED in commit 220c0c41
- Backend was not deploying — FIXED in revision 00198-6x9

### Pending Deploy
Commits awaiting deployment:
- 01f274e1 — focused portal models created
- 211dfe4a — models registered in __init__.py
- ff950195 — FocusedStudySession columns fixed
- ba4e338a — all columns fixed + FocusedClusterProgress added

## WEEK 2 PROGRESS (April 27 2026)

### Seeding Scripts — Verified and Ready
- seed_environment_focused.py — 10 clusters, 250 questions
- seed_economy_focused.py — 10 clusters, 250 questions
- seed_history_focused.py — 10 clusters, 250 questions
- seed_modern_history_focused.py — 10 clusters, 250 questions
- seed_geography_focused.py — already seeded, 250 questions

### Frontend Fixes Applied
- cbcf398d — silent catch blocks now log errors visibly

### Models Complete
- All 6 focused portal tables have correct SQLAlchemy models
- FocusedQuestion now has all 14 production columns

### Pending Deploy
- cbcf398d — frontend fix
- 1646d845 — FocusedQuestion model fix

### Seeding Complete (April 27 2026)
- Polity: 250 questions, 10 clusters ✅
- Environment: 250 questions, 10 clusters ✅
- Economy: 250 questions, 10 clusters ✅
- Modern History: 250 questions, 10 clusters ✅
- Science & Technology: 250 questions, 10 clusters ✅
- Ancient History: 125 questions, 5 clusters ✅
- Medieval History: 125 questions, 5 clusters ✅
- Geography: seeding pending

### Frontend Revision
- Live revision: eduecosystem-frontend-new-deploy (non-standard name — needs proper redeploy)
