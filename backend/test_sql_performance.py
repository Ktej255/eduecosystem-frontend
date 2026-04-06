import sqlite3
import time
import os

db_path = r'd:\Development\EduEcosystem\backend\eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

student_id = 111
subjects = ["environment", "history", "geography"]

sql = """
WITH McqSummary AS (
    SELECT node_id, AVG(score) as avg_score
    FROM student_activity_log
    WHERE student_id = ? AND activity_type = 'mcq'
    GROUP BY node_id
),
RecallSummary AS (
    SELECT node_id, score, 
           ROW_NUMBER() OVER(PARTITION BY node_id ORDER BY timestamp DESC) as rn
    FROM student_activity_log
    WHERE student_id = ? AND activity_type = 'recall'
),
VideoMetrics AS (
    SELECT node_id, COUNT(*) > 0 as watched
    FROM student_activity_log
    WHERE student_id = ? AND activity_type = 'video_watch'
    GROUP BY node_id
)
SELECT
    cn.node_id,
    cn.node_name,
    cn.difficulty_level,
    cn.prerequisite_nodes,
    COALESCE(scm.mastery_score, 0) AS raw_mastery,
    COALESCE(scm.attempt_count, 0) AS attempt_count,
    scm.last_activity_date,
    scm.next_review_date,
    ms.avg_score                  AS recent_mcq_accuracy,
    rs.score                      AS recall_performance,
    COALESCE(vm.watched, 0)       AS video_watched,
    cn.exam_relevance
FROM concept_nodes cn
LEFT JOIN student_concept_mastery scm ON scm.node_id = cn.id AND scm.student_id = ?
LEFT JOIN McqSummary ms ON ms.node_id = cn.id
LEFT JOIN RecallSummary rs ON rs.node_id = cn.id AND rs.rn = 1
LEFT JOIN VideoMetrics vm ON vm.node_id = cn.id
WHERE cn.subject_slug = ?
ORDER BY cn.module_id ASC, cn.node_id ASC
"""

print("--- [RAW SQL STRESS TEST] START ---")

for sub in subjects:
    start_time = time.time()
    try:
        cursor.execute(sql, (student_id, student_id, student_id, student_id, sub))
        rows = cursor.fetchall()
        end_time = time.time()
        
        latency = (end_time - start_time) * 1000
        print(f"Subject: {sub.upper()}")
        print(f"  Nodes: {len(rows)}")
        print(f"  Latency: {latency:.2f}ms")
    except Exception as e:
        print(f"  Error for {sub}: {e}")

conn.close()
print("--- [RAW SQL STRESS TEST] COMPLETE ---")
