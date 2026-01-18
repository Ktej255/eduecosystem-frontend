---
description: How to deploy the Eduecosystem Backend to AWS App Runner
---

To deploy the backend updates to production (AWS App Runner via CodeBuild):

1. **Verify Backend Integrity** (Local Smoke Test)
   ```bash
   cd backend
   python -c "from main import app; print('Backend Integrity: OK')"
   ```

2. **Run Deployment Pipeline**
   This script handles Zipping, S3 Upload, CodeBuild Trigger, and App Runner update.
   ```bash
   python scripts/deploy_full_pipeline.py
   ```
   // turbo

3. **Monitor Deployment**
   - The script will stream build logs.
   - Wait for "Deployment Started! Operation ID: ..."
   - Check AWS Console (App Runner) for final healthy status.

4. **Verify Service Status**
   ```bash
   python scripts/check_apprunner_status.py
   ```
   // turbo

**Prerequisites**:
- AWS CLI configured with correct permissions.
- `backend/.env` (Production) populated.
