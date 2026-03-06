
import re
import json
import os

def extract_topics():
    path = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\polity-types-95.ts'
    if not os.path.exists(path):
        print(f"Error: {path} not found")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract topics from TOPIC_TITLES array
    # Format: { id: 1, title: 'Historical Background', part: 'I' },
    pattern = r'\{\s*id:\s*(\d+),\s*title:\s*\'([^\']+)\',\s*part:\s*\'([^\']+)\'\s*\}'
    matches = re.findall(pattern, content)
    
    topics = {}
    for match in matches:
        tid = int(match[0])
        title = match[1]
        topics[tid] = title
        
    return topics

def scan_raw_files():
    data_dir = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data'
    l1_files = []
    
    # Scan dayX files
    if os.path.exists(data_dir):
        for f in os.listdir(data_dir):
            if f.startswith('day') and f.endswith('-mcqs.ts'):
                l1_files.append(os.path.join(data_dir, f))
            
    # Scan raw_mcqs l1 files
    raw_mcqs_dir = os.path.join(data_dir, 'raw_mcqs')
    if os.path.exists(raw_mcqs_dir):
        for f in os.listdir(raw_mcqs_dir):
            if f.startswith('l1-ch') and f.endswith('.ts'):
                l1_files.append(os.path.join(raw_mcqs_dir, f))
            
    file_topics = {}
    for fpath in l1_files:
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read(10000) # Read more to ensure we find the topic
                
                # Check for explicit topic field in MCQ objects
                match = re.search(r'topic:\s*"([^"]+)"', content)
                if not match:
                    match = re.search(r'topic:\s*\'([^\']+)\'', content)
                
                if match:
                    topic_name = match.group(1).strip()
                    file_topics[fpath] = topic_name
                else:
                    # Check for "chapter" field in MCQ objects
                    match = re.search(r'chapter:\s*"([^"]+)"', content)
                    if not match:
                         match = re.search(r'chapter:\s*\'([^\']+)\'', content)
                    
                    if match:
                        file_topics[fpath] = match.group(1).strip()
                    else:
                        # Fallback to level comment or filename
                        match = re.search(r'Strictly Chapter (\d+)', content)
                        if match:
                            file_topics[fpath] = f"Laxmikanth Chapter {match.group(1)}"
                        else:
                            file_topics[fpath] = os.path.basename(fpath)
        except Exception as e:
            print(f"Error reading {fpath}: {e}")
                    
    return file_topics

if __name__ == "__main__":
    target_topics = extract_topics()
    source_files = scan_raw_files()
    
    result = {
        "targets": target_topics,
        "sources": source_files
    }
    
    output_path = 'polity_mapping_data.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=4)
    
    print(f"Extracted {len(target_topics)} targets and {len(source_files)} sources.")
