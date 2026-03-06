
import json
import os

# Manual Overrides for Topic ID -> Source Keywords/Filename
OVERRIDES = {
    43: "day43-mcqs.ts", # Election Commission
    44: "day49-mcqs.ts", # UPSC
    45: "day50-mcqs.ts", # SPSC
    46: "day46-mcqs.ts", # Finance Commission
    52: "day51-mcqs.ts", # CAG
    53: "day52-mcqs.ts", # Attorney General
    54: "day53-mcqs.ts", # Advocate General
    56: "day40-mcqs.ts", # NITI Aayog
    57: "day41-mcqs.ts", # NHRC
    62: "day44-mcqs.ts", # Central Information Commission
    64: "day45-mcqs.ts", # CVC
    65: "day48-mcqs.ts", # CBI
    66: "day47-mcqs.ts", # Lokpal
    67: "day54-mcqs.ts", # NIA
    68: "day55-mcqs.ts", # NDMA
    73: "day57-mcqs.ts", # Co-operative Societies
    74: "day58-mcqs.ts", # Official Language
    75: "day59-mcqs.ts", # Public Services
    76: "day60-mcqs.ts", # Rights and Liabilities
    77: "day61-mcqs.ts", # Special Provisions Classes
    78: "day62-mcqs.ts", # Special Provisions States
    79: "day63-mcqs.ts", # Political Parties
    80: "day64-mcqs.ts", # Role of Regional Parties
    81: "day65-mcqs.ts", # Elections
    82: "day66-mcqs.ts", # Election Laws
    83: "day67-mcqs.ts", # Electoral Reforms
}

def refine():
    with open('final_mapping.json', 'r', encoding='utf-8') as f:
        mapping = json.load(f)
        
    raw_dir = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data'
    raw_mcqs_dir = os.path.join(raw_dir, 'raw_mcqs')
    
    for tid_str, filename in OVERRIDES.items():
        if tid_str in mapping: # Should be string or int handle? json.load uses strings for keys
            pass
        tid = str(tid_str)
        if tid not in mapping:
            continue
            
        fpath = os.path.join(raw_dir, filename)
        if not os.path.exists(fpath):
            fpath = os.path.join(raw_mcqs_dir, filename)
            
        if os.path.exists(fpath):
            mapping[tid]['l1_source'] = fpath
            mapping[tid]['score'] = 1.1 # Flag as override
            
            # Re-derive source_ch for l2/l3
            ch_num = None
            try:
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read(5000)
                    match_ch = re.search(r'Strictly Chapter (\d+)', content)
                    if match_ch:
                        ch_num = match_ch.group(1)
            except:
                pass
                
            if not ch_num:
                 # Try to guess from filename if dayX
                 if 'day' in filename:
                     # For these later chapters, dayX usually maps to Ch X+7 or something
                     # But let's trust the "Strictly Chapter" comment or just try the day number
                     day_num = re.search(r'day(\d+)', filename)
                     if day_num:
                         ch_num = day_num.group(1)
            
            if ch_num:
                mapping[tid]['source_ch'] = ch_num
                # Find L2/L3
                l2_path = os.path.join(raw_mcqs_dir, f'l2-ch{ch_num}.ts')
                if os.path.exists(l2_path):
                    mapping[tid]['l2_source'] = l2_path
                
                l3_path = os.path.join(raw_mcqs_dir, f'l3-ch{ch_num}.ts')
                l3_p1 = os.path.join(raw_mcqs_dir, f'l3-ch{ch_num}-p1.ts')
                l3_p2 = os.path.join(raw_mcqs_dir, f'l3-ch{ch_num}-p2.ts')
                
                if os.path.exists(l3_path):
                    mapping[tid]['l3_sources'] = [l3_path]
                elif os.path.exists(l3_p1):
                    pk_sources = [l3_p1]
                    if os.path.exists(l3_p2):
                        pk_sources.append(l3_p2)
                    mapping[tid]['l3_sources'] = pk_sources

    with open('final_mapping_refined.json', 'w', encoding='utf-8') as f:
        json.dump(mapping, f, indent=4)
    print("Refined mapping saved.")

import re
if __name__ == "__main__":
    refine()
