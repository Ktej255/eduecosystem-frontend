import time
import logging
from typing import Callable
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
from app.core.rate_limiter import rate_limiter
from app.core.system_guard import system_guard

# ---------------------------------------------------------------------------
# SlowAPI-compatible limiter + RATE_LIMITS used by endpoint decorators
# ---------------------------------------------------------------------------
try:
    from slowapi import Limiter
    from slowapi.util import get_remote_address
    limiter = Limiter(key_func=get_remote_address, default_limits=["200/minute"])
except Exception:  # slowapi not installed – create a no-op stub
    class _NoopLimiter:  # pragma: no cover
        def limit(self, *args, **kwargs):
            def decorator(func):
                return func
            return decorator
    limiter = _NoopLimiter()

RATE_LIMITS = {
    "auth": "10/minute",
    "analyze": "10/minute",
    "upload": "20/minute",
    "default": "100/minute",
}

logger = logging.getLogger(__name__)

class RateLimitMiddleware(BaseHTTPMiddleware):
    """
    Distributed Rate Limiting Middleware.
    Enforces global and endpoint-specific limits using Redis Sliding Window.
    """
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        # Get identifier (IP address)
        client_ip = request.client.host if request.client else "unknown"
        path = request.url.path
        
        # 1. Define Limits
        limit = 100
        window = 60
        
        if path.startswith("/api/v1/grapho/analyze"):
            limit = 10
            
            # System Guard check: Handle CRITICAL and SAFE_MODE
            current_mode = system_guard.get_mode()
            
            if current_mode == "CRITICAL":
                # Paid user bypass
                is_paid = request.headers.get("x-paid-user", "false").lower() == "true"
                if not is_paid:
                    return JSONResponse(
                        status_code=503,
                        content={"detail": "Analysis service restricted to paid users during critical system state."}
                    )
            
            if current_mode == "SAFE_MODE":
                limit = 2 # Heavy throttling
                
        elif path.startswith("/api/v1/status"):
            limit = 30
            
        # 2. Check Limit
        allowed, remaining = rate_limiter.is_allowed(client_ip, limit, window)
        
        if not allowed:
            logger.warning(f"Rate limit exceeded for {client_ip} on {path}")
            return JSONResponse(
                status_code=429,
                content={"detail": "Too many requests. Please try again later."},
                headers={"X-RateLimit-Limit": str(limit), "X-RateLimit-Remaining": "0"}
            )
            
        # 3. Process Request
        response = await call_next(request)
        
        # 4. Add Headers
        response.headers["X-RateLimit-Limit"] = str(limit)
        response.headers["X-RateLimit-Remaining"] = str(remaining)
        
        return response
