import requests
import json

base_url = "http://localhost:8000/api/v1"
email = "ktej2525@gmail.com"
password = "Tej@1106"

def test_knowledge_graph():
    print(f"--- Testing Admin Login for {email} ---")
    payload = {
        "username": email,
        "password": password
    }
    
    try:
        r = requests.post(f"{base_url}/login/access-token", data=payload)
        if r.status_code != 200:
            print(f"FAILED: Login status {r.status_code}")
            print(r.text)
            return
            
        token = r.json().get("access_token")
        print(f"SUCCESS: Token retrieved (starts with {token[:10]}...)")
        
        headers = {"Authorization": f"Bearer {token}"}
        endpoint = f"{base_url}/guided/knowledge-graph?subject=environment"
        
        print(f"\n--- Testing Knowledge Graph API: {endpoint} ---")
        r2 = requests.get(endpoint, headers=headers)
        
        print(f"Status Code: {r2.status_code}")
        if r2.status_code == 200:
            data = r2.json()
            print(f"SUCCESS: Retrieved {len(data.get('nodes', []))} nodes and {len(data.get('edges', []))} edges.")
            # Sample check
            if data.get('nodes'):
                print(f"Sample node: {data['nodes'][0]}")
        else:
            print(f"FAILED: Status {r2.status_code}")
            print("Response Body (Traceback?):")
            print(r2.text)
            
    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    test_knowledge_graph()
