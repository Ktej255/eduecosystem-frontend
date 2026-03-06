import re
import os
import json

input_file = r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt"
output_base_dir = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\history\data\modern"

def parse_mcqs(text):
    chapters = {}
    current_chapter = None
    current_level = None
    
    # Split by lines
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    current_q = None
    
    for line in lines:
        # Detect Chapter
        ch_match = re.search(r'Chapter (\d+)[\s:]', line, re.IGNORECASE)
        if ch_match and 'LEVEL' not in line and not line.startswith('Q'):
            current_chapter = int(ch_match.group(1))
            if current_chapter not in chapters:
                chapters[current_chapter] = []
            continue
            
        # Detect Level
        level_match = re.search(r'LEVEL\s*([1-3])', line, re.IGNORECASE)
        if level_match:
            l_num = int(level_match.group(1))
            current_level = {1: 'Easy', 2: 'Moderate', 3: 'Hard'}.get(l_num, 'Moderate')
            continue
            
        # Detect Question start
        q_match = re.match(r'^Q(\d+)\.\s*(.*)', line)
        if q_match:
            if current_q and current_chapter:
                chapters[current_chapter].append(current_q)
                
            current_q = {
                'id': f"{current_chapter}-{len(chapters.get(current_chapter, [])) + 1}",
                'chapterId': current_chapter or 1,
                'difficulty': current_level or 'Moderate',
                'question': q_match.group(2).strip(),
                'options': [],
                'correctAnswer': -1,
                'explanation': ''
            }
            continue
            
        if not current_q:
            continue
            
        # Check Answer
        ans_match1 = re.search(r'\*\s*Answer:\s*\(([a-d])\)\s*(.*)', line, re.IGNORECASE)
        ans_match2 = re.search(r'\*\s*Answer:\s*([A-D])\.\s*(.*)', line, re.IGNORECASE)
        ans_match3 = re.search(r'\*\s*Answer:\s*(.*)', line, re.IGNORECASE)
        
        if ans_match1:
            current_q['correctAnswer'] = ord(ans_match1.group(1).lower()) - ord('a')
            if not current_q['explanation']:
                current_q['explanation'] = ans_match1.group(2).strip()
            continue
        elif ans_match2:
            current_q['correctAnswer'] = ord(ans_match2.group(1).lower()) - ord('a')
            if not current_q['explanation']:
                current_q['explanation'] = ans_match2.group(2).strip()
            continue
        elif ans_match3 and current_q['correctAnswer'] == -1:
            # Fallback if answer doesn't have letter format but just text
            text_ans = ans_match3.group(1).strip()
            # If options are present, we can find index
            if text_ans.startswith('(a)') or text_ans.startswith('A.'): current_q['correctAnswer'] = 0
            elif text_ans.startswith('(b)') or text_ans.startswith('B.'): current_q['correctAnswer'] = 1
            elif text_ans.startswith('(c)') or text_ans.startswith('C.'): current_q['correctAnswer'] = 2
            elif text_ans.startswith('(d)') or text_ans.startswith('D.'): current_q['correctAnswer'] = 3
            current_q['explanation'] = text_ans
            continue
            
        # Check Explanation
        exp_match = re.search(r'\*\s*Explanation:\s*(.*)', line, re.IGNORECASE)
        if exp_match:
            current_q['explanation'] = current_q['explanation'] + " " + exp_match.group(1).strip()
            continue
            
        # Append to question text if not an answer or explanation
        if current_q['correctAnswer'] == -1:
            current_q['question'] += " " + line

    if current_q and current_chapter:
        chapters[current_chapter].append(current_q)

    # Post processing for options
    for ch, qs in chapters.items():
        for q in qs:
            text = q['question']
            
            # Pattern 1: (a) ... (b) ... (c) ... (d) ...
            pattern1 = re.split(r'\([a-d]\)', text)
            if len(pattern1) >= 5:
                q['question'] = pattern1[0].strip()
                q['options'] = [p.strip() for p in pattern1[1:5]]
            else:
                # Pattern 2: A. ... B. ... C. ... D. ...
                pattern2 = re.split(r'\s[A-D]\.\s', text)
                if len(pattern2) >= 5:
                    q['question'] = pattern2[0].strip()
                    q['options'] = [p.strip() for p in pattern2[1:5]]
                else:
                    # Look for A. at start of line inside text string? Text is flattened, but maybe A. B. C. D. are identifiable
                    # Let's try splitting by A., B., C., D.
                    pattern3 = re.split(r'\b[A-D]\.\s', text)
                    if len(pattern3) >= 5:
                        q['question'] = pattern3[0].strip()
                        q['options'] = [p.strip() for p in pattern3[1:5]]
                        
            # Keep original text if everything fails, but provide empty options to ensure syntax validity
            if not q['options']:
                q['options'] = ["Option A", "Option B", "Option C", "Option D"]

    return chapters

if __name__ == '__main__':
    with open(input_file, 'r', encoding='utf-8') as f:
        text = f.read()
        
    chapters = parse_mcqs(text)
    
    total_parsed = 0
    for ch, qs in chapters.items():
        if not ch: continue
        total_parsed += len(qs)
        print(f"Chapter {ch}: {len(qs)} MCQs")
        
        ch_dir = os.path.join(output_base_dir, f"chapter{ch}")
        os.makedirs(ch_dir, exist_ok=True)
        out_file = os.path.join(ch_dir, "mcqs.ts")
        
        lines = [
            "// Auto-generated by Antigravity Script",
            "import { Question } from '../../../../types';",
            "",
            f"export const MODERN_CHAPTER_{ch}_MCQS: any[] = ["
        ]
        
        for q in qs:
            # Escape strings to avoid JS errors
            q_text = json.dumps(q['question'])
            o_text = json.dumps(q['options'])
            e_text = json.dumps(q['explanation'])
            
            lines.append("  {")
            lines.append(f"    id: '{q['id']}',")
            lines.append(f"    question: {q_text},")
            lines.append(f"    options: {o_text},")
            lines.append(f"    correctAnswer: {q['correctAnswer'] if q['correctAnswer'] != -1 else 0},")
            lines.append(f"    explanation: {e_text},")
            lines.append(f"    chapterId: {q['chapterId']},")
            lines.append(f"    difficulty: '{q['difficulty']}'")
            lines.append("  },")
            
        lines.append("];")
        
        with open(out_file, 'w', encoding='utf-8') as mf:
            mf.write('\n'.join(lines))
            
    print(f"Total MCQs parsed and injected: {total_parsed}")
