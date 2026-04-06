import sys
import os
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

# Add backend to path
current_dir = os.path.dirname(os.path.abspath(__file__))
backend_dir = os.path.abspath(os.path.join(current_dir, os.pardir))
sys.path.insert(0, backend_dir)

print(f"DEBUG: backend_dir is {backend_dir}")
# print(f"DEBUG: sys.path is {sys.path}")

from main import app
from app.core.config import settings
from app.db.session import SessionLocal

client = TestClient(app)

def verify_api_contract():
    print("--- Phase 21: API Contract Verification (8-Point Check) ---")
    
    # 1. Public Branding
    print("\n1. Testing /api/v1/public/branding...")
    response = client.get(f"{settings.API_V1_STR}/public/branding")
    if response.status_code == 200:
        print("[OK] Success")
    else:
        print(f"[FAIL] Failed: {response.status_code}")

    # 2. Auth Login (Endpoint Existence)
    print("\n2. Testing /api/v1/login/access-token (POST)...")
    # Just checking if the route exists and returns 422 (missing data) or 401 instead of 404
    response = client.post(f"{settings.API_V1_STR}/login/access-token")
    if response.status_code in [422, 401, 400]:
        print("[OK] Endpoint Active")
    else:
        print(f"[FAIL] Unexpected Status: {response.status_code}")

    # 3. DEV_MODE Auth Bypass (Users Me)
    print("\n3. Testing DEV_MODE Auth Bypass (/api/v1/users/me)...")
    if settings.DEV_MODE_ENABLED:
        response = client.get(f"{settings.API_V1_STR}/users/me")
        if response.status_code == 200:
            user_data = response.json()
            print(f"[OK] Success: Logged in as {user_data.get('email')}")
        else:
            print(f"[FAIL] Failed: {response.status_code} - {response.text}")
    else:
        print("[WARN] DEV_MODE_ENABLED is False, skipping bypass test.")

    # 4. Guided Foundation Concepts (History)
    print("\n4. Testing /api/v1/guided/foundation/concepts?subject_slug=history...")
    response = client.get(f"{settings.API_V1_STR}/guided/foundation/concepts?subject_slug=history")
    if response.status_code == 200:
        nodes = response.json()
        print(f"[OK] Success: Found {len(nodes)} nodes")
    else:
        print(f"[FAIL] Failed: {response.status_code} - {response.text}")

    # 5. Remediation (Learning Engine)
    print("\n5. Testing /api/v1/engine/remediation?subject_slug=history...")
    response = client.get(f"{settings.API_V1_STR}/engine/remediation?subject_slug=history")
    if response.status_code == 200:
        print("[OK] Success")
    else:
        print(f"[FAIL] Failed: {response.status_code} - {response.text}")

    # 6. Admin War Room Pulse
    print("\n6. Testing /api/v1/admin/war-room/pulse...")
    response = client.get(f"{settings.API_V1_STR}/admin/war-room/pulse")
    if response.status_code == 200:
        print("[OK] Success")
    else:
        print(f"[FAIL] Failed: {response.status_code} - {response.text}")

    # 7. Admin Student Insights Risk Report
    print("\n7. Testing /api/v1/admin/student-insights/risk-report...")
    response = client.get(f"{settings.API_V1_STR}/admin/student-insights/risk-report")
    if response.status_code == 200:
        print("[OK] Success")
    else:
        print(f"[FAIL] Failed: {response.status_code} - {response.text}")

    # 8. Modern History Node Count Verification
    print("\n8. Verifying Modern History Node Count (Expected 273)...")
    response = client.get(f"{settings.API_V1_STR}/guided/foundation/concepts?subject_slug=history")
    if response.status_code == 200:
        nodes = response.json()
        count = len(nodes)
        if count >= 273:
            print(f"[OK] Success: Found {count} nodes.")
        else:
            print(f"[WARN] Warning: Found only {count} nodes (Expected 273).")
    else:
        print(f"[FAIL] Failed: {response.status_code} - {response.text}")

if __name__ == "__main__":
    verify_api_contract()
