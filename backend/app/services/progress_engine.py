from datetime import datetime, timedelta
from typing import List, Dict, Any, Optional
import json
from sqlalchemy.orm import Session
from app.models.graphotherapy import HandwritingSnapshot, WeeklyProgressReport
from app.services.gemini_service import gemini_service
import logging

logger = logging.getLogger(__name__)

class ProgressEngine:
    """
    Engine for analyzing handwriting snapshots over time and generating progress insights.
    """

    def compare_progress(self, db: Session, user_id: int, start_day: int, end_day: int) -> Dict[str, Any]:
        """
        Compare features and traits between two snapshots.
        """
        start_snapshot = db.query(HandwritingSnapshot).filter(
            HandwritingSnapshot.user_id == user_id,
            HandwritingSnapshot.day_number == start_day,
            HandwritingSnapshot.status == "complete"
        ).first()

        end_snapshot = db.query(HandwritingSnapshot).filter(
            HandwritingSnapshot.user_id == user_id,
            HandwritingSnapshot.day_number == end_day,
            HandwritingSnapshot.status == "complete"
        ).first()

        if not start_snapshot or not end_snapshot:
            return {
                "success": False,
                "message": "Missing snapshots for comparison"
            }

        # Calculate deltas
        deltas = {}
        start_traits = start_snapshot.trait_scores or {}
        end_traits = end_snapshot.trait_scores or {}

        for trait, start_val in start_traits.items():
            end_val = end_traits.get(trait, start_val)
            deltas[trait] = end_val - start_val

        return {
            "success": True,
            "start_snapshot_id": start_snapshot.id,
            "end_snapshot_id": end_snapshot.id,
            "deltas": deltas,
            "regression_detected": any(v < -15 for v in deltas.values()) # Significant drop
        }

    async def generate_weekly_report(self, db: Session, user_id: int, week_number: int) -> Optional[WeeklyProgressReport]:
        """
        Generates a 7-day progress report using AI narrative.
        """
        start_day = (week_number - 1) * 7 + 1
        end_day = week_number * 7
        
        comparison = self.compare_progress(db, user_id, start_day, end_day)
        if not comparison["success"]:
            return None

        # Fetch snapshots for AI context
        start_snap = db.query(HandwritingSnapshot).get(comparison["start_snapshot_id"])
        end_snap = db.query(HandwritingSnapshot).get(comparison["end_snapshot_id"])

        prompt = f"""
        Analyze the progress between Day {start_day} and Day {end_day} of Graphotherapy.
        
        BASELINE FEATURES: {json.dumps(start_snap.extracted_features)}
        CURRENT FEATURES: {json.dumps(end_snap.extracted_features)}
        
        TRAIT CHANGES: {json.dumps(comparison["deltas"])}
        REGRESSION: {comparison["regression_detected"]}
        
        Generate a narrative summary for the student.
        Include:
        1. Narrative Summary: 2-3 encouraging sentences.
        2. Improvement Direction: One sentence on where they are heading.
        3. Behavioral Insight: One psychological insight (e.g. "Your pressure stabilized, indicating improved emotional control").
        4. Corrective Suggestion: If regression detected, add a soft corrective tip.
        
        Return JSON ONLY in format:
        {{
            "narrative_summary": "...",
            "improvement_direction": "...",
            "behavioral_insight": "...",
            "corrective_suggestions": "..."
        }}
        """

        try:
            response = await gemini_service.generate_text_async(prompt, is_complex=True)
            # Clean and parse JSON
            import re
            json_match = re.search(r"\{.*\}", response, re.DOTALL)
            if not json_match:
                raise ValueError("No JSON found in AI response")
                
            data = json.loads(json_match.group())
            
            report = WeeklyProgressReport(
                user_id=user_id,
                week_number=week_number,
                narrative_summary=data.get("narrative_summary", ""),
                improvement_direction=data.get("improvement_direction", ""),
                behavioral_insight=data.get("behavioral_insight", ""),
                start_snapshot_id=start_snap.id,
                end_snapshot_id=end_snap.id,
                improvement_metrics=comparison["deltas"],
                regression_detected=comparison["regression_detected"],
                corrective_suggestions=data.get("corrective_suggestions", "")
            )
            
            db.add(report)
            db.commit()
            db.refresh(report)
            return report
            
        except Exception as e:
            logger.error(f"Failed to generate weekly report: {e}")
            return None

progress_engine = ProgressEngine()
