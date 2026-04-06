import sys
import os
import json
from sqlalchemy import text

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import SessionLocal

SUBJECT_SLUG = "history"

# Granular 39-Chapter Breakdown from Spectrum
SPECTRUM_CHAPTERS = [
    {"id": 1,  "unit": "UNIT 1", "title": "Sources for the History of Modern India"},
    {"id": 2,  "unit": "UNIT 1", "title": "Major Approaches to the History of Modern India"},
    {"id": 3,  "unit": "UNIT 2", "title": "Advent of the Europeans in India"},
    {"id": 4,  "unit": "UNIT 2", "title": "India on the Eve of British Conquest"},
    {"id": 5,  "unit": "UNIT 2", "title": "Expansion and Consolidation of British Power in India"},
    {"id": 6,  "unit": "UNIT 3", "title": "People’s Resistance Against British Before 1857"},
    {"id": 7,  "unit": "UNIT 3", "title": "The Revolt of 1857"},
    {"id": 8,  "unit": "UNIT 4", "title": "Socio-Religious Reform Movements: General Features"},
    {"id": 9,  "unit": "UNIT 4", "title": "A General Survey of Socio-Cultural Reform Movements"},
    {"id": 10, "unit": "UNIT 5", "title": "Beginning of Modern Nationalism in India"},
    {"id": 11, "unit": "UNIT 5", "title": "Indian National Congress: Foundation and Moderate Phase"},
    {"id": 12, "unit": "UNIT 6", "title": "Era of Militant Nationalism (1905–1909)"},
    {"id": 13, "unit": "UNIT 6", "title": "First Phase of Revolutionary Activities (1907–1917)"},
    {"id": 14, "unit": "UNIT 6", "title": "First World War and Nationalist Response"},
    {"id": 15, "unit": "UNIT 7", "title": "Emergence of Gandhi"},
    {"id": 16, "unit": "UNIT 7", "title": "Non-Cooperation Movement and Khilafat Aandolan"},
    {"id": 17, "unit": "UNIT 7", "title": "Emergence of Swarajists, Socialists, and New Forces"},
    {"id": 18, "unit": "UNIT 7", "title": "Simon Commission and the Nehru Report"},
    {"id": 19, "unit": "UNIT 7", "title": "Civil Disobedience Movement and Round Table Conferences"},
    {"id": 20, "unit": "UNIT 7", "title": "Debates on Future Strategy after CDM"},
    {"id": 21, "unit": "UNIT 7", "title": "Congress Rule in Provinces"},
    {"id": 22, "unit": "UNIT 8", "title": "Nationalist Response in Wake of World War II"},
    {"id": 23, "unit": "UNIT 8", "title": "Quit India Movement, Demand for Pakistan, and INA"},
    {"id": 24, "unit": "UNIT 8", "title": "Post-War National Scenario"},
    {"id": 25, "unit": "UNIT 8", "title": "Independence with Partition"},
    {"id": 26, "unit": "UNIT 9", "title": "Constitutional, Administrative, and Judicial Developments"},
    {"id": 27, "unit": "UNIT 9", "title": "Survey of British Policies in India"},
    {"id": 28, "unit": "UNIT 9", "title": "Economic Impact of British Rule in India"},
    {"id": 29, "unit": "UNIT 9", "title": "Development of Indian Press"},
    {"id": 30, "unit": "UNIT 9", "title": "Development of Education"},
    {"id": 31, "unit": "UNIT 9", "title": "Peasant Movements 1857–1947"},
    {"id": 32, "unit": "UNIT 9", "title": "The Movement of the Working Class"},
    {"id": 33, "unit": "UNIT 10", "title": "Challenges before the Newborn Nation"},
    {"id": 34, "unit": "UNIT 10", "title": "The Indian States"},
    {"id": 35, "unit": "UNIT 10", "title": "Making of the Constitution for India"},
    {"id": 36, "unit": "UNIT 10", "title": "The Evolution of Nationalist Foreign Policy"},
    {"id": 37, "unit": "UNIT 10", "title": "First General Elections"},
    {"id": 38, "unit": "UNIT 10", "title": "Developments under Nehru’s Leadership (1947–64)"},
    {"id": 39, "unit": "UNIT 10", "title": "After Nehru"}
]

DIMENSIONS = {
    "CHRONO": "Chronology & Timeline Dynamics",
    "PERS": "Key Personalities & Organizations",
    "CORE": "Core Events & Administrative Mechanics",
    "HSTR": "Historiography & Debates",
    "GEOP": "Geopolitical & Regional Contexts",
    "IMP": "Impact & Long-term Consequences",
    "UPSC": "UPSC Application & PYQ Intersection"
}

def seed_modern_history_nodes():
    db = SessionLocal()
    print("🚀 Starting Modern History Curriculum Seeding...")

    # Clear ONLY Modern History nodes to protect Ancient/Medieval data
    db.execute(text("DELETE FROM concept_nodes WHERE subject_slug='history' AND node_id LIKE 'HIS_MOD_%'"))

    nodes_inserted = 0

    for chapter in SPECTRUM_CHAPTERS:
        ch_id = chapter["id"]
        unit = chapter["unit"]
        title = chapter["title"]
        unit_num = int(unit.split(" ")[1])
        
        for d_idx, (dim_key, dim_name) in enumerate(DIMENSIONS.items()):
            node_id = f"HIS_MOD_CH{ch_id:02d}_{dim_key}"
            node_name = f"Ch {ch_id}: {title} | {dim_name}"
            
            # 1. Linear internal dependencies
            dependencies = []
            if d_idx > 0:
                prev_dim_key = list(DIMENSIONS.keys())[d_idx - 1]
                dependencies.append(f"HIS_MOD_CH{ch_id:02d}_{prev_dim_key}")
            elif ch_id > 1:
                last_dim_key = list(DIMENSIONS.keys())[-1]
                dependencies.append(f"HIS_MOD_CH{(ch_id-1):02d}_{last_dim_key}")
            
            # 2. Add some cross-subject synapses (Contextual bridges)
            if "Partition" in title and dim_key == "GEOP":
                dependencies.append("GEO_M09_PEARLS_GEO")
            if "1857" in title and dim_key == "GEOP":
                dependencies.append("GEO_M01_PHY_T1_SPATIAL")

            # Scoring
            difficulty_score = 2.5 if dim_key in ["UPSC", "HSTR", "IMP"] else 1.8
            relevance_score = 9.0 if unit_num in [6, 7, 8] else 6.0

            if difficulty_score >= 2.5:
                difficulty_level = "ADVANCED"
            elif difficulty_score >= 1.8:
                difficulty_level = "UPSC_OVERLAY"
            else:
                difficulty_level = "FOUNDATION"

            # Insert node
            node_data = {
                "nid": node_id,
                "name": node_name,
                "slug": SUBJECT_SLUG,
                "mid": unit_num,
                "diff": difficulty_level,
                "rel": json.dumps({"UPSC": relevance_score}),
                "pre": json.dumps(dependencies),
                "ctx": json.dumps([])
            }

            db.execute(text("""
                INSERT INTO concept_nodes (
                    node_id, node_name, subject_slug, module_id, 
                    difficulty_level, exam_relevance, prerequisite_nodes, context_nodes
                ) VALUES (:nid, :name, :slug, :mid, :diff, :rel, :pre, :ctx)
            """), node_data)
            
            nodes_inserted += 1

    db.commit()
    db.close()
    print(f"✅ Successfully injected {nodes_inserted} Modern History Nodes.")

if __name__ == "__main__":
    seed_modern_history_nodes()
