import requests
import json

BASE_URL = "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1"
HEADERS = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzUxMTMwNjQsInN1YiI6IjEiLCJ2IjpudWxsfQ.QSs2qGu_BCMpZRiW1aXGSCiitDmbiYBooKky-0_Mr9Q",
    "Content-Type": "application/json"
}

def run_setup():
    print("Step 1: Create Batch")
    r_batch = requests.post(
        f"{BASE_URL}/upsc/batches",
        json={
            "name": "UPSC 2026 Batch 1",
            "description": "Main batch for UPSC 2026 aspirants",
            "start_date": "2026-03-30",
            "is_active": True
        },
        headers=HEADERS
    )
    print("Batch Status:", r_batch.status_code)
    print("Batch Response:", r_batch.text)
    
    batch_id = None
    if r_batch.status_code in (200, 201):
        batch_id = r_batch.json().get("id")
    
    plan_id = None
    if batch_id:
        print("\nStep 2: Create Plan")
        # Attemping the user's requested endpoint first (even though it may not exist)
        r_plan = requests.post(f"{BASE_URL}/upsc/plans", json={
            "batch_id": batch_id,
            "title": "UPSC Prelims 2026 Study Plan",
            "total_days": 90,
            "is_active": True
        }, headers=HEADERS)
        
        print("Plan Status (direct):", r_plan.status_code)
        print("Plan Response:", r_plan.text)
        
        if r_plan.status_code == 404 or r_plan.status_code == 405:
            print("\nFallback: Using /plans/generate instead because direct manual creation endpoint is not bound in API.")
            r_plan_gen = requests.post(f"{BASE_URL}/upsc/plans/generate", json={
                "batch_id": batch_id,
                "subject": "General Studies",
                "start_date": "2026-03-30",
                "total_days": 10,
                "questions_per_day": 3,
                "topics": ["Indian Polity"]
            }, headers=HEADERS)
            print("Plan Gen Status:", r_plan_gen.status_code)
            print("Plan Gen Response:", r_plan_gen.text)
            if r_plan_gen.status_code in (200, 202):
                plan_id = "GENERATING_ASYNC_CELERY"
        else:
            plan_id = r_plan.json().get("id", "N/A")

    print("\nStep 3: Create Course")
    r_course = requests.post(
        f"{BASE_URL}/courses/",
        json={
            "title": "Geography for UPSC Prelims 2026",
            "description": "Complete Geography module",
            "subject": "Geography",
            "is_published": True
        },
        headers=HEADERS
    )
    print("Course Status:", r_course.status_code)
    print("Course Response:", r_course.text)

if __name__ == "__main__":
    run_setup()
