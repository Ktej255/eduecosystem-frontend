
import os
import re
import json
import glob

def extract_topic_title(fpath):
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read(5000) # Read start of file
            
            # Pattern 1: topic: "..."
            match = re.search(r'(?:topic|chapter):\s*(?:["\']|`)(.*?)(?:["\']|`)', content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
                
            # Pattern 2: export const ... = [ { ... chapter: "..." } ]
            # Try to find the first object and look for title-like fields
            match = re.search(r'["\']?(?:topic|chapter)["\']?:\s*(?:["\']|`)(.*?)(?:["\']|`)', content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
            
            # Pattern 3: Comments like "// Topic: ..." or "Strictly Chapter X: Title"
            match = re.search(r'(?://|#)\s*(?:Topic|Chapter):\s*(.*)', content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
                
            match = re.search(r'Strictly Chapter \d+:\s*(.*)', content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
                
    except:
        pass
    return None

def main():
    polity_data_dir = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data'
    raw_mcqs_dir = os.path.join(polity_data_dir, "raw_mcqs")
    
    # Target titles from polity-types-95.ts manually extracted earlier
    # or just reload them from the JSON if we have it
    with open('polity_mapping_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        targets = data['targets']
        
    # Exhaustive Scan
    all_sources = {}
    
    scan_patterns = [
        os.path.join(polity_data_dir, "day*-mcqs.ts"),
        os.path.join(raw_mcqs_dir, "l1-ch*.ts"),
        os.path.join(raw_mcqs_dir, "day*-mcqs.ts"),
    ]
    
    for pattern in scan_patterns:
        for fpath in glob.glob(pattern):
            title = extract_topic_title(fpath)
            if title:
                all_sources[fpath] = title
            else:
                # Fallback to filename if no title found inside
                all_sources[fpath] = os.path.basename(fpath)
                
    # Save exhaustive source list
    output = {
        "targets": targets,
        "sources": all_sources
    }
    
    with open('polity_mapping_data_exhaustive.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=4)
    print(f"Scanned {len(all_sources)} source files.")

if __name__ == "__main__":
    main()
