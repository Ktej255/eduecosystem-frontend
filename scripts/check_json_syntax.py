import json
import os

def check_json_files(directory):
    errored_files = []
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.next' in dirs:
            dirs.remove('.next')
        
        for file in files:
            if file.endswith('.json'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        json.load(f)
                except Exception as e:
                    print(f"ERROR: {file_path} - {str(e)}")
                    errored_files.append((file_path, str(e)))
    return errored_files

if __name__ == "__main__":
    project_root = r"d:\Graphology\Master Software\Eduecosystem"
    print(f"Scanning JSON files in {project_root}...")
    errors = check_json_files(project_root)
    if not errors:
        print("No JSON syntax errors found.")
    else:
        print(f"\nFound {len(errors)} errored files.")
