import sys, os, json, re
from pathlib import Path
from sqlalchemy import create_engine, text

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_ROOT))

from app.core.config import settings

def extract_from_db():
    engine = create_engine(str(settings.DATABASE_URL))
    with engine.connect() as conn:
        rows = conn.execute(text("SELECT node_id, node_name, node_description, subject_slug, difficulty_level FROM concept_nodes")).fetchall()
        return [
            {
                "node_id": r[0],
                "name": r[1],
                "description": r[2] or "",
                "subject": r[3],
                "difficulty": r[4],
                "source": "database"
            } for r in rows
        ]

def extract_from_scripts():
    # Identify key seeder scripts
    scripts = ["backend/startup_tables.py", "backend/migrate_concept_tagging.py"]
    found = []
    
    # Simple regex for node_id detection in strings
    # e.g., "ENV_N001", "GEO_001"
    pattern = re.compile(r"(['\"])([A-Z]{2,4}_[A-Z0-9_]+)\1")
    
    for s in scripts:
        full_path = BACKEND_ROOT.parent / s
        if not full_path.exists(): continue
        
        content = open(full_path).read()
        matches = pattern.findall(content)
        for _, node_id in matches:
            found.append({"node_id": node_id, "source": s})
            
    return found

def run():
    print("🚀 Extracting Unified Concept Registry...")
    db_nodes = extract_from_db()
    script_nodes = extract_from_scripts()
    
    combined = {
        "db_count": len(db_nodes),
        "script_mentions": len(script_nodes),
        "data": db_nodes
    }
    
    output_path = BACKEND_ROOT / "scripts" / "registry_extract.json"
    with open(output_path, 'w') as f:
        json.dump(combined, f, indent=4)
        
    print(f"✅ Extracted {len(db_nodes)} nodes to {output_path}")

if __name__ == "__main__":
    run()
