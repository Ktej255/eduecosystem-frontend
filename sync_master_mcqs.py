"""
MASTER MCQ SYNC — Parse 4 source .txt files → wipe old data → insert clean to production DB.
Run: python sync_master_mcqs.py
"""
import re, json, hashlib, psycopg2
from pathlib import Path
from collections import defaultdict

# ─── DB ───────────────────────────────────────────────────────────────────────
DB = dict(host="34.55.250.166", port=5432, dbname="eduecosystem_prod",
          user="postgres", password="Tej@1106", connect_timeout=30)

# ─── Source files ─────────────────────────────────────────────────────────────
SRC = {
    "Medieval History": Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\Medieval History\Master Mcq Medieval History.txt"),
    "Ancient History":  Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\Ancient History\Ancient History MCQ Master Sheet.txt"),
    "Polity":           Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\Polity\MCQ\Polity MCQ Master Sheet Chapter 1 to 80.txt"),
    "Modern History":   Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt"),
}

LETTER   = {"a": 0, "b": 1, "c": 2, "d": 3}
LVL_DIFF = {1: "easy", 2: "medium", 3: "hard"}

# ─── Shared patterns ──────────────────────────────────────────────────────────
CH_PAT   = re.compile(r'^Chapter\s+(\d+)\b', re.I)
LV_PAT   = re.compile(r'(?:LEVEL|Level)\s*(\d)', re.I)
QA_PAT   = re.compile(r'^\s*(?:Q\s*)?(\d{1,3})[.)] (.+)')
OPT_SEP  = re.compile(r'^\s*[(\[]*([A-Da-d])[)\].]\s+(.+)')
ANS_PAT  = re.compile(r'(?:Answer|Ans)\s*[:\-]?\s*[(\[]*([A-Da-d])', re.I)
EXPL_PAT = re.compile(r'Explanation\s*[:\-]\s*(.+)', re.I)

# ─── Helpers ──────────────────────────────────────────────────────────────────
def letter_to_idx(letter):
    if not letter: return "0"
    return str(LETTER.get(str(letter).strip().lower(), 0))

def make_hash(subj, ch, q):
    return hashlib.md5(f"{subj}-{ch}-{q[:60]}".encode()).hexdigest()[:16]

def clean(t):
    return (t.replace('\u2019', "'").replace('\u2013', '-').replace('\u2018', "'")
             .replace('\u2014', '-').replace('\u00a0', ' ').replace('\u200b', '')
             .replace('\u2026', '...'))

def make_rec(subj, ch, lvl, q, opts, ans, expl=""):
    q = (q or "").strip()
    if len(q) < 10 or not ch: return None
    opts = [o.strip() for o in (opts or [])[:4] if o.strip()]
    if len(opts) < 2: return None
    return dict(
        text=q,
        options=json.dumps(opts, ensure_ascii=False),
        correct_answer=letter_to_idx(ans),
        explanation=(expl or "").strip(),
        chapter_number=ch,
        level=lvl if lvl in (1, 2, 3) else 1,
        difficulty=LVL_DIFF.get(lvl, "easy"),
        subject=subj,
        source_id=make_hash(subj, ch, q),
    )

# ─── Parser 1: Medieval + Ancient (options on separate lines) ─────────────────
def parse_multiline(path, subj):
    text = clean(path.read_text(encoding="utf-8-sig", errors="replace"))
    lines = text.splitlines()
    recs, ch, lvl = [], 0, 1
    qtext, opts, ans, expl = None, [], None, ""

    def flush():
        nonlocal qtext, opts, ans, expl
        r = make_rec(subj, ch, lvl, qtext, opts, ans, expl)
        if r: recs.append(r)
        qtext, opts, ans, expl = None, [], None, ""

    for line in lines:
        s = line.strip()
        if not s: continue
        m = CH_PAT.match(s)
        if m: flush(); ch = int(m.group(1)); continue
        m = LV_PAT.search(s)
        if m and len(s) < 120 and not QA_PAT.match(s): flush(); lvl = int(m.group(1)); continue
        m = ANS_PAT.search(s)
        if m:
            ans = m.group(1)
            em = EXPL_PAT.search(s)
            if em: expl = em.group(1)
            continue
        m = EXPL_PAT.match(s)
        if m: expl = m.group(1); continue
        m = OPT_SEP.match(s)
        if m and qtext is not None: opts.append(m.group(2).strip()); continue
        m = QA_PAT.match(s)
        if m: flush(); qtext = m.group(2).strip(); continue
    flush()
    return recs

# ─── Parser 2: Polity ("1. question a) opt b) opt c) opt d) opt") ─────────────
def parse_polity(path, subj):
    text = clean(path.read_text(encoding="utf-8-sig", errors="replace"))
    lines = text.splitlines()
    recs, ch, lvl = [], 0, 1
    Q_NUM = re.compile(r'^\s*(\d{1,3})[.)] (.+)', re.DOTALL)
    ANS_POLITY = re.compile(r'Answer\s*[:\-]?\s*\(?([a-d])\)?', re.I)

    for s in lines:
        s = s.strip()
        if not s: continue
        m = CH_PAT.match(s)
        if m: ch = int(m.group(1)); continue
        m = LV_PAT.search(s)
        if m and not Q_NUM.match(s): lvl = int(m.group(1)); continue

        qm = Q_NUM.match(s)
        if not qm or not ch: continue
        body = qm.group(2)

        # Split on "letter) " pattern
        parts = re.split(r'(?<!\w)\s+([a-d])\)\s+', body, flags=re.I)
        if len(parts) >= 5:
            qtext = parts[0].strip()
            opts = []
            for k in range(1, len(parts) - 1, 2):
                if parts[k].lower() in 'abcd':
                    opt_text = parts[k+1].strip() if k+1 < len(parts) else ""
                    opt_text = re.sub(r'\s*Answer\s*.*$', '', opt_text, flags=re.I).strip()
                    opts.append(opt_text)
        else:
            continue

        ans = None
        am = ANS_POLITY.search(body)
        if am: ans = am.group(1)
        r = make_rec(subj, ch, lvl, qtext, opts, ans)
        if r: recs.append(r)
    return recs

# ─── Parser 3: Modern History ─────────────────────────────────────────────────
# L1:  "Q1. text (a) opt (b) opt (c) opt (d) opt"  →  "* Answer: (b)"
# L2+: "Q1. text A. opt B. opt C. opt D. opt"      →  "* Answer: B. explanation"
def parse_modern(path, subj):
    text = clean(path.read_text(encoding="utf-8-sig", errors="replace"))
    raw = text.splitlines()
    lines = [(i, l.strip()) for i, l in enumerate(raw) if l.strip()]

    recs, ch, lvl = [], 0, 1
    Q_PAT    = re.compile(r'^Q\s*\d{1,3}[.)] (.+)', re.I)   # Q prefix required
    IS_Q     = re.compile(r'^Q\s*\d{1,3}[.)]', re.I)
    IS_ANS   = re.compile(r'(?:\*\s*)?Answer\s*[:\-]', re.I)
    ANS_BRKT = re.compile(r'(?:\*\s*)?Answer\s*[:\-]?\s*\(\s*([a-d])\s*\)', re.I)
    ANS_DOT  = re.compile(r'(?:\*\s*)?Answer\s*[:\-]?\s*([A-D])\.', re.I)
    # Option extractors
    POPT_B   = re.compile(r'\(([abcd])\)\s+([^(]+)', re.I)         # (a) text
    POPT_D   = re.compile(r'(?<!\w)([A-D])\.\s+([^A-D]+?)(?=\s+[A-D]\.|$)')  # A. text

    def extract_opts(seg):
        """Try both option formats; return list of option texts."""
        r = [o[1].strip().rstrip('.').strip()
             for o in POPT_B.findall(seg) if o[0].lower() in 'abcd']
        if len(r) >= 2: return r
        r = [o[1].strip().rstrip('.').strip()
             for o in POPT_D.findall(seg) if o[0].upper() in 'ABCD']
        if len(r) >= 2: return r
        return []

    def first_opt_pos(seg):
        """Return (pos, 'bracket'|'dot') of first option marker, or (-1, None)."""
        for mo in re.finditer(r'\([abcd]\)', seg, re.I):
            if mo.group(0).lower() == '(a)': return mo.start(), 'bracket'
        for mo in re.finditer(r'(?<!\w)A\.\s', seg):
            return mo.start(), 'dot'
        return -1, None

    def get_ans(line):
        m = ANS_BRKT.match(line)
        if m: return m.group(1).lower()
        m = ANS_DOT.match(line)
        if m: return m.group(1).lower()
        return None

    for i, (ri, s) in enumerate(lines):
        # Chapter header
        cm = re.match(r'^Chapter\s+(\d+)\b', s, re.I)
        if cm: ch = int(cm.group(1)); continue

        # Level header (not a Q line, not Answer line, not * line)
        lm = LV_PAT.search(s)
        if lm and not IS_Q.match(s) and not IS_ANS.match(s) and not s.startswith('*'):
            lvl = int(lm.group(1)); continue

        qm = Q_PAT.match(s)
        if not qm or not ch: continue
        body = qm.group(1).strip()

        # Find options on THIS line
        pos, _ = first_opt_pos(body)
        if pos > 0:
            qtext = body[:pos].strip()
            opts = extract_opts(body[pos:])
        else:
            # Options on a subsequent line — combine up to 6 continuation lines
            qtext = body
            opts = []
            combined = body
            for j in range(i + 1, min(i + 7, len(lines))):
                _, nxt = lines[j]
                if IS_ANS.match(nxt): break
                if IS_Q.match(nxt): break
                combined = combined + ' ' + nxt
                pos2, _ = first_opt_pos(combined)
                if pos2 >= 0:
                    qtext = combined[:pos2].strip()
                    opts = extract_opts(combined[pos2:])
                    if len(opts) >= 2: break

        # Answer on next 1-5 lines
        ans = None
        for j in range(i + 1, min(i + 6, len(lines))):
            _, nxt = lines[j]
            a = get_ans(nxt)
            if a: ans = a; break
            if IS_Q.match(nxt): break

        r = make_rec(subj, ch, lvl, qtext, opts, ans)
        if r: recs.append(r)
    return recs


# ─── Dispatch ─────────────────────────────────────────────────────────────────
def parse_source(path, subj):
    if subj in ("Medieval History", "Ancient History"):
        return parse_multiline(path, subj)
    elif subj == "Polity":
        return parse_polity(path, subj)
    else:
        return parse_modern(path, subj)

# ─── Validate & report ────────────────────────────────────────────────────────
def validate(recs, subj):
    valid = [r for r in recs
             if len(r["text"]) >= 10
             and len(json.loads(r["options"])) >= 2
             and r["chapter_number"] > 0]
    print(f"  Parsed: {len(recs)} | Valid: {len(valid)}")
    bd = defaultdict(lambda: defaultdict(int))
    for r in valid:
        bd[r["chapter_number"]][r["level"]] += 1
    print(f"  {'Ch':>4} | {'L1':>5} | {'L2':>5} | {'L3':>5} | {'Tot':>5}")
    print(f"  {'-'*30}")
    for ch in sorted(bd)[:45]:
        lc = bd[ch]
        t = sum(lc.values())
        flag = " <LOW" if t < 85 else ""
        print(f"  {ch:>4} | {lc[1]:>5} | {lc[2]:>5} | {lc[3]:>5} | {t:>5}{flag}")
    if len(bd) > 45:
        print(f"  ... {len(bd)-45} more chapters")
    return valid

# ─── DB sync ──────────────────────────────────────────────────────────────────
def sync_to_db(conn, subj, recs):
    cur = conn.cursor()
    cur.execute("DELETE FROM bank_questions WHERE subject = %s", (subj,))
    print(f"  Cleared {cur.rowcount} existing rows")
    if not recs:
        conn.commit(); cur.close(); return 0
    INSERT = """
        INSERT INTO bank_questions
          (instructor_id,text,type,options,correct_answer,explanation,
           subject,chapter_number,level,difficulty,source_id,points,usage_count)
        VALUES (1,%s,'multiple_choice',%s,%s,%s,%s,%s,%s,%s,%s,1,0)
        ON CONFLICT (source_id) DO NOTHING
    """
    params = [(r["text"], r["options"], r["correct_answer"], r["explanation"],
               r["subject"], r["chapter_number"], r["level"], r["difficulty"], r["source_id"])
              for r in recs]
    cur.executemany(INSERT, params)
    ins = cur.rowcount; conn.commit(); cur.close(); return ins

# ─── Main ─────────────────────────────────────────────────────────────────────
def main():
    print("Connecting to production DB...")
    conn = psycopg2.connect(**DB)
    print("Connected.\n")
    summary = []
    for subj, fpath in SRC.items():
        print(f"\n{'='*55}\n  {subj}\n{'='*55}")
        if not fpath.exists():
            print(f"  FILE NOT FOUND: {fpath}"); continue
        recs  = parse_source(fpath, subj)
        valid = validate(recs, subj)
        ins   = sync_to_db(conn, subj, valid)
        print(f"  INSERTED: {ins}")
        summary.append((subj, len(valid), ins))
    conn.close()
    print(f"\n{'='*55}\n  FINAL SUMMARY\n{'='*55}")
    print(f"  {'Subject':<22} {'Valid':>7} {'Inserted':>9}")
    print(f"  {'-'*40}")
    total = 0
    for s, v, ins in summary:
        print(f"  {s:<22} {v:>7} {ins:>9}")
        total += ins
    print(f"\n  TOTAL INSERTED: {total}")

if __name__ == "__main__":
    main()
