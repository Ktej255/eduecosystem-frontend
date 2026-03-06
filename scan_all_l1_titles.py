
import os
import re
import json

RAW_MCQS_DIR = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data\raw_mcqs'

results = {}

for ch_num in range(65, 96):
    fpath = os.path.join(RAW_MCQS_DIR, f'l1-ch{ch_num}.ts')
    if not os.path.exists(fpath):
        results[ch_num] = {"exists": False}
        continue
    
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read(3000)
    
    title = None
    # Try string chapter field
    m = re.search(r'(?:chapter|topic):\s*["\']([^"\']+)["\']', content, re.I)
    if m:
        title = m.group(1).strip()
    else:
        # Try first question text to infer topic
        m_q = re.search(r'(?:question|text):\s*["\'](.{30,80})', content, re.I)
        if m_q:
            title = f"[Inferred from Q1]: {m_q.group(1).strip()}"
    
    # Count questions
    blocks = content.count('question:') + content.count('"question":') + content.count('"text":') + content.count('text:')
    
    results[ch_num] = {
        "exists": True,
        "title": title,
        "approx_questions": blocks,
        "size_bytes": os.path.getsize(fpath)
    }

# Also check l2 and l3 availability
for ch_num in range(65, 96):
    l2 = os.path.join(RAW_MCQS_DIR, f'l2-ch{ch_num}.ts')
    l3 = os.path.join(RAW_MCQS_DIR, f'l3-ch{ch_num}.ts')
    l3p1 = os.path.join(RAW_MCQS_DIR, f'l3-ch{ch_num}-p1.ts')
    
    if ch_num in results:
        results[ch_num]["l2_exists"] = os.path.exists(l2)
        results[ch_num]["l3_exists"] = os.path.exists(l3) or os.path.exists(l3p1)

with open('l1_title_scan.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=4)

print(json.dumps(results, indent=2))
