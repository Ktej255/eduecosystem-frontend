import sqlalchemy
from sqlalchemy import text
import json

e = sqlalchemy.create_engine('postgresql://postgres:EduEco2026DB@127.0.0.1:5433/eduecosystem_prod')

ANCIENT_CLUSTERS = [
    (1, "Indus Valley & Vedic Age"),
    (2, "Mauryan & Post-Mauryan Empire"),
    (3, "Gupta Empire & Classical Age"),
    (4, "South Indian Kingdoms"),
    (5, "Religion & Philosophy — Ancient"),
]

MEDIEVAL_CLUSTERS = [
    (6, "Delhi Sultanate"),
    (7, "Mughal Empire"),
    (8, "Bhakti & Sufi Movements"),
    (9, "Vijayanagara & Regional Kingdoms"),
    (10, "Medieval Economy & Culture"),
]

def normalize_answer(ans, opts):
    mapping = {0: 'a', 1: 'b', 2: 'c', 3: 'd'}
    if not ans: return 'a'
    if str(ans) in ['1', '2', '3', '4']:
        return mapping[int(ans) - 1]
    try:
        if isinstance(opts, list):
            if ans in opts:
                return mapping[opts.index(ans)]
            opts_lower = [o.lower() for o in opts]
            if ans.lower() in opts_lower:
                return mapping[opts_lower.index(ans.lower())]
    except Exception:
        pass
    return 'a'

def insert_questions(conn, rows, subject, cluster_num, cluster_name):
    for i, row in enumerate(rows):
        try:
            opts = json.loads(row.options) if isinstance(row.options, str) else row.options
        except:
            opts = ["Option A", "Option B", "Option C", "Option D"]
        if not opts or not isinstance(opts, list):
            opts = ["Option A", "Option B", "Option C", "Option D"]
        while len(opts) < 4:
            opts.append("N/A")
        correct_ans = normalize_answer(row.correct_answer, opts)
        conn.execute(text("""
            INSERT INTO focused_questions
            (subject, cluster_number, cluster_name, question_number,
             question_text, option_a, option_b, option_c, option_d,
             correct_answer, explanation, topic_tag)
            VALUES
            (:subj, :cn, :cname, :qn,
             :qtext, :oa, :ob, :oc, :od,
             :ans, :exp, :tag)
        """), {
            "subj": subject,
            "cn": cluster_num, "cname": cluster_name, "qn": i + 1,
            "qtext": row.text, "oa": opts[0], "ob": opts[1],
            "oc": opts[2], "od": opts[3], "ans": correct_ans,
            "exp": row.explanation or "Detailed explanation coming soon.",
            "tag": row.topic_tag or "General_History"
        })

def seed_history():
    try:
        with e.begin() as conn:
            print("--- Starting History Focused Seeding ---")
            conn.execute(text("DELETE FROM focused_questions WHERE subject ILIKE '%history%'"))
            used_ids = set()
            for cluster_num, cluster_name in ANCIENT_CLUSTERS:
                print(f"Seeding Ancient Cluster {cluster_num}: {cluster_name}...")
                ids_str = ",".join(map(str, used_ids)) if used_ids else "0"
                rows = conn.execute(text(f"""
                    SELECT id, text, options, correct_answer, explanation, topic_tag
                    FROM bank_questions
                    WHERE subject ILIKE '%ancient%'
                    AND id NOT IN ({ids_str})
                    ORDER BY RANDOM()
                    LIMIT 25
                """)).fetchall()
                insert_questions(conn, rows, "Ancient History", cluster_num, cluster_name)
                used_ids.update([row.id for row in rows])
                print(f"  Inserted {len(rows)} questions.")
            for cluster_num, cluster_name in MEDIEVAL_CLUSTERS:
                print(f"Seeding Medieval Cluster {cluster_num}: {cluster_name}...")
                ids_str = ",".join(map(str, used_ids)) if used_ids else "0"
                rows = conn.execute(text(f"""
                    SELECT id, text, options, correct_answer, explanation, topic_tag
                    FROM bank_questions
                    WHERE subject ILIKE '%medieval%'
                    AND id NOT IN ({ids_str})
                    ORDER BY RANDOM()
                    LIMIT 25
                """)).fetchall()
                insert_questions(conn, rows, "Medieval History", cluster_num, cluster_name)
                used_ids.update([row.id for row in rows])
                print(f"  Inserted {len(rows)} questions.")
            print("--- History Seeding Complete ---")
    except Exception as ex:
        print(f"Error: {ex}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    seed_history()
