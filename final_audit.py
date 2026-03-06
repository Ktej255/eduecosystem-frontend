
import os
import re
import json

INTEGRATED_DIR = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\chapters'

def audit():
    report = {}
    for i in range(1, 96):
        fpath = os.path.join(INTEGRATED_DIR, f'chapter-{i}.ts')
        stats = {"l1": 0, "l2": 0, "l3": 0}
        if os.path.exists(fpath):
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read()
                # Count IDs for each level
                stats["l1"] = content.count(f'ch{i}-l1-q')
                stats["l2"] = content.count(f'ch{i}-l2-q')
                stats["l3"] = content.count(f'ch{i}-l3-q')
        report[i] = stats
        
    with open('final_audit_results.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=4)
        
    # Summarize
    total_q = sum(s["l1"] + s["l2"] + s["l3"] for s in report.values())
    missing_l1 = [tid for tid, s in report.items() if s["l1"] == 0]
    
    print(f"Audit Complete. Total Questions: {total_q}")
    print(f"Missing L1: {len(missing_l1)}")
    if missing_l1:
        print(f"Missing L1 Topic IDs: {missing_l1}")

if __name__ == "__main__":
    audit()
