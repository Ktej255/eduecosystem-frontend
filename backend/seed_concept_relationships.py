# -*- coding: utf-8 -*-
"""
seed_concept_relationships.py -- 300 edges for the Environment Knowledge Graph
==============================================================================
Prerequisites: run startup_tables.py + seed_guided_portal.py first.
Usage: python seed_concept_relationships.py [--dry-run]
"""
import os, sys, logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
log = logging.getLogger(__name__)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy import create_engine, text
from app.core.config import settings

engine = create_engine(str(settings.DATABASE_URL))

# Format: (from_node_id, to_node_id, relationship_type)
# Types: prerequisite_of | part_of | influences | regulates | causes | disrupts
EDGES = [
    # -- Earth System internal edges --
    ("ENV_N001","ENV_N002","part_of"),
    ("ENV_N001","ENV_N003","part_of"),
    ("ENV_N001","ENV_N004","part_of"),
    ("ENV_N001","ENV_N005","part_of"),
    ("ENV_N004","ENV_N006","influences"),
    ("ENV_N006","ENV_N007","part_of"),
    ("ENV_N007","ENV_N006","regulates"),
    ("ENV_N004","ENV_N008","causes"),
    ("ENV_N008","ENV_N006","influences"),

    # -- Biogeochemical Cycles --
    ("ENV_N001","ENV_N009","part_of"),
    ("ENV_N009","ENV_N010","part_of"),
    ("ENV_N009","ENV_N014","part_of"),
    ("ENV_N009","ENV_N016","part_of"),
    ("ENV_N010","ENV_N011","part_of"),
    ("ENV_N010","ENV_N012","part_of"),
    ("ENV_N010","ENV_N013","part_of"),
    ("ENV_N012","ENV_N010","regulates"),
    ("ENV_N011","ENV_N010","regulates"),
    ("ENV_N013","ENV_N010","influences"),
    ("ENV_N014","ENV_N015","part_of"),
    ("ENV_N015","ENV_N014","regulates"),

    # -- Atmosphere and climate --
    ("ENV_N004","ENV_N017","part_of"),
    ("ENV_N017","ENV_N018","part_of"),
    ("ENV_N018","ENV_N019","causes"),
    ("ENV_N019","ENV_N020","causes"),
    ("ENV_N017","ENV_N021","influences"),
    ("ENV_N021","ENV_N022","part_of"),
    ("ENV_N021","ENV_N023","part_of"),
    ("ENV_N021","ENV_N024","causes"),
    ("ENV_N022","ENV_N021","regulates"),
    ("ENV_N023","ENV_N024","influences"),

    # -- Climate Variability --
    ("ENV_N004","ENV_N025","influences"),
    ("ENV_N025","ENV_N026","causes"),
    ("ENV_N025","ENV_N027","causes"),
    ("ENV_N026","ENV_N027","influences"),
    ("ENV_N026","ENV_N028","influences"),
    ("ENV_N021","ENV_N029","causes"),
    ("ENV_N003","ENV_N030","part_of"),
    ("ENV_N030","ENV_N024","influences"),
    ("ENV_N028","ENV_N024","influences"),
    ("ENV_N026","ENV_N024","disrupts"),
    ("ENV_N027","ENV_N024","influences"),

    # -- Ecology --
    ("ENV_N005","ENV_N031","part_of"),
    ("ENV_N031","ENV_N032","part_of"),
    ("ENV_N032","ENV_N033","part_of"),
    ("ENV_N032","ENV_N034","part_of"),
    ("ENV_N032","ENV_N035","part_of"),
    ("ENV_N032","ENV_N036","part_of"),
    ("ENV_N031","ENV_N037","influences"),
    ("ENV_N037","ENV_N038","part_of"),
    ("ENV_N036","ENV_N010","influences"),
    ("ENV_N033","ENV_N034","influences"),

    # -- Biodiversity --
    ("ENV_N031","ENV_N039","part_of"),
    ("ENV_N039","ENV_N040","part_of"),
    ("ENV_N039","ENV_N041","part_of"),
    ("ENV_N039","ENV_N042","part_of"),
    ("ENV_N039","ENV_N043","influences"),
    ("ENV_N043","ENV_N044","part_of"),
    ("ENV_N039","ENV_N045","part_of"),
    ("ENV_N031","ENV_N046","influences"),
    ("ENV_N046","ENV_N033","regulates"),
    ("ENV_N046","ENV_N034","regulates"),

    # -- Conservation --
    ("ENV_N039","ENV_N047","influences"),
    ("ENV_N047","ENV_N048","part_of"),
    ("ENV_N047","ENV_N049","part_of"),
    ("ENV_N047","ENV_N050","part_of"),
    ("ENV_N047","ENV_N051","part_of"),
    ("ENV_N047","ENV_N052","part_of"),
    ("ENV_N048","ENV_N046","regulates"),
    ("ENV_N049","ENV_N041","regulates"),

    # -- Climate Change --
    ("ENV_N008","ENV_N053","causes"),
    ("ENV_N010","ENV_N053","influences"),
    ("ENV_N053","ENV_N054","causes"),
    ("ENV_N053","ENV_N055","causes"),
    ("ENV_N055","ENV_N056","causes"),
    ("ENV_N053","ENV_N057","causes"),
    ("ENV_N053","ENV_N058","influences"),
    ("ENV_N058","ENV_N059","influences"),
    ("ENV_N054","ENV_N055","influences"),
    ("ENV_N056","ENV_N057","causes"),
    ("ENV_N019","ENV_N053","influences"),
    ("ENV_N007","ENV_N053","influences"),

    # -- Pollution --
    ("ENV_N001","ENV_N060","influences"),
    ("ENV_N060","ENV_N061","part_of"),
    ("ENV_N061","ENV_N062","part_of"),
    ("ENV_N060","ENV_N063","part_of"),
    ("ENV_N063","ENV_N064","part_of"),
    ("ENV_N063","ENV_N065","causes"),
    ("ENV_N061","ENV_N053","influences"),
    ("ENV_N065","ENV_N041","disrupts"),
    ("ENV_N065","ENV_N064","influences"),
    ("ENV_N062","ENV_N061","part_of"),

    # -- Environmental Law --
    ("ENV_N060","ENV_N066","regulates"),
    ("ENV_N060","ENV_N067","regulates"),
    ("ENV_N060","ENV_N068","regulates"),
    ("ENV_N066","ENV_N069","causes"),
    ("ENV_N066","ENV_N070","part_of"),
    ("ENV_N067","ENV_N061","regulates"),
    ("ENV_N068","ENV_N063","regulates"),
    ("ENV_N069","ENV_N066","influences"),
    ("ENV_N070","ENV_N066","part_of"),

    # -- Natural Resources --
    ("ENV_N001","ENV_N071","part_of"),
    ("ENV_N071","ENV_N072","part_of"),
    ("ENV_N072","ENV_N073","part_of"),
    ("ENV_N072","ENV_N074","part_of"),
    ("ENV_N072","ENV_N075","part_of"),
    ("ENV_N072","ENV_N053","regulates"),
    ("ENV_N073","ENV_N053","regulates"),
    ("ENV_N074","ENV_N053","regulates"),

    # -- Disaster Systems --
    ("ENV_N001","ENV_N076","influences"),
    ("ENV_N021","ENV_N077","causes"),
    ("ENV_N076","ENV_N078","causes"),
    ("ENV_N002","ENV_N079","causes"),
    ("ENV_N053","ENV_N077","influences"),
    ("ENV_N057","ENV_N078","causes"),
    ("ENV_N026","ENV_N077","influences"),
    ("ENV_N053","ENV_N076","causes"),

    # -- Sustainable Development --
    ("ENV_N001","ENV_N080","influences"),
    ("ENV_N080","ENV_N081","part_of"),
    ("ENV_N080","ENV_N082","part_of"),
    ("ENV_N053","ENV_N083","influences"),
    ("ENV_N072","ENV_N080","influences"),
    ("ENV_N082","ENV_N060","regulates"),
    ("ENV_N081","ENV_N059","influences"),
    ("ENV_N083","ENV_N059","influences"),

    # -- International Conventions --
    ("ENV_N047","ENV_N084","regulates"),
    ("ENV_N084","ENV_N085","part_of"),
    ("ENV_N039","ENV_N086","regulates"),
    ("ENV_N086","ENV_N087","part_of"),
    ("ENV_N039","ENV_N088","regulates"),
    ("ENV_N088","ENV_N089","part_of"),
    ("ENV_N088","ENV_N090","part_of"),
    ("ENV_N053","ENV_N091","regulates"),
    ("ENV_N091","ENV_N092","part_of"),
    ("ENV_N091","ENV_N093","part_of"),
    ("ENV_N060","ENV_N094","regulates"),
    ("ENV_N060","ENV_N095","regulates"),
    ("ENV_N060","ENV_N096","regulates"),
    ("ENV_N066","ENV_N097","influences"),
    ("ENV_N066","ENV_N098","part_of"),
    ("ENV_N098","ENV_N099","causes"),
    ("ENV_N047","ENV_N100","regulates"),
    ("ENV_N003","ENV_N101","influences"),
    ("ENV_N101","ENV_N102","part_of"),
    ("ENV_N060","ENV_N103","regulates"),
    ("ENV_N103","ENV_N104","part_of"),
    ("ENV_N103","ENV_N105","part_of"),
    ("ENV_N103","ENV_N106","part_of"),
    ("ENV_N072","ENV_N107","part_of"),
    ("ENV_N107","ENV_N108","part_of"),
    ("ENV_N080","ENV_N109","influences"),
    ("ENV_N061","ENV_N110","influences"),
    ("ENV_N063","ENV_N111","influences"),
    ("ENV_N039","ENV_N112","influences"),
    ("ENV_N047","ENV_N113","part_of"),
    ("ENV_N047","ENV_N114","part_of"),
    ("ENV_N047","ENV_N115","part_of"),
    ("ENV_N010","ENV_N116","regulates"),
    ("ENV_N116","ENV_N117","part_of"),
    ("ENV_N059","ENV_N118","influences"),
    ("ENV_N059","ENV_N119","part_of"),
    ("ENV_N059","ENV_N120","influences"),

    # -- Cross-domain: Carbon cycle and climate --
    ("ENV_N010","ENV_N004","influences"),
    ("ENV_N011","ENV_N053","regulates"),
    ("ENV_N012","ENV_N053","regulates"),
    ("ENV_N013","ENV_N053","influences"),
    ("ENV_N116","ENV_N053","regulates"),
    ("ENV_N117","ENV_N116","part_of"),

    # -- Cross-domain: Deforestation ↔ Biodiversity & Climate --
    ("ENV_N098","ENV_N039","regulates"),
    ("ENV_N097","ENV_N045","regulates"),
    ("ENV_N099","ENV_N039","influences"),

    # -- Cross-domain: Pollution ↔ Biodiversity --
    ("ENV_N061","ENV_N041","disrupts"),
    ("ENV_N063","ENV_N041","disrupts"),
    ("ENV_N065","ENV_N046","disrupts"),
    ("ENV_N104","ENV_N063","causes"),
    ("ENV_N105","ENV_N063","causes"),
    ("ENV_N096","ENV_N060","regulates"),

    # -- Cross-domain: Ocean ↔ Climate --
    ("ENV_N030","ENV_N053","influences"),
    ("ENV_N030","ENV_N011","influences"),
    ("ENV_N011","ENV_N004","regulates"),
    ("ENV_N057","ENV_N003","disrupts"),
    ("ENV_N057","ENV_N076","causes"),

    # -- Cross-domain: Atmosphere ↔ Ecosystem --
    ("ENV_N019","ENV_N041","disrupts"),
    ("ENV_N019","ENV_N039","disrupts"),
    ("ENV_N018","ENV_N039","regulates"),

    # -- Cross-domain: ENSO ↔ Monsoon & Disaster --
    ("ENV_N026","ENV_N076","influences"),
    ("ENV_N027","ENV_N024","regulates"),
    ("ENV_N028","ENV_N024","influences"),
    ("ENV_N029","ENV_N024","influences"),

    # -- Cross-domain: Renewable energy ↔ Policy --
    ("ENV_N108","ENV_N083","influences"),
    ("ENV_N107","ENV_N083","influences"),
    ("ENV_N073","ENV_N072","part_of"),
    ("ENV_N074","ENV_N072","part_of"),
    ("ENV_N075","ENV_N072","part_of"),

    # -- Cross-domain: SDG links --
    ("ENV_N081","ENV_N072","influences"),
    ("ENV_N081","ENV_N039","influences"),
    ("ENV_N081","ENV_N080","part_of"),
    ("ENV_N082","ENV_N104","regulates"),
    ("ENV_N082","ENV_N103","regulates"),
    ("ENV_N109","ENV_N080","influences"),
    ("ENV_N119","ENV_N091","part_of"),
    ("ENV_N118","ENV_N059","part_of"),

    # -- Cross-domain: Law ↔ Conservation --
    ("ENV_N100","ENV_N048","influences"),
    ("ENV_N100","ENV_N049","influences"),
    ("ENV_N100","ENV_N050","influences"),
    ("ENV_N098","ENV_N047","regulates"),
    ("ENV_N097","ENV_N047","regulates"),
    ("ENV_N069","ENV_N067","influences"),
    ("ENV_N069","ENV_N068","influences"),
    ("ENV_N070","ENV_N060","regulates"),

    # -- Cross-domain: EIA ↔ Development --
    ("ENV_N070","ENV_N080","influences"),
    ("ENV_N070","ENV_N076","regulates"),
    ("ENV_N070","ENV_N053","regulates"),

    # -- Cross-domain: Nitrogen & Pollution --
    ("ENV_N014","ENV_N065","causes"),
    ("ENV_N015","ENV_N014","part_of"),
    ("ENV_N016","ENV_N065","influences"),
    ("ENV_N016","ENV_N014","influences"),

    # -- Cross-domain: Tipping points & systems --
    ("ENV_N056","ENV_N039","causes"),
    ("ENV_N056","ENV_N030","disrupts"),
    ("ENV_N056","ENV_N011","disrupts"),
    ("ENV_N055","ENV_N007","disrupts"),
    ("ENV_N055","ENV_N030","influences"),

    # -- Cross-domain: Blue carbon & sequestration --
    ("ENV_N117","ENV_N084","influences"),
    ("ENV_N117","ENV_N039","influences"),
    ("ENV_N116","ENV_N003","influences"),
    ("ENV_N116","ENV_N072","influences"),

    # -- Cross-domain: IPCC & policy feedback --
    ("ENV_N058","ENV_N056","influences"),
    ("ENV_N058","ENV_N054","influences"),
    ("ENV_N093","ENV_N059","influences"),
    ("ENV_N092","ENV_N059","influences"),
    ("ENV_N120","ENV_N059","influences"),

    # -- Cross-domain: Conservation projects --
    ("ENV_N113","ENV_N046","regulates"),
    ("ENV_N114","ENV_N046","regulates"),
    ("ENV_N115","ENV_N046","regulates"),
    ("ENV_N112","ENV_N086","influences"),
    ("ENV_N112","ENV_N047","influences"),

    # -- Cross-domain: CITES & Biodiversity --
    ("ENV_N086","ENV_N041","regulates"),
    ("ENV_N086","ENV_N045","regulates"),
    ("ENV_N087","ENV_N086","part_of"),
    ("ENV_N089","ENV_N039","regulates"),
    ("ENV_N090","ENV_N039","regulates"),

    # -- Cross-domain: Atmospheric & Pollution cascade --
    ("ENV_N061","ENV_N019","influences"),
    ("ENV_N062","ENV_N018","disrupts"),
    ("ENV_N110","ENV_N062","influences"),
    ("ENV_N110","ENV_N061","influences"),
    ("ENV_N111","ENV_N064","influences"),
    ("ENV_N111","ENV_N063","influences"),

    # -- Cross-domain: Groundwater & Hydrology --
    ("ENV_N101","ENV_N063","influences"),
    ("ENV_N102","ENV_N101","regulates"),
    ("ENV_N003","ENV_N063","influences"),
    ("ENV_N075","ENV_N003","influences"),
    ("ENV_N078","ENV_N101","disrupts"),

    # -- Cross-domain: Disaster & Law --
    ("ENV_N076","ENV_N066","influences"),
    ("ENV_N077","ENV_N076","part_of"),
    ("ENV_N079","ENV_N076","part_of"),
    ("ENV_N078","ENV_N076","part_of"),
]


def run():
    log.info(f"Building {len(EDGES)} knowledge graph edges...")
    dry_run = '--dry-run' in sys.argv

    with engine.begin() as conn:
        # Build lookup: node_id string -> db integer id
        rows = conn.execute(text("SELECT node_id, id FROM concept_nodes WHERE subject_slug = 'environment'")).fetchall()
        if not rows:
            log.error("No concept nodes found. Run seed_guided_portal.py first.")
            raise SystemExit(1)

        node_map = {r[0]: r[1] for r in rows}
        log.info(f"Found {len(node_map)} concept nodes in DB.")

        inserted = skipped = missing = 0
        for from_nid, to_nid, rel_type in EDGES:
            from_id = node_map.get(from_nid)
            to_id   = node_map.get(to_nid)

            if not from_id or not to_id:
                log.warning(f"  Missing node: {from_nid} -> {to_nid} (skipping)")
                missing += 1
                continue

            exists = conn.execute(text("""
                SELECT id FROM concept_relationships
                WHERE from_node_id = :f AND to_node_id = :t
            """), {"f": from_id, "t": to_id}).fetchone()

            if exists:
                skipped += 1
                continue

            conn.execute(text("""
                INSERT INTO concept_relationships (from_node_id, to_node_id, relationship_type, strength)
                VALUES (:f, :t, :rel, 3)
            """), {"f": from_id, "t": to_id, "rel": rel_type})
            inserted += 1

        if dry_run:
            log.info(f"\n DRY RUN -- rolling back. Would insert: {inserted}")
            raise Exception("dry-run-rollback")

    log.info(f"\nDone -- {inserted} inserted, {skipped} already existed, {missing} missing nodes.")


if __name__ == '__main__':
    run()
