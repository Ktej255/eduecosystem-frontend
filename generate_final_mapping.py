
import os
import json
import re
import difflib

def get_title_score(t1, t2):
    t1 = t1.lower().strip()
    t2 = t2.lower().strip()
    # Handle common abbreviations
    t1 = t1.replace('union public service commission', 'upsc').replace('state public service commission', 'spsc')
    t2 = t2.replace('union public service commission', 'upsc').replace('state public service commission', 'spsc')
    return difflib.SequenceMatcher(None, t1, t2).ratio()

def load_data():
    with open('polity_mapping_data_exhaustive.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def find_mapping():
    data = load_data()
    targets = data['targets']
    sources = data['sources']
    
    final_mapping = {}
    
    # Priority 1: L1 files
    for tid_str, target_title in targets.items():
        tid = int(tid_str)
        best_match = None
        best_score = 0
        
        for fpath, source_title in sources.items():
            score = get_title_score(target_title, source_title)
            if score > best_score:
                best_score = score
                best_match = fpath
        
        if best_score > 0.65: # Slightly lower threshold since we have more sources
            final_mapping[tid] = {
                "l1_source": best_match,
                "title": target_title,
                "score": best_score
            }
        else:
            final_mapping[tid] = {
                "l1_source": None,
                "title": target_title,
                "score": 0
            }
            
    # Priority 2: Derive Source Chapter from L1 and find L2/L3
    raw_mcqs_dir = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data\raw_mcqs'
    
    for tid, info in final_mapping.items():
        l1 = info['l1_source']
        if not l1:
            continue
            
        ch_num = None
        basename = os.path.basename(l1)
        match = re.search(r'l1-ch(\d+)', basename)
        if match:
            ch_num = match.group(1)
        else:
            match = re.search(r'day(\d+)', basename)
            if match:
                # Try to extract from file content
                try:
                    with open(l1, 'r', encoding='utf-8') as f:
                        content = f.read(5000)
                        match_ch = re.search(r'Strictly Chapter (\d+)', content)
                        if match_ch:
                            ch_num = match_ch.group(1)
                        else:
                            ch_num = match.group(1) # fallback to day number
                except:
                    ch_num = match.group(1)
        
        if ch_num:
            info['source_ch'] = ch_num
            l2_path = os.path.join(raw_mcqs_dir, f'l2-ch{ch_num}.ts')
            if os.path.exists(l2_path):
                info['l2_source'] = l2_path
            
            l3_path = os.path.join(raw_mcqs_dir, f'l3-ch{ch_num}.ts')
            l3_p1 = os.path.join(raw_mcqs_dir, f'l3-ch{ch_num}-p1.ts')
            l3_p2 = os.path.join(raw_mcqs_dir, f'l3-ch{ch_num}-p2.ts')
            
            if os.path.exists(l3_path):
                info['l3_sources'] = [l3_path]
            elif os.path.exists(l3_p1):
                pk_sources = [l3_p1]
                if os.path.exists(l3_p2):
                    pk_sources.append(l3_p2)
                info['l3_sources'] = pk_sources
            else:
                info['l3_sources'] = []
    
    with open('final_mapping_refined.json', 'w', encoding='utf-8') as f:
        json.dump(final_mapping, f, indent=4)
    print(f"Generated refined mapping for {len(final_mapping)} topics.")

if __name__ == "__main__":
    find_mapping()
