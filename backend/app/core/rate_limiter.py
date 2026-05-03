import time
import logging
from typing import Tuple, Optional
from app.services.cache_service import cache_service

logger = logging.getLogger(__name__)

class SlidingWindowLimiter:
    """
    Redis-based Sliding Window Rate Limiter.
    Uses ZSET to track timestamps and Lua to ensure atomicity.
    """
    
    LUA_SCRIPT = """
    local key = KEYS[1]
    local now = tonumber(ARGV[1])
    local window = tonumber(ARGV[2])
    local limit = tonumber(ARGV[3])
    local clear_before = now - window
    
    -- Remove old timestamps
    redis.call('ZREMRANGEBYSCORE', key, 0, clear_before)
    
    -- Count remaining
    local current_count = redis.call('ZCARD', key)
    
    if current_count < limit then
        redis.call('ZADD', key, now, now)
        redis.call('EXPIRE', key, window)
        return {1, limit - current_count - 1}
    else
        return {0, 0}
    end
    """

    def __init__(self):
        self.lua_script = None
        if cache_service.client:
            self.lua_script = cache_service.client.register_script(self.LUA_SCRIPT)

    def is_allowed(
        self, 
        identifier: str, 
        limit: int = 60, 
        window_seconds: int = 60
    ) -> Tuple[bool, int]:
        """
        Check if the identifier is allowed to make a request.
        Returns: (is_allowed, remaining_quota)
        """
        if not self.lua_script:
            # This should not happen with Phase 1 enforcement
            logger.critical("RateLimiter: Lua script not registered. Redis failure suspected.")
            return True, limit

        key = f"rl:{identifier}"
        now = time.time()
        
        try:
            allowed, remaining = self.lua_script(keys=[key], args=[now, window_seconds, limit])
            return bool(allowed), int(remaining)
        except Exception as e:
            logger.error(f"RateLimiter: Execution error: {e}")
            # Fail open but log heavily if this is a transient Redis error
            return True, limit

rate_limiter = SlidingWindowLimiter()
