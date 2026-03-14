import os
import re

HISTORY_DIR = r'd:\Graphology\Master Software\Eduecosystem\frontend\src\components\upsc\subjects\history\data\mcqs'

def fix_syntax():
    for root, dirs, files in os.walk(HISTORY_DIR):
        for file in files:
            if file.endswith('.ts'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Look for } followed by { with only whitespace/newlines in between
                # but NOT already having a comma
                # Pattern: [^,]}\s*\n\s*{
                original = content
                # We want to find a closing brace that is NOT followed by a comma, but is followed by an opening brace
                fixed = re.sub(r'([^,])}\s*?\n\s*?{', r'\1},\n    {', content)
                
                if fixed != original:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(fixed)
                    print(f"Fixed syntax in {file}")

if __name__ == "__main__":
    fix_syntax()
