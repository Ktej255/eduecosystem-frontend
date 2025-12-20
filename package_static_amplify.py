import os
import shutil
import zipfile

def package_static_amplify():
    base_dir = "frontend"
    next_dir = os.path.join(base_dir, ".next")
    public_dir = os.path.join(base_dir, "public")
    pages_dir = os.path.join(next_dir, "server", "pages")
    hosting_dir = "amplify-static-deploy"
    
    if os.path.exists(hosting_dir):
        shutil.rmtree(hosting_dir)
    os.makedirs(hosting_dir, exist_ok=True)
    
    # 1. Copy public files
    if os.path.exists(public_dir):
        print("Copying public files...")
        shutil.copytree(public_dir, hosting_dir, dirs_exist_ok=True)
        
    # 2. Copy generated HTML pages
    if os.path.exists(pages_dir):
        print("Copying generated HTML pages...")
        for root, dirs, files in os.walk(pages_dir):
            for file in files:
                if file.endswith(".html") or file.endswith(".json"):
                    s = os.path.join(root, file)
                    rel = os.path.relpath(root, pages_dir)
                    d = os.path.join(hosting_dir, rel)
                    os.makedirs(d, exist_ok=True)
                    shutil.copy2(s, os.path.join(d, file))
                    
    # 3. Copy _next/static
    next_static_target = os.path.join(hosting_dir, "_next", "static")
    os.makedirs(next_static_target, exist_ok=True)
    shutil.copytree(os.path.join(next_dir, "static"), next_static_target, dirs_exist_ok=True)
    
    # 4. Create zip
    zip_path = "static-hosting-deploy.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(hosting_dir):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.relpath(full_path, hosting_dir)
                zipf.write(full_path, arcname)
                
    print(f"Successfully created {zip_path}")
    print(f"Size: {os.path.getsize(zip_path) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    package_static_amplify()
