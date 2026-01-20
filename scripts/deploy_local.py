import subprocess
import json
import sys
import time

# CONFIG
REGION = "us-east-1"
ACCOUNT_ID = "816902390376"
ECR_REPO_NAME = "eduecosystem-backend"
IMAGE_TAG = "latest"
SERVICE_ARN = "arn:aws:apprunner:us-east-1:816902390376:service/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1"
BACKEND_DIR = "backend"

def run_command(cmd, cwd=None):
    print(f"👉 Running: {cmd}")
    try:
        subprocess.run(cmd, shell=True, check=True, cwd=cwd)
    except subprocess.CalledProcessError as e:
        print(f"❌ Command Failed: {cmd}")
        sys.exit(1)

def deploy_local():
    print("🚀 Starting LOCAL Deployment Pipeline (Bypassing CodeBuild)...")
    
    # 1. Login to ECR
    print("🔑 Logging into AWS ECR...")
    login_cmd = f"aws ecr get-login-password --region {REGION} | docker login --username AWS --password-stdin {ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com"
    run_command(login_cmd)
    
    # 2. Build Docker Image
    ecr_uri = f"{ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com/{ECR_REPO_NAME}:{IMAGE_TAG}"
    print(f"🐳 Building Docker Image locally: {ecr_uri}...")
    # NOTE: Run from backend dir so COPY . . works as expected in Dockerfile
    # Assuming Dockerfile is at backend/Dockerfile
    build_cmd = f"docker build -t {ecr_uri} ."
    run_command(build_cmd, cwd=BACKEND_DIR)
    
    # 3. Push to ECR
    print(f"📤 Pushing Image to ECR: {ecr_uri}...")
    push_cmd = f"docker push {ecr_uri}"
    run_command(push_cmd)
    
    # 4. Update App Runner
    print(f"🔄 Triggering App Runner Deployment for {SERVICE_ARN}...")
    # We don't need to change config, just start a deployment with the latest image we just pushed
    deploy_cmd = f"aws apprunner start-deployment --service-arn {SERVICE_ARN} --region {REGION}"
    run_command(deploy_cmd)
    
    print("✅ Deployment Triggered Successfully!")
    print("Monitor the rollout at: https://console.aws.amazon.com/apprunner/home")

if __name__ == "__main__":
    deploy_local()
