# V1 Visible Route Audit (Teacher/Admin)

Date: 2026-04-08

## Scope

- Source of truth:
- `frontend/src/components/teacher-portal/TeacherSidebar.tsx`
- `frontend/src/components/teacher-portal/TeacherMobileSidebar.tsx`
- `frontend/src/components/admin-portal/AdminSidebar.tsx`
- Audit type:
- Route existence audit for sidebar-visible URLs.
- Launch-honesty checks for placeholder/fake CTA patterns on visible surfaces.

## Snapshot

- Teacher sidebar-visible routes audited: `63`
- Admin sidebar-visible routes audited: `23`
- Missing route files from visible nav: `0`
- Known placeholder/fake-CTA issues fixed in this stabilization track:
- Teacher mock live simulation widget removed from visible sidebar shell.
- Admin content-health fake CTA replaced with real navigation.
- Admin quick-actions trimmed to launch-safe scope.
- Admin drill analytics quick action re-routed from coming-soon child page to working user directory.
- Admin drill analytics report action now exports real CSV data instead of acting as a shell CTA.
- Frontend 2FA service now normalizes API base to `/api/v1` for consistent auth endpoint resolution.
- Admin `UPSC Registry` nav item removed from visible V1 launch surface (`/admin/upsc-content` stays alive for V2).
- Admin `PDR Map` nav item removed from visible V1 launch surface (`/admin/pdr` stays alive for V2).
- Admin `Knowledge Explorer` nav item removed from visible V1 launch surface (`/admin/academic/knowledge-explorer` stays alive for V2).
- Teacher `UPSC Batch 1` nav item removed from visible V1 launch surface (`/teacher/batch1-manager` stays alive for V2).
- Teacher `UPSC Resources` nav item removed from visible V1 launch surface (`/teacher/upsc-resources` stays alive for V2).
- Teacher assignments page primary CTA is now wired to real assignment creation workspace (`/lms/assignments`) instead of a shell action.
- Teacher question-bank page primary CTA is now wired to real question authoring workspace (`/lms/questions`) instead of a shell action.
- Bookmarked compatibility routes now avoid shell pages:
- `/admin/drill/analytics/students` now aliases to `/admin/users`.
- `/admin/content-system/planner` now aliases to `/admin/content-system`.

## Runtime Status (Launch Blocker Track)

- Backend health probes pass:
- `/health` -> `200`
- `/health/detailed` -> `200`
- `/api/v1/status` -> `200`
- Auth compatibility:
- `/api/v1/login/*` remains primary.
- `/api/v1/auth/*` compatibility alias added for legacy clients.
- Runtime smoke re-check (2026-04-08):
- `/api/v1/login/access-token` -> `400` for invalid credentials (expected).
- `/api/v1/auth/access-token` -> `400` for invalid credentials (alias path confirmed).
- `/api/v1/admin/overview`, `/api/v1/admin/users`, `/api/v1/admin/courses`, `/api/v1/leads`, `/api/v1/marketing-automation/dashboard` -> `200`.
- Sessions probe correction:
- `/api/v1/live-classes` root is not a mounted handler (not a valid smoke endpoint).
- Valid launch endpoints `/api/v1/live-classes/admin/command-center`, `/api/v1/live-classes/teacher/command-center`, `/api/v1/live-classes/public/teacher/{teacher_id}/booking`, `/api/v1/live-classes/webinars` now verified at `200`.
- Reusable smoke gate:
- Added `backend/scripts/v1_runtime_smoke.py` to run launch-critical endpoint checks and fail only on uncaught runtime failures (`500`/exceptions).
- Run with: `python scripts/v1_runtime_smoke.py` from `backend/`.
- Latest execution artifact:
- `docs/v1-launch/V1_RUNTIME_SMOKE_RESULT_2026-04-08.md`
- Local runtime hardening update:
- Added in-memory SQLite fallback bootstrap for local environment when on-disk SQLite files are unreadable.
- Dev-mode fallback user now seeds as admin-compatible for launch smoke paths.

## Next Execution Focus

- Move local runtime to stable DB backing (Cloud SQL/Postgres target for production).
- Keep compatibility auth routes until V2 contract cleanup.
- Continue route-by-route functional smoke scenarios (courses, CRM, marketing, sessions, dashboard deep-links).
- Use `docs/v1-launch/V1_SHIP_CHECKLIST_2026-04-08.md` as the strict launch gate for visible sidebar routes (`Ready` vs `Blocked-by-DB`).
- Use `docs/v1-launch/V1_LAUNCH_HANDOFF_2026-04-08.md` as the single release handoff note.
