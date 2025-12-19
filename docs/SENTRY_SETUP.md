# Sentry Error Tracking Setup Guide

This guide covers setting up Sentry for error tracking and performance monitoring in both backend and frontend.

## Table of Contents
- [Creating a Sentry Account](#creating-a-sentry-account)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Testing Error Tracking](#testing-error-tracking)
- [Configuration Options](#configuration-options)

---

## Creating a Sentry Account

### 1. Sign Up for Sentry

1. Go to [sentry.io](https://sentry.io/)
2. Click "Get Started" or "Sign Up"
3. Choose a plan:
   - **Free**: Up to 5K errors/month, 10K transactions/month
   - **Team**: $26/month - More errors and features
   - **Business**: Custom pricing

### 2. Create a Project

1. After signing up, create a new project
2. **Platform**: Select "Python" for backend, "Next.js" for frontend
3. **Project Name**: `eduecosystem-backend` and `eduecosystem-frontend`
4. **Team**: Default or create a new team

### 3. Get Your DSN

After creating the project, you'll see a **DSN (Data Source Name)**:
```
https://<key>@<organization>.ingest.sentry.io/<project-id>
```

Save this DSN - you'll need it for configuration.

---

## Backend Setup

### 1. Install Dependencies

Already installed via `requirements.txt`:
```bash
pip install sentry-sdk[fastapi]
```

### 2. Configure Environment Variables

Add to `.env` or production environment:
```bash
# Sentry Configuration
SENTRY_DSN=https://<your-key>@<org>.ingest.sentry.io/<project-id>
APP_VERSION=2.0.0
ENVIRONMENT=production  # or development, staging
```

### 3. Verify Integration

The Sentry integration is automatically initialized on startup via:
- `backend/app/core/sentry.py` - Sentry configuration
- `backend/main.py` - Initialization in startup event

### 4. Test Backend Error Tracking

Create a test endpoint to verify Sentry is working:
```python
@app.get("/test-sentry")
def test_sentry():
    """Test Sentry error tracking"""
    try:
        1 / 0
    except Exception as e:
        from app.core.sentry import capture_exception
        capture_exception(e, context={"test": "manual error"})
        raise
```

Visit `/test-sentry` and check your Sentry dashboard for the error.

---

## Frontend Setup

### 1. Install Dependencies

```bash
cd frontend
npm install @sentry/nextjs
```

### 2. Configure Environment Variables

Add to `frontend/.env.local`:
```bash
NEXT_PUBLIC_SENTRY_DSN=https://<your-key>@<org>.ingest.sentry.io/<project-id>
NEXT_PUBLIC_ENVIRONMENT=development  # or production
```

### 3. Initialize Sentry

Sentry is automatically initialized via:
- `frontend/sentry.client.config.ts` - Client-side config
- `frontend/sentry.server.config.ts` - Server-side config

### 4. Update next.config.ts

Wrap your Next.js config with Sentry:
```typescript
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  // ... your existing config
};

module.exports = withSentryConfig(
  nextConfig,
  {
    silent: true, // Suppresses source map uploading logs
    org: "your-org",
    project: "eduecosystem-frontend",
  },
  {
    hideSourceMaps: true,
    disableLogger: true,
  }
);
```

### 5. Test Frontend Error Tracking

Create a test component:
```tsx
'use client';

export default function TestSentry() {
  const throwError = () => {
    throw new Error("Test Sentry Error!");
  };

  return <button onClick={throwError}>Test Sentry</button>;
}
```

---

## Testing Error Tracking

### Backend Tests

1. **Test automatic error capture**:
   ```bash
   curl http://localhost:8000/test-sentry
   ```

2. **Test manual error capture**:
   ```python
   from app.core.sentry import capture_message
   capture_message("Test message", level="warning")
   ```

3. **Test user context**:
   ```python
   from app.core.sentry import set_user_context
   set_user_context(user_id=1, email="test@example.com")
   ```

### Frontend Tests

1. **Test client-side error**:
   - Click the test button
   - Check browser console
   - Verify in Sentry dashboard

2. **Test server-side error**:
   - Trigger an error in a server component
   - Check Sentry for SSR errors

### Verify in Sentry Dashboard

1. Go to your Sentry project
2. Click "Issues" to see captured errors
3. Click on an issue to see:
   - Stack trace
   - User context
   - Breadcrumbs (trail of events)
   - Device/browser info
   - Performance data

---

## Configuration Options

### Error Sampling

Control which errors are sent:

**Backend** (`backend/app/core/sentry.py`):
```python
sample_rate=1.0,  # 100% of errors
```

**Frontend** (already configured):
- Production: 100% of errors
- Development: 100% of errors

### Performance Monitoring

Control performance transaction sampling:

**Backend**:
```python
traces_sample_rate=0.1,  # 10% in production
```

**Frontend**:
```typescript
tracesSampleRate: 0.1, // 10% in production
```

### Session Replay (Frontend Only)

Capture recordings when errors occur:
```typescript
replaysSessionSampleRate: 0.1,    // 10% of all sessions
replaysOnErrorSampleRate: 1.0,    // 100% of error sessions
```

### Filtering Errors

**Backend** (`before_send_hook` in `sentry.py`):
- Filters health check errors
- Filters validation errors
- Filters 404 errors

**Frontend** (`beforeSend` in `sentry.client.config.ts`):
- Filters browser extension errors
- Filters analytics endpoint errors

---

## Alerts & Notifications

### Setting Up Alerts

1. Go to **Settings → Alerts**
2. Create alert rules:
   - **New Issue Alert**: Notified when new error type appears
   - **Regression Alert**: Notified when resolved issue reappears
   - **Spike Alert**: Notified when error rate spikes

### Notification Channels

Configure where to send alerts:
- Email
- Slack
- Discord
- PagerDuty
- Custom webhooks

### Example Alert Rule

**Name**: "Critical Backend Errors"
- **Conditions**: 
  - Issue is first seen
  - OR Issue level is fatal or error
- **Filters**:
  - Environment equals production
- **Actions**:
  - Send notification to email
  - Send notification to Slack #alerts

---

## Release Tracking

### Backend

Already configured via `APP_VERSION`:
```python
release="2.0.0"
```

### Frontend

Add to `package.json`:
```json
{
  "version": "2.0.0"
}
```

Then in Sentry config:
```typescript
release: process.env.npm_package_version,
```

### Benefits

- Track which version introduced an error
- See error trends across releases
- Auto-resolve issues in new releases

---

## Best Practices

### 1. Use Breadcrumbs

Add context to errors:
```python
from app.core.sentry import add_breadcrumb

add_breadcrumb(
    message="User started checkout",
    category="user_action",
    level="info",
    data={"cart_items": 3}
)
```

### 2. Set User Context

Always set user context when authenticated:
```python
from app.core.sentry import set_user_context

# After user login
set_user_context(
    user_id=current_user.id,
    email=current_user.email,
    username=current_user.username
)
```

### 3. Add Custom Context

For debugging complex issues:
```python
from app.core.sentry import capture_exception

try:
    process_payment(order)
except Exception as e:
    capture_exception(e, context={
        "order_id": order.id,
        "payment_method": "stripe",
        "amount": order.total
    })
    raise
```

### 4. Monitor Performance

Use transactions for key operations:
```python
import sentry_sdk

with sentry_sdk.start_transaction(op="task", name="process_large_file"):
    # Your code here
    pass
```

### 5. Source Maps (Frontend)

Upload source maps for better stack traces:
```bash
npx @sentry/wizard@latest -i nextjs
```

---

## Troubleshooting

### Backend: Sentry Not Initialized

**Symptom**: No errors appearing in Sentry

**Solutions**:
1. Check `SENTRY_DSN` is set correctly
2. Check logs for initialization errors
3. Verify network connectivity to Sentry
4. Test with manual error: `curl /test-sentry`

### Frontend: Source Maps Missing

**Symptom**: Minified stack traces

**Solutions**:
1. Run Sentry wizard: `npx @sentry/wizard@latest`
2. Set `SENTRY_AUTH_TOKEN` environment variable
3. Enable source map upload in build config

### High Error Volume

**Symptom**: Too many errors

**Solutions**:
1. Add filters in `before_send_hook`
2. Create ignore rules in Sentry dashboard
3. Reduce `sample_rate` for non-critical errors
4. Fix the actual errors! 😄

---

## Production Checklist

- [ ] Sentry account created
- [ ] Backend project created
- [ ] Frontend project created
- [ ] `SENTRY_DSN` configured in production
- [ ] Test errors appearing in dashboard
- [ ] Alert rules configured
- [ ] Slack/email notifications working
- [ ] Source maps uploaded (frontend)
- [ ] Release tracking enabled
- [ ] Team members added to Sentry

---

## Cost Optimization

### Free Tier Limits
- 5,000 errors/month
- 10,000 performance transactions/month

### Tips to Stay Within Limits

1. **Sample performance data**: Set `traces_sample_rate=0.1` in production
2. **Filter noisy errors**: Add filters in `before_send_hook`
3. **Use error grouping**: Sentry groups similar errors automatically
4. **Set up quotas**: Sentry → Settings → Quotas
5. **Delete old projects**: Remove dev/test projects

---

## Additional Resources

- [Sentry Python SDK Docs](https://docs.sentry.io/platforms/python/)
- [Sentry Next.js SDK Docs](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Best Practices](https://docs.sentry.io/product/best-practices/)
- [Performance Monitoring Guide](https://docs.sentry.io/product/performance/)
