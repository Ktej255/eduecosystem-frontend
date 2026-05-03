-- Part A Audit Queries

\echo '--- Q1: Total Polity counts by difficulty ---'
SELECT difficulty, COUNT(*) as question_count 
FROM upsc_questions 
WHERE subject = 'Polity' 
GROUP BY difficulty 
ORDER BY difficulty;

\echo '--- Q2: Per-chapter question count at each difficulty level ---'
SELECT topic, difficulty, COUNT(*) as count 
FROM upsc_questions 
WHERE subject = 'Polity' 
GROUP BY topic, difficulty 
ORDER BY topic, difficulty;

\echo '--- Q3: Chapters with at least 30 questions at each level ---'
SELECT topic, 
       SUM(CASE WHEN difficulty=1 THEN 1 ELSE 0 END) as l1_count, 
       SUM(CASE WHEN difficulty=2 THEN 1 ELSE 0 END) as l2_count, 
       SUM(CASE WHEN difficulty=3 THEN 1 ELSE 0 END) as l3_count 
FROM upsc_questions 
WHERE subject='Polity' 
GROUP BY topic 
ORDER BY topic;

\echo '--- Q4: Chapters with ZERO L2 or L3 questions ---'
SELECT topic 
FROM upsc_questions 
WHERE subject='Polity' 
GROUP BY topic 
HAVING SUM(CASE WHEN difficulty=2 THEN 1 ELSE 0 END)=0 
   OR SUM(CASE WHEN difficulty=3 THEN 1 ELSE 0 END)=0;

\echo '--- Q5: Student access counts ---'
SELECT COUNT(*) FILTER (WHERE purchased_subjects @> '["polity"]') as standalone_polity, 
       COUNT(*) FILTER (WHERE purchased_subjects @> '["full_upsc"]') as full_bundle, 
       COUNT(*) FILTER (WHERE is_batch1_authorized=true) as batch1_authorized 
FROM users;

\echo '--- Q6: Attempt counts ---'
SELECT attempt_type, COUNT(*) 
FROM upsc_attempts 
WHERE subject='Polity' 
GROUP BY attempt_type;

\echo '--- Q7: AI report status ---'
SELECT COUNT(*) as total, 
       COUNT(*) FILTER (WHERE ai_score IS NOT NULL) as with_score, 
       COUNT(*) FILTER (WHERE ai_score IS NULL) as pending 
FROM upsc_reports 
WHERE subject='Polity';
