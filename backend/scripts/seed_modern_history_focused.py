import sqlalchemy
from sqlalchemy import text
import json

e = sqlalchemy.create_engine('postgresql://postgres:EduEco2026DB@127.0.0.1:5433/eduecosystem_prod')

MODERN_CLUSTERS = [
    (1, "British Conquest & Early Resistance"),
    (2, "Social & Religious Reform Movements"),
    (3, "Rise of Indian Nationalism"),
    (4, "Gandhi & Mass Movements"),
    (5, "Partition, Independence & Constitution"),
    (6, "Revolutionary & Militant Nationalism"),
    (7, "Peasant & Tribal Movements"),
    (8, "Press, Education & Cultural Awakening"),
    (9, "Governor Generals & Viceroys"),
    (10, "Post Independence India"),
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
            ('Modern History', :cn, :cname, :qn,
             :qtext, :oa, :ob, :oc, :od,
             :ans, :exp, :tag)
        """), {
            "cn": cluster_num, "cname": cluster_name, "qn": i + 1,
            "qtext": row.text, "oa": opts[0], "ob": opts[1],
            "oc": opts[2], "od": opts[3], "ans": correct_ans,
            "exp": row.explanation or "Detailed explanation coming soon.",
            "tag": row.topic_tag or "General_Modern_History"
        })

def seed_modern_history():
    try:
        with e.begin() as conn:
            print("--- Starting Modern History Focused Seeding ---")
            conn.execute(text("DELETE FROM focused_questions WHERE subject = 'Modern History'"))
            used_ids = set()
            for cluster_num, cluster_name in MODERN_CLUSTERS:
                print(f"Seeding Cluster {cluster_num}: {cluster_name}...")
                ids_str = ",".join(map(str, used_ids)) if used_ids else "0"
                rows = conn.execute(text(f"""
                    SELECT id, text, options, correct_answer, explanation, topic_tag
                    FROM bank_questions
                    WHERE subject ILIKE '%modern%'
                    AND id NOT IN ({ids_str})
                    ORDER BY RANDOM()
                    LIMIT 25
                """)).fetchall()
                insert_questions(conn, rows, cluster_num, cluster_name)
                used_ids.update([row.id for row in rows])
                print(f"  Inserted {len(rows)} questions.")
            print("--- Modern History Seeding Complete ---")
    except Exception as ex:
        print(f"Error: {ex}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    seed_modern_history()
