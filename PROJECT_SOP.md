# 📋 Project Standard Operating Procedure (SOP)
*This document is the "source of truth" for all AI Agents working on the Eduecosystem.*

> [!IMPORTANT]
> **MANDATORY FOR ALL AGENTS**: 
> 1. Read the `SYSTEM_MASTER_MAP.md` to understand the architecture.
> 2. Read the `DEPLOYMENT_LOG.md` and `DEVELOPMENT_JOURNAL.md` before starting.
> 3. Update these logs *before* and *after* every major milestone.
> 3. If parallel development is happening, NEVER deploy without a "Local Sync" (merging latest changes from other modules).

## 👑 The "Lead Agent" Deployment Model
To avoid individual agents breaking the server, we use a **Lead Agent** model:
1. **Feature Agents** (Student/Admin/Teacher Chats): Develop features, test locally, and DOCUMENT completion in `DEVELOPMENT_JOURNAL.md`. They DO NOT deploy to production.
2. **Lead Agent** (Any session requested to deploy): 
   - Reads `DEVELOPMENT_JOURNAL.md` to find all new code.
   - Runs the `INTEGRATION_CHECKLIST.md`.
   - Triggers one single deployment for the entire codebase.

## ✍️ Documentation Protocol
- Every session MUST end with an update to `DEVELOPMENT_JOURNAL.md` summarizing:
  - Logic/Architecture changes.
  - New skillsets developed.
  - Files modified.
  - Deployment status (Staged / Production).

## 🛠 Shared Infrastructure (Backend)
- All portals (Student, Admin, Teacher) share the same `backend/app/models` and `backend/app/api/api_v1`.
- If you modify a shared model (e.g., `user_management.py`), you MUST ensure it doesn't break other portals.

## 🤝 Synchronization Workflow
1. **START**: Read `DEPLOYMENT_LOG.md` to see what is currently live.
2. **DO**: Implement your feature.
3. **SYNC**: If another agent deployed while you were working, you must pull their changes/sync your backend folder before deploying yours.
4. **DEPLOY**: Run the deployment pipeline.
5. **LOG**: Re-verify production and update the log.
