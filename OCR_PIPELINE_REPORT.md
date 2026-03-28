# OCR Pipeline Fix Report
**Date: March 26, 2026**
**Agent: Backend AI Engineer**

## 1. OCR Method Selected
- **Engine**: Gemini Vision (via `google-generativeai` SDK).
- **Model**: `gemini-2.5-flash` (15 RPM Free Tier).
- **Optimization**: Prompt tuned for handwritten UPSC answer sheets (headings, structure, bullet points).

## 2. Integration Points
- **API Submission**: `submit_attempt` in `upsc.py` now saves images locally to `uploads/images/`.
- **Background Chaining**:
  - Image Upload -> `perform_ocr_task`
  - OCR Success -> `analyze_answer_task` (AI Evaluation)

## 3. Files Modified/Created
- ✅ `backend/app/services/ocr_service.py` (New Service)
- ✅ `backend/app/services/upsc_worker.py` (Added `perform_ocr_task`)
- ✅ `backend/app/api/api_v1/endpoints/upsc.py` (Updated submission flow)

## 4. Syntax & Validation
- **Check**: `python -m py_compile`
- **Result**: `Passed` (All 3 modules).

## 5. Remaining Limitations
- **S3 Storage**: Currently using local file system (`uploads/images`) as a placeholder for S3. This must be migrated to production Cloud Storage in Phase 4.
- **Handwriting Quality**: Very poor handwriting may still result in "ocr_failed" status if text length is below the 10-character threshold.

## 6. Next Steps
- **Live User Testing**: Test with real handwritten UPSC test papers to calibrate OCR prompt.
- **Multipage Support**: Currently treats each image as a single attempt; future iterations should support multi-page answer sheet concatenation.
