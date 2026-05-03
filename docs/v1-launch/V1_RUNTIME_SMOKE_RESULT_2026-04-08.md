# V1 Runtime Smoke Result (April 8, 2026)

Command:
- `python backend/scripts/v1_runtime_smoke.py`

Result:
- **PASS** (no uncaught `500` and no unhandled exceptions)

Observed status highlights:
- `200`: `/health`, `/health/detailed`, `/api/v1/status`
- `400` (expected invalid credentials): `/api/v1/login/access-token`, `/api/v1/auth/access-token`
- `200`: `/api/v1/admin/overview`, `/api/v1/admin/users`, `/api/v1/admin/courses`
- `200`: `/api/v1/leads`, `/api/v1/marketing-automation/dashboard`
- `200`: `/api/v1/live-classes/admin/command-center`
- `200`: `/api/v1/live-classes/teacher/command-center`
- `200`: `/api/v1/live-classes/public/teacher/1/booking`
- `200`: `/api/v1/live-classes/webinars`

Runtime note:
- Local verification now uses in-memory SQLite fallback when on-disk SQLite files are unreadable in this environment.
