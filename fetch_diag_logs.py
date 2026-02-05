import os
import subprocess
import json

def get_logs():
    service_arn = "arn:aws:apprunner:us-east-1:816902390376:service/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1"
    log_group = "/aws/apprunner/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1/application"
    stream_name = "instance/dc735dc8f9d4428ea42b851ad77810ee"
    
    cmd = [
        "aws", "logs", "get-log-events",
        "--log-group-name", log_group,
        "--log-stream-name", stream_name,
        "--limit", "200",
        "--region", "us-east-1",
        "--output", "json"
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        data = json.loads(result.stdout)
        
        with open("diag_logs.txt", "w", encoding="utf-8") as f:
            for event in data.get('events', []):
                f.write(event.get('message', '') + "\n")
        print("Success: Logs written to diag_logs.txt")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_logs()
