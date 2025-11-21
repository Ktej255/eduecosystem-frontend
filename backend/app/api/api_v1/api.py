from fastapi import APIRouter
from app.api.api_v1.endpoints import (
    auth, users, tasks, grapho, meditation, gamification, analytics, groups, lms, monitoring, community, ai, shadow_mode
)

api_router = APIRouter()

# Authentication endpoints
api_router.include_router(auth.router, prefix="/login", tags=["auth"])

# User management
api_router.include_router(users.router, prefix="/users", tags=["users"])

# Task management
api_router.include_router(tasks.router, prefix="/tasks", tags=["tasks"])

# Graphology/Handwriting analysis
api_router.include_router(grapho.router, prefix="/grapho", tags=["graphology"])

# Meditation and wellness
api_router.include_router(meditation.router, prefix="/meditation", tags=["meditation"])

# Gamification
api_router.include_router(gamification.router, prefix="/gamification", tags=["gamification"])

# Analytics
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])

# Groups (Wolf Pack)
api_router.include_router(groups.router, prefix="/groups", tags=["groups"])

# LMS
api_router.include_router(lms.router, prefix="/lms", tags=["lms"])

# Monitoring
api_router.include_router(monitoring.router, prefix="/monitoring", tags=["monitoring"])

# Community
api_router.include_router(community.router, prefix="/community", tags=["community"])

# AI Assistant
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])

# Shadow Mode (7-Day Tracker)
api_router.include_router(shadow_mode.router, prefix="/shadow-mode", tags=["shadow-mode"])

