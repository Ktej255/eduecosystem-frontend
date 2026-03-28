import requests
import sys

BASE_URL = "https://eduecosystem-backend-yqncvzxdma-uc.a.run.app"

# 1. Get Token
token = None
for endpoint in ["/api/v1/auth/access-token", "/api/v1/login/access-token", "/api/v1/auth/login"]:
    try:
        r = requests.post(f"{BASE_URL}{endpoint}", data={
            "username": "ktej255@gmail.com",
            "password": "Tej@1106"
        }, timeout=10)
        if r.status_code == 200:
            token = r.json().get("access_token")
            break
    except Exception as e:
        continue

if not token:
    print(f"Failed to login to {BASE_URL}")
    sys.exit(1)

headers = {"Authorization": f"Bearer {token}"}

tests = [
    "/api/v1/drill/questions?subject=Geography&difficulty=easy&limit=5",
    "/api/v1/drill/questions?subject=Geography&difficulty=medium&limit=5",
    "/api/v1/drill/questions?subject=Geography&difficulty=hard&limit=5"
]

print("Verifying Geography Drill Endpoints:")
print("-" * 40)

for url in tests:
    try:
        r = requests.get(f"{BASE_URL}{url}", headers=headers, timeout=10)
        status = r.status_code
        if status == 200:
            data = r.json()
            count = len(data) if isinstance(data, list) else 0
            # If backend returns a dict with a list, try to find it
            if isinstance(data, dict):
                for key in ["items", "questions", "data"]:
                    if key in data and isinstance(data[key], list):
                        count = len(data[key])
                        break
            
            print(f"GET {url} -> Status: {status}, Count: {count}")
        else:
            print(f"GET {url} -> Status: {status}, Error: {r.text[:100]}")
    except Exception as e:
        print(f"GET {url} -> Failed: {str(e)}")
