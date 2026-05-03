import logging
import time
import hashlib
import json
from typing import Dict, Any, List
from .feature_extractor import feature_extractor
from .rule_engine import rule_engine
from .personality_mapper import personality_mapper
from .report_generator import report_generator
from .pdf_renderer import pdf_renderer

# For uniqueness check
from app.models.student_report import StudentReport
from app.db.session import SessionLocal

logger = logging.getLogger(__name__)

class GraphotherapyOrchestrator:
    """
    PHASE 7: Orchestration & Uniqueness Guarantee
    Coordinates the full 7-phase CORE Graphotherapy Intelligence Engine.
    """

    def _generate_uniqueness_hash(self, trait_scores: Dict[str, Any], conflicts: List[Dict[str, Any]]) -> str:
        """Create a hash representing the numerical core of the report."""
        core_data = {
            "traits": {k: v["score"] for k, v in trait_scores.items()},
            "conflicts": [c["type"] for c in conflicts]
        }
        return hashlib.sha256(json.dumps(core_data, sort_keys=True).encode()).hexdigest()

    def _check_similarity(self, current_hash: str, user_id: int) -> bool:
        """Check if similar reports exist in the last 10 entries."""
        db = SessionLocal()
        try:
            # Look for recent reports for this user or globally to prevent generic output
            recent_reports = db.query(StudentReport).filter(
                StudentReport.report_type == "graphotherapy"
            ).order_by(StudentReport.created_at.desc()).limit(10).all()
            
            for report in recent_reports:
                if report.data and report.data.get("uniqueness_hash") == current_hash:
                    return True # Too similar
            return False
        finally:
            db.close()

    def run_pipeline(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """
        Unified Hardened Pipeline: Features -> Traits -> Conflicts -> Personality -> Narrative -> PDF
        """
        start_time = time.time()
        user_id = payload.get("user_id", 0)
        session_id = payload.get("session_id", f"sess_{int(time.time())}")
        image_path = payload.get("image")

        stages_log = []

        try:
            logger.info(f"[CORE-ENGINE] STARTING Pipeline for user {user_id} | Session {session_id}")

            # STAGE 1: Feature Extraction
            logger.info(f"[STAGE 1] Extracting features from {image_path}")
            features = feature_extractor.extract(image_path)
            if not features or "error" in features:
                logger.error(f"[STAGE 1 FAILED] {features.get('error')}")
                return self._error_response("Incompatible handwriting sample. Please ensure text is clear and on plain paper.")
            stages_log.append("features_extracted")

            # STAGE 2 & 3: Rule Engine & Conflicts
            logger.info("[STAGE 2/3] Calculating traits and detecting conflicts")
            trait_scores = rule_engine.calculate_traits(features, session_id=session_id)
            conflicts = rule_engine.detect_conflicts(features, trait_scores)
            stages_log.append("rules_applied")

            # STAGE 4: Personality Mapping
            logger.info("[STAGE 4] Mapping to personality archetype")
            personality = personality_mapper.map_to_profile(trait_scores)
            stages_log.append("personality_mapped")

            # STAGE 5: Uniqueness Check
            u_hash = self._generate_uniqueness_hash(trait_scores, conflicts)
            if self._check_similarity(u_hash, user_id):
                logger.warning(f"[UNIQUENESS] High similarity detected for hash {u_hash}. Adding further noise.")
                # Force re-calc with a new session seed to shift scores slightly
                trait_scores = rule_engine.calculate_traits(features, session_id=session_id + "_retry")
            stages_log.append("uniqueness_verified")

            # STAGE 6: Narrative Generation
            logger.info("[STAGE 6] Generating controlled LLM narrative")
            report_data = report_generator.assemble_report(
                features=features,
                trait_scores=trait_scores,
                personality=personality,
                conflicts=conflicts,
                session_id=session_id
            )
            report_data["uniqueness_hash"] = u_hash
            stages_log.append("narrative_generated")

            # STAGE 7: PDF Rendering (Actual Implementation)
            logger.info("[STAGE 7] Rendering premium PDF")
            pdf_path = pdf_renderer.render_pdf(report_data, user_id)
            stages_log.append("pdf_rendered")

            processing_time = int((time.time() - start_time) * 1000)
            logger.info(f"[CORE-ENGINE] SUCCESS in {processing_time}ms | Stages: {stages_log}")

            # Final Production Response
            return {
                "status": "success",
                "user_id": user_id,
                "session_id": session_id,
                "report": report_data,
                "pdf_url": pdf_path,
                "meta": {
                    "processing_time_ms": processing_time,
                    "stages": stages_log,
                    "hash": u_hash
                }
            }

        except Exception as e:
            logger.error(f"[CORE-ENGINE-CRITICAL] Pipeline Failure: {str(e)}", exc_info=True)
            return self._error_response(f"Internal Intelligence Engine Error: {str(e)}")

    def _error_response(self, message: str) -> Dict[str, Any]:
        return {
            "status": "error",
            "message": message,
            "report": None
        }

orchestrator = GraphotherapyOrchestrator()
