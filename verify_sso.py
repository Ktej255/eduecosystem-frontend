import sqlite3
import requests
import sys
import os

# Configuration
DB_PATH = 'backend/eduecosystem.db'
API_URL = 'http://localhost:8000/api/v1'

def check_database():
    print("=" * 60)
    print("DATABASE VERIFICATION")
    print("=" * 60)
    
    if not os.path.exists(DB_PATH):
        print(f"❌ Database file not found at {DB_PATH}")
        return False
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    tables = ['organizations', 'sso_configs', 'sso_sessions', 'sso_audit_logs']
    all_present = True
    
    for table in tables:
        try:
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            count = cursor.fetchone()[0]
            print(f"  ✓ Table '{table}' exists ({count} rows)")
        except sqlite3.OperationalError:
            print(f"  ❌ Table '{table}' MISSING")
            all_present = False
            
    conn.close()
    return all_present

def check_api():
    print("\n" + "=" * 60)
    print("API ENDPOINT VERIFICATION")
    print("=" * 60)
    
    # 1. Check Discovery Endpoint (GET /sso/login/{slug})
    # We'll use a dummy slug to check if the endpoint exists (should return 404 or 400, not 405 or 500)
    slug = "non-existent-org"
    try:
        response = requests.get(f"{API_URL}/sso/login/{slug}")
        if response.status_code in [404, 400, 200]:
            print(f"  ✓ GET /sso/login/{{slug}} is reachable (Status: {response.status_code})")
        else:
            print(f"  ❌ GET /sso/login/{{slug}} returned unexpected status: {response.status_code}")
            print(f"     Response: {response.text}")
    except requests.exceptions.ConnectionError:
        print("  ❌ Could not connect to API. Is the server running?")
        return False

    # 2. Check Login Initiation Endpoint (POST /sso/login/{provider})
    # This endpoint expects a POST
    provider = "google"
    try:
        response = requests.post(f"{API_URL}/sso/login/{provider}")
        # Should return 400 or 404 if not configured, but 405 means method not allowed
        if response.status_code != 405:
            print(f"  ✓ POST /sso/login/{{provider}} is reachable (Status: {response.status_code})")
        else:
            print(f"  ❌ POST /sso/login/{{provider}} returned 405 Method Not Allowed")
    except Exception as e:
        print(f"  ❌ Error checking POST endpoint: {e}")

    return True

if __name__ == "__main__":
    print("Starting SSO Verification...")
    db_ok = check_database()
    api_ok = check_api()
    
    if db_ok and api_ok:
        print("\n✅ SSO Verification PASSED")
        sys.exit(0)
    else:
        print("\n❌ SSO Verification FAILED")
        sys.exit(1)
