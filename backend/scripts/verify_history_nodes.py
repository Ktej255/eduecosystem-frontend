import sqlite3
import json

DB_PATH = "../eduecosystem_v2.db"

def verify_history_nodes():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    
    print("--- Modern History Node Verification ---")
    
    # 1. Total Count
    c.execute("SELECT COUNT(*) FROM concept_nodes WHERE subject_slug='history' AND node_id LIKE 'HIS_MOD_%'")
    count = c.fetchone()[0]
    print(f"Total Modern History Nodes: {count} (Expected: 273)")
    
    # 2. Module Distribution
    print("\n--- Distribution by Module ---")
    c.execute("""
        SELECT module_id, COUNT(*) 
        FROM concept_nodes 
        WHERE subject_slug='history' AND node_id LIKE 'HIS_MOD_%'
        GROUP BY module_id
    """)
    for row in c.fetchall():
        print(f"{row[0]}: {row[1]} nodes")
        
    # 3. Synapse Check (Cross-Pollination)
    print("\n--- Cross-Pollination Synapses ---")
    synapse_queries = [
        ("HIS_MOD_CH25_GEOP", "GEO_M09_PEARLS_GEO"), # Partition
        ("HIS_MOD_CH07_GEOP", "GEO_M01_PHY_T1_SPATIAL"), # Revolt 1857
        ("HIS_MOD_CH35_CORE", "POL_M01_T1_HSTR"), # Constitution
    ]
    
    for node_id, expected_prereq in synapse_queries:
        c.execute("SELECT prerequisite_nodes FROM concept_nodes WHERE node_id=?", (node_id,))
        res = c.fetchone()
        if res:
            prereqs = json.loads(res[0])
            if expected_prereq in prereqs:
                print(f"✅ {node_id} correctly linked to {expected_prereq}")
            else:
                print(f"❌ {node_id} missing link to {expected_prereq}. Found: {prereqs}")
        else:
            print(f"⚠️ {node_id} not found in database.")

    conn.close()

if __name__ == "__main__":
    verify_history_nodes()
