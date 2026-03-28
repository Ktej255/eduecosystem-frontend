import requests
from requests.packages.urllib3.exceptions import InsecureRequestWarning

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

BASE_URL = "https://eduecosystem-frontend.vercel.app"
# BASE_URL = "http://localhost:3000" # If no Vercel app, we could switch to this if vercel is dead

routes = [
    "/student/polity",
    "/student/polity/read",
    "/student/polity/drill",
    "/student/polity/current-affairs",
    "/student/modern-history",
    "/student/modern-history/read",
    "/student/modern-history/drill",
    "/student/medieval-history",
    "/student/medieval-history/read",
    "/student/medieval-history/drill",
    "/student/ancient-history",
    "/student/ancient-history/read",
    "/student/ancient-history/drill"
]

print("| Route | Status | Working/404/Error |")
print("|---|---|---|")

for route in routes:
    url = f"{BASE_URL}{route}"
    try:
        response = requests.get(url, verify=False, timeout=10)
        status = response.status_code
        if status == 200:
            result = "Working"
        elif status == 404:
            result = "404"
        else:
            result = "Error"
        print(f"| {route} | {status} | {result} |")
    except Exception as e:
        print(f"| {route} | N/A | Error ({str(e)[:20]}) |")

