import zipfile
import os

def create_zip():
    zip_path = "backend-fixed.zip"
    items_to_include = [
        ("backend/app", "app"),
        ("backend/alembic", "alembic"),
        ("backend/migrations", "migrations"),
        ("backend/requirements.txt", "requirements.txt"),
        ("backend/Dockerfile.production", "Dockerfile.production"),
        ("backend/buildspec.yml", "buildspec.yml"),
        ("backend/scripts", "scripts"),
        ("backend/main.py", "main.py")
    ]
    
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for local_path, zip_name in items_to_include:
            if not os.path.exists(local_path):
                print(f"Warning: {local_path} not found")
                continue
            if os.path.isdir(local_path):
                for root, dirs, files in os.walk(local_path):
                    for file in files:
                        full_path = os.path.join(root, file)
                        # Create a relative path for the zip with forward slashes
                        relative_path = os.path.relpath(full_path, os.path.dirname(local_path))
                        arcname = relative_path.replace("\\", "/")
                        zipf.write(full_path, arcname)
            else:
                zipf.write(local_path, zip_name)
    
    print(f"Successfully created {zip_path}")

if __name__ == "__main__":
    create_zip()
