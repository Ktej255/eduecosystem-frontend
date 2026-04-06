import pytest
from sqlalchemy.orm import Session
from app.services.exam_intelligence import exam_intelligence_service
from app.models.concept_node import ConceptNode
from app.models.student_concept_mastery import StudentConceptMastery

def test_readiness_score_calculation(db: Session):
    # 1. Setup Mock Nodes
    node1 = ConceptNode(id=1, node_id="TEST_HIGH", subject_slug="test_subject", name="High Relevance", exam_relevance={"UPSC": 0.9})
    node2 = ConceptNode(id=2, node_id="TEST_LOW", subject_slug="test_subject", name="Low Relevance", exam_relevance={"UPSC": 0.1})
    db.add_all([node1, node2])
    db.commit()

    # 2. Setup Student Mastery
    # High relevance node has high mastery (80%)
    # Low relevance node has low mastery (20%)
    mastery1 = StudentConceptMastery(student_id=99, node_id=1, mastery_score=80.0)
    mastery2 = StudentConceptMastery(student_id=99, node_id=2, mastery_score=20.0)
    db.add_all([mastery1, mastery2])
    db.commit()

    # 3. Calculate Readiness
    result = exam_intelligence_service.calculate_readiness_score(db, 99, "test_subject")
    
    # Expected: Weighted average
    # Score = (80 * 0.9 + 20 * 0.1) / (0.9 + 0.1) = (72 + 2) / 1 = 74.0
    assert result["readiness_score"] == 74.0
    assert result["total_nodes"] == 2

def test_weak_node_spotlight(db: Session):
    # Setup node with high relevance but low mastery
    node_weak = ConceptNode(id=3, node_id="WEAK_HIGH", subject_slug="test_subject", name="Weak Area", exam_relevance={"UPSC": 1.0})
    db.add(node_weak)
    db.commit()
    
    mastery_weak = StudentConceptMastery(student_id=99, node_id=3, mastery_score=10.0)
    db.add(mastery_weak)
    db.commit()
    
    weak_spots = exam_intelligence_service.get_weak_node_spotlight(db, 99, "test_subject")
    
    # Should identify the high-relevance low-mastery node first
    assert len(weak_spots) > 0
    assert weak_spots[0]["node_id"] == "WEAK_HIGH"
    assert weak_spots[0]["risk_score"] > 80 # Highly relevant (1.0) * low mastery (10) results in high risk
