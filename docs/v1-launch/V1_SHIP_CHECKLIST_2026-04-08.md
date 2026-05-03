# Teacher/Admin V1 Ship Checklist (April 8, 2026)

This checklist evaluates **current visible sidebar routes only**.
Count scope for this checklist: `TeacherSidebar` + `TeacherMobileSidebar` + `AdminSidebar`.

## Classification Rule

- `Ready`: route file exists and page appears surface-loadable in current scan.
- `Blocked-by-DB`: retained as a fallback status if a future environment regression blocks runtime validation.

## Route Integrity

- Total visible routes scanned: `86`
- Missing route files: `0`
- Teacher visible routes: `63`
- Admin visible routes: `23`

## Status Summary

- `Ready`: `86`
- `Blocked-by-DB`: `0`

## Ready Routes

All currently visible teacher/admin sidebar routes are marked `Ready` for V1 surface integrity under this checklist.

## Runtime Gate (Latest)

- `backend/scripts/v1_release_gate.py` => **PASS**
- `backend/scripts/v1_runtime_smoke.py` => **PASS**
- Interpretation:
  - health/status endpoints are stable (`200`)
  - auth invalid-credential paths return expected `400`
  - core admin/users/courses/leads/marketing/sessions probes return functional `200`
  - no uncaught `500`/exceptions

## Local Runtime Fallback

- Local DB hardening now uses in-memory SQLite fallback when on-disk SQLite files are unreadable in this environment.
- This removes prior `disk I/O` launch blockers and keeps local verification executable.

## Final Launch Note

V1 route/nav stabilization is in a launch-honest state, and local runtime verification is now unblocked for primary launch-path checks.
