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

# 24 High-Yield Nodes for Disaster Management (GS3)
DISASTER_MODULES = [
    {"order": 0, "code": "DM1", "title": "Foundations of Disaster Management", "topics": [
        "Hazard, Risk, Vulnerability and Disaster — Definition and Lifecycle",
        "Disaster Management Act 2005 — Institutional Framework",
        "NDMA, SDMA, and DDMA — Roles and Responsibilities",
        "National Policy on Disaster Management 2009",
        "Sendai Framework for Disaster Risk Reduction (2015-2030)",
        "Early Warning Systems and Community Based DM",
        "Disaster Resilient Infrastructure (CDRI)",
        "Capacity Building and Role of NDRF"
    ]},
    {"order": 1, "code": "DM2", "title": "Geological Disasters", "topics": [
        "Earthquakes — Seismic Zoning and Mitigation Strategies",
        "Landslides — Susceptibility Mapping and Control Measures",
        "Tsunami — Mechanism and India's Warning System",
        "Volcanic Eruptions — Monitoring and Safety Protocols",
        "Dam Bursts and Glacial Lake Outburst Floods (GLOF)",
        "Mining Disasters and Safety Regulations",
        "Urban Planning and Seismic Safety",
        "Post-Disaster Reconstruction and Rehabilitation"
    ]},
    {"order": 2, "code": "DM3", "title": "Hydrometeorological & Other Disasters", "topics": [
        "Floods — Flood Plain Zoning and Management",
        "Cyclones — Warning and Coastal Zone Management",
        "Droughts — Types (Meteorological, Agri, Hydro) and Mitigation",
        "Heat Waves and Cold Waves — Changing Trends",
        "Forest Fires — Causes and Control Mechanisms",
        "Biological Disasters — Epidemics and CBRN Threats",
        "Chemical and Industrial Disasters — Bhopal gas tragedy lessons",
        "Cyber Disasters and Critical Infrastructure Risk"
    ]}
]

def run_seeding():
    log.info(f"🚨 Starting Disaster Management Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        # Find Disaster Management Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug = 'disaster-mgmt' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ Disaster Management course not found.")
            return
        course_id = course[0]

        total_topics = 0
        for m_idx, m_data in enumerate(DISASTER_MODULES):
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
                    {"t": m_data["title"], "d": f"Disaster Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"DIS_{m_data['code']}_T{t_idx+1}"
                relevance_json = json.dumps({"UPSC": "medium", "GS3": "core"})
                
                # Check for existing node (might be in environment)
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
                            VALUES (:nid, 'disaster-mgmt', :mid, :name, :relevance, 'FOUNDATION')
                        """),
                        {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                    )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} Disaster topics.")

if __name__ == "__main__":
    run_seeding()
