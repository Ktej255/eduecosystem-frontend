import subprocess
import json
import sys
import os
import time

REGION = "us-east-1"
ACCOUNT_ID = "816902390376"
SERVICE_ARN = "arn:aws:apprunner:us-east-1:816902390376:service/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1"

def run_command(cmd, shell=True):
    print(f"🔹 Running: {cmd}")
    try:
        if shell:
            result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
        else:
            result = subprocess.run(cmd, shell=False, check=True, capture_output=True, text=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"❌ Command Failed: {cmd}")
        print(f"Error: {e.stderr}")
        sys.exit(1)

def main():
    print("🚀 Starting Local Build & Push to ECR...")

    # 1. Get ECR Repo URI
    print("🔍 Finding ECR Repository...")
    repos_json = run_command(f"aws ecr describe-repositories --region {REGION} --output json")
    repos = json.loads(repos_json).get('repositories', [])
    
    repo_uri = None
    for r in repos:
        if 'backend' in r['repositoryName']:
            repo_uri = r['repositoryUri']
            break
    
    if not repo_uri:
        # Fallback guess
        repo_uri = f"{ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com/eduecosystem-backend"
        print(f"⚠️ Could not find explicit repo, using fallback: {repo_uri}")
    else:
        print(f"✅ Found Repository: {repo_uri}")

    # 2. Login to ECR
    print("🔑 Logging in to ECR...")
    # PowerShell pipe requires careful handling, using python to execute the login command safely
    login_cmd = f"aws ecr get-login-password --region {REGION}"
    password = run_command(login_cmd)
    
    # Login Docker
    # We pass password via stdin
    ps = subprocess.Popen(["docker", "login", "--username", "AWS", "--password-stdin", repo_uri.split('/')[0]], 
                          stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = ps.communicate(input=password)
    if ps.returncode != 0:
        print(f"❌ Docker Login Failed: {err}")
        sys.exit(1)
    print("✅ Docker Login Succeeded.")

    # 3. Build Docker Image
    print("🔨 Building Docker Image (Local)...")
    # Assuming Dockerfile is in ./backend
    docker_build_cmd = f"docker build -t {repo_uri}:latest ./backend"
    # Streaming output for build is better, but for now simple run
    os.system(docker_build_cmd) # use os.system to show output to user

    # 4. Push to ECR
    print(f"Pfushing Image to {repo_uri}:latest...")
    os.system(f"docker push {repo_uri}:latest")
    print("✅ Image Pushed.")

    # 5. Deploy App Runner
    print(f"🚀 Triggering App Runner Deployment for {SERVICE_ARN}...")
    deploy_json = run_command(f"aws apprunner start-deployment --service-arn {SERVICE_ARN} --region {REGION} --output json")
    deploy_data = json.loads(deploy_json)
    op_id = deploy_data.get('OperationId', 'UNKNOWN')
    print(f"✅ Deployment Started! Operation ID: {op_id}")

if __name__ == "__main__":
    main()
