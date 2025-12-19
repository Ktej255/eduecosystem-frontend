import os

def scan():
    log_file = "logs_cleaned_8.txt"
    if not os.path.exists(log_file):
        print(f"File {log_file} not found")
        return
        
    with open(log_file, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()
        
    results = []
    for i, line in enumerate(lines):
        # Look for the start of the failing build or push
        if "Step " in line or "error" in line.lower() or "fail" in line.lower() or "ERROR" in line:
            # Get context around the error
            start = max(0, i - 10)
            end = min(len(lines), i + 20)
            results.append(f"\n--- Context near line {i+1} ---")
            for j in range(start, end):
                cleaned = "".join(c if ord(c) < 128 else "?" for c in lines[j].strip())
                results.append(cleaned)
            results.append("--- End Context ---")

    with open("build_analysis_v10.txt", "w", encoding="utf-8") as out:
        out.write("\n".join(results))
    
    print(f"Analyzed {len(lines)} lines. Found {len(results)//3} suspicious areas.")

if __name__ == "__main__":
    scan()
