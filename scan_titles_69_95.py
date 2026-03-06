
import os, re

d = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data\raw_mcqs'

for ch in range(69, 96):
    f = os.path.join(d, f'l1-ch{ch}.ts')
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read(2000)
        # Try to get first question
        m = re.search(r'(?:question|text):\s*["\'](.*?)["\']', content)
        q1 = m.group(1)[:90] if m else 'NO_MATCH'
        # Try chapter title as string
        m2 = re.search(r'chapter:\s*["\'](.*?)["\']', content)
        title = m2.group(1) if m2 else 'NO_STRING_TITLE'
        print(f'LxCh{ch} | title={title} | Q1={q1}')
    else:
        print(f'LxCh{ch} | FILE_MISSING')
