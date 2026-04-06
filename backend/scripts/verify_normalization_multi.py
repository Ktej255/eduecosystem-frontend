import requests
import json

# Use the token we got from the previous test_knowledge_api.py run if possible, 
# or just re-login. Since I don't have the token persisted here, I'll re-login.

BASE_URL = "http://localhost:8000/api/v1"
EMAIL = "ktej2525@gmail.com"
PASSWORD = "Tej@1106"

def test_subject(subject):
    print(f"\n--- Testing Subject: {subject} ---")
    
    # 1. Login
    login_data = {"username": EMAIL, "password": PASSWORD}
    response = requests.post(f"{BASE_URL}/login/access-token", data=login_data)
    if response.status_code != 200:
        print(f"FAILED: Login failed with status {response.status_code}")
        print(response.text)
        return

    token = response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # 2. Get Graph
    url = f"{BASE_URL}/guided/knowledge-graph?subject_slug={subject}"
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        nodes = data.get("nodes", [])
        print(f"SUCCESS: {len(nodes)} nodes retrieved for {subject}")
        if nodes:
            # Check a few nodes for difficulty normalization
            for node in nodes[:5]:
                print(f"Node: {node['label']}, Difficulty: {node['difficulty']}")
            
            # Check if any have non-standard difficulty
            difficulties = set(n['difficulty'] for n in nodes)
            print(f"Unique difficulties found: {difficulties}")
    else:
        print(f"FAILED: Status {response.status_code}")
        print(response.text)

if __name__ == "__main__":
    test_subject("polity")
    test_subject("history")
    test_subject("environment")
