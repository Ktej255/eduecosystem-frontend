# -*- coding: utf-8 -*-
import os, sys, json, logging
from datetime import datetime

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
log = logging.getLogger(__name__)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy import create_engine, text
from app.core.config import settings

engine = create_engine(str(settings.DATABASE_URL))
IS_SQLITE = "sqlite" in str(settings.DATABASE_URL)

MODULE_DATA = [
    {"order": 0, "code": "M0", "title": "Environmental Thinking Framework", "topics": [
        "What is a System — And Why Earth is One",
        "Feedback Loops — The Engine Behind Every Crisis",
        "Cause vs Correlation — The Most Important Intellectual Skill",
        "Scale and Time — Why Environment Problems Are Hard to See",
        "The 6-Question Framework — Your Environmental Reading Tool"
    ]},
    {"order": 1, "code": "M1", "title": "Planet Earth as a Dynamic System", "topics": [
        "The Four Spheres — Earth as One Living System",
        "The Carbon Cycle — The Language of Earth's Metabolism",
        "The Nitrogen Cycle — The Invisible Crisis in Your Food",
        "The Water Cycle — Far More Than Evaporation and Rain",
        "The Phosphorus and Sulphur Cycles",
        "Earth's Energy Budget — Why the Planet Has a Temperature"
    ]},
    {"order": 2, "code": "M2", "title": "The Atmosphere — The Invisible Ocean", "topics": [
        "Structure of the Atmosphere — Five Floors, One Building",
        "Atmospheric Composition and Greenhouse Gases",
        "The Ozone Layer — Discovery, Destruction, and Recovery",
        "The Enhanced Greenhouse Effect — Why the Atmosphere Is Getting Thicker",
        "Air Pollution — The Crisis You Are Breathing"
    ]},
    {"order": 3, "code": "M3", "title": "Climate, Weather and Global Patterns", "topics": [
        "Weather vs Climate — Definitions, Baselines, and Variability",
        "Solar Radiation and Insolation",
        "Atmospheric Circulation — Pressure Belts and Wind Systems",
        "The Indian Monsoon — Complete Mechanism",
        "Ocean Currents and Climate Regulation",
        "Climate Zones and Biomes",
        "Extreme Weather Events"
    ]},
    {"order": 4, "code": "M3.5", "title": "Reading the Environment — Data, Indices, and Monitoring", "topics": [
        "Remote Sensing and Satellite Monitoring",
        "Key Environmental Reports",
        "Environmental Indices — How to Read Them",
        "Monitoring Agencies and Their Mandates"
    ]},
    {"order": 5, "code": "M4", "title": "The Living World — Ecology and Ecosystems", "topics": [
        "Levels of Ecological Organisation and the Niche Concept",
        "Energy Flow and the 10% Law",
        "Food Webs and Trophic Cascades",
        "Ecosystem Types — Structure and Characteristics",
        "Ecological Succession",
        "Population Ecology",
        "Species Interactions",
        "Ecosystem Services — What Nature Does for Free"
    ]},
    {"order": 6, "code": "M5", "title": "Biodiversity — The Web of Life", "topics": [
        "Three Levels of Biodiversity",
        "Why Biodiversity Matters — The Functional Argument",
        "Biodiversity Hotspots",
        "India's Biodiversity",
        "Threats to Biodiversity — Six Drivers",
        "Conservation Approaches",
        "India's Conservation Programmes and International Designations"
    ]},
    {"order": 7, "code": "M6", "title": "Forest Systems and Vegetation", "topics": [
        "Forest Types of the World",
        "Forest Types of India",
        "Forests as Carbon Systems",
        "Forests and the Water Cycle",
        "Deforestation — Causes, Scale, and Consequences",
        "Forests, Communities, and Rights"
    ]},
    {"order": 8, "code": "M7", "title": "Water — The Master Resource", "topics": [
        "Earth's Water Budget and Freshwater Scarcity",
        "River Systems and Their Ecology",
        "Groundwater Systems and India's Crisis",
        "Wetlands — Nature's Kidneys",
        "Ocean Systems",
        "Water Stress, Scarcity, and Governance",
        "Water Pollution"
    ]},
    {"order": 9, "code": "M8", "title": "Soil, Land and the Ground Beneath", "topics": [
        "Soil Formation and Composition",
        "Soil Types of India",
        "Soil as a Living System",
        "Land Degradation and Desertification",
        "Soil Conservation and Sustainable Land Management"
    ]},
    {"order": 10, "code": "M9", "title": "Climate Change — The Full System View", "topics": [
        "Earth's Climate History and Natural Variation",
        "The Science of Current Climate Change",
        "Consequences — Physical Systems",
        "Consequences — Biological Systems",
        "Consequences Specifically for India",
        "Tipping Points and Irreversibility",
        "Mitigation — Reducing Emissions",
        "Adaptation — Living with Change"
    ]},
    {"order": 11, "code": "M10", "title": "Pollution — How Systems Break Down", "topics": [
        "Air Pollution — Full Spectrum",
        "Water Pollution — Full Spectrum",
        "Soil Pollution",
        "Plastic Pollution — From Ocean to Cell",
        "Bioaccumulation and Biomagnification",
        "Noise, Light, and Thermal Pollution",
        "Nuclear and Radioactive Pollution"
    ]},
    {"order": 12, "code": "M11", "title": "Natural Resources, Energy, and Technology", "topics": [
        "Classification of Natural Resources",
        "Fossil Fuels — Formation, Use, Consequences",
        "Renewable Energy — How Each Technology Works",
        "Energy Storage, Grid Integration, and Green Hydrogen",
        "Environmental Technology",
        "Minerals, Mining, and the Circular Economy",
        "Food Systems and Resource Use"
    ]},
    {"order": 13, "code": "M12", "title": "Disaster Systems — Where Nature Meets Vulnerability", "topics": [
        "Hazard, Risk, Vulnerability, Disaster — Precise Definitions",
        "Geological Disasters",
        "Hydrometeorological Disasters",
        "Climate Change and Disaster Risk",
        "Disaster Management in India",
        "International Frameworks"
    ]},
    {"order": 14, "code": "M13", "title": "Environmental Governance and Law", "topics": [
        "Why Environmental Governance Exists",
        "Key Indian Environmental Laws",
        "Environmental Institutions in India",
        "Environmental Impact Assessment",
        "International Environmental Governance — History",
        "Climate Governance — Kyoto to Paris",
        "Biodiversity and Other Major Treaties"
    ]},
    {"order": 15, "code": "M14", "title": "Sustainable Development and Environmental Economics", "topics": [
        "Sustainable Development — Concept and History",
        "Planetary Boundaries — The Nine Systems",
        "The Sustainable Development Goals",
        "Green Economy, Circular Economy, and Environmental Economics",
        "Ecosystem Valuation and Green Finance",
        "India's Development vs Environment — Case Studies",
        "Indigenous Knowledge and Traditional Ecological Wisdom"
    ]}
]

def run():
    log.info(f"🌱 Starting Syllabus Sync (SQLite Friendly)...")
    with engine.begin() as conn:
        # 1. Clean existing - SQLite doesn't support complex nested subqueries easily in some versions, but this is simple enough
        conn.execute(text("DELETE FROM concept_relationships WHERE from_node_id IN (SELECT id FROM concept_nodes WHERE subject_slug = 'environment')"))
        conn.execute(text("DELETE FROM concept_nodes WHERE subject_slug = 'environment'"))
        
        # Find Course
        course = conn.execute(text("SELECT id FROM courses WHERE slug LIKE '%environment%' LIMIT 1")).fetchone()
        if not course:
            log.error("❌ Environment course not found.")
            return
        course_id = course[0]
        
        total_topics = 0
        for m_idx, m_data in enumerate(MODULE_DATA):
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
                    {"t": m_data["title"], "d": f"Foundation Module {m_data['code']}", "cid": course_id, "idx": m_idx}
                )
                module_id = conn.execute(text("SELECT last_insert_rowid()")).fetchone()[0]
            
            # Insert Topics
            for t_idx, topic_name in enumerate(m_data["topics"]):
                total_topics += 1
                node_id = f"ENV_{m_data['code']}_T{t_idx+1}"
                relevance_json = json.dumps({"UPSC": "high"})
                
                conn.execute(
                    text("""
                        INSERT INTO concept_nodes 
                        (node_id, subject_slug, module_id, node_name, exam_relevance, difficulty_level)
                        VALUES (:nid, 'environment', :mid, :name, :relevance, 'foundation')
                    """),
                    {"nid": node_id, "mid": module_id, "name": topic_name, "relevance": relevance_json}
                )
        log.info(f"✅ Synced {len(MODULE_DATA)} modules and {total_topics} topics.")

if __name__ == '__main__':
    run()
