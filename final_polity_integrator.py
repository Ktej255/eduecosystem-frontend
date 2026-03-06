
import os
import re
import json
import glob

RAW_DIR = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\polity\data'
RAW_MCQS_DIR = os.path.join(RAW_DIR, 'raw_mcqs')
OUTPUT_DIR = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\chapters'
os.makedirs(OUTPUT_DIR, exist_ok=True)

TARGET_TITLES = {
    1: "Historical Background", 2: "Making of the Constitution", 3: "Concept of the Constitution",
    4: "Salient Features of the Constitution", 5: "Preamble of the Constitution", 6: "Union and its Territory",
    7: "Citizenship", 8: "Fundamental Rights", 9: "Directive Principles of State Policy",
    10: "Fundamental Duties", 11: "Amendment of the Constitution", 12: "Basic Structure of the Constitution",
    13: "Parliamentary System", 14: "Federal System", 15: "Centre-State Relations",
    16: "Inter-State Relations", 17: "Emergency Provisions", 18: "President",
    19: "Vice-President", 20: "Prime Minister", 21: "Central Council of Ministers",
    22: "Cabinet Committees", 23: "Parliament", 24: "Parliamentary Committees",
    25: "Indian Parliamentary Group", 26: "Supreme Court", 27: "Judicial Review",
    28: "Judicial Activism", 29: "Public Interest Litigation", 30: "Governor",
    31: "Chief Minister", 32: "State Council of Ministers", 33: "State Legislature",
    34: "High Court", 35: "Subordinate Courts", 36: "Tribunals",
    37: "Consumer Commissions", 38: "Lok Adalats and Other Courts", 39: "Panchayati Raj",
    40: "Municipalities", 41: "Union Territories", 42: "Scheduled and Tribal Areas",
    43: "Election Commission", 44: "Union Public Service Commission (UPSC)", 45: "State Public Service Commission (SPSC)",
    46: "Finance Commission", 47: "Goods and Services Tax (GST) Council", 48: "National Commission for SCs",
    49: "National Commission for STs", 50: "National Commission for BCs", 51: "Special Officer for Linguistic Minorities",
    52: "Comptroller and Auditor General of India (CAG)", 53: "Attorney General of India", 54: "Advocate General of the State",
    55: "Constitutional Bodies Buffer", 56: "NITI Aayog", 57: "National Human Rights Commission (NHRC)",
    58: "State Human Rights Commission (SHRC)", 59: "National Commission for Women", 60: "National Commission for Protection of Child Rights",
    61: "National Commission for Minorities", 62: "Central Information Commission", 63: "State Information Commission",
    64: "Central Vigilance Commission", 65: "Central Bureau of Investigation", 66: "Lokpal and Lokayuktas",
    67: "National Investigation Agency", 68: "National Disaster Management Authority", 69: "Bar Council of India",
    70: "Law Commission of India", 71: "Delimitation Commission of India", 72: "North Eastern Council",
    73: "Co-operative Societies", 74: "Official Language", 75: "Public Services",
    76: "Rights and Liabilities of the Government", 77: "Special Provisions Relating to Certain Classes", 78: "Special Provisions for Some States",
    79: "Political Parties", 80: "Role of Regional Parties", 81: "Elections",
    82: "Election Laws", 83: "Electoral Reforms", 84: "Voting Behaviour",
    85: "Coalition Government", 86: "Anti-Defection Law", 87: "Pressure Groups",
    88: "National Integration", 89: "Foreign Policy", 90: "National Commission to Review the Working of the Constitution",
    91: "Landmark Judgements and Their Impact", 92: "Judgements Expanding the Scope of Article 21", 93: "Judgements Relating to the Amendments",
    94: "Important Doctrines of Constitutional Interpretation", 95: "World Constitutions"
}

# ===== DEFINITIVE MAPPING =====
# Topic ID -> { l1: [list of source files], lx_ch: Laxmikanth chapter number for L2/L3 }
# Built by reading file contents:
#   l1-ch69 = National Integration -> T88
#   l1-ch70 = Public Services -> T75
#   l1-ch71 = UPSC -> T44
#   l1-ch72 = SPSC -> T45
#   l1-ch73 = Finance Commission -> T46
#   l1-ch74 = GST Council -> T47
#   l1-ch75 = NC for SCs -> T48 (confirmed by content about Art 338)
#   l1-ch76 = NC for STs -> T49
#   l1-ch77 = NC for BCs -> T50
#   l1-ch78 = Special Officer Ling Minorities -> T51
#   l1-ch79 = CAG -> T52
#   l1-ch80 = Attorney General -> T53
#   l1-ch81 = Advocate General -> T54
#   l1-ch82 = NITI Aayog -> T56
#   l1-ch83 = NHRC -> T57
#   l1-ch84 = SHRC -> T58
#   l1-ch85 = Anti-Defection Law -> T86
#   l1-ch86 = Coalition Govt -> T85
#   l1-ch87 = Pressure Groups -> T87
#   l1-ch88 = Foreign Policy -> T89
#   l1-ch89 = NC for Review Constitution -> T90
#   l1-ch90 = Landmark Judgements -> T91
#   l1-ch91 = Judgements Art 21 -> T92
#   l1-ch92 = Judgements Amendments -> T93
#   l1-ch93 = Doctrines of Const Interpretation -> T94
#   l1-ch94 = World Constitutions -> T95
#   l1-ch95 = (could be anything, check below)
#   l1-ch65 = Elections -> T81
#   l1-ch66 = Electoral Reforms -> T83
#   l1-ch67 = Voting Behaviour -> T84
#   l1-ch68 = Political Parties -> T79

# For DayX-based mapping (Topics 1-42):
#   day1 -> T1, day2 -> T2, ... day9 -> T10
#   day10 -> T11 (Amendment), day11 -> T12, day12 -> T13, ...
#   day34 -> T34, day35 -> T36, day36 -> T39, day37 -> T40, day38 -> T41, day39 -> T42

TOPIC_TO_L1_SOURCES = {}

# Early chapters from dayX-mcqs.ts (Topics 1-42)
DAY_TO_TOPIC = {
    1:1, 2:2, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10,
    10:11, 11:12, 12:13, 13:14, 14:15, 15:16, 16:17, 17:18, 18:19, 19:20,
    20:21, 21:22, 22:23, 23:24, 25:25, 26:26, 27:27, 28:28, 29:29, 30:30,
    31:31, 32:32, 33:33, 34:34, 35:36, 36:39, 37:40, 38:41, 39:42,
    43:43, 44:44, 45:45, 46:46, 49:44, 50:45, 51:52, 52:53, 53:54,
    40:56, 41:57, 47:66, 48:65, 54:67, 55:68, 57:73, 58:74,
    59:75, 60:76, 61:77, 62:78, 63:79, 64:80, 65:81, 66:82, 67:84, 68:3
}

# Laxmikanth l1-chXX -> Topic ID (from file content analysis above)
LX_CH_TO_TOPIC = {
    65: 81, 66: 83, 67: 84, 68: 79, 69: 88, 70: 75,
    71: 44, 72: 45, 73: 46, 74: 47, 75: 48, 76: 49,
    77: 50, 78: 51, 79: 52, 80: 53, 81: 54, 82: 56,
    83: 57, 84: 58, 85: 85, 86: 86, 87: 87, 88: 89,
    89: 90, 90: 91, 91: 92, 92: 93, 93: 94, 94: 95, 95: 69
}

def find_balanced_blocks(text):
    blocks = []
    stack = []
    start = -1
    for i, char in enumerate(text):
        if char == '{':
            if not stack: start = i
            stack.append('{')
        elif char == '}':
            if stack:
                stack.pop()
                if not stack: blocks.append(text[start:i+1])
    return blocks

def extract_questions(fpath, level_label):
    if not fpath or not os.path.exists(fpath): return []
    with open(fpath, 'r', encoding='utf-8') as f: content = f.read()
    match = re.search(r'\[(.*)\]', content, re.DOTALL)
    if not match: return []
    blocks = find_balanced_blocks(match.group(1))
    questions = []
    for i, block in enumerate(blocks):
        q = {}
        m_q = re.search(r'(?:"?question"?|"?text"?):\s*(?:["\']|`)(.*?)(?:["\']|`)', block, re.DOTALL)
        if m_q: q['question'] = m_q.group(1).strip()
        else: continue
        m_o = re.search(r'(?:"?options"?):\s*\[(.*?)\]', block, re.DOTALL)
        if m_o:
            opts = re.findall(r'(?:["\']|`)(.*?)(?:["\']|`)', m_o.group(1))
            q['options'] = [o.strip() for o in opts]
        else: continue
        m_ca = re.search(r'(?:"?correctAnswer"?|"?correctAnswerIndex"?|"?answer"?):\s*(\d+)', block)
        if m_ca: q['correctAnswer'] = int(m_ca.group(1))
        else: continue
        m_e = re.search(r'(?:"?explanation"?):\s*(?:["\']|`)(.*?)(?:["\']|`)', block, re.DOTALL)
        q['explanation'] = m_e.group(1).strip() if m_e else ""
        q['id'] = f"{level_label}-q{i+1}"
        questions.append(q)
    return questions

def write_chapter(tid, title, l1, l2, l3):
    for i, q in enumerate(l1): q['id'] = f"ch{tid}-l1-q{i+1}"
    for i, q in enumerate(l2): q['id'] = f"ch{tid}-l2-q{i+1}"
    for i, q in enumerate(l3): q['id'] = f"ch{tid}-l3-q{i+1}"
    out_path = os.path.join(OUTPUT_DIR, f'chapter-{tid}.ts')
    with open(out_path, 'w', encoding='utf-8') as fo:
        fo.write("import { ChapterLevelData } from '../level-types';\n\n")
        def d(n, ql):
            s = f"const {n} = [\n"
            for q in ql:
                qtext = q['question'].replace(chr(92), chr(92)+chr(92)).replace('"', '\\"')
                s += f'    {{\n        "id": "{q["id"]}",\n        "question": "{qtext}",\n'
                opts_s = ','.join(['"' + o.replace(chr(92), chr(92)+chr(92)).replace('"', '\\"') + '"' for o in q['options']])
                s += f'        "options": [{opts_s}],\n'
                exp = q['explanation'].replace(chr(92), chr(92)+chr(92)).replace('"', '\\"').replace('\n', ' ')
                s += f'        "correctAnswerIndex": {q["correctAnswer"]},\n        "explanation": "{exp}"\n    }},\n'
            return s.rstrip(',\n') + "\n];\n\n"
        fo.write(d("LEVEL_1_QUESTIONS", l1))
        fo.write(d("LEVEL_2_QUESTIONS", l2))
        fo.write(d("LEVEL_3_QUESTIONS", l3))
        fo.write(f"export const CHAPTER_{tid}_LEVELS: ChapterLevelData = {{\n    level1: LEVEL_1_QUESTIONS,\n    level2: LEVEL_2_QUESTIONS,\n    level3: LEVEL_3_QUESTIONS\n}};\n")

def main():
    # Build complete source map: Topic ID -> {l1_files, lx_ch for L2/L3}
    topic_sources = {tid: {"l1_files": [], "lx_chs": set()} for tid in range(1, 96)}

    # 1. Map DayX files
    for day_num, tid in DAY_TO_TOPIC.items():
        f = os.path.join(RAW_DIR, f"day{day_num}-mcqs.ts")
        if os.path.exists(f):
            topic_sources[tid]["l1_files"].append(f)
            topic_sources[tid]["lx_chs"].add(str(day_num))

    # 2. Map l1-chXX files
    for lx_ch, tid in LX_CH_TO_TOPIC.items():
        f = os.path.join(RAW_MCQS_DIR, f"l1-ch{lx_ch}.ts")
        if os.path.exists(f):
            topic_sources[tid]["l1_files"].append(f)
            topic_sources[tid]["lx_chs"].add(str(lx_ch))

    # 3. Also map any remaining l1-ch files that match dayX chapter nums
    # (for topics 1-42, the l2/l3 files use the day number as ch num)

    for tid, title in TARGET_TITLES.items():
        print(f"Integrating Topic {tid}: {title}")
        l1, l2, l3 = [], [], []

        info = topic_sources[tid]

        # Extract L1 from all mapped sources
        for f in info["l1_files"]:
            l1.extend(extract_questions(f, "L1"))

        # Extract L2/L3 from all known chapter numbers
        for ch in info["lx_chs"]:
            l2_f = os.path.join(RAW_MCQS_DIR, f"l2-ch{ch}.ts")
            l2.extend(extract_questions(l2_f, "L2"))

            # L3: single or split
            l3_single = os.path.join(RAW_MCQS_DIR, f"l3-ch{ch}.ts")
            l3_p1 = os.path.join(RAW_MCQS_DIR, f"l3-ch{ch}-p1.ts")
            l3_p2 = os.path.join(RAW_MCQS_DIR, f"l3-ch{ch}-p2.ts")
            if os.path.exists(l3_single):
                l3.extend(extract_questions(l3_single, "L3"))
            if os.path.exists(l3_p1):
                l3.extend(extract_questions(l3_p1, "L3"))
            if os.path.exists(l3_p2):
                l3.extend(extract_questions(l3_p2, "L3"))

        write_chapter(tid, title, l1, l2, l3)

    print("\n=== INTEGRATION COMPLETE ===")

if __name__ == "__main__":
    main()
