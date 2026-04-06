import sqlite3
import uuid
import os

# Root Database Path
DB_PATH = "backend/eduecosystem_v2.db"

def seed_history_master():
    if not os.path.exists(DB_PATH):
        print(f"ERROR: Database not found at {DB_PATH}")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    print(f"Connected to database: {DB_PATH}")

    # 1. Saturate Topics (Ancient History)
    topics_per_module = {
        "HIS_MOD_1": ["Name of India etymology", "Ethnic mixing crucible", "Cultural Unity in Diversity", "Historical Significance"],
        "HIS_MOD_2": ["Colonial Historiography", "Nationalist Response", "Marxist Interpretations", "Subaltern views"],
        "HIS_MOD_3": ["Archaeological Excavations", "Inscriptions (Epigraphy)", "Coins (Numismatics)", "Literary Accounts"],
        "HIS_MOD_4": ["River System Impact", "Passes in NW Frontiers", "Monsoon & Agriculture", "Plains vs Plateaus"],
        "HIS_MOD_5": ["Hunter-Gatherer Tech", "Cave Paintings (Bhimbetka)", "Domestication starts", "Microliths age"],
        "HIS_MOD_6": ["Neolithic Villages", "Pottery Evolution", "Copper Hoards", "Black & Red Ware"],
        "HIS_MOD_7": ["Harappan Town Planning", "IVC Seals & Script", "Indus Trade Networks", "The Decline Theories"],
        "HIS_MOD_8": ["Rigvedic Pantheon", "Later Vedic Rituals", "Iron Age transition", "Gurus & Gurukuls"],
        "HIS_MOD_9": ["Gautama Buddha Life", "Mahavira Teachings", "Buddhist Councils", "Impact on Art"],
        "HIS_MOD_10": ["16 Mahajanapadas", "Magadha Hegemony", "Alexander Invasion", "Persian Influence"],
        "HIS_MOD_11": ["Kautilya Arthashastra", "Ashoka Edicts", "Mauryan Bureaucracy", "Dhamma Concept"],
        "HIS_MOD_12": ["Gandhara vs Mathura Art", "Kanishka & Mahayana", "Indo-Greeks impact", "Kharavela of Kalinga"],
        "HIS_MOD_13": ["Sangam Literature", "Three Crowns (Chera/Chola/Pandya)", "Satavahana Society", "Roman Trade"],
        "HIS_MOD_14": ["Chandra Gupta II", "Land Grants Evolution", "Aryabhata & Vikramaditya", "Temple Architecture"],
        "HIS_MOD_15": ["Harshavardhana Reign", "Xuanzang Accounts", "Pallava Rathas", "Tripartite Struggle Start"]
    }

    node_count = 0
    for m_id, topics in topics_per_module.items():
        # Get Module Integer from ID
        m_num = int(m_id.split('_')[-1])
        for t_idx, topic_name in enumerate(topics):
            # 7-Node Multiplier
            node_types = [
                ("T", "Theory Core", "VIDEO"),
                ("M", "Map/Location", "MCQ"),
                ("S", "UPSC Strategy", "PYQ"),
                ("C", "Art & Culture", "NOTE"),
                ("V", "Remediation Video", "VIDEO"),
                ("Q", "Diagnostic MCQ", "MCQ"),
                ("A", "AI Synthesis", "NOTE")
            ]
            
            for code, n_type, sig_type in node_types:
                node_id = f"{m_id}_{t_idx}_{code}"
                # Check if exists
                cursor.execute("SELECT node_id FROM concept_nodes WHERE node_id = ?", (node_id,))
                if not cursor.fetchone():
                    # Insert Concept Node
                    cursor.execute("""
                        INSERT INTO concept_nodes 
                        (node_id, subject_slug, module_id, node_name, node_description, difficulty_level) 
                        VALUES (?, ?, ?, ?, ?, ?)
                    """, (node_id, "history", m_num, f"{topic_name} - {n_type}", 
                          f"Mastery node for {topic_name}. Optimized for UPSC 2025 morning batch.",
                          "FOUNDATION" if code in ["T", "M"] else "UPSC_OVERLAY"))
                    
                    # Insert Signal
                    cursor.execute("""
                        INSERT INTO concept_signals 
                        (node_id, signal_type, content_url, metadata) 
                        VALUES (?, ?, ?, ?)
                    """, (node_id, sig_type, f"content/his/{node_id}", '{"title": "Mastery Concept", "batch": "Mians ready Dec 2025"}'))
                    
                    node_count += 1

    conn.commit()
    print(f"SUCCESS: Saturated History Knowledge Graph with {node_count} nodes for Phase 18.")
    conn.close()

if __name__ == "__main__":
    seed_history_master()
