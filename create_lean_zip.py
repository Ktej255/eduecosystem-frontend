import os
import zipfile
import shutil

# Source and destination paths
backend_dir = r"d:\Graphology\Master Software\Eduecosystem\backend"
output_zip = r"d:\Graphology\Master Software\Eduecosystem\backend-lean-v2.zip"

# Directories and patterns to exclude
exclude_dirs = {
    'venv', '.venv', 'ENV', 'env',
    '__pycache__', '.pytest_cache', '.ruff_cache',
    'uploads', 'data', '.git',
    'alembic', # We'll add alembic structure but not versions
}

exclude_extensions = {'.db', '.db-journal', '.log', '.sqlite', '.sqlite3'}

# Specific filenames to exclude (log files, test outputs, etc.)
exclude_files = {'backend_out.log', 'backend_err.log'}


def should_exclude(path, name):
    """Check if a file or directory should be excluded."""
    # Check directory names
    if name in exclude_dirs:
        return True
    # Check file extensions
    if os.path.isfile(path):
        _, ext = os.path.splitext(name)
        if ext.lower() in exclude_extensions:
            return True
    return False

def create_lean_zip():
    """Create a lean zip file of the backend."""
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(backend_dir):
            # Filter out excluded directories
            dirs[:] = [d for d in dirs if not should_exclude(os.path.join(root, d), d)]
            
            for file in files:
                file_path = os.path.join(root, file)
                if not should_exclude(file_path, file):
                    # Calculate relative path for the zip
                    arcname = os.path.relpath(file_path, backend_dir)
                    zipf.write(file_path, arcname)
                    print(f"Added: {arcname}")
    
    # Get final size
    size_mb = os.path.getsize(output_zip) / (1024 * 1024)
    print(f"\nCreated: {output_zip}")
    print(f"Size: {size_mb:.2f} MB")

if __name__ == "__main__":
    create_lean_zip()
