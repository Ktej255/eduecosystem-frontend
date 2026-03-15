import re

file_path = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\upsc\subjects\geography\data\national-parks-data.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of id: "np_..."
ids = re.findall(r'id:\s*"np_([^"]+)"', content)

# Also find name: "..." to see the names
names = re.findall(r'name:\s*"([^"]+)"', content)

print(f"Total National Park IDs found: {len(ids)}")
print(f"Unique National Park IDs found: {len(set(ids))}")

# Print the list of unique IDs to verify
# for id in sorted(set(ids)):
#     print(id)

# Specifically check for the missing 17 count
# The user provided 17. 89 + 17 = 106.
