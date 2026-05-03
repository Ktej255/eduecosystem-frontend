import logging
from typing import Dict, Any, List

logger = logging.getLogger(__name__)

class RuleEngine:
    """
    PHASE 2: Weighted Rule Engine
    PHASE 3: Conflict Detection
    """

    # Trait Scoring Configuration
    # Maps features to score contributions (0-100)
    TRAIT_RULES = {
        "emotional_expression": {
            "slant": {"right": 90, "straight": 50, "left": 20},
            "pressure": {"heavy": 10, "light": -10}
        },
        "intensity": {
            "pressure": {"heavy": 90, "medium": 60, "light": 30},
            "size": {"large": 10}
        },
        "social_boundaries": {
            "spacing": {"wide": 80, "normal": 50, "tight": 20},
            "size": {"small": 10}
        },
        "determination": {
            "baseline": {"rising": 80, "straight": 50, "falling": 30},
            "pressure": {"heavy": 20, "medium": 0, "light": -20}
        },
        "confidence": {
            "size": {"large": 80, "medium": 50, "small": 30},
            "baseline": {"rising": 20, "falling": -20}
        }
    }

    def calculate_traits(self, features: Dict[str, str], session_id: str = "default") -> Dict[str, Any]:
        """
        Calculate normalized trait scores (0-100) with slight variation for diversity.
        """
        import random
        import hashlib
        
        # Create a stable seed from session_id
        seed_val = int(hashlib.md5(session_id.encode()).hexdigest(), 16)
        random.seed(seed_val)
        
        trait_scores = {}
        
        for trait, contributions in self.TRAIT_RULES.items():
            score = 0
            contributors = []
            
            for feature_name, mapping in contributions.items():
                feature_val = features.get(feature_name)
                if feature_val in mapping:
                    impact = mapping[feature_val]
                    score += impact
                    contributors.append({"feature": feature_name, "value": feature_val, "impact": impact})
            
            # PHASE 2: Normalization & Clamping
            score = max(0, min(100, score))
            
            # PHASE 3: Trait Diversity Layer (±5% variation)
            variation = random.randint(-5, 5)
            score = max(0, min(100, score + variation))
            
            trait_scores[trait] = {
                "score": score,
                "contributors": contributors
            }
            
        return trait_scores

    def detect_conflicts(self, features: Dict[str, str], trait_scores: Dict[str, Any]) -> List[Dict[str, Any]]:
        """
        PHASE 4: Upgraded Conflict Engine
        Detects contradictions with severity levels (low/medium/high).
        """
        conflicts = []
        
        pressure = features.get("pressure")
        baseline = features.get("baseline")
        size = features.get("size")
        spacing = features.get("spacing")
        slant = features.get("slant")
        
        # 1. Drive vs Energy
        if pressure == "heavy" and baseline == "falling":
            conflicts.append({
                "type": "drive_vs_energy",
                "severity": "high",
                "insight": "High internal drive and ambition, but currently experiencing physical or emotional exhaustion. A 'burnt-out high-achiever' pattern."
            })
            
        # 2. Ambition vs Reality
        if size == "large" and baseline == "falling":
            conflicts.append({
                "type": "ambition_vs_pessimism",
                "severity": "medium",
                "insight": "Grand visions and high self-expectation hampered by a current wave of pessimism or lack of follow-through."
            })
            
        # 3. Social Desire vs Social Fear
        if size == "large" and spacing == "wide":
            conflicts.append({
                "type": "visibility_vs_privacy",
                "severity": "medium",
                "insight": "Strong desire for recognition and status, yet maintains a psychological distance from others."
            })
            
        # 4. Intensity vs Repression
        if pressure == "heavy" and slant == "left":
            conflicts.append({
                "type": "intensity_vs_repression",
                "severity": "high",
                "insight": "Powerful internal emotions being strictly repressed for self-protection."
            })

        # 5. Emotional Conflict
        if slant == "right" and spacing == "tight":
            conflicts.append({
                "type": "expressive_anxiety",
                "severity": "low",
                "insight": "Natural urge to express inhibited by social anxiety."
            })

        return conflicts

rule_engine = RuleEngine()
