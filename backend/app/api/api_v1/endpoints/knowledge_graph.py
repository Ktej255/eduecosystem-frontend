"""
knowledge_graph.py -- Knowledge Graph API endpoints
Mounted into guided_portal router via router.include_router().
"""
from typing import Any, List, Optional, Dict, Union
import json
from datetime import date

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import text as raw_sql

from app.api import deps
from app.models.user import User

router = APIRouter()


# ─── Schemas ──────────────────────────────────────────────────────────────────

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

class StudentGraphNode(GraphNode):
    mastery: float = 0.0
    status: str = "unstarted"   # strong | medium | weak | unstarted

class StudentKnowledgeGraphOut(BaseModel):
    nodes: List[StudentGraphNode]
    edges: List[GraphEdge]


# ─── Helpers ──────────────────────────────────────────────────────────────────

def _get_edges(db: Session, subject_slug: str) -> List[GraphEdge]:
    rows = db.execute(raw_sql("""
        SELECT cn_from.node_id, cn_to.node_id, cr.relationship_type
        FROM concept_relationships cr
        JOIN concept_nodes cn_from ON cn_from.id = cr.from_node_id
        JOIN concept_nodes cn_to   ON cn_to.id   = cr.to_node_id
        WHERE cn_from.subject_slug = :slug
    """), {"slug": subject_slug}).fetchall()
    
    edges = []
    for r in rows:
        try:
            edges.append(GraphEdge(source=str(r[0]), target=str(r[1]), type=str(r[2]) if r[2] else "prerequisite"))
        except Exception as e:
            print(f"ERROR: Failed to parse edge {r[0]} -> {r[1]} for subject {subject_slug}: {e}")
    return edges


def _mastery_status(score: float) -> str:
    if score >= 80: return "strong"
    if score >= 50: return "medium"
    if score > 0:   return "weak"
    return "unstarted"


def _parse_json(data: Any, default: Any = None) -> Any:
    """Helper to parse JSON strings from SQLite if they aren't already objects."""
    if data is None:
        return default
    if isinstance(data, (dict, list)):
        return data
    try:
        return json.loads(data)
    except (json.JSONDecodeError, TypeError):
        return default


def _normalize_difficulty(val: Any) -> str:
    """Maps numeric or non-standard difficulty levels to UI categories."""
    if not val:
        return "FOUNDATION"
    
    s_val = str(val).upper()
    if s_val in ["FOUNDATION", "UPSC_OVERLAY", "ADVANCED"]:
        return s_val
    
    # Handle numeric mapping
    try:
        f_val = float(val)
        if f_val < 2.0: return "FOUNDATION"
        if f_val < 2.8: return "UPSC_OVERLAY"
        return "ADVANCED"
    except ValueError:
        return "FOUNDATION"


# ─── Endpoints ────────────────────────────────────────────────────────────────

@router.get("/knowledge-graph")
def get_knowledge_graph(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """All concept nodes + edges for the graph visualiser."""
    try:
        rows = db.execute(raw_sql("""
            SELECT node_id, node_name, difficulty_level, exam_relevance, module_id, context_nodes
            FROM concept_nodes WHERE subject_slug = :slug ORDER BY node_id
        """), {"slug": subject_slug}).fetchall()

        nodes = []
        for r in rows:
            try:
                relevance = _parse_json(r[3], {})
                context = _parse_json(r[5], [])
                nodes.append(
                    GraphNode(
                        id=str(r[0]), 
                        label=str(r[1]),
                        difficulty=_normalize_difficulty(r[2]),
                        exam_relevance=str(relevance.get("UPSC", "medium")) if isinstance(relevance, dict) else "medium",
                        module_order=r[4],
                        context_nodes=context if isinstance(context, list) else [],
                    )
                )
            except Exception as e:
                print(f"ERROR processing node {r[0]}: {str(e)}")
                continue
                
        edges = _get_edges(db, subject_slug)
        return KnowledgeGraphOut(nodes=nodes, edges=edges)
    except Exception as e:
        import traceback
        error_detail = traceback.format_exc()
        print(f"FATAL ERROR in get_knowledge_graph: {error_detail}")
        return {"error": str(e), "traceback": error_detail}


@router.get("/student-knowledge-graph")
def get_student_knowledge_graph(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Knowledge graph with per-student mastery scores and status."""
    try:
        rows = db.execute(raw_sql("""
            SELECT cn.node_id, cn.node_name, cn.difficulty_level,
                   cn.exam_relevance, cn.module_id,
                   COALESCE(scm.mastery_score, 0) AS mastery,
                   cn.context_nodes
            FROM concept_nodes cn
            LEFT JOIN student_concept_mastery scm
                ON scm.node_id = cn.node_id AND scm.student_id = :sid
            WHERE cn.subject_slug = :slug ORDER BY cn.node_id
        """), {"slug": subject_slug, "sid": current_user.id}).fetchall()

        nodes = []
        for r in rows:
            try:
                rel_val = r[3]
                relevance = _parse_json(rel_val, {})
                cont_val = r[6]
                context = _parse_json(cont_val, [])
                
                # Safe mastery parsing
                try:
                    m_val = float(r[5]) if r[5] is not None else 0.0
                except (ValueError, TypeError):
                    m_val = 0.0

                nodes.append(
                    StudentGraphNode(
                        id=str(r[0]), 
                        label=str(r[1]),
                        difficulty=_normalize_difficulty(r[2]),
                        exam_relevance=str(relevance.get("UPSC", "medium")) if isinstance(relevance, dict) else "medium",
                        module_order=r[4],
                        mastery=round(m_val, 1),
                        status=_mastery_status(m_val),
                        context_nodes=context if isinstance(context, list) else [],
                    )
                )
            except Exception as node_err:
                print(f"ERROR: Node {r[0]} failed: {node_err}")
                continue

        edges = _get_edges(db, subject_slug)
        # Use simple dict for return to avoid Pydantic serialization overhead/crashes
        return {"nodes": [n.dict() for n in nodes], "edges": [e.dict() for e in edges]}
    except Exception as e:
        import traceback
        print(f"CRITICAL ERROR in get_student_knowledge_graph: {traceback.format_exc()}")
        return {"nodes": [], "edges": [], "error": str(e)}


@router.get("/weak-nodes")
def get_weak_nodes(
    subject_slug: str = "environment",
    threshold: float = 60.0,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Weak concept nodes with remediation suggestions."""
    try:
        rows = db.execute(raw_sql("""
            SELECT cn.node_id, cn.node_name, cn.difficulty_level, cn.exam_relevance,
                   cn.module_id, COALESCE(scm.mastery_score,0) AS mastery,
                   COALESCE(scm.attempt_count,0) AS attempts, scm.last_activity_date
            FROM concept_nodes cn
            LEFT JOIN student_concept_mastery scm
                ON scm.node_id = cn.node_id AND scm.student_id = :sid
            WHERE cn.subject_slug = :slug AND COALESCE(scm.mastery_score, 0) < :thr
            ORDER BY COALESCE(scm.mastery_score, 0) ASC LIMIT 20
        """), {"slug": subject_slug, "sid": current_user.id, "thr": threshold}).fetchall()

        weak = []
        for r in rows:
            try:
                node_id, name, diff, rel, mod_id, mastery, attempts, last_date = r
                relevance = _parse_json(rel, {})
                
                if attempts == 0:
                    sug, sug_text = "watch_video", "Watch the foundation video for this concept"
                elif mastery < 30:
                    sug, sug_text = "ai_conversation", "Have a focused AI conversation to rebuild understanding"
                else:
                    sug, sug_text = "practice_mcq", "Practice MCQs to reinforce understanding"

                weak.append({
                    "node_id": str(node_id), "node_name": str(name),
                    "mastery_score": round(float(mastery), 1) if mastery else 0.0, 
                    "attempt_count": int(attempts) if attempts else 0,
                    "difficulty": _normalize_difficulty(diff), 
                    "exam_relevance": str(relevance.get("UPSC", "medium")) if isinstance(relevance, dict) else "medium",
                    "module_id": mod_id, "suggestion": sug, "suggestion_text": sug_text,
                    "last_activity": str(last_date) if last_date else None,
                })
            except Exception:
                continue
        return {"student_id": current_user.id, "weak_node_count": len(weak), "weak_nodes": weak}
    except Exception as e:
        return {"student_id": current_user.id, "weak_node_count": 0, "weak_nodes": [], "error": str(e)}


@router.get("/revision-plan")
def get_revision_plan(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Today's revision plan: SM-2 due nodes + weakest unreviewed nodes."""
    today = date.today()

    due_rows = db.execute(raw_sql("""
        SELECT cn.node_id, cn.node_name, scm.mastery_score
        FROM student_concept_mastery scm
        JOIN concept_nodes cn ON cn.node_id = scm.node_id
        WHERE scm.student_id = :sid AND cn.subject_slug = :slug
          AND scm.next_review_date <= :today
        ORDER BY scm.mastery_score ASC LIMIT 5
    """), {"sid": current_user.id, "slug": subject_slug, "today": today}).fetchall()

    weak_rows = db.execute(raw_sql("""
        SELECT cn.node_id, cn.node_name, COALESCE(scm.mastery_score, 0) AS mastery
        FROM concept_nodes cn
        LEFT JOIN student_concept_mastery scm
            ON scm.node_id = cn.node_id AND scm.student_id = :sid
        WHERE cn.subject_slug = :slug AND COALESCE(scm.mastery_score, 0) < 60
        ORDER BY COALESCE(scm.mastery_score, 0) ASC LIMIT 5
    """), {"sid": current_user.id, "slug": subject_slug}).fetchall()

    plan, seen = [], set()
    for r in due_rows:
        if r[0] not in seen:
            plan.append({"node_id": r[0], "node_name": r[1], "reason": "spaced_repetition",
                         "mastery": round(r[2], 1), "estimated_minutes": 5})
            seen.add(r[0])
    for r in weak_rows:
        if r[0] not in seen:
            plan.append({"node_id": r[0], "node_name": r[1], "reason": "weak_concept",
                         "mastery": round(r[2], 1), "estimated_minutes": 8})
            seen.add(r[0])

    return {"date": str(today), "student_id": current_user.id,
            "total_minutes": sum(i["estimated_minutes"] for i in plan),
            "item_count": len(plan), "plan": plan}
