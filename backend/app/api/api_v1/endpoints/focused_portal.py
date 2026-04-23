"""
Focused Portal API — Kajal's dedicated 43-day UPSC sprint system.
All data written to focused_study_sessions, focused_test_reports, focused_subject_gates tables.
Do NOT modify existing endpoints.
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import text
from typing import List, Optional
from datetime import date, datetime, timedelta
from pydantic import BaseModel
import json

from app.db.session import get_db
from app.api.deps import get_current_user

router = APIRouter()

# ─────────────────────────────────────────────────────────────
# SUBJECT SEQUENCE & PERSISTENT PROGRESS
# ─────────────────────────────────────────────────────────────

# The order of subjects to be completed in the "Sweep" phase.
# Progression is gate-based: pass a 10-Q test to unlock the next.
SUBJECT_SEQUENCE = [
    "Polity",
    "Environment",
    "Science & Technology",
    "Economy",
    "Agriculture",
    "Geography",
    "Ancient History",
    "Medieval History",
    "Modern History",
    "Art and Culture",
    "International Relations",
    "Indian Society"
]

def parse_json_field(value):
    """
    Safely load JSON data. Handles cases where the DB driver might have already
    parsed it into a list/dict, or where it's stored as a JSON string.
    """
    if value is None:
        return []
    if isinstance(value, (list, dict)):
        return value
    if isinstance(value, str):
        try:
            return json.loads(value)
        except Exception:
            # Fallback for malformed or non-JSON strings
            return [] if value.startswith('[') else {}
    return []

# Polity cluster names (from the 250Q file seeded in focused_questions)
POLITY_CLUSTERS = {
    1: "Preamble & Basic Structure",
    2: "Fundamental Rights",
    3: "DPSP & Fundamental Duties",
    4: "Parliament",
    5: "President, VP, PM & CoM",
    6: "Indian Judiciary",
    7: "Constitutional & Statutory Bodies",
    8: "Federalism & Centre-State Relations",
    9: "Local Government",
    10: "Emergency Provisions",
}

# The exam date for countdown purposes
EXAM_DATE = date(2026, 5, 24)
INTENSIVE_PHASE_START = date(2026, 5, 11)


def get_subject_status(db: Session, user_id: int, subject: str) -> str:
    """
    Returns the status of a subject for a user:
    - 'gate_passed': Score >= 6 in focused_subject_gates
    - 'needs_revision': Score < 6
    - 'in_progress': No gate record, but has study sessions
    - 'not_started': No records at all
    """
    gate = db.execute(
        text("SELECT passed, flagged_for_revision FROM focused_subject_gates WHERE user_id = :uid AND subject = :subj"),
        {"uid": user_id, "subj": subject}
    ).fetchone()

    if gate:
        return "gate_passed" if gate[0] else "needs_revision"

    study = db.execute(
        text("SELECT id FROM focused_study_sessions WHERE user_id = :uid AND subject = :subj LIMIT 1"),
        {"uid": user_id, "subj": subject}
    ).fetchone()

    return "in_progress" if study else "not_started"


def get_user_current_subject(db: Session, user_id: int) -> dict:
    """
    Finds the first subject in the sequence that is not yet 'gate_passed'.
    """
    for subject in SUBJECT_SEQUENCE:
        status = get_subject_status(db, user_id, subject)
        if status != "gate_passed":
            # For the current subject, we need to know WHICH cluster we are on.
            # Cluster is derived from the count of unique cluster_numbers in study sessions.
            res = db.execute(
                text("SELECT MAX(cluster_number) FROM focused_study_sessions WHERE user_id = :uid AND subject = :subj"),
                {"uid": user_id, "subj": subject}
            ).scalar()
            
            cluster_num = (res or 0) + 1
            # Cap cluster_num at max clusters (10 for Polity, 4 default for others for now)
            max_clusters = 10 if subject == "Polity" else 4
            cluster_num = min(cluster_num, max_clusters)

            # Get cluster name
            if subject == "Polity":
                cluster_name = POLITY_CLUSTERS.get(cluster_num, f"Cluster {cluster_num}")
            else:
                cluster_name = f"Cluster {cluster_num}"

            return {
                "subject": subject,
                "cluster_number": cluster_num,
                "cluster_name": cluster_name,
                "status": status
            }
    
    # All subjects done
    return {
        "subject": "Revision",
        "cluster_number": 1,
        "cluster_name": "Full Syllabus Revision",
        "status": "gate_passed"
    }


# ─────────────────────────────────────────────────────────────
# TRAP CARDS — Hardcoded per cluster (Polity clusters seeded)
# ─────────────────────────────────────────────────────────────

TRAP_CARDS = {
    "Polity:1": [
        {"wrong_belief": "The Berubari Union Case (1960) held that the Preamble IS part of the Constitution.",
         "correct_fact": "Berubari held the Preamble is NOT a part. Kesavananda Bharati (1973) later overruled this.",
         "cluster_name": "Preamble & Basic Structure"},
        {"wrong_belief": "The words 'Socialist,' 'Secular,' and 'Integrity' were in the original 1950 Constitution.",
         "correct_fact": "They were added by the 42nd Amendment in 1976 during the Emergency.",
         "cluster_name": "Preamble & Basic Structure"},
        {"wrong_belief": "Ideals of Liberty, Equality, and Fraternity were taken from the Russian Revolution.",
         "correct_fact": "Liberty, Equality, Fraternity come from the French Revolution. Justice ideals come from the Russian Revolution.",
         "cluster_name": "Preamble & Basic Structure"},
    ],
    "Polity:2": [
        {"wrong_belief": "Article 32 allows the Supreme Court to enforce both FRs and other legal rights.",
         "correct_fact": "Article 32 only covers Fundamental Rights. Article 226 (HC) has the wider scope for other legal rights.",
         "cluster_name": "Fundamental Rights"},
        {"wrong_belief": "Article 23 (Right against Exploitation) only protects against State actions.",
         "correct_fact": "Article 23 explicitly applies to private persons too — it protects against exploitation by anyone.",
         "cluster_name": "Fundamental Rights"},
        {"wrong_belief": "Bharat Ratna cannot be used as a prefix because it is a 'Title' banned under Article 18.",
         "correct_fact": "Bharat Ratna is a civilian honour, not a 'Title' under Article 18. But it still cannot be used as a prefix by convention.",
         "cluster_name": "Fundamental Rights"},
    ],
    "Polity:3": [
        {"wrong_belief": "DPSP were borrowed from the United States Constitution.",
         "correct_fact": "DPSPs were borrowed from the Irish Constitution (Eire).",
         "cluster_name": "DPSP & Fundamental Duties"},
        {"wrong_belief": "Fundamental Duties apply to all persons residing in India including foreigners.",
         "correct_fact": "Fundamental Duties apply ONLY to Indian citizens, not foreigners.",
         "cluster_name": "DPSP & Fundamental Duties"},
        {"wrong_belief": "The Swaran Singh Committee recommended Fundamental Duties AND Fundamental Rights.",
         "correct_fact": "The Swaran Singh Committee ONLY recommended Fundamental Duties, not Fundamental Rights.",
         "cluster_name": "DPSP & Fundamental Duties"},
    ],
    "Polity:4": [
        {"wrong_belief": "The President can return a Money Bill for reconsideration once.",
         "correct_fact": "The President CANNOT return a Money Bill. Assent is mandatory.",
         "cluster_name": "Parliament"},
        {"wrong_belief": "The Speaker of Lok Sabha is removed by a simple majority of those present and voting.",
         "correct_fact": "The Speaker is removed by an Effective Majority — majority of total membership of the House.",
         "cluster_name": "Parliament"},
        {"wrong_belief": "Under Anti-Defection, a 1/3rd split of the party protects against disqualification.",
         "correct_fact": "The 1/3rd split exception was removed by 91st Amendment (2003). Only a 2/3rd merger provides protection.",
         "cluster_name": "Parliament"},
    ],
    "Polity:5": [
        {"wrong_belief": "Nominated MPs participate in Presidential election.",
         "correct_fact": "Nominated MPs do NOT vote in the Presidential election. Only elected members vote.",
         "cluster_name": "President, VP, PM & CoM"},
        {"wrong_belief": "MLCs (state upper house members) vote in the Presidential election.",
         "correct_fact": "MLCs do NOT participate in the Presidential election. Only elected MLAs vote.",
         "cluster_name": "President, VP, PM & CoM"},
        {"wrong_belief": "The Governor is elected by the people of the state.",
         "correct_fact": "The Governor is APPOINTED by the President, not elected.",
         "cluster_name": "President, VP, PM & CoM"},
    ],
}

# Generic fallback for subjects/clusters not yet seeded
DEFAULT_TRAP = [
    {"wrong_belief": "All facts in isolation are enough for UPSC preparation.",
     "correct_fact": "UPSC tests connection of facts — cause, effect, and constitutional linkage matter most.",
     "cluster_name": "General"},
    {"wrong_belief": "Memorizing answers is more important than understanding mechanisms.",
     "correct_fact": "Understanding the WHY behind each fact prevents trap questions from tricking you.",
     "cluster_name": "General"},
    {"wrong_belief": "Recent amendments don't matter much for prelims.",
     "correct_fact": "Recent amendments are high-yield exam traps. Always check the latest position.",
     "cluster_name": "General"},
]


# ─────────────────────────────────────────────────────────────
# PYDANTIC SCHEMAS
# ─────────────────────────────────────────────────────────────

class PomodoroCompleteBody(BaseModel):
    subject: str
    cluster_number: int
    cluster_name: str
    pomodoro_number: int
    confidence_pulse: str  # RED, YELLOW, GREEN
    duration_minutes: int = 25


class TestSubmitUpdatedBody(BaseModel):
    subject: str
    cluster_id: int
    question_ids: List[int]
    answers: List[str]
    confidence: List[str]
    time_per_question: List[int]


class GateSubmitBody(BaseModel):
    subject: str
    answers: List[dict]          # [{question_id, selected_option, correct_option}]
    score: int


# ─────────────────────────────────────────────────────────────
# ENDPOINT 1 — GET FOCUSED DASHBOARD
# ─────────────────────────────────────────────────────────────

@router.get("/dashboard")
def get_focused_dashboard(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    user_id = current_user.id
    today_str = date.today().isoformat()
    
    # 1. Subject Map with Statuses
    subject_map = []
    for subject in SUBJECT_SEQUENCE:
        subject_map.append({
            "subject": subject,
            "status": get_subject_status(db, user_id, subject)
        })

    # 2. Current Active Task
    current = get_user_current_subject(db, user_id)
    
    # 3. Intensive Mode Check
    today = date.today()
    is_intensive_mode = today >= INTENSIVE_PHASE_START
    days_to_exam = (EXAM_DATE - today).days

    # 4. Morning session status (count today's pomodoros)
    morning_result = db.execute(
        text("SELECT COUNT(*) FROM focused_study_sessions WHERE user_id = :uid AND date = :today"),
        {"uid": user_id, "today": today_str}
    ).scalar()
    morning_pomodoros_done = morning_result or 0

    # 5. Evening test status
    evening_result = db.execute(
        text("SELECT COUNT(*) FROM focused_test_reports WHERE user_id = :uid AND date = :today"),
        {"uid": user_id, "today": today_str}
    ).scalar()
    evening_test_done = (evening_result or 0) > 0

    # 6. Streak
    streak = 0
    check_date = date.today()
    while True:
        count = db.execute(
            text("SELECT COUNT(*) FROM focused_study_sessions WHERE user_id = :uid AND date = :d"),
            {"uid": user_id, "d": check_date.isoformat()}
        ).scalar()
        if (count or 0) > 0:
            streak += 1
            check_date -= timedelta(days=1)
        else:
            break

    return {
        "subject_map": subject_map,
        "current_active": current,
        "is_intensive_mode": is_intensive_mode,
        "days_to_exam": days_to_exam,
        "morning_pomodoros_done": morning_pomodoros_done,
        "evening_test_done": evening_test_done,
        "streak": streak,
        "date": today_str,
    }


@router.get("/current-subject")
def get_current_active_subject(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return get_user_current_subject(db, current_user.id)


@router.get("/clusters/{subject}")
def get_clusters(
    subject: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    """
    Step 2 - Phase 2: Cluster Navigation Logic.
    Returns all clusters for a subject, their topics, and user progress.
    """
    user_id = current_user.id
    
    # 1. Get all clusters and their topics from focused_questions
    cluster_rows = db.execute(
        text("""
            SELECT cluster_number, ARRAY_AGG(DISTINCT topic_tag) as topics, MAX(cluster_name) as name
            FROM focused_questions
            WHERE subject ILIKE :subj
            GROUP BY cluster_number
            ORDER BY cluster_number
        """),
        {"subj": subject}
    ).fetchall()

    if not cluster_rows:
        return {"subject": subject, "clusters": []}

    # 2. Get progress for this user
    progress_rows = db.execute(
        text("""
            SELECT cluster_number, status
            FROM focused_cluster_progress
            WHERE user_id = :uid AND subject = :subj
        """),
        {"uid": user_id, "subj": subject}
    ).fetchall()
    
    progress_map = {r[0]: r[1] for r in progress_rows}

    # 3. Build response
    clusters = []
    found_next = False
    
    for row in cluster_rows:
        cl_num = row[0]
        topics = row[1]
        cl_name = row[2]
        status = progress_map.get(cl_num, "not_started")
        
        is_recommended_next = False
        if not found_next and status != 'completed':
            is_recommended_next = True
            found_next = True
            
        clusters.append({
            "cluster_number": cl_num,
            "topics": [cl_name] if cl_name else [],
            "status": status,
            "show_revise_button": status == "completed",
            "is_recommended_next": is_recommended_next
        })
        
    return {
        "subject": subject,
        "clusters": clusters
    }


# ─────────────────────────────────────────────────────────────
# ENDPOINT 2 — SUBMIT POMODORO SESSION
# ─────────────────────────────────────────────────────────────

@router.post("/pomodoro/complete")
def complete_pomodoro(
    body: PomodoroCompleteBody,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    pulse = body.confidence_pulse.upper()
    if pulse not in ("RED", "YELLOW", "GREEN"):
        raise HTTPException(status_code=400, detail="confidence_pulse must be RED, YELLOW, or GREEN")

    db.execute(
        text("""
            INSERT INTO focused_study_sessions
                (user_id, date, subject, cluster_number, cluster_name, pomodoro_number, confidence_pulse, duration_minutes)
            VALUES (:uid, :d, :subj, :cl_num, :cl_name, :pomo, :pulse, :dur)
        """),
        {
            "uid": current_user.id,
            "d": date.today().isoformat(),
            "subj": body.subject,
            "cl_num": body.cluster_number,
            "cl_name": body.cluster_name,
            "pomo": body.pomodoro_number,
            "pulse": pulse,
            "dur": body.duration_minutes,
        }
    )
    db.commit()

    # Check needs_attention: RED >= 2 for same subject+cluster
    red_count = db.execute(
        text("""
            SELECT COUNT(*) FROM focused_study_sessions
            WHERE user_id = :uid AND subject = :subj AND cluster_number = :cl_num
              AND confidence_pulse = 'RED'
        """),
        {"uid": current_user.id, "subj": body.subject, "cl_num": body.cluster_number}
    ).scalar()

    return {
        "status": "recorded",
        "needs_attention": (red_count or 0) >= 2,
        "message": "Confidence marked RED 2+ times on this cluster. Consider repeating before moving forward." if (red_count or 0) >= 2 else None,
    }


# ─────────────────────────────────────────────────────────────
# ENDPOINT 3 — GET TRAP CARDS
# ─────────────────────────────────────────────────────────────

@router.get("/trap-cards/{subject}/{cluster_number}")
def get_trap_cards(subject: str, cluster_number: int):
    key = f"{subject}:{cluster_number}"
    cards = TRAP_CARDS.get(key, DEFAULT_TRAP)
    return {"subject": subject, "cluster_number": cluster_number, "trap_cards": cards[:3]}


# ─────────────────────────────────────────────────────────────
# ENDPOINT 4 — GET MCQ TEST
# ─────────────────────────────────────────────────────────────

@router.get("/test/{subject}/{cluster_number}")
def get_test(
    subject: str,
    cluster_number: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """
    Evening practice session.
    Updated to read from focused_questions back (Project Decision).
    """
    rows = db.execute(
        text("""
            SELECT id, question_text, option_a, option_b, option_c, option_d, correct_answer, explanation, topic_tag
            FROM focused_questions
            WHERE subject ILIKE :subj
              AND cluster_number = :cl_num
            ORDER BY RANDOM()
            LIMIT 25
        """),
        {"subj": subject, "cl_num": cluster_number}
    ).fetchall()

    questions = []
    for r in rows:
        questions.append({
            "id": r[0],
            "question_text": r[1],
            "options": {
                "A": r[2],
                "B": r[3],
                "C": r[4],
                "D": r[5]
            },
            "correct_answer": r[6],
            "explanation": r[7],
            "topic_tag": r[8],
        })

    return {
        "subject": subject,
        "cluster_number": cluster_number,
        "total_questions": len(questions),
        "questions": questions,
    }



# ─────────────────────────────────────────────────────────────
# ENDPOINT 5 — SUBMIT TEST AND GENERATE DEEP REPORT
# ─────────────────────────────────────────────────────────────

@router.post("/test/submit")
def submit_test(
    body: TestSubmitUpdatedBody,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    user_id = current_user.id
    q_ids = body.question_ids
    u_ans = body.answers
    u_conf = body.confidence
    u_time = body.time_per_question

    # 1. Fetch Question Data
    rows = db.execute(
        text("SELECT id, correct_answer, topic_tag FROM focused_questions WHERE id = ANY(:ids)"),
        {"ids": q_ids}
    ).fetchall()
    
    q_data_map = {r[0]: {"ans": r[1], "tag": r[2]} for r in rows}

    # 2. Scoring Logic
    correct_ids = []
    wrong_ids = []
    skipped_count = 0
    lucky_guesses = 0
    trap_ids = []
    
    topic_stats = {} # {tag: {correct, total, time_sum, confidence_dist, lucky}}

    for i, qid in enumerate(q_ids):
        q_info = q_data_map.get(qid, {"ans": None, "tag": "Unknown"})
        tag = q_info["tag"] or f"Cluster {body.cluster_id}"
        correct_ans = q_info["ans"]
        user_ans = u_ans[i]
        conf = u_conf[i]
        time_ms = u_time[i]

        if tag not in topic_stats:
            topic_stats[tag] = {
                "correct": 0, "total": 0, "time_sum": 0, 
                "lucky": 0, 
                "conf_dist": {"Short Shot": 0, "50/50": 0, "Other": 0, "Only One Known": 0, "Blind Guess": 0, "Skip": 0}
            }

        topic_stats[tag]["total"] += 1
        topic_stats[tag]["time_sum"] += time_ms
        topic_stats[tag]["conf_dist"][conf] = topic_stats[tag]["conf_dist"].get(conf, 0) + 1

        is_correct = (correct_ans is not None and user_ans == correct_ans)
        
        if conf == "Skip":
            skipped_count += 1
        elif is_correct:
            correct_ids.append(qid)
            topic_stats[tag]["correct"] += 1
            if conf == "Blind Guess":
                topic_stats[tag]["lucky"] += 1
                lucky_guesses += 1
        else:
            wrong_ids.append(qid)
            # Trap Detection: Wrong AND Time < 8000ms
            if time_ms < 8000:
                trap_ids.append(qid)

    # 3. Finalize Topic Breakdown
    breakdown = []
    weak_areas = []
    for tag, stats in topic_stats.items():
        avg_time = stats["time_sum"] / stats["total"]
        accuracy = (stats["correct"] / stats["total"]) * 100
        is_weak = accuracy < 50 or avg_time > 45000
        
        if is_weak:
            weak_areas.append(tag)
            
        breakdown.append({
            "topic": tag,
            "total": stats["total"],
            "correct": stats["correct"],
            "wrong": stats["total"] - stats["correct"],
            "avg_time_ms": int(avg_time),
            "confidence_distribution": stats["conf_dist"],
            "weak": is_weak,
            "lucky_guesses": stats["lucky"]
        })

    # 4. Finalize Global Metrics
    total = len(q_ids)
    score = len(correct_ids)
    percent = (score / total) * 100 if total > 0 else 0
    total_time_s = sum(u_time) // 1000

    print(f"DEBUG: score={score}, total={total}, percent={percent}, correct_ids={correct_ids}")

    # 5. Improvement vs Yesterday
    prev = db.execute(
        text("""
            SELECT percentage FROM focused_test_reports 
            WHERE user_id = :uid AND subject = :subj AND cluster_number = :cl
            ORDER BY created_at DESC LIMIT 1
        """),
        {"uid": user_id, "subj": body.subject, "cl": body.cluster_id}
    ).fetchone()
    improvement = float(percent - float(prev[0])) if prev else 0.0

    # 6. Save Report
    non_skip = [c for c in u_conf if c != "Skip"]
    conf_summary = max(set(non_skip), key=non_skip.count) if non_skip else "Skip"

    res = db.execute(
        text("""
            INSERT INTO focused_test_reports 
                (user_id, date, subject, cluster_number, score, total_questions, percentage, 
                 weak_topics, trap_questions_missed, correct_answers, wrong_answers, 
                 time_taken_seconds, confidence_before_test, improvement_vs_yesterday, bkt_updates)
            VALUES 
                (:uid, CURRENT_DATE, :subj, :cl, :score, :total, :pct, 
                 :weak, :traps, :c_ids, :w_ids, :time_s, :conf, :imp, :bkt)
            RETURNING id
        """),
        {
            "uid": user_id, "subj": body.subject, "cl": body.cluster_id, "score": score, "total": total, "pct": percent,
            "weak": json.dumps(weak_areas), "traps": json.dumps(trap_ids), 
            "c_ids": json.dumps(correct_ids), "w_ids": json.dumps(wrong_ids),
            "time_s": total_time_s, "conf": conf_summary, 
            "imp": improvement, "bkt": json.dumps({})
        }
    )
    report_id = res.scalar()
    db.commit()

    return {
        "report_id": report_id,
        "total": total,
        "correct": score,
        "wrong": len(wrong_ids),
        "skipped": skipped_count,
        "score_percent": round(percent, 2),
        "time_total_seconds": total_time_s,
        "improvement_vs_yesterday": round(improvement, 2),
        "topic_breakdown": breakdown,
        "weak_areas": weak_areas,
        "trap_questions_missed": trap_ids,
        "lucky_guesses_total": lucky_guesses
    }


# ─────────────────────────────────────────────────────────────
# ENDPOINT 6 — GET SUBJECT GATE TEST (10 PYQ questions)
# ─────────────────────────────────────────────────────────────

@router.get("/gate/{subject}")
def get_gate_test(
    subject: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    rows = db.execute(
        text("""
            SELECT id, text, options, correct_answer, explanation, topic_tag
            FROM bank_questions
            WHERE LOWER(subject) = LOWER(:subj)
              AND LOWER(type) = 'pyq'
            ORDER BY RANDOM()
            LIMIT 10
        """),
        {"subj": subject}
    ).fetchall()

    questions = []
    for r in rows:
        options = parse_json_field(r[2])
        questions.append({
            "id": r[0],
            "text": r[1],
            "options": options,
            "topic_tag": r[5],
        })

    return {"subject": subject, "total_questions": len(questions), "questions": questions}


# ─────────────────────────────────────────────────────────────
# ENDPOINT 7 — SUBMIT SUBJECT GATE
# ─────────────────────────────────────────────────────────────

@router.post("/gate/submit")
def submit_gate(
    body: GateSubmitBody,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    passed = body.score >= 6
    flagged = not passed

    # Normalize subject name
    subject = body.subject
    if subject.upper() in ["IR", "INTERNATIONAL RELATIONS"]:
        subject = "International Relations"
    elif "Science" in subject and "Tech" in subject:
        subject = "Science & Technology"

    # Identify weak areas from wrong answers
    wrong_topics = list({
        a.get("topic_tag", "Unknown")
        for a in body.answers
        if a.get("selected_option") != a.get("correct_option")
    })

    db.execute(
        text("""
            INSERT INTO focused_subject_gates
                (user_id, subject, gate_score, total_questions, passed, flagged_for_revision)
            VALUES (:uid, :subj, :score, 10, :passed, :flagged)
            ON CONFLICT (user_id, subject) DO UPDATE SET
                gate_score = EXCLUDED.gate_score,
                passed = EXCLUDED.passed,
                flagged_for_revision = EXCLUDED.flagged_for_revision,
                updated_at = NOW()
        """),
        {
            "uid": current_user.id,
            "subj": subject,
            "score": body.score,
            "passed": passed,
            "flagged": flagged,
        }
    )
    db.commit()

    # Find next subject
    next_subj = "Revision"
    try:
        idx = SUBJECT_SEQUENCE.index(subject)
        if idx + 1 < len(SUBJECT_SEQUENCE):
            next_subj = SUBJECT_SEQUENCE[idx + 1]
    except ValueError:
        pass

    return {
        "subject": subject,
        "score": body.score,
        "out_of": 10,
        "passed": passed,
        "next_subject": next_subj if passed else subject,
        "flagged_for_revision": flagged,
        "weak_areas": wrong_topics,
        "message": (
            f"Gate passed! {next_subj} is now unlocked."
            if passed
            else f"Score below 6 ({body.score}/10). Subject flagged for final week revision. Weak areas: {', '.join(wrong_topics)}"
        ),
    }


# ─────────────────────────────────────────────────────────────
# ENDPOINT 8 — GET REVISION PRIORITY LIST
# ─────────────────────────────────────────────────────────────

@router.get("/revision-priorities")
def get_revision_priorities(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    rows = db.execute(
        text("""
            SELECT subject, gate_score, completed_at
            FROM focused_subject_gates
            WHERE user_id = :uid AND flagged_for_revision = TRUE
            ORDER BY gate_score ASC
        """),
        {"uid": current_user.id}
    ).fetchall()

    priorities = [
        {
            "subject": r[0],
            "gate_score": r[1],
            "completed_at": str(r[2]),
            "priority": "HIGH" if r[1] < 4 else "MEDIUM",
        }
        for r in rows
    ]

    return {
        "revision_needed": len(priorities) > 0,
        "count": len(priorities),
        "subjects": priorities,
    }

# ─────────────────────────────────────────────────────────────
# ENDPOINT 9 — GET TEST HISTORY
# ─────────────────────────────────────────────────────────────

@router.get("/history")
def get_test_history(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    rows = db.execute(
        text("""
            SELECT id, subject, cluster_number, 
                   score, total_questions, percentage,
                   weak_topics, trap_questions_missed, correct_answers, wrong_answers,
                   time_taken_seconds,
                   improvement_vs_yesterday, created_at
            FROM focused_test_reports
            WHERE user_id = :uid
            ORDER BY created_at DESC
            LIMIT 50
        """),
        {"uid": current_user.id}
    ).fetchall()

    return {
        "history": [
            {
                "id": r.id,
                "subject": r.subject,
                "cluster_number": r.cluster_number,
                "score": r.score,
                "total_questions": r.total_questions,
                "percentage": float(r.percentage),
                "weak_topics": parse_json_field(r.weak_topics),
                "trap_questions_missed": parse_json_field(r.trap_questions_missed),
                "correct_answers": parse_json_field(r.correct_answers),
                "wrong_answers": parse_json_field(r.wrong_answers),
                "time_taken_seconds": r.time_taken_seconds,
                "improvement": float(r.improvement_vs_yesterday or 0),
                "date": r.created_at.strftime("%b %d, %Y")
            }
            for r in rows
        ]
    }


# ─────────────────────────────────────────────────────────────
# ENDPOINT 10 — GET OVERALL PROGRESS
# ─────────────────────────────────────────────────────────────

@router.get("/progress")
def get_progress(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    # Clusters completed (best attempt per cluster)
    clusters = db.execute(
        text("""
            SELECT DISTINCT ON (cluster_number, subject) 
                   cluster_number, subject, percentage as best_pct,
                   weak_topics, trap_questions_missed, correct_answers, wrong_answers,
                   (SELECT COUNT(*) FROM focused_test_reports f2 WHERE f2.user_id = :uid AND f2.subject = f.subject AND f2.cluster_number = f.cluster_number) as attempts
            FROM focused_test_reports f
            WHERE user_id = :uid
            ORDER BY cluster_number, subject, percentage DESC
        """),
        {"uid": current_user.id}
    ).fetchall()

    # Overall accuracy
    overall = db.execute(
        text("""
            SELECT AVG(percentage) as avg_pct,
                   SUM(total_questions) as total_q,
                   SUM(score) as total_correct,
                   SUM(time_taken_seconds) as total_time
            FROM focused_test_reports
            WHERE user_id = :uid
        """),
        {"uid": current_user.id}
    ).fetchone()

    # Gate status
    gates = db.execute(
        text("""
            SELECT subject, gate_score, passed
            FROM focused_subject_gates
            WHERE user_id = :uid
        """),
        {"uid": current_user.id}
    ).fetchall()

    # Days active
    days = db.execute(
        text("""
            SELECT COUNT(DISTINCT DATE(created_at))
            FROM focused_study_sessions
            WHERE user_id = :uid
        """),
        {"uid": current_user.id}
    ).fetchone()

    return {
        "clusters_attempted": [
            {
                "cluster_number": r.cluster_number,
                "subject": r.subject,
                "best_percentage": float(r.best_pct),
                "attempts": r.attempts,
                "weak_topics": parse_json_field(r.weak_topics),
                "trap_questions_missed": parse_json_field(r.trap_questions_missed),
                "correct_answers": parse_json_field(r.correct_answers),
                "wrong_answers": parse_json_field(r.wrong_answers)
            }
            for r in clusters
        ],
        "overall_accuracy": float(overall.avg_pct or 0),
        "total_questions_attempted": overall.total_q or 0,
        "total_correct": overall.total_correct or 0,
        "total_time_seconds": overall.total_time or 0,
        "gates": [
            {
                "subject": g.subject,
                "gate_score": g.gate_score,
                "passed": g.passed
            }
            for g in gates
        ],
        "days_active": days[0] or 0
    }
