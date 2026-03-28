
import urllib.request
import urllib.error
import ssl

def check_endpoint(url):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    try:
        req = urllib.request.Request(url, method='GET')
        with urllib.request.urlopen(req, context=ctx) as response:
            print(f"{url}: {response.status}")
    except urllib.error.HTTPError as e:
        print(f"{url}: {e.code}")
    except Exception as e:
        print(f"{url}: {e}")

base_url = "https://eduecosystem-backend-503001969959.us-central1.run.app"
check_endpoint(f"{base_url}/health")
check_endpoint(f"{base_url}/api/v1/upsc/student/dashboard")
check_endpoint(f"{base_url}/api/v1/packs/my-pack")
check_endpoint(f"{base_url}/api/v1/upsc/drills/start")
