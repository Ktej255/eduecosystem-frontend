import hashlib
import logging
from typing import Dict, Any, List, Optional

logger = logging.getLogger(__name__)

class ExperimentEngine:
    def __init__(self):
        # Variant NAMES are static (registry). WEIGHTS come from DB via config_service.
        self.registry = {
            "pricing_test": {
                "variants": ["A", "B"],
                # weights fetched live from config:variant_weights → "pricing_test" key
            },
            "messaging_test": {
                "variants": ["curiosity", "fear", "logical"],
            },
            "ordering_test": {
                "variants": ["emotional_first", "behavioral_first", "mixed"],
            },
            "blur_test": {
                "variants": ["heavy", "partial"],
            }
        }

    def get_user_variant(self, user_id: str, experiment_name: str, db=None) -> str:
        """
        Deterministic variant assignment based on user_id hash.
        WEIGHTS are read from DB via config_service (set by autopilot).
        Ensures variant distribution changes automatically after autopilot runs.
        """
        from .admin_engine import admin_engine
        from app.core.config_service import get_variant_weights

        if experiment_name not in self.registry:
            return "default"

        # Phase 6: Manual override wins
        manual_config = admin_engine.get_experiment_override(experiment_name)
        if manual_config and manual_config.get("status") == "completed":
            return manual_config.get("winner", "default")

        config = self.registry[experiment_name]
        variants = config["variants"]

        # ── LIVE WEIGHTS FROM DB (config_service) ────────────────────────────
        # variant_weights = {"basic": 0.6, "recovery": 0.3, "premium": 0.1}
        # Maps to experiment buckets: basic→A(control), recovery→B(test), premium→C
        live_weights = get_variant_weights(db)

        # Build numeric weight list matching variant count
        weight_keys = list(live_weights.values())
        num_variants = len(variants)

        # Normalize to variant count (pad/truncate)
        while len(weight_keys) < num_variants:
            weight_keys.append(1.0 / num_variants)
        weight_keys = weight_keys[:num_variants]
        total = sum(weight_keys) or 1
        normalized = [w / total for w in weight_keys]

        # Deterministic hash → weighted bucket
        hash_val = int(hashlib.md5(f"{user_id}:{experiment_name}".encode()).hexdigest(), 16)
        # Map hash to [0, 1) range
        bucket = (hash_val % 10000) / 10000.0

        cumulative = 0.0
        for i, w in enumerate(normalized):
            cumulative += w
            if bucket < cumulative:
                selected = variants[i]
                logger.debug(
                    f"ExperimentEngine: user={user_id} exp={experiment_name} "
                    f"variant={selected} weights={normalized} (from DB config)"
                )
                return selected

        return variants[-1]

    def get_pricing_override(self, user_id: str, base_prices: Dict[str, int], db=None) -> Dict[str, int]:
        """
        Phase 2: Multi-Pricing Support.
        """
        variant = self.get_user_variant(user_id, "pricing_test", db)
        
        if variant == "B":
            # 20-30% price lift test
            return {
                "upsell_59": 79,
                "bundle_118": 149,
                "full_1299": 1499
            }
        return base_prices

    def get_message_tone(self, user_id: str, db=None) -> str:
        """
        Phase 3: Message Variant Testing.
        """
        return self.get_user_variant(user_id, "messaging_test", db)

    def get_ordering_strategy(self, user_id: str, db=None) -> str:
        """
        Phase 5: Dimension Order Testing.
        """
        return self.get_user_variant(user_id, "ordering_test", db)

    def get_experiment_stats(self) -> Dict[str, Any]:
        """
        Phase 10: Dashboard Preparation.
        """
        from .memory_engine import memory_engine
        results = memory_engine.experiments
        stats = {}
        
        for exp, variants in results.items():
            stats[exp] = {}
            for var, data in variants.items():
                impressions = data["impressions"]
                conversions = data["conversions"]
                revenue = data["revenue"]
                
                stats[exp][var] = {
                    "cr": round(conversions / max(impressions, 1), 4),
                    "rpi": round(revenue / max(impressions, 1), 2),
                    "impressions": impressions,
                    "conversions": conversions
                }
        return stats

experiment_engine = ExperimentEngine()
