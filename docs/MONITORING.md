# Monitoring & Logging Setup Guide

## Overview
This guide covers setting up monitoring, logging, error tracking, and observability for the Holistic Learning Ecosystem in production.

---

## 1. Application Logging

### Backend (FastAPI)

#### Structured Logging Setup

```python
# backend/app/core/logging.py
import logging
import sys
from datetime import datetime

def setup_logging(environment: str = "production"):
    """Configure structured logging"""
    
    # Create logger
    logger = logging.getLogger("eduecosystem")
    logger.setLevel(logging.INFO if environment == "production" else logging.DEBUG)
    
    # Create console handler
    handler = logging.StreamHandler(sys.stdout)
    handler.setLevel(logging.INFO)
    
    # Create formatter (JSON for production, readable for dev)
    if environment == "production":
        formatter = logging.Formatter(
            '{"time": "%(asctime)s", "level": "%(levelname)s", "module": "%(module)s", "message": "%(message)s"}'
        )
    else:
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
    
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    
    return logger

# Usage in main.py
from app.core.logging import setup_logging

logger = setup_logging(settings.ENVIRONMENT)
```

#### Request Logging Middleware

```python
# backend/middleware/logging.py
import time
import uuid
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request

class RequestLoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Generate unique request ID
        request_id = str(uuid.uuid4())
        request.state.request_id = request_id
        
        # Log request
        start_time = time.time()
        logger.info(f"Request started", extra={
            "request_id": request_id,
            "method": request.method,
            "path": request.url.path,
            "client_ip": request.client.host,
        })
        
        # Process request
        response = await call_next(request)
        
        # Log response
        duration = time.time() - start_time
        logger.info(f"Request completed", extra={
            "request_id": request_id,
            "status_code": response.status_code,
            "duration_ms": round(duration * 1000, 2),
        })
        
        # Add request ID to response headers
        response.headers["X-Request-ID"] = request_id
        return response

# Add to main.py
app.add_middleware(RequestLoggingMiddleware)
```

#### What to Log

**DO Log:**
- Request start/end with duration
- Authentication successes/failures (without passwords)
- Authorization failures
- Database query errors
- External API calls
- Background task execution
- Application errors with stack traces

**DON'T Log:**
- Passwords (even hashed)
- JWT tokens
- API keys
- Personal identifiable information (PII)
- Credit card numbers

---

## 2. Error Tracking with Sentry

### Setup

```bash
pip install sentry-sdk[fastapi]
```

```python
# backend/main.py
import sentry_sdk
from sentry_sdk.integrations.fastapi import FastApiIntegration
from sentry_sdk.integrations.sqlalchemy import SqlalchemyIntegration

sentry_sdk.init(
    dsn=settings.SENTRY_DSN,
    environment=settings.ENVIRONMENT,
    traces_sample_rate=0.1,  # 10% of requests for performance monitoring
    integrations=[
        FastApiIntegration(),
        SqlalchemyIntegration(),
    ],
)
```

### Frontend (Next.js)

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  tracesSampleRate: 0.1,
  
  beforeSend(event, hint) {
    // Filter out non-errors
    if (event.level === 'info' || event.level === 'log') {
      return null
    }
    return event
  },
})
```

### Configuration

**Environment Variables:**
```bash
# Backend
SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx

# Frontend
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
```

---

## 3. Performance Monitoring

### Backend APM

#### Using Sentry Performance

Already configured in Sentry setup above. Monitors:
- API endpoint response times
- Database query performance
- External API call latency

#### Custom Performance Tracking

```python
from contextvars import ContextVar
import time

# Track custom operations
operation_timer = ContextVar('operation_timer', default=None)

def track_operation(operation_name: str):
    def decorator(func):
        async def wrapper(*args, **kwargs):
            start = time.time()
            try:
                result = await func(*args, **kwargs)
                return result
            finally:
                duration = time.time() - start
                logger.info(f"Operation: {operation_name}", extra={
                    "duration_ms": round(duration * 1000, 2),
                    "operation": operation_name
                })
        return wrapper
    return decorator

# Usage
@track_operation("generate_certificate")
async def generate_certificate(user_id: int):
    # ... implementation
    pass
```

### Frontend Performance

#### Web Vitals Tracking

```typescript
//pages/_app.tsx
import { NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    const body = JSON.stringify(metric)
    const url = '/api/analytics/web-vitals'
    
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, { body, method: 'POST', keepalive: true })
    }
  }
}
```

#### React Profiler

```tsx
import { Profiler } from 'react'

const onRenderCallback = (
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
) => {
  console.log(`${id} (${phase}) took ${actualDuration}ms`)
}

<Profiler id="CourseList" onRender={onRenderCallback}>
  <CourseList courses={courses} />
</Profiler>
```

---

## 4. Database Monitoring

### Query Performance Logging

```python
# Enable SQL logging in development
import logging
logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)
```

### Slow Query Monitoring

```python
from sqlalchemy import event
from sqlalchemy.engine import Engine
import time

@event.listens_for(Engine, "before_cursor_execute")
def before_cursor_execute(conn, cursor, statement, parameters, context, executemany):
    conn.info.setdefault('query_start_time', []).append(time.time())

@event.listens_for(Engine, "after_cursor_execute")
def after_cursor_execute(conn, cursor, statement, parameters, context, executemany):
    total = time.time() - conn.info['query_start_time'].pop(-1)
    
    # Log slow queries (> 100ms)
    if total > 0.1:
        logger.warning(f"Slow query detected", extra={
            "duration_ms": round(total * 1000, 2),
            "query": statement[:200],  # Truncate long queries
        })
```

### PostgreSQL Monitoring (Production)

Monitor these metrics:
- Connection pool usage
- Cache hit ratio
- Index usage
- Slow queries
- Deadlocks

**Tools:**
- pgAdmin
- pg_stat_statements extension
- PostgreSQL logs

---

## 5. Uptime Monitoring

### Options

1. **UptimeRobot** (Free tier available)
   - Monitor `/health` endpoint
   - Alert via email/SMS on downtime
   - 5-minute check intervals

2. **Better Uptime** (Paid)
   - More frequent checks
   - Status page
   - Advanced alerting

3. **Pingdom** (Paid)
   - Real user monitoring
   - Transaction monitoring
   - Detailed reports

### Health Check Endpoint

```python
# backend/main.py
from sqlalchemy import text

@app.get("/health")
async def health_check(db: Session = Depends(get_db)):
    """Health check endpoint for uptime monitoring"""
    try:
        # Check database connection
        db.execute(text("SELECT 1"))
        
        return {
            "status": "healthy",
            "timestamp": datetime.utcnow().isoformat(),
            "services": {
                "database": "up",
                "api": "up"
            }
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=503, detail="Service unavailable")
```

---

## 6. Alerting

### Sentry Alerts

Configure in Sentry dashboard:
- **Error Rate**: Alert if error rate > 1% of requests
- **New Issues**: Email on first occurrence of new error
- **Performance**: Alert if P95 response time > 500ms

### Custom Alerts

```python
def send_alert(severity: str, message: str):
    """Send alert via email/Slack"""
    if severity == "critical":
        # Send immediate notification
        send_slack_webhook({
            "text": f"🚨 CRITICAL: {message}",
            "channel": "#alerts-critical"
        })
        send_email(
            to="ops@example.com",
            subject=f"CRITICAL Alert: {message}",
            body=message
        )
    elif severity == "warning":
        # Log warning
        logger.warning(message)

# Usage
if failed_logins > 10:
    send_alert("warning", f"High failed login attempts: {failed_logins}")
```

---

## 7. Metrics & Dashboards

### Application Metrics

Track the following:
- **Request Rate**: Requests per minute
- **Error Rate**: Errors per minute / total requests
- **Response Time**: P50, P95, P99 latency
- **Database Connections**: Active connections
- **Cache Hit Rate**: % of cache hits

### Dashboard Tools

1. **Grafana + Prometheus** (Self-hosted)
2. **DataDog** (Paid, comprehensive)
3. **New Relic** (Paid)
4. **Sentry Performance** (Included with Sentry)

---

## 8. Log Aggregation

### Options

1. **CloudWatch Logs** (AWS)
2. **Google Cloud Logging** (GCP)
3. **Loggly** (Paid)
4. **Papertrail** (Paid)
5. **ELK Stack** (Self-hosted - Elasticsearch, Logstash, Kibana)

### Log Retention

- **Application Logs**: 30 days
- **Access Logs**: 90 days
- **Error Logs**: 180 days
- **Security Logs**: 1 year

---

## 9. Monitoring Checklist

### Production Deployment
- [ ] Sentry configured for error tracking
- [ ] Structured logging enabled
- [ ] Request logging middleware added
- [ ] Health check endpoint created
- [ ] Uptime monitoring service configured
- [ ] Performance monitoring enabled
- [ ] Database query logging configured
- [ ] Web vitals tracking implemented

### Alerting
- [ ] Critical error alerts configured
- [ ] High error rate alerts configured
- [ ] Slow response time alerts configured
- [ ] Uptime alerts configured (email/SMS)
- [ ] On-call rotation defined

### Dashboards
- [ ] Request rate dashboard
- [ ] Error rate dashboard
- [ ] Response time dashboard (P50, P95, P99)
- [ ] Database performance dashboard
- [ ] System resource dashboard (CPU, memory)

---

## 10. Best Practices

### Logging
✅ Use structured logging (JSON in production)  
✅ Include request IDs for tracing  
✅ Log levels: DEBUG (dev), INFO (prod), WARN, ERROR  
✅ Never log sensitive data  
✅ Use log aggregation service  

### Error Tracking
✅ Configure error sampling to avoid noise  
✅ Set up alerts for critical errors  
✅ Add context to errors (user ID, request ID)  
✅ Review errors weekly  
✅ Triage and fix critical issues immediately  

### Performance
✅ Monitor response times (P95, P99)  
✅ Track database query performance  
✅ Alert on performance degradation  
✅ Regular performance audits (monthly)  

### Uptime
✅ Monitor from multiple locations  
✅ Alert immediately on downtime  
✅ Have runbook for common issues  
✅ Test failover procedures quarterly  

---

## Sample Monitoring Stack

**Small Project (< 10K users):**
- Sentry (errors + performance)
- UptimeRobot (uptime monitoring)
- Vercel Analytics (frontend metrics)
- PostgreSQL logs (database monitoring)

**Medium Project (10K-100K users):**
- Sentry (errors + performance)
- Better Uptime (uptime monitoring)
- DataDog or New Relic (APM)
- CloudWatch Logs (log aggregation)

**Large Project (100K+ users):**
- Sentry (errors)
- DataDog or New Relic (APM + infrastructure)
- PagerDuty (alerting + on-call)
- ELK Stack or Splunk (log aggregation)
- Custom Grafana dashboards

---

## Quick Start Guide

1. **Sign up for Sentry** (free tier)
2. **Add Sentry to backend & frontend** (see code above)
3. **Set up uptime monitoring** (UptimeRobot free tier)
4. **Create `/health` endpoint**
5. **Enable structured logging**
6. **Configure alerts** (email for critical errors)
7. **Create basic dashboard** (request rate, error rate, response time)

---

**Last Updated:** 2025-11-22  
**Version:** 1.0
