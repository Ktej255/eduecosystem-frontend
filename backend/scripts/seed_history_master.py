import sys
import os
import uuid
from datetime import datetime, timedelta

# Add backend to path
sys.path.append(os.path.join(os.path.dirname(__file__), ".."))

from app.db.session import SessionLocal
from app.models.upsc_models import ConceptNode, Subject, SubjectModule
from app.models.concept_signal import ConceptSignal, SignalType

def seed_history_master():
    db = SessionLocal()
    
    # 1. Ensure History Subject Exists
    history = db.query(Subject).filter(Subject.slug == "history").first()
    if not history:
        history = Subject(
            id=str(uuid.uuid4()),
            name="History",
            slug="history",
            description="Ancient, Medieval, and Modern History for UPSC CSE."
        )
        db.add(history)
        db.commit()

    # 2. Define 15-Module Ancient History Structure
    modules = [
        ("HIS_MOD_1", "Significance of Ancient History", "Unity, Diversity, and the Name of India."),
        ("HIS_MOD_2", "Historiography & Trends", "Colonial vs Nationalist vs Marxist views."),
        ("HIS_MOD_3", "Nature of Sources", "Archaeology, Epigraphy, Numismatics, Literature."),
        ("HIS_MOD_4", "Geographical & Ecological Setting", "Impact of Mountains, Rivers, and Flora/Fauna."),
        ("HIS_MOD_5", "Palaeolithic & Mesolithic Eras", "Biological evolution and early hunter-gatherers."),
        ("HIS_MOD_6", "Neolithic & Chalcolithic", "First farmers and the transition to Copper."),
        ("HIS_MOD_7", "Harappan/Indus Valley Civilization", "Town Planning, Trade, Religion, and Decline."),
        ("HIS_MOD_8", "Vedic Age (Early & Later)", "Rigvedic Society vs Later Vedic Transition."),
        ("HIS_MOD_9", "Jainism & Buddhism", "Rise of Heterodox Sects and Philosophy."),
        ("HIS_MOD_10", "Mahajanapadas & Magadha", "Rise of 16 States and Persian/Greek Invasions."),
        ("HIS_MOD_11", "The Mauryan Empire", "Ashoka, Dhamma, and Centralized Administration."),
        ("HIS_MOD_12", "Post-Mauryas & Foreign Contacts", "Shungas, Kushans, and Silk Road trade."),
        ("HIS_MOD_13", "Sangam Age & Deep South", "Literature, Society, and Satavahanas."),
        ("HIS_MOD_14", "The Gupta Age", "Administration, Golden Age Myth, and Science."),
        ("HIS_MOD_15", "Post-Guptas & Early Medieval", "Harsha, Chalukyas, and Pallavas.")
    ]

    for m_id, m_name, m_desc in modules:
        mod = db.query(SubjectModule).filter(SubjectModule.module_id == m_id).first()
        if not mod:
            mod = SubjectModule(
                id=str(uuid.uuid4()),
                subject_id=history.id,
                module_id=m_id,
                name=m_name,
                description=m_desc,
                order=int(m_id.split('_')[-1])
            )
            db.add(mod)
    db.commit()

    # 3. Saturate Topics
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
        for t_idx, topic_name in enumerate(topics):
            # 7-Node Multiplier
            node_types = [
                ("T", "Theory Core", "concept", SignalType.VIDEO),
                ("M", "Map/Location", "spatial", SignalType.MCQ),
                ("S", "UPSC Strategy", "strategic", SignalType.PYQ),
                ("C", "Art & Culture", "cultural", SignalType.NOTE),
                ("V", "Remediation Video", "video", SignalType.VIDEO),
                ("Q", "Diagnostic MCQ", "assessment", SignalType.MCQ),
                ("A", "AI Synthesis", "cognitive", SignalType.NOTE)
            ]
            
            for code, n_type, category, sig_type_enum in node_types:
                node_id = f"{m_id}_{t_idx}_{code}"
                node = db.query(ConceptNode).filter(ConceptNode.node_id == node_id).first()
                if not node:
                    node = ConceptNode(
                        id=str(uuid.uuid4()),
                        subject_id=history.id,
                        module_id=m_id,
                        node_id=node_id,
                        node_name=f"{topic_name} - {n_type}",
                        category=category,
                        global_difficulty=2 if code in ["T", "M"] else 3,
                        priority_weight=1.0 if code == "T" else 0.8
                    )
                    db.add(node)
                    db.commit() # Commit each node to ensure ID generation for signals
                    node_count += 1
                    
                    # Add Core Signal for each node
                    signal = ConceptSignal(
                        node_id=node.node_id,
                        signal_type=sig_type_enum,
                        content_url=f"content/his/{node_id}",
                        metadata={"title": f"Strategic Mastery: {topic_name}"}
                    )
                    db.add(signal)

    db.commit()
    print(f"Successfully saturated Ancient History Knowledge Graph with {node_count} nodes.")
    db.close()

if __name__ == "__main__":
    seed_history_master()
