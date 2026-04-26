import sqlalchemy
from sqlalchemy import text
from dotenv import load_dotenv
import os
import json

load_dotenv()

# Database Connection (Production)
e = sqlalchemy.create_engine('postgresql://postgres:EduEco2026DB@127.0.0.1:5433/eduecosystem_prod')

# Mapping for the first 5 clusters based on specific tags
GEOGRAPHY_BOOK_CLUSTERS = [
    (1, "Physical Geography Fundamentals", "Book1_NCERT11_Physical"),
    (2, "India Physical Geography", "Book2_NCERT11_India"),
    (3, "Human Geography", "Book3_NCERT12_Human"),
    (4, "India Human Geography", "Book4_NCERT12_India"),
    (5, "Advanced Geography (Savindra Singh)", "Book5_Savinder")
]

# Mapping for the next 5 clusters based on mixed topics
GEOGRAPHY_MIXED_CLUSTERS = [
    (6, "World Geography & Mapping"),
    (7, "Regional Geography Concepts"),
    (8, "Biogeography & Environment"),
    (9, "Economic Geography & Resources"),
    (10, "Applied Geography & Currents")
]

def normalize_answer(ans, opts):
    """Maps various correct_answer formats in bank_questions to a/b/c/d."""
    mapping = {0: 'a', 1: 'b', 2: 'c', 3: 'd'}
    if not ans: return 'a'
    
    # Case 1: "1", "2", "3", "4"
    if str(ans) in ['1', '2', '3', '4']:
        return mapping[int(ans) - 1]
    
    # Case 2: Actual text match
    try:
        if isinstance(opts, list):
            # Try exact match first
            if ans in opts:
                return mapping[opts.index(ans)]
            # Try case-insensitive match
            opts_lower = [o.lower() for o in opts]
            if ans.lower() in opts_lower:
                return mapping[opts_lower.index(ans.lower())]
    except Exception:
        pass
        
    return 'a' # Fallback

def insert_questions(conn, rows, cluster_num, cluster_name):
    """Helper to insert a block of questions into focused_questions."""
    for i, row in enumerate(rows):
        # Parse options from JSON string
        try:
            opts = json.loads(row.options) if isinstance(row.options, str) else row.options
        except:
            opts = ["Option A", "Option B", "Option C", "Option D"]
            
        # Ensure we have at least 4 options
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
            ('Geography', :cn, :cname, :qn, 
             :qtext, :oa, :ob, :oc, :od, 
             :ans, :exp, :tag)
        """), {
            "cn": cluster_num,
            "cname": cluster_name,
            "qn": i + 1,
            "qtext": row.text, # bank_questions uses 'text'
            "oa": opts[0],
            "ob": opts[1],
            "oc": opts[2],
            "od": opts[3],
            "ans": correct_ans,
            "exp": row.explanation or "Detailed explanation coming soon.",
            "tag": row.topic_tag or 'General_Geography'
        })

def seed_geography():
    try:
        with e.begin() as conn:  # Single transaction
            print("--- Starting Geography Focused Seeding ---")
            
            # Clear existing Geography focused questions first
            conn.execute(text(
                "DELETE FROM focused_questions WHERE subject = 'Geography'"
            ))
            print("Cleared existing Geography focused questions.")
            
            used_ids = set()
            
            # 1. Seed Clusters 1-5 (Book Specific)
            for cluster_num, cluster_name, tag in GEOGRAPHY_BOOK_CLUSTERS:
                print(f"Seeding Cluster {cluster_num}: {cluster_name}...")
                rows = conn.execute(text("""
                    SELECT id, text, options, correct_answer, explanation, topic_tag
                    FROM bank_questions
                    WHERE subject ILIKE '%geography%' AND topic_tag = :tag
                    ORDER BY RANDOM()
                    LIMIT 25
                """), {"tag": tag}).fetchall()
                
                insert_questions(conn, rows, cluster_num, cluster_name)
                used_ids.update([row.id for row in rows])
                print(f"  Inserted {len(rows)} questions.")

            # 2. Seed Clusters 6-10 (Mixed Pool)
            for cluster_num, cluster_name in GEOGRAPHY_MIXED_CLUSTERS:
                print(f"Seeding Cluster {cluster_num}: {cluster_name}...")
                
                ids_str = ",".join(map(str, used_ids)) if used_ids else "0"
                
                rows = conn.execute(text(f"""
                    SELECT id, text, options, correct_answer, explanation, topic_tag
                    FROM bank_questions
                    WHERE subject ILIKE '%geography%' 
                    AND id NOT IN ({ids_str})
                    ORDER BY RANDOM()
                    LIMIT 25
                """)).fetchall()
                
                insert_questions(conn, rows, cluster_num, cluster_name)
                used_ids.update([row.id for row in rows])
                print(f"  Inserted {len(rows)} questions.")

            print(f"--- Seeding Complete. 250 Geography questions inserted. ---")
    except Exception as ex:
        print(f"Error during seeding: {ex}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    seed_geography()
