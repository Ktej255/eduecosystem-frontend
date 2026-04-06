
import sys
import os
from sqlalchemy import text
from datetime import datetime

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import SessionLocal

def seed_environment_master():
    db = SessionLocal()
    print("🚀 Starting Phase 16: Environment Master Curriculum Saturation...")
    print("🎯 SYNC: Morning Batch Prelims (16 Modules, 112 Topics, 448 Nodes)")

    # ─── 1. FULL 16-MODULE HIERARCHY (112 TOPICS) ────────────────
    # Mapped from "Env_Foundation_Complete_Outline.pdf"
    HIERARCHY = {
        0: { "name": "Thinking Framework", "topics": ["Ecologist Thinking", "Earth Systems", "Scale & Resolution", "Human-Nature History", "Planetary Boundaries", "Anthropocene Concept", "Sustainability Philosophy"] },
        1: { "name": "Ecology Basics", "topics": ["Ecosystem Components", "Energy Flow (10% Rule)", "Food Chains & Webs", "Ecological Pyramids", "Biogeochemical Carbon", "Biogeochemical Nitrogen", "Species Interactions"] },
        2: { "name": "Abiotic Dynamics", "topics": ["Light & Photoperiod", "Temperature & Metabolism", "Water & Osmosis", "Soil (Edaphic) Factors", "Morphological Adaptation", "Physiological Adaptation", "Behavioural Adaptation"] },
        3: { "name": "Atmosphere & Climate", "topics": ["Structure of Atmosphere", "Greenhouse Effect (Mechanism)", "Radiative Forcing (IPCC)", "Albedo & Feedback", "Climate Zones (Köppen)", "India's Climate Diversity", "Extreme Weather (Cyclones)"] },
        4: { "name": "Hydrological Systems", "topics": ["Global Water Distribution", "Aquatic Ecosystems (Lentic/Lotic)", "Marine Zonation", "Coral Reef Physiology", "Mangrove Adaptations", "Estuarine Productivity", "Wetland Carbon Sequestration"] },
        5: { "name": "Terrestrial Biomes", "topics": ["Tundra & Taiga", "Temperate Forests", "Tropical Rainforests", "Savanna & Grasslands", "Deserts & Aridity", "Montane Ecosystems", "Island Biogeography"] },
        6: { "name": "Population Ecology", "topics": ["Population Growth (J/S Curves)", "Carrying Capacity", "r/K Selection Strategies", "Metapopulations", "Demographic Transition", "Urban Population Impact", "Human Resource Demand"] },
        7: { "name": "Community Structure", "topics": ["Ecological Niche", "Resource Partitioning", "Keystone Species", "Foundation Species", "Indicator Species", "Invasive Alien Species", "Ecotone & Edge Effect"] },
        8: { "name": "Biosphere 360", "topics": ["Biosphere Definition", "Gaia Hypothesis", "Ecological Footprint", "Biocapacity Analysis", "Natural Capital Accounting", "Ecosystem Services (Millennium)", "Economic Valuation (TEEB)"] },
        9: { "name": "Biodiversity - The Web", "topics": ["Levels of Biodiversity", "Measurement (Alpha/Beta/Gamma)", "Biodiversity Hotspots", "Hopespots (Marine)", "India's Mega-diversity", "Mass Extinction History", "HIPPO Drivers of Loss"] },
        10: { "name": "Conservation Strategies", "topics": ["In-situ (NP/WLS/BR)", "Ex-situ (Zoos/Seed Banks)", "IUCN Red List Categories", "Project Tiger & Elephant", "Community Reserves", "Conservation Reserves", "Eco-Sensitive Zones"] },
        11: { "name": "Traditional Knowledge", "topics": ["India's Water Harvesting", "Stepwells & Johads", "Sacred Groves (Dev van)", "Traditional Knowledge (TEK)", "Community Shared Commons", "Forest Rights (FRA 2006)", "Tribal Conservationism"] },
        12: { "name": "Pollution & Governance", "topics": ["Air Pollution (PM2.5/NOx)", "Water Pollution (Eutrophication)", "Plastic & Microplastic", "Electronic Waste (E-waste)", "Bioremediation Techniques", "Phytoremediation", "Solid Waste Management"] },
        13: { "name": "Laws & Conventions", "topics": ["EPA 1986", "Wild Life Act 1972", "Biodiversity Act 2002", "Forest Conservation Act", "Stockholm to Rio (UNEP)", "CBD & Nagoya/Cartagena", "CITES & TRAFFIC"] },
        14: { "name": "Climate Change Policy", "topics": ["UNFCCC & Kyoto Protocol", "Paris Agreement (COP21)", "IPCC AR6 Reports", "Carbon Credits & Trading", "Adaptation Fund", "Loss & Damage Fund", "India's NAPCC/ISFR"] },
        15: { "name": "Environmental Impact", "topics": ["EIA Process (India)", "Strategic Env Assessment", "Ecological Restoration", "Mining & Degradation", "Agriculture & Pesticides", "Green Revolutions Impact", "Agro-forestry Models"] },
        16: { "name": "Sustainable Future", "topics": ["SDGs (17 Goals)", "Circular Economy Logic", "Zero Waste Philosophy", "Renewable Energy Mix", "Green Hydrogen Mission", "Lifestyle for Env (LiFE)", "Inter-generational Equity"] }
    }

    TYPES = [("BASE", "Concept"), ("IND", "India"), ("PYQ", "UPSC"), ("APP", "Recent")]
    total_nodes = 0

    for mod_id, mod_data in HIERARCHY.items():
        print(f"📦 Module {mod_id}: {mod_data['name']}")
        for t_idx, topic in enumerate(mod_data['topics']):
            topic_key = topic.replace(" ", "_").replace("&", "AND").replace("(", "").replace(")", "").upper()[:15]
            for suffix, label in TYPES:
                node_id = f"ENV_M{mod_id:0>2}_{topic_key}_{suffix}"
                node_name = f"{topic}: {label}"
                node_desc = f"Mastery of {topic} ({label}) for UPSC Foundation. Derived from Morning Batch Outline."
                diff = "UPSC_OVERLAY" if suffix == "PYQ" else "FOUNDATION" if suffix == "BASE" else "ADVANCED"
                
                db.execute(text("""
                    INSERT INTO concept_nodes (node_id, node_name, node_description, subject_slug, module_id, difficulty_level)
                    VALUES (:nid, :name, :desc, 'environment', :mid, :diff)
                    ON CONFLICT (node_id) DO UPDATE SET node_name = EXCLUDED.node_name, node_description = EXCLUDED.node_description
                """), {"nid": node_id, "name": node_name, "desc": node_desc, "mid": mod_id, "diff": diff})

                # Register Signals
                for sig in ['video', 'mcq', 'recall', 'ai_chat']:
                    db.execute(text("""
                        INSERT INTO concept_signals (node_id, signal_type, content_url, metadata)
                        VALUES (:nid, :st, :url, '{"batch": "morning_2025"}')
                        ON CONFLICT (node_id, signal_type) DO NOTHING
                    """), {"nid": node_id, "st": sig, "url": f"api/v1/env/{sig}/{node_id}"})
                
                total_nodes += 1

    db.commit()
    print(f"✅ Final Mastery Audit: {total_nodes} nodes across 17 modules.")
    db.close()

if __name__ == "__main__":
    seed_environment_master()
