---
description: Engineering Standards and Context Retrieval for Eduecosystem
---

# STOP. READ THIS BEFORE PROCEEDING WITH ANY TASK.

You are operating within the Eduecosystem project. This project has been running for over 4 months and has strict architectural standards. Previous AI instances have failed by hallucinatively using deprecated code, ignoring standardization rules, and forgetting context.

You MUST adhere to the following absolute rules:

## 1. Zero-Tolerance for Old/Deprecated Data
- **Polity MCQs**: ALL new, valid Polity MCQ data is strictly located in `frontend/src/components/batch1/polity/data/dayXX-mcqs.ts`. 
- **DO NOT** ever look for, recreate, or use old `chapter-X.ts` files or `batch1-1/polity/data/chapters/`. They are obsolete and have been deleted. If an import points to them, the import is wrong and must be rewritten to point to `dayXX-mcqs.ts`.
- **General Rule**: When editing an existing piece of UI, first check if there is a newly generated data source before assuming the local data is correct.

## 2. Standardization over Speed
- **MCQ Drills (Polity/History)**: Immediate correct/incorrect feedback (green/red highlights) upon clicking an option is **STRICTLY FORBIDDEN**. 
- The user must be allowed to select an option, change their mind, and the answer is only validated when the user clicks 'Next Question' or 'Submit'. 
- All component designs must exactly mimic the `HistoryMCQSession.tsx` standard. Do not build custom UI implementations for specific subjects.

## 3. Think Before You Code
- The human user has invested 4 months into this architecture. Do not rewrite components from scratch ("starting from zero") or take "two steps forward, four steps backward".
- If you see a file doing something one way, but another folder (like `batch1/history`) does it significantly better, stop and ask the user if you should standardize to the better version before making blind edits to the worse version.

## 4. Overcome Amnesia
- Because your session context resets, you must proactively read `task.md` and `implementation_plan.md` in the `.gemini/antigravity/brain/...` directories to understand what previous sessions accomplished.
- Do not trust legacy code just because it exists in the active file tree. Delete legacy code ruthlessly when it is replaced.
