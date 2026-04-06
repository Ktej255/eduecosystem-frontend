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

# 40 High-Yield Nodes for History (GS1)
HISTORY_MODULES = [
    {"order": 0, "code": "H1", "title": "Ancient India — Fundamentals", "topics": [
        "Prehistoric Period — Palaeolithic to Neolithic",
        "Indus Valley Civilization — Urban Planning and Culture",
        "Vedic Age — Early vs Later Vedic Society",
        "Buddhism and Jainism — Core Philosophy",
        "Mauryan Empire — Administration and Ashoka's Dhamma",
        "Post-Mauryan India — Satavahanas and Kushanas",
        "Gupta Empire — The Golden Age Architecture",
        "Harshavardhan and South Indian Kingdoms (Cholas, Pallavas)"
    ]},
    {"order": 1, "code": "H2", "title": "Medieval India — Synthesis", "topics": [
        "Tripartite Struggle and Early Medieval Rajputs",
        "Delhi Sultanate — Slave and Khilji Dynasties",
        "Tughlaq and Lodhi Reforms",
        "Mughal Empire — Babur to Akbar's Policies",
        "Mughal Administration and Mansabdari System",
        "Later Mughals and Maratha Rise",
        "Bhakti and Sufi Movements",
        "Vijayanagara and Bahmani Kingdoms"
    ]},
    {"order": 2, "code": "H3", "title": "Modern India — The Freedom Struggle", "topics": [
        "Advent of Europeans and Carnatic Wars",
        "British Expansion — Plassey to Buxar",
        "Economic Impact of British Rule",
        "Revolt of 1857 — Causes and Nature",
        "Social and Religious Reform Movements",
        "Indian National Congress — Moderate vs Extremist phase",
        "Gandhian Era — Non-Cooperation and Civil Disobedience",
        "Quit India Movement and Independence Act 1947"
    ]},
    {"order": 3, "code": "H4", "title": "Art and Culture — The Heritage", "topics": [
        "Indian Architecture — Indus to Mughal",
        "Temple Architecture Styles — Nagara, Dravida, Vesara",
        "Indo-Islamic and Colonial Architecture",
        "Classical Dances of India",
        "Hindustani and Carnatic Music Gharanas",
        "Puppetry and Folk Theatre",
        "Indian Paintings — Cave to Miniature",
        "UNESCO World Heritage Sites in India"
    ]},
    {"order": 4, "code": "H5", "title": "World History & Post-Independence", "topics": [
        "Industrial Revolution and Colonization",
        "World War I and II — Causes and Impact",
        "Cold War and Decolonization",
        "Reorganization of Indian States",
        "Nehruvian Era and Five Year Plans",
        "Linguistic Reorganization and Emergency (1975)",
        "Post-1991 Economic Reforms",
        "Contemporary Challenges in Indian Democracy"
    ]}
]

def run_seeding():
    log.info(f"🏛️ Starting History Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        # Find History Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug = 'history' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ History course not found.")
            return
        course_id = course[0]

        total_topics = 0
        for m_idx, m_data in enumerate(HISTORY_MODULES):
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
                    {"t": m_data["title"], "d": f"History Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"HIS_{m_data['code']}_T{t_idx+1}"
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
                            VALUES (:nid, 'history', :mid, :name, :relevance, 'FOUNDATION')
                        """),
                        {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                    )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} History topics.")

if __name__ == "__main__":
    run_seeding()
