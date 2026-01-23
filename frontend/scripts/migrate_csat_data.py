import re
import os

source_path = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\app\(student-portal)\student\batch1\csat\csat-data.ts"
target_path = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\evening\data\csat-data.ts"

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def parse_day_blocks(content):
    # Regex to find blocks like "16: { ... }" at the top level of the object
    # This is a bit tricky with nested braces. 
    # We will assume standard indentation and structure: "    \d+: {" matches start of a day block.
    
    day_blocks = {}
    lines = content.split('\n')
    current_day = None
    current_block_lines = []
    
    # Simple state machine
    inside_data_map = False
    brace_count = 0
    
    for line in lines:
        if "export const CSAT_DATA_MAP" in line or "export const CSAT_BATCH1_1_DATA" in line:
            inside_data_map = True
            continue
            
        if not inside_data_map:
            continue
            
        stripped_line = line.strip()
        
        # Check for start of a day block: "1: {" or "16: {"
        match = re.match(r"^(\d+):\s*\{", stripped_line)
        if match:
            if current_day is not None:
                day_blocks[current_day] = "\n".join(current_block_lines)
            
            current_day = int(match.group(1))
            current_block_lines = [line] # Keep original indentation
            brace_count = 1 # We just opened one
            # Count braces in the rest of the line? usually just {
            continue
            
        if current_day is not None:
            current_block_lines.append(line)
            # Naive brace counting to allow nested objects
            brace_count += line.count('{')
            brace_count -= line.count('}')
            
            # If we hit the closing brace for the item and brace_count is 0 (or less if comma line)
            # Actually, the block ends when we are back to the indentation level or find a closing brace that matches.
            # But simpler: if line is just "    }," or "    }" and indentation matches.
            if stripped_line.startswith("},") or stripped_line == "}":
                 if brace_count <= 0: # This is loose, but usually works for well-formatted code
                     # End of block
                     day_blocks[current_day] = "\n".join(current_block_lines)
                     current_day = None
                     current_block_lines = []

    if current_day is not None:
         day_blocks[current_day] = "\n".join(current_block_lines)
         
    return day_blocks

def transform_block(block_content, day_id):
    # Transform keys:
    # day: 1 -> dayId: 1
    # text: "..." -> content: "..."
    # Add description if missing
    
    new_content = block_content
    
    # Replace day: X with dayId: X
    new_content = re.sub(r'day:\s*(\d+)', r'dayId: \1', new_content)
    
    # Replace text: "..." with content: "..."
    # Use word boundary \b to avoid replacing "context" -> "concontent"
    new_content = re.sub(r'\btext:\s*(`|")', r'content: \1', new_content)
    
    # Try to extract source from content to fill "source" field if missing?
    # Target expects: source: string
    # Source data has "Source Text: ..." inside the content sometimes.
    # We can just add a generic source if missing.
    
    # Check if "description" exists (Target needs it)
    if "description:" not in new_content:
        # Insert description after title
        title_match = re.search(r'title:\s*".*?",', new_content)
        if title_match:
            new_content = new_content.replace(title_match.group(0), title_match.group(0) + f'\n        description: "CSAT Practice for Day {day_id}",')
            
    # Check if "source" exists in passages
    # If not, add source: "UPSC CSAT"
    # We can iterate over "passages: [" ...
    
    # Simple replace for passage text to include source
    # The source data has `text: "Source Text: ..."`
    # The target data wants `source: "..."` and `content: "..."`
    # We can just set source: "UPSC PYQ/Editorial" globally for now to be safe
    
    # Regex to insert source field in passages
    # Look for "id: \d+," inside passages and append source
    new_content = re.sub(r'(id:\s*\d+,\s*\n\s*title:\s*".*?",)', r'\1\n                        source: "UPSC/Editorial",', new_content)
    
    return new_content

def main():
    print("Reading source file...")
    source_content = read_file(source_path)
    print("Reading target file...")
    target_content = read_file(target_path)
    
    print("Parsing source blocks...")
    source_blocks = parse_day_blocks(source_content)
    print(f"Found days in source: {list(source_blocks.keys())}")
    
    print("Parsing target blocks...")
    target_blocks = parse_day_blocks(target_content)
    print(f"Found days in target: {list(target_blocks.keys())}")
    
    # Merge: Update target with source blocks (transforming them)
    # We want to keep existing target blocks if they are good (Day 2, 3, 5 seem good)
    # But we want to add Day 16, 17, etc.
    
    updated_blocks = target_blocks.copy()
    
    for day_id, block in source_blocks.items():
        if day_id not in updated_blocks:
            print(f"Migrating Day {day_id}...")
            updated_blocks[day_id] = transform_block(block, day_id)
        else:
            print(f"Skipping Day {day_id} (already exists in target)")
            
    # Reconstruct the file
    # We need the header and footer of the target file
    # But simply assume we can reconstruct the whole export object
    
    new_file_content = """
export interface CSATQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
}

export interface CSATPassage {
    id: number;
    title: string;
    source: string;
    content: string;
    questions: CSATQuestion[];
}

export interface VocabularyItem {
    word: string;
    context: string;
    definition: string;
    synonyms: string[];
    antonyms: string[];
    csatTip?: string;
    toneIndicator?: 'positive' | 'negative' | 'neutral' | string;
}

export interface CSATDayData {
    dayId: number;
    title: string;
    description: string;
    passages: CSATPassage[];
    vocabulary: VocabularyItem[];
}

export const CSAT_BATCH1_1_DATA: Record<number, CSATDayData> = {
"""
    
    # Sort days
    sorted_days = sorted(updated_blocks.keys())
    
    for day in sorted_days:
        block = updated_blocks[day]
        # Ensure block ends with comma
        if not block.strip().endswith(','):
            block = block.rstrip() + ","
        new_file_content += block + "\n"
        
    new_file_content += "};\n"
    
    print("Writing to target file...")
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(new_file_content)
    
    print("Done!")

if __name__ == "__main__":
    main()
