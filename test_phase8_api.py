"""
Quick API Test Script for Phase 8 Endpoints

Tests the Phase 8 API endpoints to verify they're working correctly.
Run this after starting the backend server.
"""

import requests
import json

API_URL = "http://localhost:8000"

def test_endpoint(name, url, method="GET", headers=None, data=None):
    """Test an API endpoint"""
    try:
        print(f"\n{'='*60}")
        print(f"Testing: {name}")
        print(f"URL: {url}")
        print('-'*60)
        
        if method == "GET":
            response = requests.get(url, headers=headers, timeout=5)
        else:
            response = requests.post(url, headers=headers, json=data, timeout=5)
        
        print(f"Status: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print(f"✅ SUCCESS")
            print(f"Response preview: {json.dumps(result[:2] if isinstance(result, list) else result, indent=2)[:200]}...")
            return True
        else:
            print(f"⚠️  Status {response.status_code}")
            print(f"Response: {response.text[:200]}")
            return False
            
    except requests.exceptions.ConnectionError:
        print(f"❌ CONNECTION ERROR - Is the backend running?")
        print(f"   Start with: cd backend && uvicorn app.main:app --reload")
        return False
    except Exception as e:
        print(f"❌ ERROR: {e}")
        return False

def main():
    print("="*60)
    print("PHASE 8 API ENDPOINT TESTS")
    print("="*60)
    
    results = {}
    
    # Test 1: Languages (i18n)
    results['languages'] = test_endpoint(
        "Get Languages",
        f"{API_URL}/api/v1/languages"
    )
    
    # Test 2: Subscription Plans
    results['plans'] = test_endpoint(
        "Get Subscription Plans",
        f"{API_URL}/api/v1/subscriptions/plans"
    )
    
    # Test 3: Health Check
    results['health'] = test_endpoint(
        "API Health Check",
        f"{API_URL}/api/v1/health"
    )
    
    # Summary
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for name, status in results.items():
        icon = "✅" if status else "❌"
        print(f"{icon} {name.replace('_', ' ').title()}")
    
    print(f"\n{passed}/{total} tests passed")
    
    if passed == total:
        print("\n🎉 All Phase 8 endpoints working!")
    elif passed == 0:
        print("\n⚠️  Backend may not be running. Start it with:")
        print("   cd backend && uvicorn app.main:app --reload")
    else:
        print(f"\n⚠️  {total - passed} endpoint(s) not working. Check backend logs.")
    
    print("\n" + "="*60)
    print("NEXT STEPS:")
    print("  1. View API docs: http://localhost:8000/docs")
    print("  2. Test frontend: http://localhost:3000/pricing")
    print("  3. Configure Stripe: Add keys to backend/.env")
    print("="*60)

if __name__ == "__main__":
    main()
