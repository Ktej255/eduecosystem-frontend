import re
from collections import Counter

file_path = r'd:\Graphology\Master Software\Eduecosystem\frontend\src\components\upsc\subjects\geography\data\national-parks-data.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

ids = re.findall(r'id:\s*\"(np_[^\"]+)\"', content)
# Find ID duplicates
counts_id = Counter(ids)
print("--- ID DUPLICATES ---")
for id, count in counts_id.items():
    if count > 1:
        print(f"{id}: {count}")

# Find Name duplicates
names = re.findall(r'name:\s*\"([^\"]+)\"', content)
counts_name = Counter(names)
print("\n--- NAME DUPLICATES ---")
for name, count in counts_name.items():
    if count > 1:
        print(f"{name}: {count}")

print("\n--- ALL UNIQUE IDS ---")
for id in sorted(counts_id.keys()):
    print(id)

print(f"\nTotal unique IDs: {len(counts_id)}")

