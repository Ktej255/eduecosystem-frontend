import json
import os
import sys

def validate_json_directory(directory):
    total_json = 0
    errors = []
    
    exclude_dirs = {'.next', 'node_modules', '.git', 'dist', 'build'}
    
    for root, dirs, files in os.walk(directory):
        # Filter directories to avoid descending into excluded ones
        i = len(dirs) - 1
        while i >= 0:
            if dirs[i] in exclude_dirs:
                dirs.pop(i)
            i -= 1
        
        for file in files:
            if file.endswith('.json'):
                total_json += 1
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        data = f.read().strip()
                        if not data:
                            raise ValueError("File is empty")
                        json.loads(data)
                except Exception as e:
                    errors.append((file_path, str(e)))
    
    return total_json, errors

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python json_validator.py <directory>")
        sys.exit(1)
    
    # Safely handle paths with spaces
    target_path = " ".join(sys.argv[1:])
    print(f"Scanning: {target_path}")
    
    count, errs = validate_json_directory(target_path)
    print(f"Total JSON files: {count}")
    
    if not errs:
        print("RESULT: SUCCESS")
    else:
        print(f"RESULT: FAILURE ({len(errs)} errors)")
        for p, msg in errs:
            print(f"  - {p}: {msg}")
        sys.exit(1)
