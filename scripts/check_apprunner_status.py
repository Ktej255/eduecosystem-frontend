import subprocess
import json
import sys

def check_status():
    cmd = [
        "aws", "apprunner", "describe-service",
        "--service-arn", "arn:aws:apprunner:us-east-1:816902390376:service/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1",
        "--region", "us-east-1",
        "--no-cli-pager"
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        data = json.loads(result.stdout)
        service = data.get("Service", {})
        status = service.get("Status")
        operation_id = service.get("ServiceId")
        print(f"Service Status: {status}")
        print(f"Service ID: {operation_id}")
    except Exception as e:
        print(f"Error checking status: {e}")

if __name__ == "__main__":
    check_status()
