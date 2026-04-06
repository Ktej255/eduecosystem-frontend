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

# 32 High-Yield Nodes for Agriculture (GS3)
AGRICULTURE_MODULES = [
    {"order": 0, "code": "A1", "title": "Cropping Patterns & Soils", "topics": [
        "Major Cropping Patterns in various parts of the country",
        "Kharif, Rabi and Zaid Seasons — Logic and Distribution",
        "Soil Health Card Scheme and Nutrient Management",
        "Sustainable Agriculture — Natural and Organic Farming",
        "Dryland Farming Trends in India",
        "Precision Farming and Role of Technology",
        "Horticulture — Status and Challenges",
        "Livestock and Mixed Farming Systems"
    ]},
    {"order": 1, "code": "A2", "title": "Irrigation & Water Management", "topics": [
        "Different Types of Irrigation Systems in India",
        "Micro-Irrigation — Drip and Sprinkler efficiency",
        "PMKSY — Per Drop More Crop initiative",
        "Groundwater Over-exploitation in Agri-belts",
        "Water Productivity and Virtual Water Trade",
        "Canal Irrigation vs Well Irrigation Dynamics",
        "Inter-linking of Rivers for Agriculture",
        "Watershed Management and Tank Irrigation"
    ]},
    {"order": 2, "code": "A3", "title": "Farm Subsidies & Economics", "topics": [
        "Direct and Indirect Farm Subsidies — Issues and WTO",
        "Minimum Support Price (MSP) — Logic and Swaminathan Report",
        "Public Distribution System (PDS) — Objectives and Reforms",
        "TPDS and One Nation One Ration Card (ONORC)",
        "Buffer Stocks and Food Security Buffer Norms",
        "FCI — Reorganization and Challenges",
        "Agriculture Marketing — APMC Acts and e-NAM",
        "Contract Farming and FPO (Farmer Producer Organisations)"
    ]},
    {"order": 3, "code": "A4", "title": "Food Processing & Logistics", "topics": [
        "Food Processing Industry — Scope and Significance",
        "Supply Chain Management in Agriculture",
        "Upstream and Downstream Requirements",
        "PM Kisan SAMPADA Yojana and Mega Food Parks",
        "Cold Storage Infrastructure and Food Wastage",
        "Livestock processing and Agri-Exports",
        "Agri-Logistics and Kisan Rail",
        "Quality Standards and Agri-Food Safety"
    ]}
]

def run_seeding():
    log.info(f"🌾 Starting Agriculture Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        # Find Agriculture Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug = 'agriculture' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ Agriculture course not found.")
            return
        course_id = course[0]

        total_topics = 0
        for m_idx, m_data in enumerate(AGRICULTURE_MODULES):
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
                    {"t": m_data["title"], "d": f"Agriculture Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"AGR_{m_data['code']}_T{t_idx+1}"
                relevance_json = json.dumps({"UPSC": "high", "GS3": "core"})
                
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
                            VALUES (:nid, 'agriculture', :mid, :name, :relevance, 'FOUNDATION')
                        """),
                        {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                    )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} Agriculture topics.")

if __name__ == "__main__":
    run_seeding()
