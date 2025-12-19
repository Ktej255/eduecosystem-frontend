import json
import subprocess
import os

# Read deployment info
with open('deployment_info.json', 'r') as f:
    data = json.load(f)

upload_url = data['zipUploadUrl']
job_id = data['jobId']

print(f"Job ID: {job_id}")
print(f"Upload URL length: {len(upload_url)}")

# Upload the zip file using curl
zip_path = 'frontend-deploy.zip'
zip_size = os.path.getsize(zip_path)
print(f"Zip file size: {zip_size / 1024 / 1024:.1f} MB")

# Use curl to upload
result = subprocess.run([
    'curl', '-X', 'PUT',
    '-H', 'Content-Type: application/zip',
    '--data-binary', f'@{zip_path}',
    upload_url
], capture_output=True, text=True)

print(f"Upload result: {result.returncode}")
if result.stdout:
    print(f"Stdout: {result.stdout[:500]}")
if result.stderr:
    print(f"Stderr: {result.stderr[:500]}")
