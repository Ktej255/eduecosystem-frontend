
import os

INDEX_FILE = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\chapter-level-index.ts'

def generate_index():
    lines = [
        'import { ChapterLevelData } from "./level-types";'
    ]
    
    # Imports
    for i in range(1, 96):
        lines.append(f'import {{ CHAPTER_{i}_LEVELS }} from "./chapters/chapter-{i}";')
    
    lines.append('')
    lines.append('// Map topicId to its Level Data')
    lines.append('export const CHAPTER_LEVEL_DATA: Record<number, ChapterLevelData> = {')
    
    # Entries
    for i in range(1, 96):
        lines.append(f'    {i}: CHAPTER_{i}_LEVELS{"," if i < 95 else ""}')
        
    lines.append('};')
    lines.append('')
    lines.append('export function getChapterLevels(topicId: number): ChapterLevelData | undefined {')
    lines.append('    return CHAPTER_LEVEL_DATA[topicId];')
    lines.append('}')
    
    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print("Index file updated.")

if __name__ == "__main__":
    generate_index()
