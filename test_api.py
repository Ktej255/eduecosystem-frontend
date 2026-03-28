import requests
import sys

BASE_URL = "https://eduecosystem-backend-yqncvzxdma-uc.a.run.app"

# 1. Get Token
token = None
for endpoint in ["/api/v1/auth/access-token", "/api/v1/login/access-token", "/api/v1/auth/login"]:
    r = requests.post(f"{BASE_URL}{endpoint}", data={
        "username": "ktej255@gmail.com",
        "password": "Tej@1106"
    })
    if r.status_code == 200:
        token = r.json().get("access_token")
        break

if not token:
    print(f"Failed to login: {r.status_code} {r.text}")
    sys.exit(1)

headers = {"Authorization": f"Bearer {token}"}

tests = [
    "/api/v1/drill/questions?subject=Polity&difficulty=easy&limit=5",
    "/api/v1/drill/questions?subject=Modern%20History&difficulty=medium&limit=5",
    "/api/v1/drill/questions?subject=Geography&difficulty=hard&limit=5"
]

for url in tests:
    r = requests.get(f"{BASE_URL}{url}", headers=headers)
    if r.status_code == 200:
        data = r.json()
        if isinstance(data, dict):
            if "items" in data:
                count = len(data["items"])
            elif "questions" in data:
                count = len(data["questions"])
            elif "data" in data:
                count = len(data["data"])
            else:
                count = len(data)
        else:
            count = len(data)
        
        # Format the url back to the unencoded version requested by user
        display_url = url.replace("%20", " ")
        print(f"GET {display_url} -> Status: {r.status_code}, Count: {count}")
    else:
        display_url = url.replace("%20", " ")
        print(f"GET {display_url} -> Status: {r.status_code}, Error: {r.text[:50]}")
