from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from typing import Any, List, Dict
from datetime import datetime, timedelta
from app.api import deps
from app.models.user import User
from app.models.activity_log import ActivityLog
from app.models.study_session import StudySession
from app.models.marketing_automation import MessageLog, MarketingWorkflow
from app.models.lead import Lead
from app.models.graphotherapy import GraphoSubmission
from app.models.meditation import MeditationSession
from app.models.course_payment import CoursePayment

router = APIRouter()

@router.get("/pulse", response_model=Dict[str, Any])
def get_war_room_pulse(
    db: Session = Depends(deps.get_db),
    current_admin: User = Depends(deps.get_current_active_admin),
) -> Any:
    """
    Real-time platform pulse across all domains (LMS, CRM, Wellness, Marketing).
    All metrics sourced from live Redis keys and DB queries — no placeholders.
    """
    now = datetime.utcnow()
    hour_ago = now - timedelta(hours=1)
    day_ago = now - timedelta(days=1)

    # ── 1. System Health — Redis + SystemGuard ────────────────────────────────
    from app.core.system_guard import system_guard
    from app.models.security import SecurityAuditLog
    from app.services.cache_service import cache_service
    import time

    system_mode = system_guard.get_mode()

    # Real RPS: sum last 60 sliding-window Redis keys
    now_ts = int(time.time())
    rps_total = 0
    for i in range(60):
        val = cache_service.client.get(f"metrics:rps:{now_ts - i}")
        rps_total += int(val) if val else 0
    rps = round(rps_total / 60, 2)  # avg req/sec over last 60s

    # Real Latency: average from Redis list
    latency_raw = cache_service.client.lrange("metrics:latency:list", 0, 99)
    if latency_raw:
        latency_avg = round(sum(float(v) for v in latency_raw) / len(latency_raw), 2)
    else:
        latency_avg = 0.0

    security_alerts = db.query(func.count(SecurityAuditLog.id)).filter(
        SecurityAuditLog.timestamp >= hour_ago,
        SecurityAuditLog.severity.in_(["WARNING", "CRITICAL"])
    ).scalar() or 0

    # ── 2. Revenue & Conversion — Live DB ────────────────────────────────────
    from app.models.analytics import AnalyticsEvent

    total_sessions = (
        db.query(func.count(AnalyticsEvent.id))
        .filter(AnalyticsEvent.event_type == "session_start")
        .scalar() or 0
    )
    total_purchases = (
        db.query(func.count(CoursePayment.id))
        .filter(CoursePayment.status == "succeeded")
        .scalar() or 0
    )
    revenue_total = float(
        db.query(func.sum(CoursePayment.amount))
        .filter(CoursePayment.status == "succeeded")
        .scalar() or 0.0
    )
    revenue_today = float(
        db.query(func.sum(CoursePayment.amount))
        .filter(
            CoursePayment.status == "succeeded",
            CoursePayment.created_at >= now.replace(hour=0, minute=0, second=0, microsecond=0)
        )
        .scalar() or 0.0
    )
    conversion_rate = round((total_purchases / total_sessions * 100), 4) if total_sessions > 0 else 0.0

    # Current autopilot strategy (from Redis fast-path)
    current_strategy = cache_service.client.get("config:pricing_strategy") or "STANDARD"
    recovery_active = cache_service.client.get("config:recovery_active") or "false"
    last_autopilot_run = cache_service.client.get("autopilot:last_run") or "never"

    # ── 3. CRM ────────────────────────────────────────────────────────────────
    new_leads_hr = db.query(func.count(Lead.id)).filter(Lead.created_at >= hour_ago).scalar() or 0
    total_unassigned = db.query(func.count(Lead.id)).filter(Lead.assigned_to_id.is_(None)).scalar() or 0

    # ── 4. LMS ────────────────────────────────────────────────────────────────
    live_students = db.query(func.count(StudySession.id)).filter(
        StudySession.start_time >= hour_ago,
        StudySession.end_time.is_(None)
    ).scalar() or 0

    # ── 5. Wellness ───────────────────────────────────────────────────────────
    grapho_submissions_today = db.query(func.count(GraphoSubmission.id)).filter(
        GraphoSubmission.completed_at >= day_ago
    ).scalar() or 0
    meditation_mins_today = round(float(
        db.query(func.sum(MeditationSession.minutes_listened))
        .filter(MeditationSession.created_at >= day_ago)
        .scalar() or 0
    ), 1)

    # ── 6. Marketing ──────────────────────────────────────────────────────────
    msgs_sent_24h = db.query(func.count(MessageLog.id)).filter(MessageLog.created_at >= day_ago).scalar() or 0
    active_workflows = db.query(func.count(MarketingWorkflow.id)).filter(MarketingWorkflow.status == "ACTIVE").scalar() or 0

    return {
        "system": {
            "mode": system_mode,
            "status": "CRITICAL" if system_mode == "CRITICAL" else ("WARNING" if system_mode == "SAFE_MODE" else "HEALTHY"),
            "rps": rps,
            "latency_avg_ms": latency_avg,
            "security_alerts_hr": security_alerts,
            "data_sources": ["Redis:metrics:rps:*", "Redis:metrics:latency:list", "DB:security_audit_log"]
        },
        "revenue": {
            "total_all_time": revenue_total,
            "today": revenue_today,
            "conversion_rate_pct": conversion_rate,
            "total_sessions": total_sessions,
            "total_purchases": total_purchases,
            "data_sources": ["DB:course_payments", "DB:analytics_events"]
        },
        "autopilot": {
            "current_strategy": current_strategy,
            "recovery_active": recovery_active == "true",
            "last_run": last_autopilot_run,
            "data_sources": ["Redis:config:pricing_strategy", "Redis:autopilot:last_run"]
        },
        "crm": {
            "new_leads_hr": new_leads_hr,
            "unassigned_leads": total_unassigned,
        },
        "lms": {
            "live_students": live_students,
        },
        "wellness": {
            "grapho_daily": grapho_submissions_today,
            "meditation_daily_mins": meditation_mins_today
        },
        "marketing": {
            "messages_24h": msgs_sent_24h,
            "active_workflows": active_workflows
        },
        "timestamp": now.isoformat()
    }

@router.get("/activity-feed", response_model=List[Dict[str, Any]])
def get_war_room_activity_feed(
    db: Session = Depends(deps.get_db),
    current_admin: User = Depends(deps.get_current_active_admin),
    limit: int = 20
) -> Any:
    """
    PHASE 5: WAR ROOM ENHANCEMENTS — REAL-TIME ACTIVITY FEED
    Combines activity logs, payments, and submissions into a unified stream.
    """
    activities = []
    
    # 1. Recent Activity Logs (Logins, Studies, etc.)
    logs = db.query(ActivityLog).order_by(desc(ActivityLog.timestamp)).limit(limit).all()
    for log in logs:
        activities.append({
            "type": "activity",
            "action": log.action,
            "user_name": log.user.full_name if log.user else "System",
            "timestamp": log.timestamp.isoformat(),
            "details": log.details or {}
        })
        
    # 2. Recent Payments
    payments = db.query(CoursePayment).filter(CoursePayment.status == "succeeded").order_by(desc(CoursePayment.succeeded_at)).limit(limit // 2).all()
    for p in payments:
        activities.append({
            "type": "payment",
            "action": "payment_succeeded",
            "user_name": p.user.full_name if p.user else "Unknown User",
            "timestamp": p.succeeded_at.isoformat() if p.succeeded_at else p.created_at.isoformat(),
            "amount": float(p.amount),
            "currency": p.currency or "INR"
        })
        
    # 3. Recent Submissions
    submissions = db.query(GraphoSubmission).order_by(desc(GraphoSubmission.completed_at)).limit(limit // 2).all()
    for s in submissions:
        activities.append({
            "type": "submission",
            "action": "grapho_submission",
            "user_name": s.user.full_name if s.user else "Student",
            "timestamp": s.completed_at.isoformat(),
            "status": s.status
        })
        
    # Sort all combined activities by timestamp descending
    activities.sort(key=lambda x: str(x.get("timestamp", "")), reverse=True)
    return activities[:limit]

@router.get("/revenue-ticker", response_model=Dict[str, Any])
def get_war_room_revenue_ticker(
    db: Session = Depends(deps.get_db),
    current_admin: User = Depends(deps.get_current_active_admin),
) -> Any:
    """
    PHASE 5: WAR ROOM ENHANCEMENTS — REVENUE TICKER
    Real-time revenue metrics for the ticker display.
    """
    now = datetime.utcnow()
    today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    hour_ago = now - timedelta(hours=1)
    
    today_total = db.query(func.sum(CoursePayment.amount)).filter(
        CoursePayment.status == "succeeded",
        CoursePayment.succeeded_at >= today_start
    ).scalar() or 0.0
    
    last_hour = db.query(func.sum(CoursePayment.amount)).filter(
        CoursePayment.status == "succeeded",
        CoursePayment.succeeded_at >= hour_ago
    ).scalar() or 0.0
    
    # Get last 5 transactions for the ticker
    recent_txs = db.query(CoursePayment).filter(
        CoursePayment.status == "succeeded"
    ).order_by(desc(CoursePayment.succeeded_at)).limit(5).all()
    
    return {
        "today_total": float(today_total),
        "last_hour": float(last_hour),
        "recent_transactions": [
            {
                "user": tx.user.full_name if tx.user else "Learner",
                "amount": float(tx.amount),
                "timestamp": tx.succeeded_at.isoformat() if tx.succeeded_at else tx.created_at.isoformat()
            } for tx in recent_txs
        ]
    }

@router.get("/alerts", response_model=List[Dict[str, Any]])
def get_critical_alerts(
    db: Session = Depends(deps.get_db),
    current_admin: User = Depends(deps.get_current_active_admin),
) -> Any:
    """
    Specific actionable alerts across domains.
    """
    alerts = []
    from app.core.system_guard import system_guard
    from app.models.security import SecurityAuditLog
    
    # System Mode Alerts
    mode = system_guard.get_mode()
    if mode != "NORMAL":
        alerts.append({
            "domain": "System",
            "level": "HIGH" if mode == "CRITICAL" else "MEDIUM",
            "message": f"SYSTEM IN {mode} MODE. Throttling active.",
            "action_link": "/admin/system-guard"
        })

    # Security Alerts
    security_incidents = db.query(SecurityAuditLog).filter(
        SecurityAuditLog.severity.in_(["WARNING", "CRITICAL"])
    ).order_by(desc(SecurityAuditLog.timestamp)).limit(5).all()
    
    for inc in security_incidents:
        alerts.append({
            "domain": "Security",
            "level": inc.severity,
            "message": f"{inc.event_type}: {inc.ip_address}",
            "action_link": "/admin/security-logs"
        })
    
    # Check for unassigned leads (CRM)
    unassigned = db.query(func.count(Lead.id)).filter(Lead.assigned_to_id.is_(None)).scalar() or 0
    if unassigned > 5:
        alerts.append({
            "domain": "CRM",
            "level": "MEDIUM",
            "message": f"{unassigned} leads waiting for assignment.",
            "action_link": "/admin/leads"
        })
        
    # Check for pending grapho analysis (Wellness)
    pending_grapho = db.query(func.count(GraphoSubmission.id)).filter(
        GraphoSubmission.status == "pending"
    ).scalar() or 0
    if pending_grapho > 0:
        alerts.append({
            "domain": "Wellness",
            "level": "LOW",
            "message": f"{pending_grapho} graphotherapy submissions need analysis.",
            "action_link": "/admin/graphotherapy"
        })

    return alerts
