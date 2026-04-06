
import sys
import os
from sqlalchemy import text

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import SessionLocal

def seed_environment():
    db = SessionLocal()
    print("🚀 Starting Phase 14: Environment Subject Deployment (Raw SQL Mode)...")

    # 1. Define the 10-Module Structure
    ENVIRONMENT_CONTENT = {
        0: {
            "name": "Environmental Thinking Framework",
            "nodes": [
                ("ENV_M00_THINK", "Environmental Thinking", "Thinking like an ecologist.", "FOUNDATION"),
                ("ENV_M00_SYSTEMS", "Earth Systems", "Interconnectedness of Earth systems.", "FOUNDATION"),
            ]
        },
        1: {
            "name": "Ecology Fundamentals",
            "nodes": [
                ("ENV_M01_ECO_STRUC", "Ecosystem Structure", "Biotic and Abiotic factors.", "FOUNDATION"),
                ("ENV_M01_ENERGY_FLOW", "Energy Flow", "10% rule and thermodynamic laws.", "FOUNDATION"),
                ("ENV_M01_FOOD_WEB", "Food Webs", "Complex biotic interactions.", "FOUNDATION"),
            ]
        },
        2: {
            "name": "Basics of Environment",
            "nodes": [
                ("ENV_M02_FACTORS", "Environmental Factors", "Light, Temperature, Water, Soil.", "FOUNDATION"),
                ("ENV_M02_ADAPTATIONS", "Adaptations", "Morphological and physiological survival traits.", "FOUNDATION"),
            ]
        },
        3: {
            "name": "Ecosystem Services",
            "nodes": [
                ("ENV_M03_PROVISION", "Provisioning Services", "Food, raw materials, fresh water.", "UPSC_OVERLAY"),
                ("ENV_M03_REGULATE", "Regulating Services", "Climate regulation, flood control.", "UPSC_OVERLAY"),
                ("ENV_M03_CULTURAL", "Cultural Services", "Recreational, spiritual, aesthetic.", "UPSC_OVERLAY"),
                ("ENV_M03_SUPPORT", "Supporting Services", "Nutrient cycling, soil formation.", "UPSC_OVERLAY"),
            ]
        },
        4: {
            "name": "Main Concepts of Ecosystem",
            "nodes": [
                ("ENV_M04_RESILIENCE", "Ecological Resilience", "System stability and recovery.", "ADVANCED"),
                ("ENV_M04_CAPACITY", "Carrying Capacity", "Maximum population size supportable.", "ADVANCED"),
                ("ENV_M04_NICHE", "Ecological Niche", "Functional role of species.", "ADVANCED"),
            ]
        },
        5: {
            "name": "Global Biomes",
            "nodes": [
                ("ENV_M05_TERRESTRIAL", "Terrestrial Biomes", "Tundra, Taiga, Tropical forests.", "FOUNDATION"),
                ("ENV_M05_AQUATIC", "Aquatic Biomes", "Marine and Freshwater ecosystems.", "FOUNDATION"),
            ]
        },
        6: {
            "name": "Biosphere Composition",
            "nodes": [
                ("ENV_M06_COMPOS", "Biosphere Structure", "Global sum of all ecosystems.", "FOUNDATION"),
                ("ENV_M06_INTERACT", "Biosphere Interaction", "Material and energy exchange.", "FOUNDATION"),
            ]
        },
        7: {
            "name": "Human Factors",
            "nodes": [
                ("ENV_M07_POP", "Population Dynamics", "Human growth and resources.", "UPSC_OVERLAY"),
                ("ENV_M07_URBAN", "Urbanization Impact", "Heat islands and ecosystem loss.", "UPSC_OVERLAY"),
                ("ENV_M07_FOOT", "Ecological Footprint", "Human impact on regenerative capacity.", "UPSC_OVERLAY"),
            ]
        },
        8: {
            "name": "Ecosystem Change",
            "nodes": [
                ("ENV_M08_DEFOR", "Deforestation", "Drivers and ecological consequences.", "FOUNDATION"),
                ("ENV_M08_FRAGMENT", "Habitat Fragmentation", "Edge effects and isolation.", "ADVANCED"),
            ]
        },
        9: {
            "name": "Resilience & Stability",
            "nodes": [
                ("ENV_M09_STABILITY", "System Stability", "Resistance vs Resilience.", "ADVANCED"),
                ("ENV_M09_CONSERV", "Conservation Strategy", "In-situ and Ex-situ conservation.", "UPSC_OVERLAY"),
            ]
        },
        10: {
            "name": "Linear vs Circular Economy",
            "nodes": [
                ("ENV_M10_CIRCULAR", "Circular Economy", "Resource efficiency and waste reduction.", "ADVANCED"),
                ("ENV_M10_SUSTAIN", "Sustainable Development", "SDGs and inter-generational equity.", "UPSC_OVERLAY"),
            ]
        }
    }

    total_nodes = 0
    for mod_id, mod_data in ENVIRONMENT_CONTENT.items():
        print(f"📦 Seeding Module {mod_id}: {mod_data['name']}...")
        for nid, name, desc, diff in mod_data['nodes']:
            # 1. Upsert ConceptNode using Raw SQL
            db.execute(text("""
                INSERT INTO concept_nodes (node_id, node_name, node_description, subject_slug, module_id, difficulty_level)
                VALUES (:nid, :name, :desc, 'environment', :mid, :diff)
                ON CONFLICT (node_id) DO UPDATE SET
                    node_name = EXCLUDED.node_name,
                    node_description = EXCLUDED.node_description,
                    subject_slug = EXCLUDED.subject_slug,
                    module_id = EXCLUDED.module_id,
                    difficulty_level = EXCLUDED.difficulty_level
            """), {"nid": nid, "name": name, "desc": desc, "mid": mod_id, "diff": diff})
            
            # 2. Seed Content Pillars (Placeholders for Phase 14)
            for sig_type in ['video', 'mcq', 'recall']:
                url = f"https://saritclasses.com/environment/{sig_type}/{nid}" if sig_type == 'video' else f"api/v1/environment/{sig_type}/{nid}"
                meta = '{"duration": 300, "provider": "sarit_internal"}' if sig_type == 'video' else '{"type": "adaptive"}'
                
                db.execute(text("""
                    INSERT INTO concept_signals (node_id, signal_type, content_url, metadata)
                    VALUES (:nid, :st, :url, :meta)
                    ON CONFLICT (node_id, signal_type) DO UPDATE SET content_url = EXCLUDED.content_url
                """), {
                    "nid": nid, "st": sig_type, "url": url, "meta": meta
                })
            
            total_nodes += 1

    db.commit()
    print(f"✅ Environment Subject Deployed: {total_nodes} nodes across 11 modules.")
    db.close()

if __name__ == "__main__":
    seed_environment()
