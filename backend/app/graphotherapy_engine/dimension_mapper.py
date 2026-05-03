from typing import List, Dict, Any
from .constants import TRAITS_CONFIG

class DimensionMapper:
    def __init__(self):
        # Create a mapping from trait name to its metadata
        self.trait_map = {t["name"]: t for t in TRAITS_CONFIG}

    def map_traits(self, detected_traits: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Map extracted traits to psychological dimensions.
        """
        dimension_data = {}

        for trait in detected_traits:
            name = trait["name"]
            if name in self.trait_map:
                metadata = self.trait_map[name]
                dim_name = metadata["dimension"]
                
                if dim_name not in dimension_data:
                    dimension_data[dim_name] = {
                        "name": dim_name,
                        "traits": [],
                        "impact_type": metadata["impact_type"] # Taking from first trait for now
                    }
                
                dimension_data[dim_name]["traits"].append({
                    "name": name,
                    "confidence": trait["confidence"],
                    "frequency": trait["frequency"],
                    "impact_type": metadata["impact_type"]
                })

        # Convert to list format
        result = [data for data in dimension_data.values()]
        return {"dimensions": result}

dimension_mapper = DimensionMapper()
