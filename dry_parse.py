"""Quick dry-parse validation of all 4 source files."""
from sync_master_mcqs import parse_source, validate, SRC

grand = 0
for subject, fpath in SRC.items():
    print(f'\n=== {subject} ===')
    if not fpath.exists():
        print(f'  NOT FOUND: {fpath}')
        continue
    recs = parse_source(fpath, subject)
    valid = validate(recs, subject)
    grand += len(valid)

print(f'\nGRAND TOTAL VALID: {grand}')
