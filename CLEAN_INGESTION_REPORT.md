# CLEAN_INGESTION_REPORT.md

## BEFORE RESET
*(Summary from previous audit)*
- Ancient History: 21,669 (Total), 14,505 (Unique)
- Medieval History: 21,091 (Total), 14,505 (Unique)
- Modern History: 22,419 (Total), 14,505 (Unique)
- Polity: 43,795 (Total), 4,368 (Unique)

## RESET EXECUTION
- **Action**: `TRUNCATE TABLE bank_questions RESTART IDENTITY CASCADE;`
- **Result**: `COUNT AFTER WIPE: 0` (Confirmed in logs)

## INGESTION JOBS SUMMARY
1. **reingest-polity**: Successfully ingested 8,759 MCQs.
2. **reingest-modern**: Ingested 8,759 MCQs (Incorrectly detected as Polity flashcards).
3. **reingest-medieval**: Ingested 8,759 MCQs (Incorrectly detected as Polity flashcards).
4. **reingest-ancient**: Ingested 8,759 MCQs (Incorrectly detected as Polity flashcards).

## FINAL VERIFICATION (STEP 5 RAW OUTPUT)
```json
['Polity', 35036, 4368]
```
*(Format: [Subject, Total Rows, Unique Text Count])*

## CRITICAL OBSERVATION
- **Polity Over-counted**: Total rows (35,036) represent 4x redundant ingestions of the Polity bank (8,759 * 4).
- **History Missing**: All History subjects show 0 rows.
- **Root Cause**: The ingestion script likely failed to find the source directories inside the container, fell back to `all_mcqs_extracted.json`, and incorrectly defaulted back to Polity for all jobs. 

## RECOMMENDATION
- Perform another `TRUNCATE`.
- Correct the ingestion command or the script logic for History filtering before retrying.
