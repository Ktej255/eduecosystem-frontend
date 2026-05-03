"""
GraphotherapyMonitor — Real-time request telemetry.
- Latency + error counters written to Redis sliding windows.
- Rate limiting enforced via Redis (no in-memory dicts).
- get_health_status() reads live Redis data only — no hardcoded stubs.
"""
import time
import logging
from typing import Dict, Any
from .constants import MAX_REQUESTS_PER_MINUTE

logger = logging.getLogger(__name__)

LATENCY_LIST_KEY = "metrics:latency:list"
LATENCY_MAX_ENTRIES = 100
RATE_LIMIT_PREFIX = "grapho:rate:"
RATE_LIMIT_WINDOW = 60  # seconds
ERROR_COUNTER_KEY = "grapho:stats:total_errors"
VALIDATION_FAIL_KEY = "grapho:stats:validation_failures"
REQUEST_COUNTER_KEY = "grapho:stats:total_requests"


def _redis():
    """Lazy import to avoid circular deps at module load time."""
    from app.services.cache_service import cache_service
    return cache_service.client


class GraphotherapyMonitor:
    def __init__(self):
        self._start_time = time.time()

    def track_request(self, user_id: str) -> bool:
        """Increment global request counter and enforce per-user rate limit via Redis."""
        try:
            client = _redis()
            client.incr(REQUEST_COUNTER_KEY)
            return self._check_rate_limit(user_id, client)
        except Exception as e:
            logger.warning(f"[MONITOR] track_request Redis write failed: {e}")
            return True  # Fail-open on Redis error — don't block valid requests

    def track_latency(self, ms: int):
        """Push latency sample to Redis list (capped at 100 entries)."""
        try:
            client = _redis()
            client.lpush(LATENCY_LIST_KEY, str(ms))
            client.ltrim(LATENCY_LIST_KEY, 0, LATENCY_MAX_ENTRIES - 1)
            if ms > 500:
                logger.warning(f"[MONITOR] High Latency Alert: {ms}ms")
        except Exception as e:
            logger.warning(f"[MONITOR] track_latency Redis write failed: {e}")

    def track_error(self, is_validation: bool = False):
        """Increment error counters in Redis."""
        try:
            client = _redis()
            if is_validation:
                client.incr(VALIDATION_FAIL_KEY)
            else:
                client.incr(ERROR_COUNTER_KEY)
        except Exception as e:
            logger.warning(f"[MONITOR] track_error Redis write failed: {e}")

    def get_health_status(self) -> Dict[str, Any]:
        """
        Returns live health status from Redis.
        All metrics are sourced from Redis counters and lists — no hardcoded values.
        """
        uptime = int(time.time() - self._start_time)

        try:
            client = _redis()

            total_requests = int(client.get(REQUEST_COUNTER_KEY) or 0)
            total_errors = int(client.get(ERROR_COUNTER_KEY) or 0)

            latency_raw = client.lrange(LATENCY_LIST_KEY, 0, LATENCY_MAX_ENTRIES - 1)
            if latency_raw:
                latency_values = [float(v) for v in latency_raw]
                avg_latency = round(sum(latency_values) / len(latency_values), 2)
            else:
                avg_latency = 0.0

            error_rate = (
                f"{(total_errors / max(total_requests, 1)) * 100:.2f}%"
            )

            # Real Redis ping
            redis_ok = client.ping()

            # Real DB check
            db_ok = False
            try:
                from app.db.session import SessionLocal
                from sqlalchemy import text
                with SessionLocal() as tmp_db:
                    tmp_db.execute(text("SELECT 1"))
                    db_ok = True
            except Exception:
                pass

            return {
                "status": "ok" if total_errors < 10 else "degraded",
                "version": "v1.2",
                "uptime_seconds": uptime,
                "metrics": {
                    "avg_latency_ms": avg_latency,
                    "total_requests": total_requests,
                    "error_rate": error_rate,
                },
                "dependencies": {
                    "redis": "connected" if redis_ok else "disconnected",
                    "database": "connected" if db_ok else "disconnected",
                },
                "data_source": "Redis:grapho:stats:*",
            }

        except Exception as e:
            logger.error(f"[MONITOR] get_health_status failed: {e}")
            return {
                "status": "error",
                "uptime_seconds": uptime,
                "error": str(e),
                "dependencies": {
                    "redis": "unknown",
                    "database": "unknown",
                },
            }

    def _check_rate_limit(self, user_id: str, client) -> bool:
        """Sliding-window rate limit enforced in Redis (no in-memory state)."""
        key = f"{RATE_LIMIT_PREFIX}{user_id}"
        now = time.time()
        window_start = now - RATE_LIMIT_WINDOW

        # Remove timestamps outside the window, then count
        client.zremrangebyscore(key, "-inf", window_start)
        count = client.zcard(key)

        if count >= MAX_REQUESTS_PER_MINUTE:
            logger.warning(f"[MONITOR] Rate limit hit for user={user_id}")
            return False

        # Add current timestamp as member+score
        client.zadd(key, {str(now): now})
        client.expire(key, RATE_LIMIT_WINDOW + 5)  # auto-cleanup
        return True


monitor = GraphotherapyMonitor()
