# Teacher/Admin V1 Release Manifest (April 8, 2026)

This manifest lists the primary files and verification steps that make up the teacher/admin V1 stabilization package.

## Primary Release Docs

- `docs/v1-launch/README.md`
- `docs/v1-launch/V1_LAUNCH_HANDOFF_2026-04-08.md`
- `docs/v1-launch/V1_SHIP_CHECKLIST_2026-04-08.md`
- `docs/v1-launch/V1_RUNTIME_SMOKE_RESULT_2026-04-08.md`
- `docs/v1-launch/V1_HIDDEN_ROUTES.md`
- `docs/v1-launch/V1_VISIBLE_ROUTE_AUDIT.md`
- `docs/v1-launch/V1_FINAL_READINESS_REPORT_2026-04-08.md`

## Key Frontend Stabilization Files

- `frontend/src/components/teacher-portal/TeacherSidebar.tsx`
- `frontend/src/components/teacher-portal/TeacherMobileSidebar.tsx`
- `frontend/src/components/admin-portal/AdminSidebar.tsx`
- `frontend/src/app/(teacher-portal)/teacher/lms/assignments/page.tsx`
- `frontend/src/app/(teacher-portal)/teacher/lms/questions/page.tsx`
- `frontend/src/app/(dashboard)/admin/email-templates/page.tsx`
- `frontend/src/app/(dashboard)/admin/drill/analytics/page.tsx`
- `frontend/src/app/(dashboard)/admin/drill/analytics/students/page.tsx`
- `frontend/src/app/(dashboard)/admin/content-system/planner/page.tsx`
- `frontend/src/components/admin/ContentHealthMonitor.tsx`
- `frontend/src/services/twoFactorService.ts`

## Key Backend Runtime Files

- `backend/app/core/config.py`
- `backend/app/db/session.py`
- `backend/main.py`
- `backend/app/api/deps.py`
- `backend/app/api/api_v1/api.py`
- `backend/app/api/api_v1/api_launch_mode.py`
- `backend/app/api/api_v1/endpoints/auth.py`
- `backend/app/services/rag_service.py`
- `backend/scripts/v1_release_gate.py`
- `backend/scripts/v1_runtime_smoke.py`

## Verification Commands

### Backend

```bash
cd backend
python scripts/v1_release_gate.py
```

### Backend Runtime-Only Smoke

```bash
cd backend
python scripts/v1_runtime_smoke.py
```

### Frontend Targeted Checks

```bash
cd frontend
npx eslint "src/components/teacher-portal/TeacherSidebar.tsx"
npx eslint "src/components/teacher-portal/TeacherMobileSidebar.tsx"
npx eslint "src/components/admin-portal/AdminSidebar.tsx"
npx eslint "src/app/(teacher-portal)/teacher/lms/assignments/page.tsx"
npx eslint "src/app/(teacher-portal)/teacher/lms/questions/page.tsx"
npx eslint "src/app/(dashboard)/admin/email-templates/page.tsx"
```

## Release Summary

- visible route files missing: `0`
- strict ship checklist: `Ready 86`, `Blocked-by-DB 0`
- runtime smoke: `PASS`
- launch-critical uncaught `500`: `0`

## Use This Manifest For

- release review
- showcase deployment handoff
- future V2 recovery/context rebuilding
