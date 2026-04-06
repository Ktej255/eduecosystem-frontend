import urllib.request
import json

try:
    req = urllib.request.Request('https://pizza-blitz-backend-503001969959.us-central1.run.app/api/v1/restaurant/stats/dashboard-stats?month=3&year=2026')
    res = urllib.request.urlopen(req)
    print(res.read().decode())
except urllib.error.HTTPError as e:
    print(e.read().decode())
