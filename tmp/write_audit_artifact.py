"""
Read audit_clean.txt and write a formatted report to artifact.
"""
import os

lines = open("tmp/audit_clean.txt", encoding="ascii", errors="replace").readlines()
report = []
for i, line in enumerate(lines):
    report.append(f"{i+1:03d} | {line.rstrip()}")

artifact_path = r"C:\Users\Sarit\.gemini\antigravity\brain\65f6d770-7ab9-41c0-bcca-08d4307cadaa\db_audit_results.md"
os.makedirs(os.path.dirname(artifact_path), exist_ok=True)

with open(artifact_path, "w", encoding="utf-8") as f:
    f.write("# Production DB Audit Results\n\n```\n")
    for line in lines:
        f.write(line)
    f.write("```\n")

print(f"Written to: {artifact_path}")
print(f"Lines: {len(lines)}")

# Also print raw
for line in lines:
    print(repr(line))
