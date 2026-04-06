import os
import sys
from sqlalchemy import text
from sqlalchemy.orm import Session

# Add paths
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.db.session import SessionLocal

def heuristic_audit():
    db = SessionLocal()
    try:
        print("Starting Heuristic Knowledge Graph Audit...")
        
        # 1. Fetch all nodes
        nodes = db.execute(text("""
            SELECT node_name, subject_slug, node_id 
            FROM concept_nodes
        """)).fetchall()
        
        print(f"Analyzing {len(nodes)} nodes for exact name duplicates...")
        
        # 2. Find Exact Name Duplicates across subjects
        name_map = {}
        duplicates = []
        
        for name, subject, nid in nodes:
            name_lower = name.strip().lower()
            if name_lower not in name_map:
                name_map[name_lower] = []
            name_map[name_lower].append({"subject": subject, "id": nid, "name": name})
            
        for name, Occurrences in name_map.items():
            if len(Occurrences) > 1:
                duplicates.append({
                    "name": Occurrences[0]["name"],
                    "Occurrences": Occurrences
                })
        
        print(f"Found {len(duplicates)} exact name duplicates across subjects.")
        
        # 3. Output Report
        report_path = "backend/scripts/heuristic_audit_summary.md"
        with open(report_path, "w", encoding="utf-8") as f:
            f.write("# Heuristic Knowledge Graph Audit\n\n")
            f.write(f"**Total Nodes:** {len(nodes)}\n")
            f.write(f"**Exact Duplicates:** {len(duplicates)}\n\n")
            
            if duplicates:
                f.write("## ⚠️ Exact Name Overlaps (Immediate Action Required)\n")
                f.write("| Concept Name | Subjects | IDs |\n")
                f.write("| :--- | :--- | :--- |\n")
                for d in duplicates:
                    subjects = ", ".join([o["subject"] for o in d["Occurrences"]])
                    ids = ", ".join([o["id"] for o in d["Occurrences"]])
                    f.write(f"| {d['name']} | {subjects} | {ids} |\n")
            
            f.write("\n## 🗺️ Subject Boundaries (Proposals)\n")
            f.write("1. **Geography vs Environment**: Geography covers Physical features (Climatic Zones, Soils); Environment covers Ecological impact and Conservation.\n")
            f.write("2. **Economy vs Social Issues**: Economy covers Metrics and Schemes (GDP, Banking); Social Issues covers Societal Impact (Poverty, Gender).\n")
            f.write("3. **Science vs Agriculture**: Science covers Theoretic Tech (Biotech, Nano); Agriculture covers Applied Farming (Irrigation, Crops).\n")

        print(f"Heuristic Audit Complete! Summary saved to {report_path}")
        
    except Exception as e:
        print(f"Audit Failed: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    heuristic_audit()
