import json
import subprocess
import os

def get_logs():
    log_group = "/aws/codebuild/eduecosystem-backend-build"
    log_stream = "e01d5e62-8807-4f08-b37c-1c05b189a67d"
    
    cmd = [
        "aws", "logs", "get-log-events",
        "--log-group-name", log_group,
        "--log-stream-name", log_stream,
        "--output", "json"
    ]
    
    try:
        # Set environment variables for AWS CLI
        # NOTE: AWS credentials should be set via environment variables or AWS CLI config
        # Do NOT hardcode credentials in source code
        env = os.environ.copy()
        # Use existing AWS credentials from environment
        # Set these environment variables before running:
        # - AWS_ACCESS_KEY_ID
        # - AWS_SECRET_ACCESS_KEY
        # - AWS_DEFAULT_REGION (defaults to us-east-1)
        if not env.get("AWS_ACCESS_KEY_ID") or not env.get("AWS_SECRET_ACCESS_KEY"):
            print("ERROR: AWS credentials not found. Please set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables.")
            return
        env.setdefault("AWS_DEFAULT_REGION", "us-east-1")
        env["AWS_PAGER"] = ""
        env["PYTHONIOENCODING"] = "utf-8"
        
        # Use binary capture and manual decoding to avoid charmap errors
        result = subprocess.run(cmd, capture_output=True, env=env)
        if result.returncode != 0:
            err_msg = result.stderr.decode('utf-8', errors='ignore')
            with open("logs_cleaned_19.txt", "w", encoding="utf-8") as f:
                f.write(f"CLI Error: {err_msg}\n")
            return
            
        # Manually decode stdout using utf-8 ignore
        stdout_str = result.stdout.decode('utf-8', errors='ignore')
        if not stdout_str.strip():
            with open("logs_cleaned_19.txt", "w", encoding="utf-8") as f:
                f.write("Error: AWS CLI returned empty output\n")
            return

        data = json.loads(stdout_str)
        events = data.get("events", [])
        
        with open("logs_cleaned_19.txt", "w", encoding="utf-8") as f:
            for event in events:
                msg = event.get("message", "").strip()
                # Clean non-printable characters
                cleaned_msg = "".join(c if ord(c) < 128 else "?" for c in msg)
                f.write(cleaned_msg + "\n")
        
    except Exception as e:
        with open("logs_cleaned_19.txt", "w", encoding="utf-8") as f:
            f.write(f"Python Error: {str(e)}\n")

if __name__ == "__main__":
    get_logs()
