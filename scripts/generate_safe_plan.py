import os
import sys
import json

def generate_safe_plan():
    impact_path = "graphify-out/impact.json"
    manifest_path = "graphify-out/execution_manifest.json"
    
    if not os.path.exists(impact_path):
        print("Error: impact.json not found. Run analyze_impact.py first.")
        sys.exit(1)
        
    with open(impact_path, "r", encoding="utf-8") as f:
        impact = json.load(f)
        
    # Generate manifest based on affected files
    manifest = {
        "id": "GRAPHIFY-GEN-" + str(os.getpid()),
        "authorized_files": impact.get("affected_files", []),
        "risk_level": impact.get("risk_level", "UNKNOWN"),
        "status": "APPROVED" if impact.get("risk_level") != "HIGH" else "PENDING_REVIEW"
    }
    
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=4)
        
    print(f"Safe plan generated in {manifest_path}. Status: {manifest['status']}")

if __name__ == "__main__":
    generate_safe_plan()
