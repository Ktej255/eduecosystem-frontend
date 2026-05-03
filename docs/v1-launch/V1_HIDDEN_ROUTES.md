# Teacher/Admin V1 Hidden and Aliased Routes Registry

This file tracks launch-surface route decisions for V1 stabilization so we can safely recover V2 scope without losing intent.

## Rules

- Do not delete de-scoped routes for V1 unless a route is fully obsolete and replaced.
- Prefer hiding from sidebar navigation while keeping the route available.
- If a route is aliased/redirected, record both source and destination.
- Update this file in every route/nav cleanup PR.

## Entries

| Route Path | V1 Reason | Current V1 Behavior | V2 Destination / Owner |
| --- | --- | --- | --- |
| `/teacher/users/admins` | Teacher-scope mismatch for V1 launch; not teacher-safe in current state. | Hidden from `TeacherSidebar` navigation. Route kept alive. | Re-enable after teacher-safe RBAC + scoped admin-user flow is finalized (Teacher Portal owner). |
| `/teacher/users/instructors` | Teacher-scope mismatch for V1 launch; not teacher-safe in current state. | Hidden from `TeacherSidebar` navigation. Route kept alive. | Re-enable after instructor management ownership + permissions are finalized (Teacher Portal owner). |
| `/teacher/batch1-manager` (`UPSC Batch 1` nav entry) | Visible page is still mock-seeded for initial dev and can misrepresent V1 production readiness. | Hidden from `TeacherSidebar` and `TeacherMobileSidebar` navigation. Route kept alive. | Re-enable after batch manager flow is fully production-backed (Teacher Content Ops owner). |
| `/teacher/upsc-resources` (`UPSC Resources` nav entry) | Not part of launch-critical teacher/admin V1 path and currently mixes placeholder resource-state assumptions. | Hidden from `TeacherSidebar` navigation. Route kept alive. | Re-enable after UPSC resource lifecycle is finalized for V2 scope (Teacher Content Ops owner). |
| `/teacher/settings/custom-fields` | Child route was landing on scaffold-style settings surface. | Aliased to real `/teacher/settings` page component. | Restore dedicated custom-field workspace when production flow/API is ready (Teacher Settings owner). |
| `/teacher/settings/ux` | Child route was landing on scaffold-style settings surface. | Aliased to real `/teacher/settings` page component. | Restore dedicated UX settings page once stable UX controls are production-ready (Teacher Settings owner). |
| `/student/dashboard` (from Admin sidebar quick actions) | Non-admin destination in admin launch nav; expands surface without helping admin V1 core workflows. | Removed from visible `AdminSidebar` quick actions. Route unchanged. | Re-introduce as explicit cross-portal quick action if admin-to-student jump remains a product requirement (Admin UX owner). |
| `/resume` (from Admin sidebar quick actions) | Not part of teacher/admin V1 launch-critical path. | Removed from visible `AdminSidebar` quick actions. Route unchanged. | Re-introduce after V2 launch-surface expansion review (Admin UX owner). |
| `/admin/upsc-content` (UPSC Registry nav entry) | Launch-visible page is still mock-driven (simulated upload delay/success) and not an honest production flow for V1. | Hidden from `AdminSidebar` navigation. Route kept alive. | Re-enable after replacing simulated upload with real admin content upload workflow + backend integration (Admin Academic Ops owner). |
| `/admin/pdr` (PDR Map nav entry) | Page includes mixed static fallback topology with cross-portal links that are not guaranteed launch-safe and can misrepresent current production scope. | Hidden from `AdminSidebar` navigation. Route kept alive. | Re-enable after PDR map is fully sourced from validated runtime graph with launch-safe link set (Admin Platform owner). |
| `/admin/academic/knowledge-explorer` (Knowledge Explorer nav entry) | Launch-visible page still exposes placeholder/fake primary actions (`Edit Node`, `Deep Audit`) and is not launch-honest for V1. | Hidden from `AdminSidebar` navigation. Route kept alive. | Re-enable after node action buttons are wired to real admin workflows and the explorer surface is fully production-backed (Admin Academic Ops owner). |

## Non-route V1 launch honesty decisions

| UI Surface | V1 Reason | Current V1 Behavior | V2 Destination / Owner |
| --- | --- | --- | --- |
| `TeacherSidebar` live campus simulation widget | Mock/simulated activity in launch-visible shell can misrepresent production state. | Removed from visible sidebar for V1. | Re-introduce only with real telemetry/activity stream (Teacher Analytics owner). |
| `Admin Content Health` table CTA (`Optimize Module`) | Launch-visible fake CTA with no real path can strand users. | Replaced with real `Open Module` navigation mapped by module type (`UPSC`, `Meditation`, `Graphotherapy`). | Expand to per-item deep-linking once module-level detail routes are stabilized (Admin Content owner). |
| `/api/v1/auth/*` (legacy auth path) | Older clients may still call `/auth/*` while active backend mounted auth under `/login/*`. | Added compatibility alias: `/api/v1/auth/*` now mirrors `/api/v1/login/*`. | Keep both until V2 client contract cleanup (Backend API owner). |
| Login when SQLite backend is unavailable | Unhandled DB exceptions were causing launch-path 500s on authentication. | Login now returns controlled `503` with stable message instead of crashing. | Replace SQLite fallback stack with stable production DB-only runtime and remove degraded path handling (Backend Runtime owner). |
| Global DB failure behavior (all API routes) | Unhandled SQLAlchemy exceptions could produce random 500s on launch-visible flows. | Added global SQLAlchemy exception handler in backend app to return controlled `503` JSON response. | Remove/reduce this fallback after production DB reliability and observability are fully established (Backend Runtime owner). |
| Local runtime DB fallback (development verification) | On-disk SQLite files in this environment produced persistent `disk I/O` failures and blocked launch-path verification. | Added automatic in-memory SQLite fallback with schema bootstrap for local runtime validation. | Keep as local fallback only; production must continue to use stable persistent DB backing (Backend Runtime owner). |
| `/admin/drill/analytics` -> `View All Students` quick action | Previous target routed users into `/admin/drill/analytics/students`, which is a coming-soon page. | Re-routed CTA to `/admin/users` (working admin user directory). | Re-enable student-analytics detail route when real implementation is production-ready (Admin Analytics owner). |
| `/admin/drill/analytics` -> `Export Report` quick action | Button was visible but had no functional behavior. | Replaced with real CSV export for currently loaded topic performance data. | Expand export payload to backend-generated reports once server-side export pipeline is finalized (Admin Analytics owner). |
| Frontend 2FA API base resolution | 2FA client could hit wrong base path when `NEXT_PUBLIC_API_URL` omitted `/api/v1`, causing auth-session instability. | Normalized 2FA API base to enforce `/api/v1` suffix consistently. | Keep shared API-base normalization centralized across auth clients in V2 cleanup (Frontend Auth owner). |
| `/admin/drill/analytics/students` | Route page was explicit coming-soon shell. | Kept URL alive but converted page to redirect alias -> `/admin/users`. | Restore dedicated student analytics route when implementation is production-ready (Admin Analytics owner). |
| `/admin/content-system/planner` | Route page was explicit coming-soon shell. | Kept URL alive but converted page to redirect alias -> `/admin/content-system`. | Restore planner workflow page when production flow is ready (Admin Content owner). |
| Sidebar-visible API base resolution (`/admin/ai-debug`, `/admin/drill/questions`, `/admin/email-templates`) | Env URL without `/api/v1` can break runtime API calls and create false route-level failures. | Normalized API base handling to enforce `/api/v1` suffix on these pages. | Move to shared API base utility in V2 cleanup and remove page-level duplication (Frontend Platform owner). |
| `/teacher/lms/assignments` primary CTA (`Create Assignment`) | Launch-visible primary CTA had no action, which is deceptive for V1. | Wired CTA to real existing workspace `/lms/assignments` for assignment creation flow. | Replace cross-surface jump with a dedicated teacher-scoped create flow when teacher LMS assignment authoring is fully consolidated (Teacher LMS owner). |
| `/teacher/lms/questions` primary CTA (`Single Question`) | Launch-visible primary CTA had no action, which is deceptive for V1. | Wired CTA to real existing workspace `/lms/questions` for single-question authoring flow. | Replace cross-surface jump with dedicated teacher-scoped single-question create flow when teacher LMS question authoring is fully consolidated (Teacher LMS owner). |
