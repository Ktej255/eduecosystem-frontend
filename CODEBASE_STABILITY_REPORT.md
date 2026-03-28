# EduEcosystem Codebase Stability Report
**Generated: March 26, 2026**
**Status: DEGRADED (Logical Inconsistencies & Deployment Lag)**

## 1. UPSC System Integrity Audit

### Router Registration Status
- **`upsc.router`**: ✅ REGISTERED (`/api/v1/upsc`)
- **`upsc_synapse.router`**: ❌ COMMENTED OUT in `api_v1/api.py`.
  - *Impact*: Synapse profile, gap analysis, and unlock features will return 404.
- **`tutor.router`**: ⚠️ COMMENTED OUT in `api_v1/api.py`.
  - *Impact*: The `/api/v1/tutor` prefix is dead. Use `/api/v1/ai/tutor` instead.

### Endpoint Verification
- **Student Dashboard**: ✅ `/api/v1/upsc/student/dashboard`
- **Drill Start**: ⚠️ `/api/v1/upsc/drills/start` (Frontend uses `drills/start`, user mentioned `drill`).
- **Reports**: ✅ `/api/v1/upsc/reports/{report_id}`
- **Tutor**: ❌ Missing `/api/v1/upsc/tutor`. Frontend/User expectations might not be met.

## 2. Background Task Implementation Errors

### `transcribe_audio_task` Argument Mismatch
- **Location**: `backend/app/api/api_v1/endpoints/upsc.py:238` vs `backend/app/services/upsc_worker.py:160`
- **Issue**: `upsc.py` passes `file_path` (string) as the second argument, but the worker expects `audio_base64`.
- **Result**: `gemini_service.transcribe_audio` will receive a local path string instead of base64 data, causing a `base64.b64decode` error.
- **Fix Required**: Read file bytes and encode to base64 before triggering the task, or update the task to handle file paths.

### `analyze_answer_task` Missing OCR
- **Issue**: Task expects `attempt.answer_text` to be populated.
- **Problem**: For image uploads, `upsc.py` triggers `analyze_answer_task` immediately. There is **no OCR pipeline** (like EasyOCR) currently integrated into the worker to extract text from the image before analysis.
- **Result**: AI evaluates an empty string, leading to zero scores or failed analysis.

## 3. Database Model Validation

- **UPSC Core**: ✅ `UPSCPlan`, `UPSCQuestion`, `UPSCAttempt`, `UPSCReport`, `UPSCStudentProgress` are structurally sound.
- **WolfPack (Social)**: ✅ Defined as `LearningGroup` and `GroupMembership` in `learning_group.py`.
- **PvP/Battles**: ✅ `PackBattle` and `BattleStatus` defined in `battle.py`.
- **Drill System**: ✅ `DrillQuestion`, `DrillSession` defined in `drill.py`.
- **Relationships**: Database foreign keys and relationships are correctly linked across UPSC and core User models.

## 4. Frontend-Backend API Alignment

| Feature | Frontend Call | Backend Endpoint | Status |
|---------|---------------|------------------|--------|
| Progress Override | `/upsc/students/{s_id}/progress/{p_id}/override` | `/api/v1/upsc/admin/progress/override` | ❌ MISMATCH |
| Timer Config | `/upsc/batches/{b_id}/timers` | N/A | ❌ MISSING |
| Synapse Profile | `/upsc-synapse/profile` | `/api/v1/synapse/profile` | ⚠️ PREFIX MISMATCH |
| Drill Start | `/upsc/drills/start` | `/api/v1/upsc/drills/start` | ✅ ALIGNED |

## 5. Critical Code Risks & Stability Issues

1. **Async File Reading**: `upsc.py:bulk_ingest_questions` uses `await file.read()` (correctly) but then processes hundreds of questions in a single blocking synchronous commit. This may cause timeouts or DB locks on large files.
2. **Hardcoded S3 Placeholders**: `upsc.py:205` uses `https://s3-bucket/placeholder/`. Image uploads will fail to display in production as they are not actually stored in a persistent CDN.
3. **Circular Dependencies**: The use of local imports inside functions (e.g., `upsc.py:109`, `upsc_worker.py:119`) prevents startup crashes but indicates a messy architectural pattern that needs refactoring.

## 6. Recommended Action Plan

1. **Immediate**: Uncomment `upsc_synapse` in `api.py`.
2. **Immediate**: Fix `transcribe_audio_task` to handle either paths or base64 consistently.
3. **Strategic**: Implement OCR (EasyOCR/Gemini Vision) in the `analyze_answer_task` for handwritten images.
4. **Strategic**: Align Frontend `upscService.ts` with Backend admin endpoints.
5. **Infrastructure**: Resolve `torch` build timeout in `Dockerfile.production` to push these fixes.
