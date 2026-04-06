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

# 48 High-Yield Nodes for Economy (GS3)
ECONOMY_MODULES = [
    {"order": 0, "code": "E1", "title": "National Income & Growth", "topics": [
        "GDP, GNP, NDP, NNP — Definitions and Calculations",
        "Base Year and Constant vs Current Prices",
        "Inclusive Growth and Sustainable Development",
        "Unemployment — Types and Measurement (PLFS)",
        "Poverty — Alleviation Programmes and Committees",
        "Human Development Index (HDI) and GINI Coefficient",
        "V-shaped vs K-shaped Recovery",
        "Potential GDP and Output Gap"
    ]},
    {"order": 1, "code": "E2", "title": "Monetary Policy & Banking", "topics": [
        "RBI — Functions and Monetary Policy Committee (MPC)",
        "Quantitative Tools — Repo, Reverse Repo, CRR, SLR",
        "Qualitative Tools — Moral Suasion, Margin Requirements",
        "Banking Structure — PSBs, RRBs, SFBs and Payments Banks",
        "NPA Crisis — IBC, NARCL (Bad Bank) and Prompt Corrective Action",
        "Digital Currency (CBDC) and UPI Ecosystem",
        "Financial Inclusion — Jan Dhan and PM Svanidhi",
        "Money Supply — M1, M2, M3, M4 and Velocity of Money"
    ]},
    {"order": 2, "code": "E3", "title": "Fiscal Policy & Budget 2026", "topics": [
        "Components of Budget — Revenue vs Capital Accounts",
        "Deficits — Fiscal, Revenue, Primary and Effective Revenue Deficit",
        "FRBM Act and Debt-to-GDP Ratio",
        "Taxation — Direct vs Indirect (GST Structure)",
        "Finance Commission — Horizontal and Vertical Devolution",
        "Subsidies — Food, Fertilizer and Fuel reforms",
        "Public Debt Management and Crowding Out",
        "Disinvestment and Strategic Sale Policies"
    ]},
    {"order": 3, "code": "E4", "title": "External Sector & IMF/WTO", "topics": [
        "Balance of Payments (BoP) — Current and Capital Account",
        "Forex Reserves — Components and Significance",
        "Exchange Rate Management — NEER and REER",
        "FDI vs FPI — Trends and Regulations",
        "Special Economic Zones (SEZ) and Trade Policy 2023",
        "IMF — Quotas, SDRs and Surveillance",
        "WTO — Boxes (Amber, Blue, Green) and TRIPS",
        "Regional Trade Agreements — RCEP, IPEF and FTAs"
    ]},
    {"order": 4, "code": "E5", "title": "Sectors of the Economy", "topics": [
        "Agriculture — Minimum Support Price (MSP) and PDS",
        "Industrial Policy — PLI Schemes and PM Gati Shakti",
        "Infrastructure — National Infrastructure Pipeline (NIP)",
        "Services Sector — Contribution and Export Trends",
        "MSME Sector — Definition and Significance",
        "Logistics and Supply Chain Management",
        "Labor Reforms and Four Labor Codes",
        "Startup Ecosystem and Unicorn Trends"
    ]},
    {"order": 5, "code": "E6", "title": "Financial Markets", "topics": [
        "Money Market — Treasury Bills, Commercial Paper",
        "Capital Market — Primary (IPO) vs Secondary",
        "SEBI — Regulatory Functions",
        "Stock Exchanges — NSE, BSE and Indices",
        "Mutual Funds and ETFs",
        "Derivatives and Hedge Funds",
        "External Commercial Borrowings (ECB)",
        "Venture Capital and Angel Investors"
    ]}
]

def run_seeding():
    log.info(f"💰 Starting Economy Intelligence Seeding (Phase 2)...")
    
    with engine.begin() as conn:
        # Find Economy Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug = 'economy' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ Economy course not found.")
            return
        course_id = course[0]

        total_topics = 0
        for m_idx, m_data in enumerate(ECONOMY_MODULES):
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
                    {"t": m_data["title"], "d": f"Economy Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"ECO_{m_data['code']}_T{t_idx+1}"
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
                            VALUES (:nid, 'economy', :mid, :name, :relevance, 'FOUNDATION')
                        """),
                        {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                    )
        
        log.info(f"✅ Seeding complete. Processed {total_topics} Economy topics.")

if __name__ == "__main__":
    run_seeding()
