# MODERN HISTORY — SUBJECT AUDIT REPORT

**Agent Role:** Modern History Content Auditor  
**Date:** 2026-03-26  
**Status:** READ-ONLY AUDIT (No files modified)

---

## 1. WHAT EXISTS

### 1.1 Frontend — Data Files

| Component | Path | Status |
|---|---|---|
| Chapter Definitions | `components/upsc/subjects/history/data/spectrum-modern-history.ts` | ✅ **39 chapters** across 10 units |
| Schedule Data | `components/upsc/subjects/history/data/spectrum-schedule-data.ts` | ✅ **15-day schedule** with 3 phases |
| MCQ Loader | `components/upsc/subjects/history/data/spectrum-mcq-loader.ts` | ✅ Dynamic loader with section support |
| MCQ Chapter Files | `components/upsc/subjects/history/data/mcqs/modern/chapter{1-39}.ts` | ⚠️ **39 files exist, but mostly stubs** |
| Revision Data | `components/upsc/subjects/history/revision/modern-revision-data.ts` | ✅ Timeline, personalities, battles, traps |
| Timeline Component | `components/upsc/subjects/history/ModernHistoryTimeline.tsx` | ✅ Fully built |
| Spectrum Planner | `components/upsc/subjects/history/SpectrumPlanner.tsx` | ✅ Fully built with Synapse integration |

**Duplicate copies** exist under `components/batch1/history/` (same structure).

### 1.2 Frontend — Pages

| Page | Path | Status |
|---|---|---|
| History Portal | `(student-portal)/student/upsc/history/page.tsx` | ✅ |
| Spectrum Planner | `(student-portal)/student/upsc/history/spectrum/page.tsx` | ✅ |
| MCQ Page | `(student-portal)/student/upsc/history/mcq/page.tsx` | ✅ |
| MCQ Drill | `(student-portal)/student/upsc/history/mcq-drill/page.tsx` | ✅ |
| Read Chapter | `(student-portal)/student/upsc/history/read/[chapterId]/page.tsx` | ✅ |
| Revision | `(student-portal)/student/upsc/history/revision/page.tsx` | ✅ |
| Pomodoro | `(student-portal)/student/upsc/history/pomodoro/page.tsx` | ✅ |
| Emergency Pomodoro | `(student-portal)/student/upsc/history/pomodoro-emergency/page.tsx` | ✅ |
| Schedule | `(student-portal)/student/upsc/history/schedule/page.tsx` | ✅ |
| Topic View | `(student-portal)/student/upsc/history/topic/[topicId]/page.tsx` | ✅ |
| Flashcards | `(student-portal)/student/upsc/history/flashcards/page.tsx` | ✅ |
| Visuals | `(student-portal)/student/upsc/history/visuals/page.tsx` | ✅ |

**All identical pages also exist under** `student/batch1/history/`.

### 1.3 MCQ Question Count — Per Chapter

| Chapter | Questions | Status |
|---|---|---|
| Chapter 1 | 30 | ✅ Real content |
| Chapter 2–9 | 0 each | ❌ Empty files |
| Chapter 10–39 | 1 each (stub) | ⚠️ Placeholder stubs |
| **TOTAL** | **55** | ⚠️ **Critically low** |

### 1.4 Backend & Database

| Item | Status | Details |
|---|---|---|
| `bank_questions` table (subject = 'Modern History') | ❌ **0 questions** | Nothing ingested |
| Dedicated History backend routes | ❌ **None** | No history-specific API endpoints |
| `GET /drill/questions?subject=Modern History` | ✅ Available (via new endpoint) | But returns 0 results |

### 1.5 Other Sections in MCQs Directory

| Section | Files | Status |
|---|---|---|
| `ancient/` | 29 files (chapter1-data to chapter27-data, chapter1.ts, chapter2.ts) | Present but uncounted |
| `medieval/` | 20+ files (chapter1-chapter20) | Present but uncounted |
| `art_culture/` | 2 files (chapter1, chapter2) | Present but uncounted |

---

## 2. WHAT IS MISSING vs POLITY

### Polity Had:
| Feature | Polity | Modern History | Gap |
|---|---|---|---|
| Total Chapters | 95 | 39 | Structure OK (Spectrum is 39 chapters) |
| MCQ Questions (Frontend TS) | ~17,500+ | 55 | ❌ **~99.7% gap** |
| MCQs in PostgreSQL (`bank_questions`) | 17,518 | 0 | ❌ **100% gap** |
| 3 Levels per chapter (L1/L2/L3) | ✅ | ❌ Not implemented | ❌ Missing |
| Read Section per chapter | ✅ Data files | ❌ No read data files | ❌ Missing |
| Day-based dual track | ✅ 67 day-based files | ✅ 15-day schedule | ✅ Present |
| Chapter-based dual track | ✅ 95 chapter files | ✅ 39 chapter files | ✅ Present |
| Pomodoro connection | ✅ | ✅ | ✅ Present |
| Synapse heatmap connection | ✅ | ✅ (via SpectrumPlanner) | ✅ Present |
| Ingestion script | ✅ `ingest_frontend_mcqs.py` | ❌ Not yet available | ❌ Missing |

---

## 3. RECOMMENDED BUILD SEQUENCE

### Priority 1: Generate MCQ Content (CRITICAL)
1. **Generate 30–50 MCQs per chapter** for all 39 chapters using AI (target: ~1,500–2,000 MCQs)
2. Tag each MCQ with `difficulty: easy | medium | hard` 
3. Write to `frontend/src/components/upsc/subjects/history/data/mcqs/modern/chapter{N}.ts`

### Priority 2: Ingest into PostgreSQL
4. Extract all Modern History MCQs into a JSON file (like `all_mcqs_extracted.json` for Polity)
5. Run `ingest_frontend_mcqs.py` with `subject="Modern History"` filter
6. Verify via `GET /drill/questions?subject=Modern History`

### Priority 3: Read Section Content
7. Create read data files for each chapter (study material per chapter)
8. Link to the existing `/read/[chapterId]` page

### Priority 4: L1/L2/L3 Tiered Structure (Post-Launch)
9. Implement 3-level difficulty progression per chapter
10. Update MCQ loader to support level-based filtering

---

## 4. ESTIMATED EFFORT TO REACH POLITY PARITY

| Task | Effort | Priority |
|---|---|---|
| Generate ~2,000 MCQs (39 chapters × ~50 each) | **4–6 hours** (AI-assisted) | 🔴 Critical |
| Ingest into PostgreSQL | **30 min** (script exists) | 🔴 Critical |
| Create Read Section data (39 chapters) | **8–10 hours** (AI-assisted) | 🟡 Medium |
| Implement L1/L2/L3 structure | **2–3 hours** (code + UI) | 🟢 Post-launch |
| **Total to match Polity** | **~15–20 hours** | - |
| **Minimum for Sunday launch** | **~5–7 hours** (MCQ gen + ingest) | 🔴 |

---

## 5. MASTER COORDINATION UPDATE

| Field | Value |
|---|---|
| **Agent Role** | Modern History Content Auditor |
| **Task** | Modern History subject audit |
| **Files Modified** | `MODERN_HISTORY_AUDIT_REPORT.md` (NEW) |
| **Next Step** | Generate ~2,000 Modern History MCQs and ingest into PostgreSQL |
