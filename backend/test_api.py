import requests
import json
import os
import sys

base_url = "https://eduecosystem-backend-503001969959.us-central1.run.app"
token = os.getenv("AUTH_TOKEN")
if not token:
    print("Error: AUTH_TOKEN environment variable not set")
    sys.exit(1)

headers = {"Authorization": f"Bearer {token}"}

endpoints = [
    "/api/v1/drill/questions?subject=Polity&difficulty=easy",
    "/api/v1/drill/questions?subject=Polity&difficulty=medium",
    "/api/v1/drill/questions?subject=Polity&difficulty=hard",
    "/api/v1/drill/questions?subject=Polity&topic=Chapter+1",
    "/api/v1/drill/questions?subject=Polity&topic=Chapter+55",
    "/api/v1/synapse/profile",
    "/api/v1/synapse/gap-analysis"
]

results = []

for ep in endpoints:
    url = base_url + ep
    print(f"Testing {url}...")
    try:
        response = requests.get(url, headers=headers, timeout=30)
        data = response.json() if response.status_code == 200 else None
        count = len(data) if isinstance(data, list) else (1 if isinstance(data, dict) else 0)
        results.append({
            "endpoint": ep,
            "status": response.status_code,
            "count": count,
            "sample": str(data)[:100] if data else "N/A"
        })
    except Exception as e:
        results.append({
            "endpoint": ep,
            "status": "ERROR",
            "error": str(e)
        })

print(json.dumps(results, indent=2))
