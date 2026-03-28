import subprocess
import base64
import os

# Read the verify script
with open('verify_final.py', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode()

gcloud_cmd = 'gcloud.cmd' if os.name == 'nt' else 'gcloud'
job_name = "verify-mcqs-job"

# 1. Update the EXISTING job
update_cmd = [
    gcloud_cmd, "run", "jobs", "update", job_name,
    "--command", "python",
    "--args", f"-c,import base64; exec(base64.b64decode('{b64}').decode())",
    "--region", "us-central1",
    "--project", "eduecosystem-prod"
]

print("Updating job...")
subprocess.run(update_cmd)

# 2. Execute the job
execute_cmd = [
    gcloud_cmd, "run", "jobs", "execute", job_name,
    "--region", "us-central1",
    "--project", "eduecosystem-prod",
    "--wait"
]

print("Executing job...")
result = subprocess.run(execute_cmd, capture_output=True, text=True)
print("STDOUT:")
print(result.stdout)
print("STDERR:")
print(result.stderr)
