import logging
from typing import List, Dict, Any
from .constants import (
    DIMENSIONS_CONFIG, 
    WEIGHT_CONFIDENCE, 
    WEIGHT_FREQUENCY, 
    WEIGHT_PRIORITY
)
from .memory_engine import memory_engine
from .admin_engine import admin_engine

logger = logging.getLogger(__name__)

class ScoringEngine:
    def __init__(self):
        # Map dimension name to its priority weight
        self.priority_map = {d["name"]: d["priority_weight"] for d in DIMENSIONS_CONFIG}
        
        # PHASE 3: Conversion Boosts (Dynamic priority)
        # In production, this would be periodically updated from analytics logs
        self.conversion_boosts = {
            "Self Esteem": 0.15,
            "Emotional Stability": 0.1,
            "Procrastination": 0.05
        }

    def score_dimensions(self, dimensions_data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Calculate scores for each dimension and sort by prioritized conversion logic.
        """
        scored_list = []

        for dim in dimensions_data:
            name = dim["name"]
            base_priority = self.priority_map.get(name, 0.5)
            impact_type = dim.get("impact_type", "neutral")
            
            # PHASE 3: Adaptive Priority Adjustment
            conversion_boost = self.conversion_boosts.get(name, 0.0)
            adjusted_priority = base_priority + conversion_boost
            
            if not dim["traits"]:
                continue
                
            avg_confidence = sum(t["confidence"] for t in dim["traits"]) / len(dim["traits"])
            avg_frequency = min(sum(t["frequency"] for t in dim["traits"]) / len(dim["traits"]), 5) / 5
            
            # PHASE 12: Manual Override (Human > AI)
            manual_priority = admin_engine.get_priority_override(name)
            effective_priority = manual_priority if manual_priority is not None else dim.get("priority", 5)
            
            # PHASE 3: Adaptive Priority Boost
            adaptive_boosts = memory_engine.get_dimension_boosts()
            adaptive_boost = adaptive_boosts.get(name, 0.0)
            
            # Final score calculation
            # Formula: (trait_confidence * 0.5) + (frequency * 0.2) + (priority_weight * 0.3)
            base_score = (avg_confidence * WEIGHT_CONFIDENCE) + \
                         (avg_frequency * WEIGHT_FREQUENCY) + \
                         ((effective_priority + adaptive_boost) * WEIGHT_PRIORITY)
            
            impact_type = dim.get("impact_type", "neutral")
            if impact_type == "emotional":
                base_score += 0.2 
            
            final_score = min(base_score, 1.0)
            
            scored_list.append({
                "name": name,
                "score": round(final_score, 2),
                "base_score": round(base_score, 2),
                "adaptive_boost": round(adaptive_boost, 2),
                "priority_weight": effective_priority,
                "traits": dim["traits"],
                "impact_type": impact_type
            })

        # PHASE 5: Dimension Order Optimization
        # Final order must be: 1. Emotional, 2. Behavioral, 3. Thinking, 4. Others
        def order_key(d):
            type_map = {"emotional": 0, "behavioral": 1, "neutral": 2}
            type_order = type_map.get(d["impact_type"], 3)
            return (type_order, -d["score"]) # Primary by type, secondary by score

        scored_list.sort(key=order_key)
        
        return scored_list

scoring_engine = ScoringEngine()
