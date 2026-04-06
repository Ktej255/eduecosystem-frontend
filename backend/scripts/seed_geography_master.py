
import sys
import os
from sqlalchemy import text
from datetime import datetime

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import SessionLocal

def seed_geography_master():
    db = SessionLocal()
    print("🚀 Starting Phase 17: Geography Master Curriculum Saturation...")
    print("🎯 SYNC: Morning Batch Prelims (11 Modules, 72 Topics, 432 Nodes)")

    # ─── 1. FULL 11-MODULE HIERARCHY (72 TOPICS) ────────────────
    # Mapped from "Geography_Foundation_Complete_Outline.docx"
    HIERARCHY = {
        1: { "name": "Physical Geography: Geomorphology", "topics": ["Origin of Earth", "Interior Sources", "Wegener Drift", "Plate Boundaries", "Weathering", "Mass Movements", "Endogenic Forces", "Landform Evolution"] },
        2: { "name": "Climatology Essentials", "topics": ["Atmosphere Structure", "Heat Budget", "General Circulation", "Planetary Winds", "Airmasses & Fronts", "Tropical Cyclones", "Temperate Cyclones", "Köppen System"] },
        3: { "name": "Oceanography Dynamics", "topics": ["Ocean Floor Relief", "Salinity Maps", "Tides & Currents", "Coral Bleaching", "UNCLOS (EEZ)", "Marine Mineral Wealth"] },
        4: { "name": "Biogeography & Soils", "topics": ["Global Soil Types", "India's Alluvial", "Black Soil Profile", "Soil Degradation", "Biosphere Reserves", "Invasive Species", "Ecological Niche"] },
        5: { "name": "Indian Physical Environment", "topics": ["Physiography (Himalayas)", "Northern Plains", "Peninsular Plateau", "Coastal States", "Drainage (Himalayan)", "Drainage (Peninsular)", "Indian Monsoon", "ENSO Feedback"] },
        6: { "name": "Indian Resource Geography", "topics": ["Coal Distribution", "Petroleum Basins", "Nuclear Minerals", "Iron Ore Logistics", "Irrigation Systems", "Green Revolution 2.0", "Precision Agri"] },
        7: { "name": "Forests & Natural Vegetation", "topics": ["Canopy Density", "Habitat Fragmentation", "Forest Fire Dynamics", "India State of Forest", "Agroforestry Models", "Mangrove Loss", "Regenerative Forest"] },
        8: { "name": "Human & Settlement Geography", "topics": ["Demographic Transition", "Migration Pull/Push", "Rural Settlement", "Urban Sprawl", "Smart Cities Concept", "Slum Dynamics"] },
        9: { "name": "Strategic Geopolitics", "topics": ["China's BRI Strategy", "String of Pearls", "IMEC Corridor", "Necklace of Diamonds", "Malacca Dilemma", "Blue Economy Policy", "Space Diplomacy"] },
        10: { "name": "Disaster Landscapes", "topics": ["Cyclone Vulnerability", "Earthquake Zones", "Landslide Hazard", "Heat Island Effect", "Flood Infrastructure", "Drought Prediction"] },
        11: { "name": "Economic & Logistics", "topics": ["Logistics Performance", "Gati Shakti Masterplan", "Port-led Dev (Sagarmala)", "Global South Hubs", "Supply Chain Resilience"] }
    }

    # ─── 2. Granular Node Generation Logic ────────────────
    TYPES = [
        ("BASE", "Theory"), ("MAP", "Map Analysis"), ("IND", "India"), 
        ("STRAT", "Strategy"), ("PYQ", "UPSC Focus"), ("NEWS", "Current Affairs")
    ]

    total_nodes = 0
    now = datetime.utcnow()

    for mod_id, mod_data in HIERARCHY.items():
        print(f"📦 Module M{mod_id:0>2}: {mod_data['name']}")
        
        for topic in mod_data['topics']:
            topic_key = topic.replace(" ", "_").replace("&", "AND").replace("(", "").replace(")", "").upper()[:15]
            for suffix, label in TYPES:
                node_id = f"GEO_M{mod_id:0>2}_{topic_key}_{suffix}"
                node_name = f"{topic}: {label}"
                node_desc = f"Mastery of {topic} ({label}) for UPSC Foundation. Derived from Morning Batch Outline."
                diff = "UPSC_OVERLAY" if suffix == "PYQ" else "ADVANCED" if suffix == "STRAT" else "FOUNDATION"
                
                db.execute(text("""
                    INSERT INTO concept_nodes (node_id, node_name, node_description, subject_slug, module_id, difficulty_level)
                    VALUES (:nid, :name, :desc, 'geography', :mid, :diff)
                    ON CONFLICT (node_id) DO UPDATE SET node_name = EXCLUDED.node_name, node_description = EXCLUDED.node_description
                """), {"nid": node_id, "name": node_name, "desc": node_desc, "mid": mod_id, "diff": diff})

                # Register Signals
                for sig in ['video', 'mcq', 'recall', 'ai_chat']:
                    db.execute(text("""
                        INSERT INTO concept_signals (node_id, signal_type, content_url, metadata)
                        VALUES (:nid, :st, :url, '{"batch": "morning_2025"}')
                        ON CONFLICT (node_id, signal_type) DO NOTHING
                    """), {"nid": node_id, "st": sig, "url": f"api/v1/geo/{sig}/{node_id}"})
                
                total_nodes += 1

    db.commit()
    print(f"✅ Final Mastery Audit: {total_nodes} nodes across {len(HIERARCHY)} modules.")
    db.close()

if __name__ == "__main__":
    seed_geography_master()
