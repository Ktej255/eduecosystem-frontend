# DEDUP_REPORT.md

## BEFORE DEDUP
```json
['Ancient History', 21669, 14505]
['Medieval History', 21091, 14505]
['Modern History', 22419, 14505]
['Polity', 43795, 4368]
```
*(Format: [Subject, Total Rows, Unique Text Count])*

## RESOLVING FOREIGN KEY CONSTRAINTS (ROBUST)
- **Redundant Associations Pruned**: 42,846
- **Associations Re-targeted**: 18,173
- **Table Affected**: `question_bank_questions`

## EXECUTING DEDUP
- **Total Rows Deleted from `bank_questions`**: 61,019
- **Logic**: Kept `MIN(id)` for each group of `(text, subject, difficulty)`.

## AFTER DEDUP (Current State)
```json
['Ancient History', 14526, 14505]
['Medieval History', 14526, 14505]
['Modern History', 14526, 14505]
['Polity', 4377, 4368]
```

## OBSERVATIONS
- **History Subjects**: Unique counts (14,505) are significantly **HIGHER** than the expected (~2.5k - ~4.6k).
- **Polity**: Unique count (4,368) is significantly **LOWER** than expected (~17,518).
- **Duplicate Check**: The remaining discrepancy between Total Rows and Unique Text (e.g., 14,526 vs 14,505) is due to the same text existing in different `difficulty` levels within the same subject.
