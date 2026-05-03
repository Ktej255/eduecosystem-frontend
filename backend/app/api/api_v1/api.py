from fastapi import APIRouter

from app.api.api_v1.endpoints import auth
from app.api.api_v1.endpoints import users
from app.api.api_v1.endpoints import admin
# from app.api.api_v1.endpoints import tasks # Unused
from app.api.api_v1.endpoints import daily_actions
from app.api.api_v1.endpoints import graphotherapy
from app.api.api_v1.endpoints import (
    meditation,
    admin_meditation,
    prelims_recall,
    batch1_content,
    batch1_tests,
    # ai_debug,  # Unused
    ai,
    drill,
    # pdf_study, # Unused
    # retention, # Unused
    # certificates, # Unused
    # categories, # Unused
    courses,
    # notes, # Unused
    # announcements, # Unused
    # discussions, # Unused
    # live_classes, # Unused
    # learning_paths, # Unused
    # peer_reviews, # Unused
    # order, # Unused
    # reviews, # Unused
    # subscriptions, # Unused
    # progress, # Unused
    # quizzes, # Unused
    # assignments, # Unused
    # holistic, # Unused
    upsc,
    payment,
    adaptive_dashboard,
)


api_router = APIRouter()

# Authentication
api_router.include_router(auth.router, prefix="/login", tags=["login"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth-compat"])
from app.api.api_v1.endpoints import auth_2fa
api_router.include_router(auth_2fa.router, prefix="/2fa", tags=["2fa"])
api_router.include_router(auth_2fa.router, prefix="/auth/2fa", tags=["2fa-compat"])

# Users
api_router.include_router(users.router, prefix="/users", tags=["users"])

# Admin (Stats, Users Management, Logs)
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
api_router.include_router(graphotherapy.router, prefix="/graphotherapy", tags=["graphotherapy"])

# Grapho Upload (Handwriting Analysis)
from app.api.api_v1.endpoints import grapho
api_router.include_router(grapho.router, prefix="/grapho", tags=["grapho"])

# Daily Actions (Tasks, Habits, Reflection)
api_router.include_router(daily_actions.daily_router, prefix="/daily-actions", tags=["daily-actions"])

# Meditation (Student)
api_router.include_router(meditation.router, prefix="/meditation", tags=["meditation"])

# Meditation (Admin)
api_router.include_router(admin_meditation.router, prefix="/admin/meditation", tags=["admin-meditation"])

# Prelims Recall Analysis
api_router.include_router(prelims_recall.router, prefix="/prelims", tags=["prelims"])

# Batch 1 Content (Videos/Segments)
api_router.include_router(batch1_content.router, prefix="/batch1", tags=["batch1"])

# Batch 1 Test Results
api_router.include_router(batch1_tests.router, prefix="/batch1", tags=["batch1-tests"])

# AI Debug (Teacher Portal Transparency Dashboard)
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])

# Leads Management
from app.api.api_v1.endpoints import leads
api_router.include_router(leads.router, prefix="/leads", tags=["leads"])

# Mobile CRM - Field Activities
from app.api.api_v1.endpoints import field_activities
api_router.include_router(field_activities.router, prefix="/field-activities", tags=["field-activities"])

# Mobile CRM - Call Logs
from app.api.api_v1.endpoints import call_logs
api_router.include_router(call_logs.router, prefix="/call-logs", tags=["call-logs"])

# Mobile CRM - Voice Notes
from app.api.api_v1.endpoints import voice_notes
api_router.include_router(voice_notes.router, prefix="/voice-notes", tags=["voice-notes"])

# Advanced User Management
from app.api.api_v1.endpoints import user_management
api_router.include_router(user_management.router, prefix="/users", tags=["user-management"])

# New Admin Intelligence Endpoints
from app.api.api_v1.endpoints import (
    admin_war_room,
    admin_student_insights,
    admin_student_progress,
    admin_cohort,
    admin_revenue,
    admin_at_risk,
    admin_interventions,
    admin_marketing,
    admin_smart_alerts,
    admin_content_health,
    admin_system_intelligence,
    admin_global_search,
    admin_meditation_analytics
)

api_router.include_router(admin_war_room.router, prefix="/admin/war-room", tags=["admin-war-room"])
api_router.include_router(admin_student_insights.router, prefix="/admin/student-insights", tags=["admin-student-insights"])
api_router.include_router(admin_student_progress.router, prefix="/admin/student-progress", tags=["admin-student-progress"])
api_router.include_router(admin_cohort.router, prefix="/admin/cohorts", tags=["admin-cohorts"])
api_router.include_router(admin_revenue.router, prefix="/admin/revenue", tags=["admin-revenue"])
api_router.include_router(admin_at_risk.router, prefix="/admin/at-risk", tags=["admin-at-risk"])
api_router.include_router(admin_interventions.router, prefix="/admin/interventions", tags=["admin-interventions"])
api_router.include_router(admin_marketing.router, prefix="/admin/marketing", tags=["admin-marketing"])
api_router.include_router(admin_smart_alerts.router, prefix="/admin/smart-alerts", tags=["admin-alerts"])
api_router.include_router(admin_content_health.router, prefix="/admin/content-health", tags=["admin-content-health"])
api_router.include_router(admin_system_intelligence.router, prefix="/admin/system", tags=["admin-system"])
api_router.include_router(admin_global_search.router, prefix="/admin/search", tags=["admin-search"])
api_router.include_router(admin_meditation_analytics.router, prefix="/admin/meditation-analytics", tags=["admin-meditation-analytics"])
from app.api.api_v1.endpoints import admin_crm_wellness
api_router.include_router(admin_crm_wellness.router, prefix="/admin/crm-wellness", tags=["admin-crm-wellness"])
from app.api.api_v1.endpoints import admin_teacher_scoring
api_router.include_router(admin_teacher_scoring.router, prefix="/admin/teacher-scoring", tags=["admin-teacher-scoring"])
from app.api.api_v1.endpoints import admin_student_journey
api_router.include_router(admin_student_journey.router, prefix="/admin/student-journey", tags=["admin-student-journey"])
from app.api.api_v1.endpoints import admin_teacher_performance
api_router.include_router(admin_teacher_performance.router, prefix="/admin/teacher-performance", tags=["admin-teacher-performance"])
# api_router.include_router(user_management.router, prefix="/admin/user-management", tags=["user-management"]) - Deleted stale comment

# Marketing Automation
from app.api.api_v1.endpoints import marketing_automation
api_router.include_router(marketing_automation.router, prefix="/marketing-automation", tags=["marketing-automation"])

# Retention System (FSRS-based knowledge decay tracking)
# Study Sessions (Pomodoro, Revision)
from app.api.api_v1.endpoints import study
api_router.include_router(study.router, prefix="/study", tags=["study"])

# Polity Chapter Tracker
# from app.api.api_v1.endpoints import polity # Unused
# from app.api.api_v1.endpoints import pdr # Unused
# AI Tutor (RAG Chat)
from app.api.api_v1.endpoints import ai_tutor
api_router.include_router(ai_tutor.router, prefix="/ai/tutor", tags=["ai-tutor"])

# Practice Mains Answer Evaluation (Vision-first + KG Sync)
# Course Payment (LMS course purchases via Cashfree/Instamojo)
from app.api.api_v1.endpoints import course_payment, payment, funnel_analysis
api_router.include_router(course_payment.router, prefix="/course-payment", tags=["course-payment"])
api_router.include_router(payment.router, prefix="/payments", tags=["payments"])
api_router.include_router(funnel_analysis.router, prefix="/funnel", tags=["funnel"])




# Modules and Lessons (from courses)
api_router.include_router(courses.modules_router, prefix="/modules", tags=["modules"])
api_router.include_router(courses.lessons_router, prefix="/lessons", tags=["lessons"])

# Student Drill System
api_router.include_router(
    drill.router,
    prefix="/drill",
    tags=["drill"]
)

# UPSC System (Plans, Drills, Attempts, Dashboard)
api_router.include_router(
    upsc.router,
    prefix="/upsc",
    tags=["upsc"]
)

# Guided Learning Portal
from app.api.api_v1.endpoints import (
    guided_portal,
    admin_clips,
    knowledge_graph,
    learning_engine_api,
    concept_tagging_api,
    activity_api,
    adaptive_exams,
    rewards,
    journey,
    intelligence,
)
api_router.include_router(guided_portal.router, prefix="/guided", tags=["guided-portal"])
api_router.include_router(journey.router, prefix="/guided/student", tags=["student-journey"])
api_router.include_router(rewards.router, prefix="/guided/student", tags=["student-rewards"])
api_router.include_router(admin_clips.router, prefix="/admin/guided", tags=["admin-clips"])
api_router.include_router(knowledge_graph.router, prefix="/guided", tags=["knowledge-graph"])
api_router.include_router(learning_engine_api.router, prefix="/engine", tags=["learning-engine"])
api_router.include_router(concept_tagging_api.router, prefix="/tagging", tags=["concept-tagging"])
api_router.include_router(activity_api.router, prefix="/activity", tags=["activity"])
api_router.include_router(adaptive_exams.router, prefix="/adaptive-exams", tags=["adaptive-exams"])
# AI Learning Navigator (Phase-8)
api_router.include_router(adaptive_dashboard.router, prefix='/adaptive-navigator', tags=['adaptive-navigator'])

# Exam Intelligence Layer (Phase-10)
api_router.include_router(intelligence.router, prefix='/intelligence', tags=['intelligence'])

# AI Endpoints Reconnection
from app.api.api_v1.endpoints import mains_evaluation
from app.api.api_v1.endpoints import adaptive_learning
from app.api.api_v1.endpoints import learning_paths
from app.api.api_v1.endpoints import tutor
from app.api.api_v1.endpoints import admin_ai
from app.api.api_v1.endpoints import email_notifications

api_router.include_router(mains_evaluation.router, prefix="/mains-evaluation", tags=["Mains Evaluation"])
api_router.include_router(adaptive_learning.router, prefix="/adaptive-learning", tags=["Adaptive Learning"])
api_router.include_router(learning_paths.router, prefix="/learning-paths", tags=["Learning Paths"])
api_router.include_router(tutor.router, prefix="/tutor", tags=["AI Tutor"])
api_router.include_router(admin_ai.router, prefix="/admin-ai", tags=["Admin AI"])
api_router.include_router(email_notifications.router, prefix="/email-notifications", tags=["Email"])

# ── Sarit Central CRM (Multi-Tenant B2B SaaS) ──
# Focused Portal (Kajal's 43-day UPSC sprint)
from app.api.api_v1.endpoints import focused_portal
api_router.include_router(focused_portal.router, prefix="/focused", tags=["focused"])

# PHASE 14: Funnel Analytics & Coach Visibility
from app.api.api_v1.endpoints import admin_funnel, coach_api, student_report
api_router.include_router(admin_funnel.router, prefix="/admin/funnel", tags=["admin-funnel"])
api_router.include_router(coach_api.router, prefix="/coach", tags=["coach"])
api_router.include_router(student_report.router, prefix="/reports", tags=["reports"])
# Sarit Wisdom Production Hardening (Phase 15)
from app.api.api_v1.endpoints import internal
api_router.include_router(internal.router, prefix="/internal", tags=["internal"])
