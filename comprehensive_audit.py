import json
from collections import Counter
import sqlite3 # The snapshot says SQLite v2, I'll check for a local .db file or just use the JSON as a proxy if I can't find the live DB.

# Since I can't access the live Postgres from here easily without psql, 
# I will use the production snapshot as the "ground truth" for the current metadata audit.
# I will also look for Question Bank linkages in the JSON if available.

file_path = 'd:/Development/EduEcosystem/backend/upsc_production_snapshot.json'

with open(file_path, 'r') as f:
    data = json.load(f)

nodes = data.get('nodes', [])
relationships = data.get('relationships', [])

# Map of node_id to internal id
node_id_to_internal = {n['node_id']: n['id'] for n in nodes}
internal_to_subject = {n['id']: n['subject_slug'] for n in nodes}

subject_stats = {}

# Initialize stats
for sub in set(n['subject_slug'] for n in nodes):
    subject_stats[sub] = {
        "nodes": 0,
        "edges": 0,
        "with_desc": 0,
        "with_relevance": 0,
        "with_prereqs": 0,
        "difficulty_dist": Counter(),
        "mcq_mapped": 0, # Need to check another source for this
        "pyq_mapped": 0
    }

for node in nodes:
    sub = node['subject_slug']
    stats = subject_stats[sub]
    stats["nodes"] += 1
    if node.get('node_description'): stats["with_desc"] += 1
    if node.get('exam_relevance') and node.get('exam_relevance') != '{}': stats["with_relevance"] += 1
    if node.get('prerequisite_nodes') and node.get('prerequisite_nodes') != '[]': stats["with_prereqs"] += 1
    stats["difficulty_dist"][node.get('difficulty_level', 'unknown')] += 1

for rel in relationships:
    from_id = rel.get('from_node_id')
    sub = internal_to_subject.get(from_id)
    if sub:
        subject_stats[sub]["edges"] += 1

# Check PYQ mappings (if in JSON)
pyqs = data.get('pyqs', [])
for pyq in pyqs:
    # Assuming pyq has links to nodes
    for node_id in pyq.get('nodes', []):
        sub = internal_to_subject.get(node_id)
        if sub:
            subject_stats[sub]["pyq_mapped"] += 1

# Print Audit Table
print(f"{'Subject':<15} | {'Nodes':<5} | {'Edges':<5} | {'Desc %':<6} | {'PYQ':<5}")
print("-" * 55)
for sub, s in sorted(subject_stats.items(), key=lambda x: x[1]['nodes'], reverse=True):
    desc_p = int((s['with_desc'] / s['nodes']) * 100) if s['nodes'] > 0 else 0
    print(f"{sub:<15} | {s['nodes']:<5} | {s['edges']:<5} | {desc_p:<6} | {s['pyq_mapped']:<5}")

# Critical Gaps Identification
print("\n--- CRITICAL GAPS ---")
for sub, s in subject_stats.items():
    if s['nodes'] < 100:
        print(f"LOW DENSITY: {sub} ({s['nodes']} nodes)")
    if s['edges'] < s['nodes'] * 0.1 and s['nodes'] > 50:
        print(f"WEAK CONNECTIVITY: {sub} ({s['edges']} edges / {s['nodes']} nodes)")
