import os
import re

START_CHAPTER = 25
END_CHAPTER = 39
BASE_PATH = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\history\data\modern"

def update_chapter_difficulty(chapter_id):
    file_path = os.path.join(BASE_PATH, f"chapter{chapter_id}", "mcqs.ts")
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Regex to find the closing brace of an object in the array
        # We look for "chapterId: XX" and then finding the closing brace after it
        # Or better, we just look for "chapterId: \d+" and append specific difficulty
        
        # Helper to cycle difficulty
        difficulties = ['Easy', 'Moderate', 'Hard']
        diff_idx = 0

        def replace_match(match):
            nonlocal diff_idx
            difficulty = difficulties[diff_idx % 3]
            diff_idx += 1
            # Return the match (chapterId: XX) plus the difficulty line
            return f"{match.group(0)},\n        difficulty: '{difficulty}'"

        # Pattern: chapterId: <number>
        # We assume this is the last field before the closing brace usually, or just a field.
        # We append difficulty after it.
        new_content = re.sub(r"chapterId:\s*\d+", replace_match, content)

        if content != new_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated Chapter {chapter_id}")
        else:
            print(f"No changes made to Chapter {chapter_id} (regex didn't match?)")

    except Exception as e:
        print(f"Error updating Chapter {chapter_id}: {e}")

if __name__ == "__main__":
    print("Starting batch update of difficulty levels...")
    for i in range(START_CHAPTER, END_CHAPTER + 1):
        update_chapter_difficulty(i)
    print("Batch update complete.")
