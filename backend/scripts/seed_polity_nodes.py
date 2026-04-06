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

# 40 High-Yield Nodes for Polity (GS2)
POLITY_MODULES = [
    {"order": 0, "code": "P1", "title": "Constitutional Framework", "topics": [
        "Historical Background — Company and Crown Rule",
        "Making of the Constitution — Constituent Assembly",
        "Salient Features of the Indian Constitution",
        "Preamble of the Constitution — Keywords and Significance",
        "Union and its Territory — Article 1 to 4",
        "Citizenship — Constitutional Provisions and CAA 2019",
        "Fundamental Rights — Article 12 to 35",
        "DPSP and Fundamental Duties"
    ]},
    {"order": 1, "code": "P2", "title": "System of Government", "topics": [
        "Parliamentary vs Presidential System",
        "Federal System — Unitary and Federal Features",
        "Centre-State Relations — Legislative, Administrative, Financial",
        "Inter-State Relations — Water Disputes and Zonal Councils",
        "Emergency Provisions — Article 352, 356, 360",
        "Amendment of the Constitution — Article 368",
        "Basic Structure Doctrine — Kesavananda Bharati Case",
        "Constitutionalism and Rule of Law"
    ]},
    {"order": 2, "code": "P3", "title": "Central Government", "topics": [
        "President of India — Election, Powers and Impeachment",
        "Vice-President — Election and Functions",
        "Prime Minister and Council of Ministers",
        "Parliament — Rajya Sabha and Lok Sabha Structure",
        "Parliamentary Committees and Procedures",
        "Supreme Court — Jurisdiction and Judicial Review",
        "Judicial Activism and PIL",
        "Cabinet Committees and Secretariat"
    ]},
    {"order": 3, "code": "P4", "title": "State and Local Government", "topics": [
        "Governor — Appointment and Discretionary Powers",
        "Chief Minister and State Council of Ministers",
        "State Legislature — Composition and Powers",
        "High Courts and Subordinate Courts",
        "Panchayati Raj — 73rd Amendment Act",
        "Urban Local Bodies — 74th Amendment Act",
        "Special Provisions for some States (Art 371)",
        "Scheduled and Tribal Areas (5th and 6th Schedule)"
    ]},
    {"order": 4, "code": "P5", "title": "Constitutional & Non-Constitutional Bodies", "topics": [
        "Election Commission of India (ECI)",
        "UPSC and State PSCs",
        "Finance Commission (FC)",
        "CAG — Guardian of Public Purse",
        "Attorney General and Solicitor General",
        "NITI Aayog — Structure and Objectives",
        "National Human Rights Commission (NHRC)",
        "Central Information Commission (CIC) and Lokpal"
    ]}
]

def run_seeding():
    log.info(f"🏛️ Starting Polity Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        # Find Polity Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug = 'polity' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ Polity course not found.")
            return
        course_id = course[0]

        total_topics = 0
        for m_idx, m_data in enumerate(POLITY_MODULES):
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
                    {"t": m_data["title"], "d": f"Polity Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"POL_{m_data['code']}_T{t_idx+1}"
                relevance_json = json.dumps({"UPSC": "high", "GS2": "core"})
                
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
                            VALUES (:nid, 'polity', :mid, :name, :relevance, 'FOUNDATION')
                        """),
                        {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                    )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} Polity topics.")

if __name__ == "__main__":
    run_seeding()
