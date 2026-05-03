# V2 Deployment Agent Handoff
Date: 2026-04-10

## Purpose

This handoff is for a separate deployment agent.

It answers:
- what exactly belongs to the current V2 AI-control-plane deploy
- which files/folders matter
- which broader audit findings are related vs unrelated
- how to interpret the "partially built" report without confusing it with the current V2 AI work

## Executive Understanding

The current development work is strongly aligned with the audit report, but it is narrower in scope.

The audit report is a broad route audit of the whole EduEcosystem admin/instructor surface.
My recent work has been concentrated on the V2 AI operating layer, especially:
- admin AI oversight
- teacher AI command center
- backend AI workflow orchestration
- approvals / artifacts / dispatch / recovery / provenance / memory / plan enforcement

So both are aligned, but they are measuring different things:
- the audit measures overall portal breadth
- my work has been deepening the V2 AI operating system inside that broader portal

## Important Clarification

"Partially built" in the audit does not mean the V2 AI work is partially fake or misaligned.

It mainly means:
- some non-AI routes are still stubs or lightly wired
- some admin surfaces exist as route shells that delegate to components
- some broader portal areas are outside the current V2 AI implementation stream

The current V2 AI layer is one of the strongest and most complete areas in the codebase.

## Current V2 Deploy Scope

The deployment agent should focus on the V2 AI layer first.

### Backend files to include

These are the primary backend files for the V2 AI operating layer:

- `backend/app/services/ai_workflow_service.py`
- `backend/app/schemas/ai_workflow.py`
- `backend/app/models/ai_workflow.py`
- `backend/app/api/api_v1/endpoints/ai_workflows.py`
- `backend/app/api/api_v1/endpoints/ai_dispatch_records.py`
- `backend/app/api/api_v1/api.py`
- `backend/app/api/api_v1/api_launch_mode.py`

### Frontend files to include

These are the primary frontend files for the V2 AI operating layer:

- `frontend/src/app/(dashboard)/admin/ai-oversight/page.tsx`
- `frontend/src/app/(teacher-portal)/teacher/ai-command-center/page.tsx`

### Frontend integration surfaces that also matter

These routes/components were used to connect the V2 AI layer into real working surfaces:

- `frontend/src/app/(dashboard)/lms/courses/page.tsx`
- `frontend/src/app/(teacher-portal)/teacher/students/page.tsx`
- `frontend/src/app/(teacher-portal)/teacher/dashboard/page.tsx`
- `frontend/src/components/teacher-portal/SessionCommandCenter.tsx`
- `frontend/src/components/teacher-portal/crm/CRMHome.tsx`

## Recommended Deploy Folder Scope

If the other agent wants the safest minimal deploy scope for the V2 AI layer, use:

### Backend minimal scope

- `backend/app/services/`
- `backend/app/schemas/`
- `backend/app/models/`
- `backend/app/api/api_v1/endpoints/`
- `backend/app/api/api_v1/`

But in practice, only the listed AI-specific files above are the key ones.

### Frontend minimal scope

- `frontend/src/app/(dashboard)/admin/ai-oversight/`
- `frontend/src/app/(teacher-portal)/teacher/ai-command-center/`
- plus the listed integration pages/components

## What the deployment agent should NOT confuse as part of this deploy

There are many noisy/unrelated items in this repository and working tree.
Those should not be treated as required V2 AI deploy scope.

Examples:
- random temporary root folders with short generated names
- large unrelated audit/output files
- unrelated UPSC content ingestion scripts
- unrelated route shells outside the V2 AI scope
- miscellaneous experimental files in root and backend temp areas

The deployment agent should not blindly deploy "everything modified".
The working tree is too noisy for that approach.

## What is actually complete in the V2 AI layer

The following are substantively built:

- workflow lifecycle orchestration
- approval queue
- artifact inspection/apply/dispatch
- dispatch record ledger and process/retry flow
- heartbeat/stalled detection and recovery lineage
- admin recovery controls
- teacher AI command center
- admin AI oversight
- deep inspection for workflow/artifact/dispatch
- event feeds with filtering/sorting/actions
- memory/provenance visibility across:
  - workflows
  - approvals
  - artifacts
  - dispatches
  - events
- plan/entitlement enforcement in orchestration

## What is still partial in the V2 AI layer

These are real remaining gaps, but they are not contradictions to the current work:

- worker-grade async infrastructure is still not fully externalized
- deeper write-back into every possible product entity is still incomplete
- long-term memory is stronger than before but still style-profile centric
- outbound delivery remains guarded/internal, not broad autonomous sending
- specialist-agent layer is not yet complete

## How the audit report aligns with my work

### Strong alignment

The audit report is correct that:
- admin is the dominant production portal
- AI oversight is a flagship surface
- many non-AI admin areas are broad and component-driven
- some routes are stubs or placeholders

This aligns with my work.

### Where the report is broader than my work

The report audits:
- users
- UPSC hub
- drill bank
- leads
- settings
- analytics
- content-system sections
- many admin route shells

My recent work does not claim those are all complete.
My work has been focused on the V2 AI operating layer.

### Important teacher-portal nuance

The audit references `/instructor/...` routes.
My V2 AI work has primarily been inside the newer teacher portal namespace:
- `frontend/src/app/(teacher-portal)/teacher/...`

So if the report seems to understate teacher AI work, that is likely because it is auditing a different teacher/instructor route family than the current V2 teacher AI command-center work.

## What is likely causing the "partially built" impression

The broad portal has many kinds of pages:
- fully built pages
- component-wrapper pages
- redirect/alias pages
- stubs/placeholders

That is normal in a large evolving product.

The right interpretation is:
- overall portal breadth is mixed
- V2 AI control-plane depth is strong

Those two things can both be true at the same time.

## What I would tell the deployment agent

Deploy the V2 AI layer as a focused slice, not as a whole-repo cleanup.

### Deploy first

Backend:
- `backend/app/services/ai_workflow_service.py`
- `backend/app/schemas/ai_workflow.py`
- `backend/app/models/ai_workflow.py`
- `backend/app/api/api_v1/endpoints/ai_workflows.py`
- `backend/app/api/api_v1/endpoints/ai_dispatch_records.py`
- `backend/app/api/api_v1/api.py`
- `backend/app/api/api_v1/api_launch_mode.py`

Frontend:
- `frontend/src/app/(dashboard)/admin/ai-oversight/page.tsx`
- `frontend/src/app/(teacher-portal)/teacher/ai-command-center/page.tsx`

Frontend integrations:
- `frontend/src/app/(dashboard)/lms/courses/page.tsx`
- `frontend/src/app/(teacher-portal)/teacher/students/page.tsx`
- `frontend/src/app/(teacher-portal)/teacher/dashboard/page.tsx`
- `frontend/src/components/teacher-portal/SessionCommandCenter.tsx`
- `frontend/src/components/teacher-portal/crm/CRMHome.tsx`

### Validate after deploy

Frontend:
- build the frontend
- check admin AI oversight route
- check teacher AI command center route

Backend:
- start API
- verify AI workflow endpoints
- verify dispatch endpoints
- verify command-center/admin metrics payloads

## My final reading of the audit vs current work

They are aligned.

The audit says:
- the portal as a whole is mixed maturity
- AI oversight is a standout strong area

My work says:
- we have been intentionally making the AI operating layer one of the most complete subsystems in V2

Those two statements support each other.

## Suggested next reply back to you

If I were replying in one sentence:

"Your audit is broadly correct, and it aligns with my work: the overall portal is mixed-maturity, but the V2 AI control plane is one of the strongest, most deeply built areas, so the deployment agent should deploy the AI-specific backend/frontend slice listed above rather than treating the whole dirty repo as one deploy unit."
