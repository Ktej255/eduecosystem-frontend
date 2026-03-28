import os
import re
import json
import sys
from collections import Counter

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def audit_json():
    f_path = r"D:\Development\EduEcosystem\frontend\all_mcqs_extracted.json"
    if not os.path.exists(f_path):
        print(f"JSON NOT FOUND: {f_path}")
        return
    
    stat = os.stat(f_path)
    print(f"FILE: {f_path}")
    print(f"SIZE: {stat.st_size} bytes")
    print(f"MODIFIED: {stat.st_mtime}")
    
    with open(f_path, encoding='utf-8') as f:
        data = json.load(f)
    print(f"TOTAL QUESTIONS: {len(data)}")
    counts = Counter(q.get('subject', 'unknown') for q in data)
    for k, v in sorted(counts.items()):
        print(f"{k}: {v}")
    print("-" * 40)

def audit_modern_ts():
    folder = r"D:\Development\EduEcosystem\frontend\src\components\batch1\history\data\modern"
    ts_files = []
    for root, dirs, files in os.walk(folder):
        for f in files:
            if f.endswith('.ts'):
                ts_files.append(os.path.join(root, f))
    
    print(f"TOTAL MODERN TS FILES: {len(ts_files)}")
    print(f"TOTAL SIZE: {sum(os.path.getsize(f) for f in ts_files)} bytes")
    
    zero_files = []
    files_with_q = 0
    total_q_strings = 0
    
    for path in ts_files:
        with open(path, encoding='utf-8') as f:
            content = f.read()
        q_count = len(re.findall(r'question\s*:', content, re.IGNORECASE))
        if q_count == 0:
            zero_files.append(path)
        else:
            files_with_q += 1
            total_q_strings += q_count
            
    print(f"FILES WITH 'question:': {files_with_q}")
    print(f"TOTAL 'question:' STRINGS: {total_q_strings}")
    print(f"FILES WITH 0 QUESTIONS: {len(zero_files)}")
    
    print("\nSAMPLE 3 FILES WITH 0 QUESTIONS:")
    for f in zero_files[:3]:
        print(f"--- FILE: {f} ---")
        try:
            with open(f, encoding='utf-8') as f_obj:
                print(''.join(f_obj.readlines()[:50]))
        except Exception as e:
            print(f"Error reading: {e}")
        print("-" * 20)

if __name__ == "__main__":
    audit_json()
    audit_modern_ts()
