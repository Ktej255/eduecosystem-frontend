import re
import os
import json

input_file = r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\Medieval History\Master Mcq Medieval History.txt"
output_dirs = [
    r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\upsc\subjects\history\data\mcqs\medieval",
    r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\history\data\medieval"
]

def parse_mcqs(text):
    chapters = {}
    current_chapter = None
    current_difficulty = 'moderate'
    
    lines = [line.strip() for line in text.split('\n')]
    current_q = None
    
    chapter_pattern = re.compile(r'Phase \d+ Execution: Chapter (\d+)', re.IGNORECASE)
    level_pattern = re.compile(r'Level ([1-3]):', re.IGNORECASE)
    question_pattern = re.compile(r'^Q(\d+)\.\s*(.*)', re.IGNORECASE)
    option_pattern = re.compile(r'^([A-D])\)\s*(.*)', re.IGNORECASE)
    answer_pattern = re.compile(r'^Answer:\s*([A-D])(?:\s*\(.*\))?', re.IGNORECASE)
    explanation_pattern = re.compile(r'^Explanation:\s*(.*)', re.IGNORECASE)

    for line in lines:
        if not line: continue
        
        ch_match = chapter_pattern.search(line)
        if ch_match:
            current_chapter = int(ch_match.group(1))
            if current_chapter not in chapters:
                chapters[current_chapter] = []
            continue
            
        lvl_match = level_pattern.search(line)
        if lvl_match:
            l_num = int(lvl_match.group(1))
            current_difficulty = {1: 'easy', 2: 'medium', 3: 'hard'}.get(l_num, 'medium')
            continue
            
        q_match = question_pattern.match(line)
        if q_match:
            if current_q and current_chapter:
                chapters[current_chapter].append(current_q)
            
            current_q = {
                'id': f"q{len(chapters.get(current_chapter, [])) + 1}",
                'question': q_match.group(2).strip(),
                'options': [],
                'correctAnswer': '',
                'explanation': '',
                'difficulty': current_difficulty,
                'tags': ['Medieval History', 'UPSC']
            }
            continue

        if not current_q:
            continue

        opt_match = option_pattern.match(line)
        if opt_match:
            opt_id = opt_match.group(1).lower()
            current_q['options'].append({'id': opt_id, 'text': opt_match.group(2).strip()})
            continue
            
        ans_match = answer_pattern.match(line)
        if ans_match:
            current_q['correctAnswer'] = ans_match.group(1).lower()
            if '(' in line and ')' in line:
                expl = line[line.find('(')+1 : line.rfind(')')]
                if expl:
                    current_q['explanation'] = expl
            continue
            
        exp_match = explanation_pattern.match(line)
        if exp_match:
            current_q['explanation'] = (current_q['explanation'] + " " + exp_match.group(1)).strip()
            continue
            
        if not current_q['correctAnswer'] and not current_q['options']:
            current_q['question'] += " " + line
        elif current_q['correctAnswer']:
            current_q['explanation'] += " " + line
        elif current_q['options']:
            current_q['question'] += " " + line

    if current_q and current_chapter:
        chapters[current_chapter].append(current_q)
        
    return chapters

if __name__ == '__main__':
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    parsed_chapters = parse_mcqs(content)
    
    total = 0
    chapter_ids = sorted(parsed_chapters.keys())
    
    for out_base in output_dirs:
        if not os.path.exists(out_base):
            os.makedirs(out_base)
        print(f"\nProcessing output directory: {out_base}")

        for ch_id in chapter_ids:
            qs = parsed_chapters[ch_id]
            if out_base == output_dirs[0]:
                total += len(qs)
            
            out_file = f"chapter{ch_id}.ts"
            out_path = os.path.join(out_base, out_file)
            
            is_batch1 = "batch1" in out_base
            
            # Simplified import path for both
            import_path = "../../../types" if is_batch1 else "../../../../types"
            
            lines = [
                "// Auto-generated Medieval History MCQs (Satish Chandra)",
                f"import {{ Question }} from '{import_path}';",
                ""
            ]
            
            if is_batch1:
                lines.append(f"export const MEDIEVAL_CHAPTER_{ch_id}_CONTENT = `# Chapter {ch_id} Content`;")
                lines.append(f"export const MEDIEVAL_CHAPTER_{ch_id}_SUBTOPICS = [];")
                lines.append("")
                lines.append(f"export const MEDIEVAL_CHAPTER_{ch_id}_MCQS: Question[] = [")
            else:
                lines.append(f"export const MEDIEVAL_CHAPTER_{ch_id}_MCQS: Question[] = [")
            
            for q in qs:
                # Ensure 4 options
                opts = q['options']
                while len(opts) < 4:
                    opt_id = chr(ord('a') + len(opts))
                    opts.append({'id': opt_id, 'text': f"Option {opt_id.upper()}"})
                
                # Default answer if missing
                if not q['correctAnswer']:
                    q['correctAnswer'] = 'a'

                lines.append("    {")
                lines.append(f"        id: {json.dumps(q['id'])},")
                lines.append(f"        question: {json.dumps(q['question'].strip())},")
                lines.append(f"        options: {json.dumps(opts[:4])},")
                lines.append(f"        correctAnswer: {json.dumps(q['correctAnswer'])},")
                lines.append(f"        explanation: {json.dumps(q['explanation'].strip())},")
                lines.append(f"        difficulty: {json.dumps(q['difficulty'])},")
                lines.append(f"        tags: {json.dumps(q['tags'])}")
                lines.append("    },")
            
            lines.append("];")
            
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(lines))
            print(f"  Generated {out_file} with {len(qs)} MCQs")
            
    print(f"\nTotal MCQs processed: {total}")
