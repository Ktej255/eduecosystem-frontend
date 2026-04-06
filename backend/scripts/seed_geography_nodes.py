# -*- coding: utf-8 -*-
import os, sys, json, logging
from datetime import datetime
from pathlib import Path

# Setup Path
BACKEND_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_DIR))

# Explicitly load .env from backend directory before importing settings
import dotenv
dotenv.load_dotenv(str(BACKEND_DIR / ".env"))

from sqlalchemy import create_engine, text
from app.core.config import settings

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
log = logging.getLogger(__name__)

engine = create_engine(str(settings.DATABASE_URL))

# 150 Nodes Mapping for Geography (GS1)
GEOGRAPHY_MODULES = [
    {"order": 0, "code": "G0", "title": "Fundamentals of Physical Geography", "topics": [
        "Origin and Evolution of Earth",
        "Interior of the Earth — Direct and Indirect Sources",
        "Distribution of Oceans and Continents — Wegener's Theory",
        "Post-Drift Studies — Sea Floor Spreading",
        "Plate Tectonics — Boundaries and Interactions",
        "Weathering and Mass Movements",
        "Geomorphic Processes — Endogenic and Exogenic",
        "Landforms and their Evolution"
    ]},
    {"order": 1, "code": "G1", "title": "Climatology — The Atmosphere System", "topics": [
        "Composition and Structure of Atmosphere",
        "Solar Radiation and Heat Budget",
        "Atmospheric Circulation — General Circulation",
        "Planetary Winds and Local Winds",
        "Airmasses, Fronts and Cyclones",
        "Tropical vs Temperate Cyclones",
        "Precipitation and Humidity types",
        "World Climate — Koeppen's Classification"
    ]},
    {"order": 2, "code": "G2", "title": "Oceanography — The Hydro-System", "topics": [
        "Relief of Ocean Floor",
        "Temperature and Salinity Distribution",
        "Ocean Water Movements — Tides and Currents",
        "Coral Reefs — Formation and Bleaching",
        "Marine Resources — Biotic and Abiotic",
        "Law of the Sea (UNCLOS)"
    ]},
    {"order": 3, "code": "G3", "title": "Economic and Human Geography", "topics": [
        "Distribution of Key Natural Resources",
        "Location of Primary, Secondary and Tertiary Industries",
        "Population Distribution and Density",
        "Migration — Types, Causes and Consequences",
        "Settlement Patterns — Rural and Urban",
        "Urbanization Problems and Remedies"
    ]},
    {"order": 4, "code": "G4", "title": "India's Physical Environment", "topics": [
        "Geological Structure of India",
        "Physiographic Divisions — Himalayas, Northern Plains",
        "Peninsular Plateau and Coastal Plains",
        "Drainage System — Himalayan vs Peninsular Rivers",
        "Climate — Indian Monsoon Mechanism",
        "El Nino, La Nina and Southern Oscillation (ENSO)",
        "Natural Vegetation of India",
        "Soils of India — Classification and Problems"
    ]},
    {"order": 5, "code": "G5", "title": "Indian Resource & Agriculture Geography", "topics": [
        "Mineral Resources — Coal, Petroleum, Metallic Minerals",
        "Energy Resources — Conventional and Nuclear",
        "Irrigation Systems and Water Resource Development",
        "Cropping Patterns and Major Crops",
        "Green Revolution and Sustainable Agriculture",
        "Logistics and Food Processing Infrastructure"
    ]}
]

def run_seeding():
    log.info(f"🌍 Starting Geography Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        # Find Geography Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug LIKE '%geography%' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ Geography course not found.")
            return
        course_id = course[0]

        total_topics = 0
        for m_idx, m_data in enumerate(GEOGRAPHY_MODULES):
            # Upsert Module
            mod_row = conn.execute(
                text("SELECT id FROM modules WHERE title = :t AND course_id = :cid"),
                {"t": m_data["title"], "cid": course_id}
            ).fetchone()
            
            if mod_row:
                module_id = mod_row[0]
                conn.execute(text("UPDATE modules SET order_index = :idx WHERE id = :mid"), {"idx": m_idx, "mid": module_id})
            else:
                conn.execute(
                    text("INSERT INTO modules (title, description, course_id, order_index) VALUES (:t, :d, :cid, :idx)"),
                    {"t": m_data["title"], "d": f"Geography Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"GEO_{m_data['code']}_T{t_idx+1}"
                relevance_json = json.dumps({"UPSC": "high", "GS1": "core"})
                
                # Check for existing node
                existing = conn.execute(
                    text("SELECT id FROM concept_nodes WHERE node_id = :nid"),
                    {"nid": node_id}
                ).fetchone()
                
                if existing:
                    conn.execute(
                        text("""
                            UPDATE concept_nodes 
                            SET node_name = :name, module_id = :mid, difficulty_level = 'FOUNDATION'
                            WHERE node_id = :nid
                        """),
                        {"name": topic_name, "mid": module_id, "nid": node_id}
                    )
                else:
                    conn.execute(
                        text("""
                            INSERT INTO concept_nodes 
                            (node_id, subject_slug, module_id, node_name, exam_relevance, difficulty_level)
                            VALUES (:nid, 'geography', :mid, :name, :relevance, 'FOUNDATION')
                        """),
                        {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                    )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} Geography topics.")

if __name__ == "__main__":
    run_seeding()
