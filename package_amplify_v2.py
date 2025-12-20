import os
import shutil
import zipfile
import json

def package_amplify_v2():
    base_dir = "frontend"
    next_dir = os.path.join(base_dir, ".next")
    standalone_dir = os.path.join(next_dir, "standalone")
    hosting_dir = "amplify-deploy-v2"
    
    if os.path.exists(hosting_dir):
        shutil.rmtree(hosting_dir)
        
    os.makedirs(os.path.join(hosting_dir, ".amplify-hosting", "compute", "default"), exist_ok=True)
    os.makedirs(os.path.join(hosting_dir, ".amplify-hosting", "static"), exist_ok=True)
    
    print("Copying standalone files to compute/default...")
    if not os.path.exists(standalone_dir):
        print(f"Error: {standalone_dir} not found!")
        return
        
    # Standalone files
    for item in os.listdir(standalone_dir):
        s = os.path.join(standalone_dir, item)
        d = os.path.join(hosting_dir, ".amplify-hosting", "compute", "default", item)
        if os.path.isdir(s):
            shutil.copytree(s, d, dirs_exist_ok=True)
        else:
            shutil.copy2(s, d)
            
    print("Copying static assets to static/...")
    # Static files (public)
    public_dir = os.path.join(base_dir, "public")
    if os.path.exists(public_dir):
        shutil.copytree(public_dir, os.path.join(hosting_dir, ".amplify-hosting", "static"), dirs_exist_ok=True)
        
    # Static files (.next/static)
    next_static_dir = os.path.join(next_dir, "static")
    if os.path.exists(next_static_dir):
        shutil.copytree(next_static_dir, os.path.join(hosting_dir, ".amplify-hosting", "static", "_next", "static"), dirs_exist_ok=True)
        
    print("Creating refined deploy-manifest.json...")
    manifest = {
        "version": 1,
        "framework": "nextjs",
        "routes": [
            {
                "path": "/_next/static/*",
                "target": {
                    "kind": "static",
                    "src": "static"
                }
            },
            {
                "path": "/assets/*",
                "target": {
                    "kind": "static",
                    "src": "static"
                }
            },
            {
                "path": "/*",
                "target": {
                    "kind": "compute",
                    "src": "default"
                }
            }
        ],
        "computeResources": [
            {
                "name": "default",
                "runtime": "nodejs20.x",
                "entrypoint": "server.js"
            }
        ]
    }
    
    with open(os.path.join(hosting_dir, ".amplify-hosting", "deploy-manifest.json"), "w") as f:
        json.dump(manifest, f, indent=2)
        
    print("Creating zip archive (at root)...")
    zip_path = "amplify-ssr-final.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(hosting_dir):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.relpath(full_path, hosting_dir)
                zipf.write(full_path, arcname)
                
    print(f"Successfully created {zip_path}")
    print(f"Size: {os.path.getsize(zip_path) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    package_amplify_v2()
