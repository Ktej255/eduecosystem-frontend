import logging
import json
from typing import Dict, Any, List
from .trait_extractor import trait_extractor
from .dimension_mapper import dimension_mapper
from .scoring_engine import scoring_engine
from .bundle_selector import bundle_selector
from .depth_controller import depth_controller
from .report_generator import report_generator
from .pdf_renderer import pdf_renderer
from .offer_engine import offer_engine
from .memory_engine import memory_engine

logger = logging.getLogger(__name__)

class GraphotherapyEngine:
    def run_analysis(self, image_path: str, purchase_type: str = "free", user_id: Any = None, 
                     purchase_history: List[str] = None, current_state: str = "viewed_report", db=None) -> Dict[str, Any]:
        """
        Main orchestration pipeline for the Graphotherapy Analysis Engine.
        """
        purchase_history = purchase_history or []
        try:
            logger.info(f"Starting analysis for user {user_id}, purchase_type: {purchase_type}")
            
            # PHASE 1: User Memory (Phase 6)
            memory_engine.update_user_memory(user_id, {"type": "session_start"})
            user_memory = memory_engine.get_user_memory(user_id)

            # 1. Trait Extraction
            extraction_result = trait_extractor.extract(image_path)
            traits = extraction_result.get("traits", [])
            memory_engine.update_user_memory(user_id, {"type": "trait_analysis", "traits": [t["name"] for t in traits]})

            # PHASE 9: No traits detected fallback
            if not traits:
                return {
                    "summary": "We couldn't detect enough clear strokes in this sample. Please ensure high lighting and clear white paper for a precise analysis.",
                    "dimensions": [],
                    "locked_sections": [],
                    "pdf_sections": [],
                    "error": "LOW_DATA"
                }

            # PHASE 9: Low confidence traits (still map but keep score low)
            # The scoring_engine already takes confidence into account.

            # 2. Dimension Mapping
            mapping_result = dimension_mapper.map_traits(traits)
            dimensions = mapping_result.get("dimensions", [])

            # 3. Scoring & Priority
            all_scored_dimensions = scoring_engine.score_dimensions(dimensions)

            # PHASE 9: Too many traits (Cap dimensions before bundle selection to avoid overflow)
            all_scored_dimensions = all_scored_dimensions[:15]

            # 4. Bundle Selection
            selected_dimensions = bundle_selector.select_bundle(purchase_type, all_scored_dimensions)

            # 5. Depth Control
            processed_dimensions = depth_controller.apply_depth(purchase_type, selected_dimensions)

            # PHASE 4: Adaptive Ordering
            ordered_dimensions = self._apply_adaptive_ordering(processed_dimensions, user_memory)

            # 6. Report Generation
            report = report_generator.generate(ordered_dimensions, all_scored_dimensions, purchase_type=purchase_type)

            # PHASE 1: PDF Rendering Blueprint (Phase 4)
            report["pdf_blueprint"] = pdf_renderer.render_blueprint(report)

            # PHASE 1: Offer Engine (Phase 5 & 6)
            top_dimension = ordered_dimensions[0]["name"] if ordered_dimensions else "General"
            report["monetization"] = {
                "current_offer": offer_engine.get_optimal_offer(purchase_history, current_state, top_dimension, user_id=user_id, db=db),
                "offer_triggers": offer_engine.get_triggers()
            }

            # PHASE 10: Adaptive Layer Output (Phase 6)
            report["adaptive_layer"] = {
                "personalized_order": [d["name"] for d in ordered_dimensions],
                "behavior_signals": {
                    "engagement_level": "returning" if user_memory.get("session_count", 0) > 1 else "new",
                    "interest_focus": top_dimension
                }
            }

            # 7. Analytics Logging (Phase 8)
            self._log_analytics(user_id, traits, processed_dimensions, purchase_type)
            
            # PHASE 2: Track performance (Phase 6)
            for dim in processed_dimensions:
                memory_engine.track_dimension_performance(dim["name"])

            return report

        except Exception as e:
            logger.error(f"ENGINE CRITICAL FAILURE: {e}")
            return {
                "summary": "Our analysis engine encountered a technical hurdle. Our team has been notified.",
                "error": str(e)
            }

    def _apply_adaptive_ordering(self, dimensions: List[Dict[str, Any]], user_memory: Dict[str, Any]) -> List[Dict[str, Any]]:
        """
        PHASE 4: Personalized Dimension Ordering
        """
        # If new user, keep default ordering
        if user_memory.get("session_count", 0) <= 1:
            return dimensions

        purchased = set(user_memory.get("purchase_history", []))
        clicked = set(user_memory.get("offers_clicked", []))

        # Sort: Interacted with first, then default
        def sort_key(d):
            score = 0
            if d["name"] in clicked: score -= 2
            if d["name"] in purchased: score += 1 # Put already owned lower
            return score

        return sorted(dimensions, key=sort_key)

    def _log_analytics(self, user_id, traits, dimensions, purchase_type):
        """
        Log event for database/analytics system.
        """
        from datetime import datetime
        event = {
            "user_id": user_id,
            "traits": [t["name"] for t in traits],
            "dimensions_selected": [d["name"] for d in dimensions],
            "purchase_type": purchase_type,
            "timestamp": datetime.utcnow().isoformat()
        }
        logger.info(f"GRAPHOLOGY_EVENT: {json.dumps(event)}")
        # In production, this would go to a database table like 'analysis_logs'

grapho_engine = GraphotherapyEngine()
