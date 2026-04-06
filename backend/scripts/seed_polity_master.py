import sqlite3
import os

DB_PATH = r'd:\Development\EduEcosystem\backend\eduecosystem_v2.db'

# Define the 13 Modules from the Foundation Outline
modules = [
    {"id": "POL_MOD_0", "name": "P0: Constitutional Thinking Framework"},
    {"id": "POL_MOD_1", "name": "P1: The Preamble \u2014 Soul of the Constitution"},
    {"id": "POL_MOD_2", "name": "P2: Fundamental Rights \u2014 Articles 12 to 35"},
    {"id": "POL_MOD_3", "name": "P3: Directive Principles and Fundamental Duties"},
    {"id": "POL_MOD_4", "name": "P4: Union Executive \u2014 President, PM, and Cabinet"},
    {"id": "POL_MOD_5", "name": "P5: Parliament \u2014 Structure, Powers, and Procedures"},
    {"id": "POL_MOD_6", "name": "P6: Union Judiciary \u2014 Supreme Court and High Courts"},
    {"id": "POL_MOD_7", "name": "P7: State Government \u2014 Governor, CM, and Legislature"},
    {"id": "POL_MOD_8", "name": "P8: Centre-State Relations \u2014 The Federal Architecture"},
    {"id": "POL_MOD_9", "name": "P9: Local Government \u2014 73rd and 74th Amendments"},
    {"id": "POL_MOD_10", "name": "P10: Constitutional Bodies \u2014 Independent Institutions"},
    {"id": "POL_MOD_11", "name": "P11: Emergency Provisions and Special Constitutional Areas"},
    {"id": "POL_MOD_12", "name": "P12: Amendment Procedure and Constitutional Evolution"}
]

# Raw Topics per module extracted from outline (Simulating the 65 topics)
topics_map = {
    "POL_MOD_0": ["What is a Constitution", "Constitutional History", "Constituent Assembly", "How to Read an Article"],
    "POL_MOD_1": ["Preamble - Word by Word", "Preamble Legal Status & Basic Structure"],
    "POL_MOD_2": ["Art 12/13 - State & Law", "Right to Equality (14-18)", "Right to Freedom (19-22)", "Right Against Exploitation (23-24)", "Freedom of Religion (25-28)", "Cultural/Educational Rights (29-30)", "Constitutional Remedies (32)", "Art 21 Expansions (Privacy, Dignity)"],
    "POL_MOD_3": ["DPSP Details (36-51)", "FR vs DPSP Conflict", "Fundamental Duties (51A)"],
    "POL_MOD_4": ["President (Election/Powers)", "Presidential Discretion", "Vice President", "Prime Minister", "Council of Ministers", "Attorney General"],
    "POL_MOD_5": ["Lok Sabha", "Rajya Sabha", "Types of Bills", "Parliamentary Procedures", "Privileges & Anti-Defection", "Budget & Financial Control"],
    "POL_MOD_6": ["Supreme Court Composition", "SC Jurisdiction", "Judicial Review Scope", "Judicial Independence", "High Courts & Subordinate Courts"],
    "POL_MOD_7": ["Governor Role", "CM & Council of Ministers", "State Legislature", "Article 356 Controversies"],
    "POL_MOD_8": ["Legislative Relations", "Administrative Relations", "Financial Relations", "Cooperative Federalism"],
    "POL_MOD_9": ["73rd Amendment (Panchayats)", "74th Amendment (Municipalities)", "Challenges in Decentralisation"],
    "POL_MOD_10": ["Election Commission", "CAG", "UPSC", "Finance Commission & NITI Aayog", "Other Constitutional Bodies"],
    "POL_MOD_11": ["National Emergency (352)", "President's Rule (356)", "Financial Emergency (360)", "Special Provisions (5th/6th Sch, 370)"],
    "POL_MOD_12": ["Amendment Procedure (368)", "Basic Structure Doctrine", "Major Constitutional Amendments"]
}

# The sub-node dimension multiplier to reach proper SATURATION (>400 nodes)
# We will create nodes representing Theory, Case Law, Current Trend, Exceptions, etc.
dimension_suffix = [
    ("CORE", "Core Constitutional Provision", 1.0),
    ("MEC", "Mechanics & Exceptions", 1.5),
    ("CASE", "Landmark Case Law", 2.0),
    ("UPSC", "UPSC Past Year Application", 1.8),
    ("INT", "Contemporary Issues & Intersections", 2.2),
    ("COMP", "Comparative Analysis (USA/UK)", 2.5),
    ("APP", "Applied Governance & Administration", 1.8),
    ("HSTR", "Historical Evolution", 1.2)
]

def seed_polity_nodes():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("--- [PHASE 20] INITIATING POLITY CURRICULUM SATURATION ---")
    
    # Prune old skeletal polity nodes
    cursor.execute("DELETE FROM concept_nodes WHERE subject_slug = 'polity'")
    
    idx = 1
    total_inserted = 0
    
    for mod_idx, mod in enumerate(modules):
        mod_id = mod["id"]
        topics = topics_map.get(mod_id, [])
        
        for t_idx, topic in enumerate(topics):
            # Generate the granular sub-nodes
            prev_node_id = None
            
            for d_idx, (suffix, suffix_desc, diff_mult) in enumerate(dimension_suffix):
                # We skip Comparative Analysis for some modules to add variety
                if suffix == "COMP" and (mod_idx in [9, 10, 11]):
                    continue
                
                node_id = f"POL_M{mod_idx}_T{t_idx+1}_{suffix}"
                node_name = f"{topic}: {suffix_desc}"
                difficulty =  min(1.0 + (diff_mult * 0.5) + (mod_idx * 0.1), 4.0)
                relevance = min(difficulty * 2.2, 10.0)
                
                # Setup Prerequisite chaining
                prereqs = "[]"
                if prev_node_id:
                    prereqs = f"[\"{prev_node_id}\"]"
                    
                # Cross-Pollination Rule: Link Article 370 directly to GEO map
                if "370" in topic and suffix == "INT":
                    prereqs = f"[\"{prev_node_id}\", \"GEO_M09_PEARLS_GEO\"]"
                
                cursor.execute("""
                    INSERT INTO concept_nodes (
                        subject_slug, module_id, node_id, node_name, 
                        difficulty_level, exam_relevance, prerequisite_nodes
                    ) VALUES (?, ?, ?, ?, ?, ?, ?)
                """, (
                    'polity', mod_id, node_id, node_name,
                    difficulty, relevance, prereqs
                ))
                total_inserted += 1
                prev_node_id = node_id
                
        print(f"[{mod_id}] Injected {len(topics)} Topics into highly granular nodes.")
    
    conn.commit()
    conn.close()
    print(f"--- POLITY SATURATION COMPLETE: {total_inserted} Nodes Injected ---")

if __name__ == "__main__":
    seed_polity_nodes()
