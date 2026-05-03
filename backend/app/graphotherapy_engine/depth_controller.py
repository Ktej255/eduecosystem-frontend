from typing import List, Dict, Any
from .constants import DEPTH_MAP

class DepthController:
    def get_depth(self, purchase_type: str) -> str:
        """
        Map purchase type to content depth (low, medium, high).
        """
        return DEPTH_MAP.get(purchase_type, "low")

    def apply_depth(self, purchase_type: str, selected_dimensions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Assign depth level to each selected dimension.
        """
        depth = self.get_depth(purchase_type)
        for dim in selected_dimensions:
            dim["depth"] = depth
        return selected_dimensions

depth_controller = DepthController()
