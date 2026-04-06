import sqlite3
import json
from pydantic import BaseModel
from typing import List, Optional, Union, Any

# Replicate Schemas from knowledge_graph.py
class GraphNode(BaseModel):
    id: str
    label: str
    difficulty: str
    exam_relevance: str
    module_order: Optional[Union[int, str]] = None
    context_nodes: List[str] = []

class GraphEdge(BaseModel):
    source: str
    target: str
    type: Optional[str] = "prerequisite"

class KnowledgeGraphOut(BaseModel):
    nodes: List[GraphNode]
    edges: List[GraphEdge]

# Replicate Helpers
def _parse_json(data: Any, default: Any = None) -> Any:
    if data is None: return default
    if isinstance(data, (dict, list)): return data
    try: return json.loads(data)
    except: return default

def _normalize_difficulty(val: Any) -> str:
    if not val: return "FOUNDATION"
    s_val = str(val).upper()
    if s_val in ["FOUNDATION", "UPSC_OVERLAY", "ADVANCED"]: return s_val
    try:
        f_val = float(val)
        if f_val < 2.0: return "FOUNDATION"
        if f_val < 2.8: return "UPSC_OVERLAY"
        return "ADVANCED"
    except: return "FOUNDATION"

def reproduce():
    conn = sqlite3.connect('backend/eduecosystem_v2.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    subject_slug = 'history'
    print(f"Fetching nodes for {subject_slug}...")
    cursor.execute("""
        SELECT node_id, node_name, difficulty_level, exam_relevance, module_id, context_nodes
        FROM concept_nodes WHERE subject_slug = ? ORDER BY node_id
    """, (subject_slug,))
    rows = cursor.fetchall()
    
    nodes = []
    for r in rows:
        try:
            relevance = _parse_json(r['exam_relevance'], {})
            context = _parse_json(r['context_nodes'], [])
            node = GraphNode(
                id=str(r['node_id']), 
                label=str(r['node_name']),
                difficulty=_normalize_difficulty(r['difficulty_level']),
                exam_relevance=str(relevance.get("UPSC", "medium")) if isinstance(relevance, dict) else "medium",
                module_order=r['module_id'],
                context_nodes=context if isinstance(context, list) else [],
            )
            nodes.append(node)
        except Exception as e:
            print(f"FAILED NODE {r['node_id']}: {e}")
            # traceback
            import traceback
            traceback.print_exc()
            
    print(f"Fetched {len(nodes)} nodes.")
    
    print(f"Fetching edges for {subject_slug}...")
    cursor.execute("""
        SELECT cn_from.node_id, cn_to.node_id, cr.relationship_type
        FROM concept_relationships cr
        JOIN concept_nodes cn_from ON cn_from.id = cr.from_node_id
        JOIN concept_nodes cn_to   ON cn_to.id   = cr.to_node_id
        WHERE cn_from.subject_slug = ?
    """, (subject_slug,))
    edge_rows = cursor.fetchall()
    
    edges = []
    for r in edge_rows:
        try:
            edge = GraphEdge(source=str(r[0]), target=str(r[1]), type=str(r[2]) if r[2] else "prerequisite")
            edges.append(edge)
        except Exception as e:
            print(f"FAILED EDGE {r[0]} -> {r[1]}: {e}")
            
    print(f"Fetched {len(edges)} edges.")
    
    try:
        final = KnowledgeGraphOut(nodes=nodes, edges=edges)
        print("SUCCESS: KnowledgeGraphOut validated.")
    except Exception as e:
        print(f"FAILED FINAL VALIDATION: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    reproduce()
