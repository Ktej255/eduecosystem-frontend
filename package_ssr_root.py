import os
import shutil
import zipfile

def package_ssr_root():
    base_dir = "frontend"
    next_dir = os.path.join(base_dir, ".next")
    standalone_dir = os.path.join(next_dir, "standalone", "frontend") # Next.js standalone structure
    if not os.path.exists(standalone_dir):
        # Maybe it's directly in standalone
        standalone_dir = os.path.join(next_dir, "standalone")
        
    hosting_dir = "amplify-ssr-root"
    
    if os.path.exists(hosting_dir):
        shutil.rmtree(hosting_dir)
    os.makedirs(hosting_dir, exist_ok=True)
    
    print(f"Using standalone dir: {standalone_dir}")
    
    # 1. Copy everything from standalone to root
    for item in os.listdir(standalone_dir):
        s = os.path.join(standalone_dir, item)
        d = os.path.join(hosting_dir, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, dirs_exist_ok=True)
        else:
            shutil.copy2(s, d)
            
    # 2. Merging public and static
    public_dir = os.path.join(base_dir, "public")
    if os.path.exists(public_dir):
        print("Merging public files...")
        shutil.copytree(public_dir, hosting_dir, dirs_exist_ok=True)
        
    next_static_source = os.path.join(next_dir, "static")
    next_static_target = os.path.join(hosting_dir, ".next", "static")
    if os.path.exists(next_static_source):
        print("Merging .next/static files...")
        shutil.copytree(next_static_source, next_static_target, dirs_exist_ok=True)
        
    # 3. Create zip
    zip_path = "ssr-root-deploy.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(hosting_dir):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.relpath(full_path, hosting_dir)
                zipf.write(full_path, arcname)
                
    print(f"Successfully created {zip_path}")
    print(f"Size: {os.path.getsize(zip_path) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    package_ssr_root()
