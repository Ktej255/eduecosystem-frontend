import json
import logging
from typing import Any, Optional, Union
import redis
from app.core.config import settings

logger = logging.getLogger(__name__)

class CacheService:
    """
    Redis-backed Caching for the Adaptive Learning Engine (Phase 13).
    Reduces database load for high-frequency dashboard signals.
    """

    def __init__(self):
        try:
            self.client = redis.from_url(settings.REDIS_URL, decode_responses=True)
            # Test connection
            self.client.ping()
            logger.info("CacheService: Successfully connected to Redis.")
        except Exception as e:
            logger.critical(f"CacheService: Redis connection FATAL: {e}")
            raise RuntimeError(f"Redis is required but could not be reached at {settings.REDIS_URL}")

    def get(self, key: str) -> Optional[Any]:
        """Fetch from cache. NO SILENT FALLBACK."""
        data = self.client.get(key)
        return json.loads(data) if data else None

    def set(self, key: str, value: Any, expire_seconds: int = 120) -> bool:
        """Set in cache with TTL. NO SILENT FALLBACK."""
        self.client.set(key, json.dumps(value), ex=expire_seconds)
        return True

    def delete(self, key: str) -> bool:
        """Invalidate cache. NO SILENT FALLBACK."""
        self.client.delete(key)
        return True

    def invalidate_student_dash(self, student_id: int):
        """Invalidate all dashboard keys for a student."""
        pattern = f"student_dash:{student_id}:*"
        keys = self.client.keys(pattern)
        if keys:
            self.client.delete(*keys)
            logger.debug(f"Invalidated {len(keys)} dashboard keys for student {student_id}")

cache_service = CacheService()
