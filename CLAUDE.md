# Eduecosystem Project Guide

## Project Information
- **Project Name**: Eduecosystem
- **Tech Stack**: Next.js 14, FastAPI (Python), PostgreSQL, GCP Cloud Run
- **Database**: Cloud SQL PostgreSQL on GCP
- **Frontend URL**: [eduecosystem-frontend-503001969959.us-central1.run.app](https://eduecosystem-frontend-503001969959.us-central1.run.app)
- **Backend URL**: [eduecosystem-backend-503001969959.us-central1.run.app](https://eduecosystem-backend-503001969959.us-central1.run.app)
- **Payment Gateway**: Cashfree (Production Mode)
- **AI Integration**: Google Gemini API

## Teammate Mode (Role-based Workflow)
This project uses a strict teammate mode for all AI interactions. Every feature request must follow this flow:

### Team Roles
- **@planner**: Responsible for architecture, approach, and task breakdown. Must always start first.
- **@coder**: Responsible for actual code implementation. Cannot start without @planner's approval.
- **@reviewer**: Responsible for code audits, testing verification, and quality checks before deployment.
- **@debugger**: Specialized in root cause analysis and fixing errors when things break.

### Feature Workflow
1. **Initialize**: Feature requests always start with **@planner** (PLANNING mode).
2. **Design**: **@planner** creates the `implementation_plan.md` and `task.md`.
3. **Approval**: **@coder** is only activated after the user approved the **@planner's** plan.
4. **Implementation**: **@coder** (EXECUTION mode) builds the feature using new files only.
5. **Review**: **@reviewer** (VERIFICATION mode) audits the implementation for standards and bugs.
6. **Deploy**: Final verification scripts (`checklist.py`) must pass before completion.
7. **Fix**: If errors occur during any phase, **@debugger** is activated for root cause analysis.

## Key Project Files
1. `backend/main.py`: Main entry point for the FastAPI backend service.
2. `backend/app/core/config.py`: Global application configuration and environment variable management.
3. `backend/app/db/session.py`: Database engine setup and session management for PostgreSQL.
4. `backend/app/api/api_v1/api.py`: Central router for all version 1 API endpoints.
5. `frontend/src/app/layout.tsx`: Root layout defining the structure and metadata for the Next.js frontend.
6. `frontend/next.config.js`: Configuration for building and running the frontend application.
7. `cloudbuild.yaml`: Root configuration for the GCP Cloud Build and deployment pipeline.
8. `backend/requirements.txt`: Python package dependencies for the backend.
9. `frontend/package.json`: NPM package dependencies and scripts for the frontend.
10. `README.md`: Overall project documentation and initial setup instructions.

## What NOT To Do (Strict Constraints)
1. **No Overwriting**: Never modify existing files in `backend/app/api/` or `frontend/src/app/` directly; propose new files instead.
2. **No Migration Tampering**: Do not delete or manually edit migration files in `backend/alembic/versions/`.
3. **Infrastructure Guardrails**: Never change the GCP Project ID or Cloud Run service account configurations.
4. **Payment Flow Integrity**: Do not modify the Cashfree integration logic or payment verification webhooks.
5. **AI Prompt Safety**: Do not overwrite or delete existing prompt templates or system instructions in the GenAI/Gemini integrations.
