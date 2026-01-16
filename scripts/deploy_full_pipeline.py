import subprocess
import shutil
import os
import time
import sys
import zipfile
import json

# CONFIG
BUCKET_NAME = "eduecosystem-source-816902390376"
S3_KEY = "backend.zip"
PROJECT_NAME = "eduecosystem-backend-build"
SERVICE_ARN = "arn:aws:apprunner:us-east-1:816902390376:service/eduecosystem-backend/8de976273d9d41acb02c24bb0790deb1"
REGION = "us-east-1"
BACKEND_DIR = "backend"

def run_command(cmd):
    try:
        result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"❌ Command Failed: {cmd}")
        print(f"Error: {e.stderr}")
        sys.exit(1)

def make_zip_file(source_dir, output_filename):
    print(f"📦 Zipping {source_dir} -> {output_filename}...")
    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            # Prune directories
            dirs[:] = [d for d in dirs if d not in ['venv', '.git', '__pycache__', 'node_modules', 'temp_uploads', 'uploads', '.pytest_cache', '.ruff_cache', 'migrations']]
            # Note: keeping migrations folder but excluding pycache inside if needed
            
            for file in files:
                if file.lower().endswith(('.zip', '.tar.gz', '.7z', '.rar', '.db', '.sqlite', '.db-journal', '.pyc', '.log')):
                    continue
                
                # Exclude large text reports but keep requirements.txt
                if file.endswith('.txt') and file != 'requirements.txt':
                    continue

                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, source_dir)
                zipf.write(file_path, arcname)
    print("✅ Zip created.")

def deploy():
    print("🚀 Starting AWS CLI Deployment Pipeline...")
    
    # 1. Zip
    zip_path = "backend_deploy.zip"
    make_zip_file(BACKEND_DIR, zip_path)
    
    # 2. Upload
    print(f"📤 Uploading to s3://{BUCKET_NAME}/{S3_KEY}...")
    run_command(f"aws s3 cp {zip_path} s3://{BUCKET_NAME}/{S3_KEY} --region {REGION}")
    print("✅ Upload Complete.")
    
    # 3. Trigger Build
    print(f"🔨 Triggering CodeBuild project: {PROJECT_NAME}...")
    build_json = run_command(f"aws codebuild start-build --project-name {PROJECT_NAME} --region {REGION} --output json")
    build_data = json.loads(build_json)
    build_id = build_data['build']['id']
    print(f"✅ Build Started: {build_id}")
    print("⏳ Waiting for build to complete (this takes ~3-5 mins)...")
    
    # 4. Monitor Build
    while True:
        status_json = run_command(f"aws codebuild batch-get-builds --ids {build_id} --region {REGION} --output json")
        status_data = json.loads(status_json)
        status = status_data['builds'][0]['buildStatus']
        phase = status_data['builds'][0].get('currentPhase', 'UNKNOWN')
        
        print(f"   Status: {status} (Phase: {phase})")
        
        if status == 'SUCCEEDED':
            print("✅ Build SUCCEEDED! New image pushed to ECR.")
            break
        elif status in ['FAILED', 'FAULT', 'STOPPED', 'TIMED_OUT']:
            print(f"❌ Build Failed. Status: {status}")
            sys.exit(1)
            
        time.sleep(15)

    # 5. Trigger App Runner
    print(f"🚀 Triggering App Runner Deployment for {SERVICE_ARN}...")
    deploy_json = run_command(f"aws apprunner start-deployment --service-arn {SERVICE_ARN} --region {REGION} --output json")
    deploy_data = json.loads(deploy_json)
    op_id = deploy_data['OperationId']
    print(f"✅ Deployment Started! Operation ID: {op_id}")
    print("The backend is now pulling the new image and re-deploying.")

if __name__ == "__main__":
    deploy()
