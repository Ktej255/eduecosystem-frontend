import re

file_path = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\geography\data\topics\geomorphology.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

def repl(m):
    id_val = int(m.group(1))
    original = m.group(0)
    
    ref = ""
    # Sample mappings from Savindra Singh Geomorphology index
    if id_val in [3, 4]: ref = ', referenceChapter: "Savindra Singh Ch. 2"'
    elif id_val in [9, 10]: ref = ', referenceChapter: "Savindra Singh Ch. 5"'
    elif id_val in [11, 12, 13, 14, 15, 16]: ref = ', referenceChapter: "Savindra Singh Ch. 7"'
    elif id_val in [17, 18, 19]: ref = ', referenceChapter: "Savindra Singh Ch. 8"'
    elif id_val in [20]: ref = ', referenceChapter: "Savindra Singh Ch. 10"'
    elif id_val in [21, 22]: ref = ', referenceChapter: "Savindra Singh Ch. 11"'
    elif id_val in range(23, 29): ref = ', referenceChapter: "Savindra Singh Ch. 13"'
    elif id_val in range(31, 40): ref = ', referenceChapter: "Savindra Singh Ch. 16"'
    
    if ref:
        # Avoid double tagging
        if "referenceChapter" not in original:
            # Replace the closing brace with the new tags + closing brace
            return re.sub(r'\s*\}$', f'{ref}, referenceLevel: 2 }}', original)
    return original

new_text = re.sub(r'\{\s*id:\s*(\d+)[^}]+\}', repl, text)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Tagged Geomorphology successfully.")
