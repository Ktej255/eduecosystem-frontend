
import urllib.request
import urllib.parse
import json
import ssl

def get_token(base_url, username, password):
    url = f"{base_url}/api/v1/login/access-token"
    # FastAPI OAuth2 expects form data
    data = urllib.parse.urlencode({
        "username": username,
        "password": password
    }).encode("utf-8")
    
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    req = urllib.request.Request(url, data=data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            res = json.loads(response.read().decode())
            return res.get("access_token")
    except Exception as e:
        print(f"Login failed: {e}")
        return None

def test_authenticated_endpoint(base_url, token, path, method="GET", body=None):
    url = f"{base_url}{path}"
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    data = json.dumps(body).encode("utf-8") if body else None
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", f"Bearer {token}")
    if body:
        req.add_header("Content-Type", "application/json")
        
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            print(f"{path}: {response.status} OK")
            # print(response.read().decode()[:100]) # Optional: peek at data
    except urllib.error.HTTPError as e:
        print(f"{path}: {e.code} Error")
        print(e.read().decode())
    except Exception as e:
        print(f"{path}: Failed - {e}")

base_url = "https://eduecosystem-backend-503001969959.us-central1.run.app"
username = "ktej255@gmail.com"
password = "Tej@1106"

token = get_token(base_url, username, password)
if token:
    print("Login Successful!")
    test_authenticated_endpoint(base_url, token, "/api/v1/upsc/student/dashboard")
    test_authenticated_endpoint(base_url, token, "/api/v1/ai/tutor/portal-chat", method="POST", body={"message": "Hello"})
else:
    print("Verification halted due to login failure.")
