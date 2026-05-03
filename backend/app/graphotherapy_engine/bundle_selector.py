from typing import List, Dict, Any
from .constants import PURCHASE_TYPES

class BundleSelector:
    def select_bundle(self, purchase_type: str, scored_dimensions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Filter dimensions based on the user's purchase type (funnel logic).
        """
        if not scored_dimensions:
            return []

        if purchase_type == "free":
            # PHASE 1: Strictly max 2 dimensions
            return scored_dimensions[:2]

        elif purchase_type == "upsell_59":
            # PHASE 1: ONLY 1 emotional
            emotional = [d for d in scored_dimensions if d["impact_type"] == "emotional"]
            return emotional[:1] if emotional else scored_dimensions[:1]

        elif purchase_type == "downsell_29":
            # PHASE 1: Low intensity only (lowest score)
            sorted_by_score = sorted(scored_dimensions, key=lambda x: x["score"])
            return sorted_by_score[:1]

        elif purchase_type == "bundle_118":
            # PHASE 5: Balanced Mix (1 Emotional + 1 Thinking + 1 Behavioral)
            emotional = [d for d in scored_dimensions if d["impact_type"] == "emotional"]
            thinking = [d for d in scored_dimensions if d["impact_type"] == "neutral"]
            behavioral = [d for d in scored_dimensions if d["impact_type"] == "behavioral"]
            
            result = []
            if emotional: result.append(emotional[0])
            if thinking: result.append(thinking[0])
            if behavioral: result.append(behavioral[0])
            
            # If missing category, fallback to next best from ANY category
            if len(result) < 3:
                for d in scored_dimensions:
                    if d not in result:
                        result.append(d)
                    if len(result) >= 3:
                        break
            # Strictly exactly 3
            return result[:3]

        elif purchase_type == "bundle_299":
            # PHASE 1: Max 9 dimensions
            return scored_dimensions[:9]

        elif purchase_type == "full_1299":
            # PHASE 1: All dimensions
            return scored_dimensions

        return scored_dimensions[:2] # Default to free

bundle_selector = BundleSelector()
