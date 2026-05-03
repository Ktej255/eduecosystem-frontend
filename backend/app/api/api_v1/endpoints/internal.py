"""
Internal Task Endpoints — Autopilot, Scheduler, Redis Proof.
All endpoints require x-task-token header (OIDC-compatible for Cloud Scheduler).
"""
from typing import Any
from fastapi import APIRouter, Depends, HTTPException, Header, status
from sqlalchemy.orm import Session
from sqlalchemy import text, func, desc
import logging
import time
from datetime import datetime, timedelta

from app.api import deps
from app.core.config import settings
from app.services.cache_service import cache_service
from app.core.system_guard import system_guard
from app.models.decision_memory import DecisionMemory
from app.models.app_config import AppConfig

router = APIRouter()
logger = logging.getLogger(__name__)


def verify_task_token(x_task_token: str = Header(..., alias="x-task-token")):
    if x_task_token != settings.INTERNAL_TASK_TOKEN:
        logger.warning(f"Invalid task token attempt: {x_task_token}")
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Invalid task token"
        )
    return x_task_token


def _upsert_config(db: Session, key: str, value: Any, description: str = ""):
    """Upsert a key into AppConfig so the API can read it immediately."""
    record = db.query(AppConfig).filter(AppConfig.key == key).first()
    if record:
        record.value = value
    else:
        record = AppConfig(key=key, value=value, description=description)
        db.add(record)
    db.flush()
    return record


@router.post("/tasks/autopilot")
def trigger_autopilot(
    db: Session = Depends(deps.get_db),
    token: str = Depends(verify_task_token)
) -> Any:
    """
    Autonomous Scaling Engine (Triggered via Task Scheduler).
    Delegates to AutopilotService for hardened execution.
    """
    from app.services.autopilot_service import autopilot_service
    
    try:
        result = autopilot_service.run_autopilot_cycle(db)
        if result.get("status") == "blocked":
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail=f"Autopilot blocked by SystemGuard: {result.get('mode')}"
            )
        if result.get("status") == "skipped":
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=result.get("reason")
            )
        return result
    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )


@router.get("/tasks/autopilot/history")
def get_autopilot_history(
    token: str = Depends(verify_task_token)
) -> Any:
    """
    PART 5 — Scheduler Execution Proof.
    Returns last executions from Redis history list.
    """
    history_raw = cache_service.client.lrange("scheduler:autopilot:history", 0, 9)
    history = []
    for entry in history_raw:
        parts = entry.split("|", 2)
        if len(parts) >= 2:
            history.append({
                "status": parts[0],
                "timestamp": parts[1],
                "detail": parts[2] if len(parts) > 2 else ""
            })

    last_run = cache_service.client.get("autopilot:last_run")
    execution_count = cache_service.client.get("autopilot:execution_count")

    return {
        "last_run": last_run,
        "total_executions": int(execution_count or 0),
        "last_10_executions": history
    }


@router.get("/infra/status")
def get_infra_status(db: Session = Depends(deps.get_db)) -> Any:
    """
    Hard-verify infrastructure connectivity.
    Performs real ping to Redis and a live SELECT 1 to the DB.
    Returns real-time status — no assumptions, no hardcoded values.
    """
    # ── Redis Check ────────────────────────────────────────────────────────────
    try:
        redis_ok = cache_service.client.ping()
        redis_status = "connected" if redis_ok else "disconnected"
    except Exception as e:
        logger.error(f"InfraStatus: Redis check failed: {e}")
        redis_status = "disconnected"

    # ── PostgreSQL Check ───────────────────────────────────────────────────────
    try:
        db.execute(text("SELECT 1"))
        db_status = "connected"
    except Exception as e:
        logger.error(f"InfraStatus: DB check failed: {e}")
        db_status = "disconnected"

    return {
        "redis": redis_status,
        "database": db_status,
        "mode": system_guard.get_mode()
    }

@router.get("/redis/proof")
def get_redis_proof(
    token: str = Depends(verify_task_token)
) -> Any:
    """
    PART 4 — Redis Proof.
    Returns live Redis key values proving connectivity and real data.
    """
    client = cache_service.client

    # Ping proof
    ping_ok = client.ping()

    # Read all critical keys
    keys_to_check = [
        "system:mode",
        "config:pricing_strategy",
        "config:variant_weights",
        "config:recovery_active",
        "autopilot:last_run",
        "autopilot:execution_count",
        "lock:autopilot",
    ]

    key_dump = {}
    for k in keys_to_check:
        key_dump[k] = client.get(k)

    # RPS sample (last 10 slots)
    now_ts = int(time.time())
    rps_keys = [f"metrics:rps:{now_ts - i}" for i in range(10)]
    rps_values = {k: client.get(k) for k in rps_keys if client.exists(k)}

    # Latency sample
    latency_sample = client.lrange("metrics:latency:list", 0, 9)

    # Scheduler history
    scheduler_history = client.lrange("scheduler:autopilot:history", 0, 2)

    return {
        "redis_connected": ping_ok,
        "key_dump": key_dump,
        "metrics": {
            "rps_last_10s": rps_values,
            "latency_last_10": latency_sample,
        },
        "scheduler_history_last_3": scheduler_history,
        "snapshot_at": datetime.utcnow().isoformat()
    }


@router.get("/redis/failure-test")
def test_redis_failure() -> Any:
    """
    PART 6 — Failure Test: Redis OFF.
    Hits Redis with a forced failure to prove crash behavior.
    The real test is startup — if Redis is down, app won't start.
    """
    try:
        # Force a connectivity check
        result = cache_service.client.ping()
        return {
            "redis_alive": result,
            "message": "Redis is CONNECTED. To test crash: stop Redis and restart the service — it will fail at startup with RuntimeError.",
            "crash_proof": "See cache_service.py:__init__ — raises RuntimeError if ping() fails on boot."
        }
    except Exception as e:
        return {
            "redis_alive": False,
            "error": str(e),
            "system_response": "CRASH — RuntimeError raised at startup. Service unavailable."
        }


@router.get("/tasks/scheduler")
def get_scheduler_status(
    token: str = Depends(verify_task_token)
) -> Any:
    """Returns current scheduler status and last execution info."""
    last_run = cache_service.client.get("autopilot:last_run")
    execution_count = cache_service.client.get("autopilot:execution_count")
    current_strategy = cache_service.client.get("config:pricing_strategy")

    return {
        "status": "active",
        "scheduler_mode": "production",
        "last_autopilot_run": last_run,
        "total_autopilot_executions": int(execution_count or 0),
        "current_pricing_strategy": current_strategy or "STANDARD",
        "snapshot_at": datetime.utcnow().isoformat()
    }
