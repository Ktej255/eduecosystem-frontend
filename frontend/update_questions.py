
import sys
import re
import os

def parse_mcqs(content):
    # Pattern to find the array content
    array_match = re.search(r'export const \w+: Question\[\] = \[(.*?)\];', content, re.DOTALL)
    if not array_match:
        array_match = re.search(r'export const \w+[: \w]+ = \[(.*?)\]\s*;', content, re.DOTALL)
    
    if not array_match:
        return ""
    
    return array_match.group(1)

def transform(content):
    # Replace the level and topic fields with chapter and subtopic
    content = re.sub(r'level:\s*\"[^\"]*\",\n\s*topic:\s*\"[^\"]*\"', r'chapter: "Polity & Current Affairs",\n        subtopic: "UPSC Prelims 2026"', content)
    # Also handle single line topic/level
    content = re.sub(r'level:\s*\"[^\"]*\",\s*topic:\s*\"[^\"]*\"', r'chapter: "Polity & Current Affairs", subtopic: "UPSC Prelims 2026"', content)
    return content

# File paths
p1_file = r'd:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data\day10-paper1-mcqs.ts'
p2_file = r'd:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data\day10-paper2-mcqs.ts'
target_file = r'd:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\data\saturday-test-data.ts'

with open(p1_file, 'r', encoding='utf-8') as f:
    p1_content = f.read()

with open(p2_file, 'r', encoding='utf-8') as f:
    p2_content = f.read()

p1_data = parse_mcqs(p1_content)
p2_data = parse_mcqs(p2_content)

if p1_data and p2_data:
    p1_data = transform(p1_data)
    p2_data = transform(p2_data)
    
    final_content = f'''// Saturday Polity Module Test-1 Data
// Covering: UPSC Prelims 2026 Polity & Current Affairs

export interface ModuleMCQ {{
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed (A=0, B=1, etc.)
    explanation: string;
    chapter: string;
    subtopic: string;
}}

export const PAPER_1_QUESTIONS: ModuleMCQ[] = [{p1_data}];

export const PAPER_2_QUESTIONS: ModuleMCQ[] = [{p2_data}];
'''
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print('Successfully updated saturday-test-data.ts')
else:
    print('Failed to find array content in one or more source files')
    if not p1_data: print('P1 data missing')
    if not p2_data: print('P2 data missing')
