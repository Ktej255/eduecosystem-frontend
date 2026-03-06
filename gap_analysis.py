
import os
import json

INTEGRATED_DIR = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\chapters'

def detailed_audit():
    summary = []
    total_l1, total_l2, total_l3 = 0, 0, 0
    
    for i in range(1, 96):
        fpath = os.path.join(INTEGRATED_DIR, f'chapter-{i}.ts')
        row = {"id": i, "l1": 0, "l2": 0, "l3": 0, "total": 0}
        
        if os.path.exists(fpath):
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read()
                row["l1"] = content.count(f'ch{i}-l1-q')
                row["l2"] = content.count(f'ch{i}-l2-q')
                row["l3"] = content.count(f'ch{i}-l3-q')
                row["total"] = row["l1"] + row["l2"] + row["l3"]
        
        total_l1 += row["l1"]
        total_l2 += row["l2"]
        total_l3 += row["l3"]
        summary.append(row)
        
    # Analysis
    full_90 = [r["id"] for r in summary if r["total"] >= 90]
    under_90 = [r for r in summary if r["total"] < 90]
    completely_empty = [r["id"] for r in summary if r["total"] == 0]
    
    with open('gap_analysis_report.json', 'w', encoding='utf-8') as f:
        json.dump({
            "totals": {"l1": total_l1, "l2": total_l2, "l3": total_l3, "grand_total": total_l1 + total_l2 + total_l3},
            "metrics": {
                "expected": 8550,
                "actual": total_l1 + total_l2 + total_l3,
                "gap": 8550 - (total_l1 + total_l2 + total_l3),
                "full_chapters_count": len(full_90),
                "empty_chapters_count": len(completely_empty)
            },
            "empty_chapters": completely_empty,
            "detailed": summary
        }, f, indent=4)
        
    print(f"Gap Analysis Complete.")
    print(f"Total: {total_l1 + total_l2 + total_l3} / 8550")
    print(f"Full Chapters (90+ q): {len(full_90)}")
    print(f"Empty Chapters: {len(completely_empty)}")

if __name__ == "__main__":
    detailed_audit()
