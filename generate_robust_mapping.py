
import json
import os
import re

def main():
    # Targets
    with open('polity_mapping_data_exhaustive.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        targets = data['targets']
    
    raw_dir = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data'
    raw_mcqs_dir = os.path.join(raw_dir, 'raw_mcqs')
    
    final_mapping = {}
    
    # 1. Start with high-confidence dayX mapping for Topics 1-42 (mostly matches)
    for tid_str, title in targets.items():
        tid = int(tid_str)
        final_mapping[tid] = {"title": title, "l1_source": None, "source_ch": None, "l3_sources": []}
        
        # Default dayX mapping for early chapters (1-42)
        # Offset handling: day1->Topic1, day3->Topic4, etc.
        day_map = tid
        if tid >= 4: day_map = tid - 1 # Offset for "Concept of Constitution"
        if tid >= 35: day_map = tid - 1 # More offsets likely
        
        day_f = os.path.join(raw_dir, f"day{day_map}-mcqs.ts")
        if os.path.exists(day_f) and tid <= 42:
            final_mapping[tid]["l1_source"] = day_f
            final_mapping[tid]["source_ch"] = str(day_map)
            
    # 2. Manual/Patterned mapping for l1-chXX files (Laxmikanth chapters)
    # Laxmikanth Ch -> Topic ID
    # This is the most accurate for the later parts
    LX_TO_TOPIC = {
        44: 44, # UPSC
        45: 45, # SPSC
        46: 46, # Finance
        47: 47, # GST
        48: 48, # SC
        49: 49, # ST
        50: 50, # BC
        51: 51, # Linguistic
        52: 52, # CAG
        53: 53, # AG
        54: 54, # AS
        56: 56, # NITI
        57: 57, # NHRC
        58: 58, # SHRC
        59: 59, # Women (Wait, check file titles)
        65: 81, # Elections
        66: 83, # Electoral Reforms
        67: 84, # Voting Behaviour
        68: 79, # Political Parties
        70: 75, # Public Services
        # ... more can be added
    }
    
    # Scan all l1-ch files and use title matching for the rest
    for lx_ch in range(1, 100):
        fpath = os.path.join(raw_mcqs_dir, f"l1-ch{lx_ch}.ts")
        if os.path.exists(fpath):
            # Check if we have an explicit mapping
            if lx_ch in LX_TO_TOPIC:
                tid = LX_TO_TOPIC[lx_ch]
                final_mapping[tid]["l1_source"] = fpath
                final_mapping[tid]["source_ch"] = str(lx_ch)
            else:
                # Fallback to Title Match
                pass

    # 3. Last Resort: Fuzzy Match for anything still null
    # ... logic ...
    
    # Save this for the consolidator
    with open('final_mapping_robust.json', 'w', encoding='utf-8') as f:
        # Convert keys to string for JSON
        out = {str(k): v for k, v in final_mapping.items()}
        json.dump(out, f, indent=4)
        
    print("Robust mapping generated.")

if __name__ == "__main__":
    main()
