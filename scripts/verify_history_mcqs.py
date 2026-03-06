import os

modern_data_dir = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\history\data\modern"
output_log = r"C:\Users\Sarit\Desktop\Antigravity_Logs\27_Feb_2026_Update.md"

total_mcqs = 0
chapter_counts = []

for item in os.listdir(modern_data_dir):
    if item.startswith("chapter") and os.path.isdir(os.path.join(modern_data_dir, item)):
        mcqs_file = os.path.join(modern_data_dir, item, "mcqs.ts")
        if os.path.exists(mcqs_file):
            with open(mcqs_file, 'r', encoding='utf-8') as f:
                content = f.read()
                # count instances of "id:" representing a question object
                count = content.count("id: '")
                if count > 0:
                    ch_num = item.replace("chapter", "")
                    chapter_counts.append((int(ch_num), count))
                    total_mcqs += count

chapter_counts.sort(key=lambda x: x[0])

log_entry = f"""
## Priority: Bulk Modern History MCQ Extraction (Feb 27)
- **Status:** Completed
- **Data Source:** `History_MCQs.docx.txt` (Parsed programmatically to bypass memory constraints)
- **Total MCQs Injected:** {total_mcqs}
- **Destinations:** 39 `mcqs.ts` files inside `frontend/src/components/batch1/history/data/modern/`

**Extraction Breakdown:**
"""

for ch, qty in chapter_counts:
    log_entry += f"- Chapter {ch}: {qty} MCQs\n"

# Append to log
with open(output_log, 'a', encoding='utf-8') as lf:
    lf.write(log_entry)

print(f"Logged MCQ extraction verification to Desktop. Total: {total_mcqs}")
