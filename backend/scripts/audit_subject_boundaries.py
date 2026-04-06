import os
import sys
import json
import logging
from typing import List, Dict
from sqlalchemy import text
from sqlalchemy.orm import Session
import google.generativeai as genai
from dotenv import load_dotenv

# Add paths
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.db.session import SessionLocal

# Load environment
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))
api_key = os.getenv("GEMINI_API_KEY")

# Configure Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("AUDIT")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def audit_subjects():
    """
    Identifies semantic overlaps and duplicates across the 12 UPSC subjects.
    Uses Gemini 1.5 Flash to propose subject boundaries.
    """
    if not api_key:
        print("Error: GEMINI_API_KEY not found in .env")
        return

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash')

    db = SessionLocal()
    try:
        # 1. Fetch all nodes with subject info
        nodes = db.execute(text("""
            SELECT node_id, node_name, subject_slug, node_description 
            FROM concept_nodes
        """)).fetchall()
        
        print(f"DEBUG: Found {len(nodes)} nodes.")
        
        # 2. Cluster nodes by subject for context
        subject_map = {}
        for nid, name, subject, desc in nodes:
            if subject not in subject_map:
                subject_map[subject] = []
            subject_map[subject].append({
                "id": nid, "name": name, "desc": desc
            })

        print(f"DEBUG: Subjects found: {list(subject_map.keys())}")

        # 3. Targeted Audit: Geography vs Environment
        subset = ["geography", "environment"]
        subject_content = {s: [n["name"] for n in subject_map[s]] for s in subset if s in subject_map}

        prompt = f"""
        You are a UPSC Curriculum Specialist. 
        I am comparing two subjects: Geography and Environment.
        I need to identify redundant nodes and establish clear boundaries.
        
        GEOGRAPHY NODES:
        {subject_content.get('geography', [])}
        
        ENVIRONMENT NODES:
        {subject_content.get('environment', [])}
        
        Please produce a JSON report:
        {{
          "redundant_nodes": [ {{"node_a": "Name", "node_b": "Name", "reason": "Overlap", "keep": "Subject"}} ],
          "boundary_proposal": "Summary of how to split these two"
        }}
        """

        print(f"DEBUG: Sending targeted audit to Gemini...")
        response = model.generate_content(prompt)
        print("DEBUG: Gemini response received.")
        content = response.text
        
        # Extract JSON (Gemini often wraps in ```json)
        if "```json" in content:
            content = content.split("```json")[1].split("```")[0]
        elif "```" in content:
            content = content.split("```")[1].split("```")[0]
            
        audit_results = json.loads(content)
        
        # 4. Save to Artifact-ready file
        with open("backend/scripts/audit_results.json", "w") as f:
            json.dump(audit_results, f, indent=4)
            
        print("Audit Complete! Results saved to backend/scripts/audit_results.json")
        
        # 5. Generate a Markdown summary for the user
        with open("backend/scripts/audit_summary.md", "w") as f:
            f.write("# UPSC Knowledge Graph Intelligence Audit\n\n")
            f.write(f"**Total Nodes Analyzed:** {len(nodes)}\n")
            f.write(f"**Subjects:** {', '.join(subject_map.keys())}\n\n")
            
            f.write("## ⚠️ Redundant Node Detection\n")
            for item in audit_results.get("redundant_nodes", []):
                f.write(f"- **{item['node_a']}** vs **{item['node_b']}**: {item['reason']} (Keep: {item['keep']})\n")
                
            f.write("\n## 🗺️ Subject Boundary Proposals\n")
            for item in audit_results.get("subject_boundaries", []):
                f.write(f"### {item['subject_1']} vs {item['subject_2']}\n")
                f.write(f"- **Area:** {item['conflict_area']}\n")
                f.write(f"- **Proposal:** {item['proposal']}\n\n")
                
            f.write("## 🔍 Gap Analysis\n")
            for gap in audit_results.get("gap_analysis", []):
                f.write(f"- {gap}\n")

    except Exception as e:
        print(f"Audit Failed: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    audit_subjects()
