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

# 40 High-Yield Nodes for Science & Tech (GS3)
SCIENCE_MODULES = [
    {"order": 0, "code": "S1", "title": "Space Technology", "topics": [
        "Orbits — LEO, MEO, GEO, HEO and Lagrange Points",
        "ISRO Launch Vehicles — PSLV, GSLV, LVM3 and SSLV",
        "Indian Space Missions — Chandrayaan, Mangalyaan, Gaganyaan",
        "Satellites Classification — Communication, Remote Sensing",
        "Navigation Systems — GPS vs NavIC (IRNSS)",
        "Space Stations and Deep Space Exploration",
        "Space Debris and Kesslar Syndrome",
        "Private Sector in Space — NewSpace India Ltd (NSIL)"
    ]},
    {"order": 1, "code": "S2", "title": "Defense Technology", "topics": [
        "Missile Systems — Ballistic vs Cruise (Agni, BrahMos)",
        "Integrated Guided Missile Development Programme (IGMDP)",
        "Indian Navy — Submarines (Scorpene, Arihant) and Aircraft Carriers",
        "Indian Air Force — Stealth Tech and indigenous LCA Tejas",
        "Defense Reforms — Chief of Defence Staff (CDS) and Theater Commands",
        "Chemical, Biological, Radiological, and Nuclear (CBRN) Defense",
        "DRDO Projects and Indigenization of Defense",
        "Hypersonic Technology and Directed Energy Weapons (DEWs)"
    ]},
    {"order": 2, "code": "S3", "title": "Biotechnology & Health", "topics": [
        "DNA and RNA — Structure and Functions",
        "Genome Sequencing — Genome India Project",
        "CRISPR-Cas9 and Gene Editing Trends",
        "Stem Cell Therapy and Regenerative Medicine",
        "Vaccines — Types (mRNA, Vector, Inactivated)",
        "Antibiotic Resistance and Superbugs",
        "Zoonotic Diseases and One Health Approach",
        "Intellectual Property Rights (IPR) in Biotech"
    ]},
    {"order": 3, "code": "S4", "title": "Information Technology & AI", "topics": [
        "Artificial Intelligence (AI) — Machine Learning and Deep Learning",
        "Generative AI and Large Language Models (LLMs)",
        "Blockchain Technology and Cryptocurrencies",
        "Internet of Things (IoT) and 5G/6G Technology",
        "Cyber Security — Malware, Phishing and Ransomware",
        "Quantum Computing — Principles and India's Mission",
        "Semiconductor Missions and Chip Manufacturing",
        "Cloud Computing and Edge Computing"
    ]},
    {"order": 4, "code": "S5", "title": "Emerging Technologies", "topics": [
        "Nanotechnology — Applications in Health and Agri",
        "Nuclear Energy — India's Three-Stage Programme",
        "Robotics and Automation in Industry 4.0",
        "Alternative Energy — Green Hydrogen and Fusion Energy",
        "Environmental Tech — Carbon Capture and Storage (CCS)",
        "Drone Technology and DGCA Regulations",
        "3D Printing and Additive Manufacturing",
        "Blue Economy and Deep Ocean Mission"
    ]}
]

def run_seeding():
    log.info(f"🚀 Starting Science & Tech Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        # Find Science Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug = 'science-tech' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ Science course not found.")
            return
        course_id = course[0]

        total_topics = 0
        for m_idx, m_data in enumerate(SCIENCE_MODULES):
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
                    {"t": m_data["title"], "d": f"Science Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"SCI_{m_data['code']}_T{t_idx+1}"
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
                            VALUES (:nid, 'science-tech', :mid, :name, :relevance, 'FOUNDATION')
                        """),
                        {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                    )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} Science topics.")

if __name__ == "__main__":
    run_seeding()
