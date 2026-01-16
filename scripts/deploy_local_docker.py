import subprocess
import sys
import time

# CONFIG
REGION = "us-east-1"
ACCOUNT_ID = "816902390376"
REPO_NAME = "eduecosystem-backend"
ECR_URI = f"{ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com/{REPO_NAME}"
IMAGE_TAG = "latest"

def run_command(cmd, shell=False):
    print(f"🔹 Running: {cmd}")
    try:
        # shell=True for complex commands (pipes), False for list
        if shell:
             subprocess.run(cmd, shell=True, check=True)
        else:
             # Split string if not shell
             if isinstance(cmd, str): cmd = cmd.split()
             subprocess.run(cmd, check=True)
        print("✅ Success")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: Command failed with exit code {e.returncode}")
        print(f"Command: {cmd}")
        sys.exit(1)

def deploy():
    print("🚀 Starting LOCAL Docker Deployment...")
    
    # 1. Login to ECR
    print("🔑 Logging into ECR...")
    login_cmd = f"aws ecr get-login-password --region {REGION} | docker login --username AWS --password-stdin {ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com"
    run_command(login_cmd, shell=True)

    # 2. Build
    print("🔨 Building Docker Image locally...")
    # Using Dockerfile.production if it exists, otherwise Dockerfile
    dockerfile = "Dockerfile.production" if subprocess.run("ls Dockerfile.production", shell=True).returncode == 0 else "Dockerfile"
    print(f"   Using {dockerfile}")
    
    build_cmd = f"docker build -t {REPO_NAME} -f {dockerfile} ."
    run_command(build_cmd, shell=True)

    # 3. Tag
    print("🏷️ Tagging Image...")
    tag_cmd = f"docker tag {REPO_NAME}:{IMAGE_TAG} {ECR_URI}:{IMAGE_TAG}"
    run_command(tag_cmd, shell=True)
    
    # 4. Push
    print("📤 Pushing to ECR (this may take a few minutes)...")
    push_cmd = f"docker push {ECR_URI}:{IMAGE_TAG}"
    run_command(push_cmd, shell=True)
    
    print("✅ Pushed successfully!")
    print("🔄 Triggering App Runner deployment to pick up the new image...")
    
    # 5. Trigger Deployment (Optional but good to be sure)
    msg_cmd = f"aws apprunner start-deployment --service-arn arn:aws:apprunner:us-east-1:816902390376:service/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1 --region {REGION}"
    try:
        run_command(msg_cmd, shell=True)
        print("✅ App Runner deployment triggered.")
    except:
        print("⚠️ Direct trigger failed (maybe auto-deploy is on), check console.")
        
    print("\n🎉 DONE! Your local code is now on its way to the live server.")

if __name__ == "__main__":
    deploy()
