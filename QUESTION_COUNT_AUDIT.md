# QUESTION_COUNT_AUDIT.md

## RAW OUTPUT: QUERY 1 (Difficulty Distribution)
```json
['Ancient History', 'easy', 5695]
['Ancient History', 'hard', 4407]
['Ancient History', 'medium', 11567]
['Medieval History', 'easy', 5541]
['Medieval History', 'hard', 4215]
['Medieval History', 'medium', 11335]
['Modern History', 'easy', 6086]
['Modern History', 'hard', 4645]
['Modern History', 'medium', 11688]
['Polity', 'easy', 9045]
['Polity', 'hard', 4735]
['Polity', 'medium', 30015]
```

## RAW OUTPUT: QUERY 2 (Total Counts by Subject)
```json
['Polity', 43795]
['Modern History', 22419]
['Ancient History', 21669]
['Medieval History', 21091]
```

## RAW OUTPUT: QUERY 3 (Duplicate Check)
```json
['Modern History', 22419, 14505, 7914]
['Medieval History', 21091, 14505, 6586]
['Ancient History', 21669, 14505, 7164]
```
*(Note: Audit performed using `text` column in accordance with table schema)*
