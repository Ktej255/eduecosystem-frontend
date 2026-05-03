# V1 Launch Docs

This folder contains the teacher/admin V1 launch package.

## Start Here

- `V1_LAUNCH_HANDOFF_2026-04-08.md`

## Supporting Artifacts

- `V1_RELEASE_MANIFEST_2026-04-08.md`
- `V1_SHIP_CHECKLIST_2026-04-08.md`
- `V1_RUNTIME_SMOKE_RESULT_2026-04-08.md`
- `V1_HIDDEN_ROUTES.md`
- `V1_VISIBLE_ROUTE_AUDIT.md`
- `V1_FINAL_READINESS_REPORT_2026-04-08.md`

## Verification Entry Point

- Preferred end-to-end backend gate: `cd backend && python scripts/v1_release_gate.py`
- Runtime-only backend smoke: `cd backend && python scripts/v1_runtime_smoke.py`

## Intended Use

- Use the handoff note as the single release summary.
- Use the ship checklist as the strict visible-route gate.
- Use the runtime smoke result as the backend verification artifact.
- Use the hidden-routes registry as the V2 recovery contract.
