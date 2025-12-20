import os
import zipfile

def package_static():
    base_dir = "frontend"
    out_dir = os.path.join(base_dir, "out")
    zip_path = "static-deploy.zip"
    
    if not os.path.exists(out_dir):
        print(f"Error: {out_dir} not found!")
        return
        
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(out_dir):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.relpath(full_path, out_dir)
                zipf.write(full_path, arcname)
                
    print(f"Successfully created {zip_path}")
    print(f"Size: {os.path.getsize(zip_path) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    package_static()
