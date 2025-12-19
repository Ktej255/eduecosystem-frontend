import subprocess
import json
import os
import sys

def run_aws_command(cmd):
    """Run an AWS CLI command and return the result"""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout, result.stderr, result.returncode

# Check file exists
zip_file = 'frontend-deploy.zip'
if not os.path.exists(zip_file):
    print(f"Error: {zip_file} not found!")
    sys.exit(1)

file_size = os.path.getsize(zip_file)
print(f"Zip file size: {file_size / 1024 / 1024:.1f} MB")

# Step 1: Stop any pending jobs
print("\n1. Stopping any pending jobs...")
stdout, stderr, code = run_aws_command('aws amplify list-jobs --app-id d2869y3116p4ss --branch-name main --output json')
if code == 0:
    jobs = json.loads(stdout)
    for job in jobs.get('jobSummaries', []):
        if job.get('status') in ['PENDING', 'RUNNING']:
            print(f"   Stopping job {job['jobId']}...")
            run_aws_command(f"aws amplify stop-job --app-id d2869y3116p4ss --branch-name main --job-id {job['jobId']}")

# Step 2: Create a new deployment
print("\n2. Creating new deployment...")
stdout, stderr, code = run_aws_command('aws amplify create-deployment --app-id d2869y3116p4ss --branch-name main --output json')
if code != 0:
    print(f"Error creating deployment: {stderr}")
    sys.exit(1)

deployment = json.loads(stdout)
job_id = deployment['jobId']
upload_url = deployment['zipUploadUrl']
print(f"   Job ID: {job_id}")
print(f"   Upload URL obtained (length: {len(upload_url)})")

# Step 3: Upload the zip file using curl
print("\n3. Uploading zip file...")
curl_cmd = f'curl -X PUT -H "Content-Type: application/zip" --data-binary @{zip_file} "{upload_url}"'
result = subprocess.run(curl_cmd, shell=True, capture_output=True, text=True)
if result.returncode == 0:
    print("   Upload successful!")
else:
    print(f"   Upload error: {result.stderr}")

# Step 4: Start the deployment
print("\n4. Starting deployment...")
stdout, stderr, code = run_aws_command(f'aws amplify start-deployment --app-id d2869y3116p4ss --branch-name main --job-id {job_id} --output json')
if code == 0:
    print("   Deployment started successfully!")
    print(f"\n=== Deployment initiated! ===")
    print(f"Job ID: {job_id}")
    print(f"App URL: https://main.d2869y3116p4ss.amplifyapp.com/")
else:
    print(f"   Error starting deployment: {stderr}")

# Step 5: Check job status
print("\n5. Checking job status...")
stdout, stderr, code = run_aws_command(f'aws amplify get-job --app-id d2869y3116p4ss --branch-name main --job-id {job_id} --output json')
if code == 0:
    job_info = json.loads(stdout)
    status = job_info.get('job', {}).get('summary', {}).get('status', 'UNKNOWN')
    print(f"   Current status: {status}")
