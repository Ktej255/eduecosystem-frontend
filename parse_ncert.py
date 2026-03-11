import json
import re

def parse_ncert_mcqs(file_path):
    with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
        text = f.read()

    # Split by chapters
    chapters = re.split(r'Chapter\s+\d+', text)[1:] # Skip preamble
    
    all_mcqs = []
    mcq_id_counter = 1
    
    for chapter_idx, chapter_text in enumerate(chapters):
        chapter_num = chapter_idx + 1
        
        # Simple extraction logic prioritizing the most common format
        # Split by questions, e.g., "1. " or "40. "
        questions = re.split(r'\n(?=\d+\.\s)', chapter_text.strip())
        
        for q_text in questions:
            q_text = q_text.strip()
            if not q_text or not re.match(r'^\d+\.', q_text): continue
            
            try:
                # Basic extraction using regex
                # Extract question text (everything before A))
                q_match = re.search(r'^\d+\.\s+(.*?)\n[A-D]\)', q_text, re.DOTALL)
                if not q_match: 
                    # Try alternate format where options might not be A) B) C) D) exactly
                    # Sometimes it's A. B. C. D.
                    q_match = re.search(r'^\d+\.\s+(.*?)\n[A-D]\.', q_text, re.DOTALL)
                    if not q_match: continue
                
                question = q_match.group(1).strip()
                
                options = []
                # Try finding A), B), C), D) options
                for opt in ['A\)', 'B\)', 'C\)', 'D\)']:
                    # Look ahead for next option or Answer:
                    opt_match = re.search(fr'{opt}\s+(.*?)(?=\n[A-D]\)|\nAnswer:)', q_text, re.DOTALL)
                    if opt_match:
                        options.append(opt_match.group(1).strip())
                
                # If we didn't find 4 options with A), try A. format
                if len(options) != 4:
                    options = []
                    for opt in ['A\.', 'B\.', 'C\.', 'D\.']:
                        opt_match = re.search(fr'{opt}\s+(.*?)(?=\n[A-D]\.|\nAnswer:)', q_text, re.DOTALL)
                        if opt_match:
                            options.append(opt_match.group(1).strip())

                if len(options) != 4: 
                    continue # Skip if we can't cleanly parse 4 options
                
                ans_match = re.search(r'Answer:\s+([A-D])', q_text)
                if not ans_match: continue
                ans_char = ans_match.group(1)
                ans_idx = ord(ans_char) - ord('A')
                
                exp_match = re.search(r'Explanation:\s+(.*)', q_text, re.DOTALL)
                explanation = exp_match.group(1).strip() if exp_match else ''
                
                is_statement = 'Consider the following statements' in question or 'Which of the statements' in question
                
                all_mcqs.append({
                    'id': f'ncert-l1-{mcq_id_counter:03d}',
                    'question': question,
                    'options': options,
                    'correctAnswer': ans_idx,
                    'explanation': explanation,
                    'module': 'physical', # Defaulting, can refine based on chapter
                    'topic': f'NCERT Ch {chapter_num}',
                    'difficulty': 'easy',
                    'chapter': str(chapter_num),
                    'subtopic': 'Level 1 Practice',
                    'question_type': 'statement_based' if is_statement else 'conceptual'
                })
                mcq_id_counter += 1
            except Exception as e:
                print(f"Error parsing question in Chapter {chapter_num}: {e}")
                pass 

    # Determine NCERT book source based on chapter
    # Assuming Book 1 is Fundamentals of Physical Geography (Ch 1-14 generally, though actual Chapters map differently, here we just use what we have)
    # The file has 14 chapters, so it's likely Class 11 Fundamentals.

    output_path = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\geography\data\mcqs\ncert-mcqs.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_mcqs, f, indent=4)
        
    print(f"Successfully exported {len(all_mcqs)} MCQs to {output_path}")

parse_ncert_mcqs(r'D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\Geography\MCQ\Master MCQGeography NCERT.txt')
