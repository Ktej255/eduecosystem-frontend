import zipfile
import os

def create_frontend_zip():
    zip_path = "frontend-deploy.zip"
    frontend_dir = "frontend"
    
    # Directories and files to exclude
    exclude_patterns = [
        "node_modules",
        ".next",
        ".git",
        "__pycache__",
        ".env.local",
        ".env",
        ".DS_Store"
    ]
    
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(frontend_dir):
            # Remove excluded directories from the list
            dirs[:] = [d for d in dirs if d not in exclude_patterns]
            
            for file in files:
                # Skip excluded files
                if file in exclude_patterns:
                    continue
                    
                full_path = os.path.join(root, file)
                # Ensure the path in the zip is relative to the frontend directory
                # so that package.json is at the root of the zip.
                arcname = os.path.relpath(full_path, frontend_dir).replace("\\", "/")
                zipf.write(full_path, arcname)
    
    print(f"Successfully created {zip_path}")
    print(f"Size: {os.path.getsize(zip_path) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    create_frontend_zip()
