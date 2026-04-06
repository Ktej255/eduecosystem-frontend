"""Diagnose why POPT fails to extract options."""
import re

POPT = re.compile(r'\(([abcd])\)\s+([^(]+)', re.I)

# Test case 1 - typical level 1 question
line1 = "Which material is given the utmost priority? (a) Creative Literature (b) Archives (c) Oral Evidence (d) Biographies"
r1 = POPT.findall(line1)
print(f"Test 1: {r1}")

# Test case 2 - level 2 multi-statement question continuation
line2 = "Which of the statements given above is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2"
r2 = POPT.findall(line2)
print(f"Test 2: {r2}")

# Test case 3 - full Q line with opt_start detection
full = "Q1. Consider the following statements regarding the National Archives of India (NAI): 1. It is the repository (a) 1 only (b) 2 only (c) Both (d) Neither"
# Find (a)
opt_start = -1
for mo in re.finditer(r'\([abcd]\)', full, re.I):
    if mo.group(0).lower() == '(a)':
        opt_start = mo.start(); break
print(f"\nopt_start={opt_start}")
if opt_start > 0:
    opts = POPT.findall(full[opt_start:])
    print(f"opts={opts}")

# Now check a REAL question body from Modern History
# The Q line is: "1. It is the repository of non-current records. Which is correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither"
# but this Q_PAT body = "It is the repository... (a)..."
body = "It was originally established in New Delhi in 1891 and remained there ever since. Which of the statements given above is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2"
opt_start2 = -1
for mo in re.finditer(r'\([abcd]\)', body, re.I):
    if mo.group(0).lower() == '(a)':
        opt_start2 = mo.start(); break
print(f"\nbody opt_start={opt_start2}")
if opt_start2 > 0:
    qtext = body[:opt_start2].strip()
    opts2 = POPT.findall(body[opt_start2:])
    clean = [o[1].strip().rstrip('(').strip() for o in opts2 if o[0].lower() in 'abcd']
    print(f"qtext={qtext[:50]}")
    print(f"opts={clean}")
