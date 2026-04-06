import requests
import json

BASE_URL = "http://localhost:8000/api/v1/guided"
ADMIN_EMAIL = "ktej2525@gmail.com"
PASSWORD = "Tej@1106"

def get_token():
    r = requests.post("http://localhost:8000/api/v1/login/access-token", data={"username": ADMIN_EMAIL, "password": PASSWORD})
    return r.json()["access_token"]

def verify_knowledge_graph():
    token = get_token()
    headers = {"Authorization": f"Bearer {token}"}
    subjects = ["environment", "history", "polity", "geography", "economy", "scitech", "intrel", "society", "ethics", "governance", "pubadmin", "socialjustice"]
    
    print(f"--- Final Production Audit: Knowledge Explorer ---")
    
    for sub in subjects:
        # Admin check
        res_admin = requests.get(f"{BASE_URL}/knowledge-graph?subject_slug={sub}", headers=headers)
        admin_status = "✅ OK" if res_admin.status_code == 200 else f"❌ {res_admin.status_code}"
        admin_count = len(res_admin.json().get("nodes", [])) if res_admin.status_code == 200 else 0
        
        # Student check
        res_stud = requests.get(f"{BASE_URL}/student-knowledge-graph?subject_slug={sub}", headers=headers)
        stud_status = "✅ OK" if res_stud.status_code == 200 else f"❌ {res_stud.status_code}"
        stud_count = len(res_stud.json().get("nodes", [])) if res_stud.status_code == 200 else 0
        
        print(f"Subject: {sub:15} | Admin: {admin_status} ({admin_count} nodes) | Student: {stud_status} ({stud_count} nodes)")

if __name__ == "__main__":
    verify_knowledge_graph()
