import subprocess
import json
import time

def check_status():
    result = subprocess.run(
        'aws amplify get-job --app-id d2869y3116p4ss --branch-name main --job-id 3 --output json',
        shell=True, capture_output=True, text=True
    )
    if result.returncode == 0:
        data = json.loads(result.stdout)
        status = data['job']['summary']['status']
        steps = data['job'].get('steps', [])
        return status, steps
    return 'ERROR', []

status, steps = check_status()
print(f"Deployment Status: {status}")
print("\nSteps:")
for step in steps:
    print(f"  - {step.get('stepName', 'Unknown')}: {step.get('status', 'Unknown')}")

if status == 'SUCCEED':
    print("\n=== DEPLOYMENT SUCCESSFUL! ===")
    print("Your app is live at: https://main.d2869y3116p4ss.amplifyapp.com/")
elif status == 'FAILED':
    print("\n=== DEPLOYMENT FAILED ===")
elif status == 'RUNNING':
    print("\n=== DEPLOYMENT STILL RUNNING ===")
    print("Please wait a few more minutes...")
