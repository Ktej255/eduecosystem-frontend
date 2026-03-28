# CONTENT SETUP GUIDE — EduEcosystem UPSC
**Target**: Sunday Launch Content Readiness  
**Target User**: Superuser (`ktej255@gmail.com`)

The Admin router is currently muted for launch stability. However, as a `superuser`, you can fully create and publish all required platform content via direct API calls exactly as the UI would have done.

Below are the exact API payloads required. Use Postman, cURL, or the Swagger UI (`/docs`) to execute these while authenticated.

---

## 1. How to Create and Publish a Course
Use this to populate the "Courses" page.  
**Endpoint**: `POST /api/v1/courses/`  
**Authentication**: Bearer Token  
**Payload required**:
```json
{
  "title": "UPSC Target 2026",
  "description": "Comprehensive Foundation Course for UPSC Civil Services 2026.",
  "level": "beginner",
  "price": 0.0,
  "currency": "INR",
  "is_published": true,
  "is_featured": true,
  "is_password_protected": false,
  "prerequisites": [],
  "tag_ids": []
}
```

---

## 2. How to Create a UPSC Batch
Use this to create a cohort grouping for students.  
**Endpoint**: `POST /api/v1/upsc/batches`  
**Authentication**: Bearer Token  
**Payload required**:
```json
{
  "name": "Batch 1 — Pioneers",
  "description": "The first cohort of the EduEcosystem UPSC platform.",
  "start_date": "2026-03-30",
  "end_date": "2027-04-30",
  "is_active": true
}
```
*Note the returned `batch_id`.*

---

## 3. How to Add Drill Questions (The Workflow)
Adding drill questions involves three steps since questions must belong to an approved "Plan" scheduled for the Batch.

### A. Ask AI to Generate a Plan
**Endpoint**: `POST /api/v1/upsc/plans/generate`  
**Payload required**:
```json
{
  "batch_id": "<INSERT_BATCH_ID_HERE>",
  "subject": "Polity",
  "start_date": "2026-03-30",
  "total_days": 7,
  "questions_per_day": 3,
  "topics": ["Indian Constitution", "Fundamental Rights", "DPSP"]
}
```
*(This triggers a background task that creates the plan and drafts questions.)*

### B. Approve the Plan
Find the `plan_id` via `GET /api/v1/upsc/plans/<batch_id>`, then approve it to unlock it for students:  
**Endpoint**: `POST /api/v1/upsc/plans/<plan_id>/approve`

### C. (Alternative) Manual Question Upload
If you have your own specific questions and want to bypass the AI generation entirely, you can push them directly via file:  
**Endpoint**: `POST /api/v1/upsc/admin/questions/bulk-ingest`  
**Form Data**: `file` (Upload a JSON file)  
**JSON format required in the file**:
```json
[
  {
    "plan_id": "<INSERT_APPROVED_PLAN_ID_HERE>",
    "question_number": 1,
    "question_text": "Critically examine the provisions of Article 356.",
    "subject": "Polity"
  }
]
```

---

## Summary: Can this be done without Admin UI?
**YES.** Your account (`ktej255@gmail.com`) passes the `is_superuser` check on every single one of these endpoints. You have full systemic authority to bypass the muted Admin router and populate DB tables through the API layer.

## Recommended Minimum Content for Sunday Launch
To prevent students from seeing empty dashboards and `404 None` errors on drill navigation:
1. **At least 1 active Course** (so `/courses/` loads).
2. **At least 1 active Batch** (e.g., "Batch 1 - Pioneers").
3. **At least 1 active Plan** linked to that Batch, starting on Sunday.
4. **At least 3 Drill Questions** loaded for Day 1 of that active Plan, ensuring the "Daily Drill" system has actual data to render.
