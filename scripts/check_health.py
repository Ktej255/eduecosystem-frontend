import requests
import sys

URL = "https://a7z4kjysmp.us-east-1.awsapprunner.com/health"

print(f"Checking {URL} ...")
try:
    resp = requests.get(URL, timeout=10)
    print(f"Status Code: {resp.status_code}")
    print(f"Response: {resp.text}")
    if resp.status_code == 200:
        print("✅ SUCCESS: Service is healthy.")
    else:
        print("❌ FAILURE: Non-200 response.")
except Exception as e:
    print(f"❌ ERROR: {e}")
