"""
POLITY REFINEMENT: STEP 1 & 2 (Recursive Scan)
==============================================
"""
import os
import json
import io
import sys
import re
from sqlalchemy import create_engine, text

# Force UTF-8 for Windows console
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

DB_URL = "postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod"
engine = create_engine(DB_URL, connect_args={"connect_timeout": 15, "sslmode": "require"})

BASE_DIR = r"d:\Development\EduEcosystem\frontend\src\components"

print("=" * 60)
print("  POLITY REFINEMENT: SOURCE DATA MATCHING (Full Scan)")
print("=" * 60)

# Load all source Polity questions into a searchable list
source_questions = set()
print(f"Scanning all directories in: {BASE_DIR}...")
for root, dirs, files in os.walk(BASE_DIR):
    for filename in files:
        if filename.endswith(".ts") or filename.endswith(".tsx"):
            try:
                with open(os.path.join(root, filename), "r", encoding="utf-8") as f:
                    content = f.read()
                    if "question:" not in content:
                        continue
                    # Extra robust extraction for multiline strings
                    # Support both double and single quotes
                    matches = re.finditer(r'question:\s*["\'](.*?)["\']', content, re.DOTALL)
                    for m in matches:
                        full_text = m.group(1).replace("\\n", "\n").replace('\\"', '"').replace("\\'", "'")
                        source_questions.add(full_text.strip())
            except Exception:
                continue

print(f"Loaded {len(source_questions):,} unique complete questions from source files.")

# Find broken questions in DB
broken_matches = []
try:
    with engine.connect() as conn:
        print("\nSearching DB for Polity questions < 30 characters...")
        rows = conn.execute(text(
            "SELECT id, text FROM bank_questions WHERE subject='Polity' AND LENGTH(text) < 30"
        )).fetchall()
        
        print(f"Found {len(rows):,} broken rows in DB.")
        
        for r_id, fragment in rows:
            clean_fragment = fragment.replace("...", "").replace("\u2026", "").strip()
            if not clean_fragment:
                continue
            
            # Find matching full text in source
            matches = [sq for sq in source_questions if clean_fragment in sq]
            if len(matches) >= 1:
                # If multiple matches, take the longest one (most complete)
                best_match = max(matches, key=len)
                broken_matches.append({
                    "id": r_id,
                    "fragment": fragment,
                    "full_text": best_match
                })

    print(f"\nSuccessfully matched {len(broken_matches):,} of {len(rows):,} broken rows.")
    
    # Save the matches for the patching script
    with open("tmp/polity_patch_data.json", "w", encoding="utf-8") as f:
        json.dump(broken_matches, f, indent=2, ensure_ascii=False)
    print("✅ Results saved to tmp/polity_patch_data.json")

except Exception as e:
    print(f"\n❌ ERROR: {e}")
