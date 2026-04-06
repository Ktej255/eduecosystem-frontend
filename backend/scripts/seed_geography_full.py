import sys
import os
import json
from sqlalchemy import text

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import SessionLocal

SUBJECT_SLUG = "geography"

# Comprehensive Geography Modules (NCERT 11th/12th + Savinder Singh)
GEOGRAPHY_CURRICULUM = [
    {"mid": 1,  "name": "Fundamentals of Physical Geography", "ch": "Nature and Scope"},
    {"mid": 2,  "name": "Geomorphology", "ch": "Interior of Earth & Plate Tectonics"},
    {"mid": 3,  "name": "Landforms", "ch": "Fluvial, Eolian, Glacial Processes"},
    {"mid": 4,  "name": "Climatology", "ch": "Atmospheric Composition & Solar Radiation"},
    {"mid": 5,  "name": "Hydrology", "ch": "Oceans, Currents & Tides"},
    {"mid": 6,  "name": "Biogeography", "ch": "Life on Earth & Biodiversity"},
    {"mid": 7,  "name": "Indian Physical Environment", "ch": "Location & Structure"},
    {"mid": 8,  "name": "Physiography of India", "ch": "Himalayas, Plains & Plateaus"},
    {"mid": 9,  "name": "Climate of India", "ch": "Monsoon Mechanisms & Seasons"},
    {"mid": 10, "name": "Natural Vegetation & Soils", "ch": "Forest Types & Soil Taxonomy"},
    {"mid": 11, "name": "Natural Hazards in India", "ch": "Floods, Droughts & Landslides"},
    {"mid": 12, "name": "Human Geography Fundamentals", "ch": "Population & Settlements"},
    {"mid": 13, "name": "Primary & Secondary Activities", "ch": "Agriculture & Industry"},
    {"mid": 14, "name": "Transport & Communication", "ch": "Global Networks"},
    {"mid": 15, "name": "Regional Geography & Maps", "ch": "Mapping India and World"},
    {"mid": 16, "name": "NCERT 6th: Earth in Solar System", "ch": "Planetary Basics"},
    {"mid": 17, "name": "NCERT 6th: Globe & Latitudes", "ch": "Spatial Orientation"},
    {"mid": 18, "name": "NCERT 7th: Environment & Interior", "ch": "Lithosphere Basics"},
    {"mid": 19, "name": "NCERT 7th: Air & Water", "ch": "Atmosphere/Hydrosphere Basics"},
    {"mid": 20, "name": "NCERT 8th: Resources & Development", "ch": "Economic Foundations"},
    {"mid": 21, "name": "NCERT 9th: India Size & Location", "ch": "National Boundaries"},
    {"mid": 22, "name": "NCERT 9th: Drainage Systems", "ch": "River Networks"},
    {"mid": 23, "name": "NCERT 10th: Forest & Wildlife", "ch": "Conservation Basics"},
    {"mid": 24, "name": "NCERT 10th: Agriculture & Minerals", "ch": "Resource Mapping"},
    {"mid": 25, "name": "NCERT 10th: Lifelines of Economy", "ch": "Infrastructure"}
]

DIMENSIONS = {
    "CORE": "Core Concepts & Definitions",
    "SPATIAL": "Spatial Distribution & Patterns",
    "PROCESS": "Geographical Processes & Mechanics",
    "IMP": "Impact, Applications & Case Studies",
    "UPSC": "UPSC Exam Application & PYQ Focus"
}

def seed_geography_nodes():
    db = SessionLocal()
    print("🌍 Starting Global Geography Curriculum Seeding (300+ Nodes)...")

    # Clear existing Geography nodes to ensure clean saturation
    db.execute(text("DELETE FROM concept_nodes WHERE subject_slug='geography'"))

    nodes_inserted = 0

    for mod in GEOGRAPHY_CURRICULUM:
        mid = mod["mid"]
        m_name = mod["name"]
        m_desc = mod["ch"]
        
        print(f"📦 Seeding Module {mid}: {m_name}...")
        
        # We generate roughly 5-7 nodes per module using dimensions
        for d_idx, (dim_key, dim_name) in enumerate(DIMENSIONS.items()):
            node_id = f"GEO_M{mid:02d}_{dim_key}"
            node_name = f"{m_name} | {dim_name}"
            node_description = f"{dim_name} focus for {m_name}: {m_desc}."
            
            # 1. Prerequisite Logic (Chain within module)
            dependencies = []
            if d_idx > 0:
                prev_dim_key = list(DIMENSIONS.keys())[d_idx - 1]
                dependencies.append(f"GEO_M{mid:02d}_{prev_dim_key}")
            elif mid > 1:
                # Link to previous module's completion
                last_dim_key = list(DIMENSIONS.keys())[-1]
                dependencies.append(f"GEO_M{(mid-1):02d}_{last_dim_key}")
            
            # 2. Add some "Global Synapses" (Context Bridges from Implementation Plan)
            context_nodes = []
            if mid == 6: # Biogeography -> Environment
                context_nodes.append("ENV_M01_ECO_STRUC")
            if mid == 15 and dim_key == "SPATIAL": # Maps -> History
                context_nodes.append("HIS_MOD_CH25_GEOP") # Link to Partition Mapping
            if mid == 2: # Geomorphology -> Physical Environment
                context_nodes.append("ENV_M00_SYSTEMS")

            # Difficulty Scaling
            if dim_key == "UPSC":
                difficulty_level = "ADVANCED"
                relevance = 9.0
            elif dim_key == "PROCESS":
                difficulty_level = "UPSC_OVERLAY"
                relevance = 7.5
            else:
                difficulty_level = "FOUNDATION"
                relevance = 6.0

            node_data = {
                "nid": node_id,
                "name": node_name,
                "desc": node_description,
                "slug": SUBJECT_SLUG,
                "mid": mid,
                "diff": difficulty_level,
                "rel": json.dumps({"UPSC": relevance}),
                "pre": json.dumps(dependencies),
                "ctx": json.dumps(context_nodes)
            }

            db.execute(text("""
                INSERT INTO concept_nodes (
                    node_id, node_name, node_description, subject_slug, module_id, 
                    difficulty_level, exam_relevance, prerequisite_nodes, context_nodes
                ) VALUES (:nid, :name, :desc, :slug, :mid, :diff, :rel, :pre, :ctx)
            """), node_data)
            
            nodes_inserted += 1

    db.commit()
    db.close()
    print(f"✅ Geography Subject Saturated: {nodes_inserted} nodes injected.")

if __name__ == "__main__":
    seed_geography_nodes()
