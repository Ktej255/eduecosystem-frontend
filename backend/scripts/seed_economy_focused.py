import sqlalchemy
from sqlalchemy import text
import json

e = sqlalchemy.create_engine('postgresql://postgres:EduEco2026DB@127.0.0.1:5433/eduecosystem_prod')

ECONOMY_CLUSTERS = [
    (1, "Basic Economics & National Income"),
    (2, "Money, Banking & RBI"),
    (3, "Fiscal Policy & Government Budget"),
    (4, "Inflation, Poverty & Unemployment"),
    (5, "Agriculture & Rural Economy"),
    (6, "Industry & Infrastructure"),
    (7, "Trade & Balance of Payments"),
    (8, "International Institutions & Trade Bodies"),
    (9, "Economic Reforms & Liberalisation"),
    (10, "Current Economic Affairs"),
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

def insert_questions(conn, rows, cluster_num, cluster_name):
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
            ('Economy', :cn, :cname, :qn,
             :qtext, :oa, :ob, :oc, :od,
             :ans, :exp, :tag)
        """), {
            "cn": cluster_num, "cname": cluster_name, "qn": i + 1,
            "qtext": row.text, "oa": opts[0], "ob": opts[1],
            "oc": opts[2], "od": opts[3], "ans": correct_ans,
            "exp": row.explanation or "Detailed explanation coming soon.",
            "tag": row.topic_tag or "General_Economy"
        })

def seed_economy():
    try:
        with e.begin() as conn:
            print("--- Starting Economy Focused Seeding ---")
            conn.execute(text("DELETE FROM focused_questions WHERE subject = 'Economy'"))
            used_ids = set()
            for cluster_num, cluster_name in ECONOMY_CLUSTERS:
                print(f"Seeding Cluster {cluster_num}: {cluster_name}...")
                ids_str = ",".join(map(str, used_ids)) if used_ids else "0"
                rows = conn.execute(text(f"""
                    SELECT id, text, options, correct_answer, explanation, topic_tag
                    FROM bank_questions
                    WHERE subject ILIKE '%economy%'
                    AND id NOT IN ({ids_str})
                    ORDER BY RANDOM()
                    LIMIT 25
                """)).fetchall()
                insert_questions(conn, rows, cluster_num, cluster_name)
                used_ids.update([row.id for row in rows])
                print(f"  Inserted {len(rows)} questions.")
            print("--- Economy Seeding Complete ---")
    except Exception as ex:
        print(f"Error: {ex}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    seed_economy()
