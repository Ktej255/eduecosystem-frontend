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

# Final Subject Modules (IR, Security, Ethics, Social Issues)
REMAINING_DATA = {
    "ir": [
        {"order": 0, "code": "IR1", "title": "India's Neighborhood", "topics": [
            "India-Pakistan — Bilateral Issues and Kashmir",
            "India-China — Border Disputes and Economic Competition",
            "India-Bangladesh — Water Sharing and Connectivity",
            "India-Sri Lanka — Ethnic Issue and Maritime Boundaries",
            "India-Nepal — Open Border and Trade",
            "India-Bhutan — Friendship Treaty and Hydropower",
            "India-Afghanistan — Reconstruction and Strategic Ties",
            "Neighbourhood First Policy and SAGAR Initiative"
        ]},
        {"order": 1, "code": "IR2", "title": "Global Groupings & Institutions", "topics": [
            "Quad and I2U2 — Strategic Significance",
            "BRICS, G20 and SCO — India's Role",
            "United Nations — Reforms and Permanent Seat demand",
            "WTO, IMF and World Bank — Global Governance",
            "Regional Groupings — ASEAN, BIMSTEC, SAARC",
            "Nuclear Non-Proliferation — NPT, CTBT and NSG",
            "Climate Change Diplomacy — COP28 and beyond",
            "Indian Diaspora — Impact on Foreign Policy"
        ]}
    ],
    "security": [
        {"order": 0, "code": "SEC1", "title": "Internal Security Challenges", "topics": [
            "Linkages between Development and Spread of Extremism",
            "Role of External State and Non-state Actors",
            "Challenges to Internal Security — Border Management",
            "Money-Laundering and its prevention",
            "Cyber Security — National Strategy and Threats",
            "Organized Crime and Terrorism Linkages",
            "Security Forces and their Mandates",
            "Left Wing Extremism (LWE) — Current Status"
        ]}
    ],
    "ethics": [
        {"order": 0, "code": "ETH1", "title": "Ethics & Human Interface", "topics": [
            "Ethics in Human Actions — Essence and Consequences",
            "Attitude — Content, Structure and Influence",
            "Aptitude and Foundational Values for Civil Service",
            "Emotional Intelligence — Concepts and Applications",
            "Contributions of Moral Thinkers from India and World",
            "Public/Civil Service Values and Ethics in Public Admin",
            "Probity in Governance — Transparency and Accountability",
            "Ethics in International Relations and Funding"
        ]}
    ],
    "social-issues": [
        {"order": 0, "code": "SOC1", "title": "Indian Society & Social Issues", "topics": [
            "Salient Features of Indian Society and Diversity",
            "Role of Women and Women’s Organization",
            "Population and Associated Issues",
            "Poverty and Developmental issues",
            "Urbanization — Problems and Remedies",
            "Effects of Globalization on Indian society",
            "Social Empowerment, Communalism, Regionalism & Secularism",
            "Rights Issues — Gender, Caste and Minorities"
        ]}
    ]
}

def run_seeding():
    log.info(f"🌐 Starting Remaining Subjects Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        total_topics = 0
        for slug, modules in REMAINING_DATA.items():
            # Find Course
            course = conn.execute(text("SELECT id FROM courses WHERE slug = :s LIMIT 1"), {"s": slug}).fetchone()
            if not course:
                log.error(f"❌ {slug} course not found.")
                continue
            course_id = course[0]

            for m_idx, m_data in enumerate(modules):
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
                        {"t": m_data["title"], "d": f"{slug.upper()} Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                    )
                    module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
                
                # Insert Topics
                for t_idx, topic_name in enumerate(m_data["topics"]):
                    total_topics += 1
                    node_id = f"{slug[:3].upper()}_{m_data['code']}_T{t_idx+1}"
                    relevance_json = json.dumps({"UPSC": "medium"})
                    
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
                                VALUES (:nid, :slug, :mid, :name, :relevance, 'FOUNDATION')
                            """),
                            {"nid": node_id, "slug": slug, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                        )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} topics across 4 subjects.")

if __name__ == "__main__":
    run_seeding()
