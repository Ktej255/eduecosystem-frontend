
import os
import json
import re

# Paths
MAPPING_JSON = 'final_mapping_refined.json'
OUTPUT_DIR = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\chapters'
os.makedirs(OUTPUT_DIR, exist_ok=True)

def find_balanced_blocks(text):
    blocks = []
    stack = []
    start = -1
    for i, char in enumerate(text):
        if char == '{':
            if not stack:
                start = i
            stack.append('{')
        elif char == '}':
            if stack:
                stack.pop()
                if not stack:
                    blocks.append(text[start:i+1])
    return blocks

def extract_questions(fpath, level_label):
    if not fpath or not os.path.exists(fpath):
        return []
    
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Locate the array start
    match = re.search(r'=\s*\[(.*)\]', content, re.DOTALL)
    if not match:
        match = re.search(r'\[(.*)\]', content, re.DOTALL)
        
    if not match:
        return []
    
    array_content = match.group(1)
    blocks = find_balanced_blocks(array_content)
        
    questions = []
    for i, block in enumerate(blocks):
        q = {}
        # Question / Text
        m_q = re.search(r'(?:"?question"?|"?text"?):\s*(?:["\']|`)(.*?)(?:["\']|`)', block, re.DOTALL)
        if m_q:
            q['question'] = m_q.group(1).strip()
        else:
            continue
            
        # Options
        m_o = re.search(r'(?:"?options"?):\s*\[(.*?)\]', block, re.DOTALL)
        if m_o:
            opts_str = m_o.group(1)
            opts = re.findall(r'(?:["\']|`)(.*?)(?:["\']|`)', opts_str)
            q['options'] = [o.strip() for o in opts]
        else:
            continue
            
        # Correct Answer (Handle answer key too)
        m_ca = re.search(r'(?:"?correctAnswer"?|"?correctAnswerIndex"?|"?answer"?):\s*(\d+)', block)
        if m_ca:
            q['correctAnswer'] = int(m_ca.group(1))
        else:
            continue
            
        # Explanation
        m_e = re.search(r'(?:"?explanation"?):\s*(?:["\']|`)(.*?)(?:["\']|`)', block, re.DOTALL)
        if m_e:
            q['explanation'] = m_e.group(1).strip()
        else:
            q['explanation'] = ""
            
        q['id'] = f"{level_label}-q{i+1}"
        questions.append(q)
        
    return questions

def process_all():
    with open(MAPPING_JSON, 'r', encoding='utf-8') as f:
        mapping = json.load(f)
        
    for tid_str, info in mapping.items():
        tid = int(tid_str)
        print(f"Processing Topic {tid}: {info['title']}")
        
        l1_raw = extract_questions(info.get('l1_source'), "L1")
        l2_raw = extract_questions(info.get('l2_source'), "L2")
        
        l3_raw = []
        for l3_f in info.get('l3_sources', []):
            l3_raw.extend(extract_questions(l3_f, "L3"))
            
        # Standardize IDs
        for i, q in enumerate(l1_raw): q['id'] = f"ch{tid}-l1-q{i+1}"
        for i, q in enumerate(l2_raw): q['id'] = f"ch{tid}-l2-q{i+1}"
        for i, q in enumerate(l3_raw): q['id'] = f"ch{tid}-l3-q{i+1}"
        
        # Write TypeScript File
        out_path = os.path.join(OUTPUT_DIR, f'chapter-{tid}.ts')
        
        content = "import { ChapterLevelData } from '../level-types';\n\n"
        
        def dump_q_list(var_name, q_list):
            s = f"const {var_name} = [\n"
            for q in q_list:
                s += "    {\n"
                s += f"        \"id\": \"{q['id']}\",\n"
                s += f"        \"question\": \"{q['question'].replace('\"', '\\\"')}\",\n"
                s += f"        \"options\": [\n"
                for o in q['options']:
                    s += f"            \"{o.replace('\"', '\\\"')}\",\n"
                s = s.rstrip(',\n') + "\n        ],\n"
                s += f"        \"correctAnswerIndex\": {q['correctAnswer']},\n"
                explanation = q['explanation'].replace('\"', '\\\"').replace('\n', ' ')
                s += f"        \"explanation\": \"{explanation}\"\n"
                s += "    },\n"
            s = s.rstrip(',\n') + "\n];\n\n"
            return s

        content += dump_q_list("LEVEL_1_QUESTIONS", l1_raw)
        content += dump_q_list("LEVEL_2_QUESTIONS", l2_raw)
        content += dump_q_list("LEVEL_3_QUESTIONS", l3_raw)
        
        content += f"export const CHAPTER_{tid}_LEVELS: ChapterLevelData = {{\n"
        content += f"    level1: LEVEL_1_QUESTIONS,\n"
        content += f"    level2: LEVEL_2_QUESTIONS,\n"
        content += f"    level3: LEVEL_3_QUESTIONS\n"
        content += f"}};\n"
        
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == "__main__":
    process_all()
