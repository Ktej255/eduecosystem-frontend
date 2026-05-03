import logging
import json
import os
from typing import Dict, Any, List, Optional
from .memory_engine import memory_engine
from .monitoring import monitor
from .experiment_engine import experiment_engine
from .growth_engine import growth_engine
from .constants import RESEARCH_DIR

logger = logging.getLogger(__name__)

ADMIN_CONFIG_FILE = RESEARCH_DIR / "admin_overrides.json"

class AdminEngine:
    def __init__(self):
        self._ensure_config()
        self.overrides = self._load_overrides()

    def _ensure_config(self):
        if not ADMIN_CONFIG_FILE.exists():
            default = {
                "pricing": {}, # {offer_id: price}
                "priorities": {}, # {dimension_name: weight}
                "experiments": {}, # {exp_name: {status, split}}
                "templates_version": "v1.0"
            }
            ADMIN_CONFIG_FILE.write_text(json.dumps(default, indent=4))

    def _load_overrides(self) -> Dict[str, Any]:
        try:
            return json.loads(ADMIN_CONFIG_FILE.read_text())
        except:
            return {}

    def save_overrides(self, new_config: Dict[str, Any]):
        """Save manual business overrides."""
        self.overrides = new_config
        ADMIN_CONFIG_FILE.write_text(json.dumps(new_config, indent=4))
        
        # PHASE 5: Live reload templates if version changed
        # In a real system, we'd trigger a reload in the cache
        logger.info("[ADMIN] Manual overrides updated and saved.")

    def declare_experiment_winner(self, experiment_name: str, winning_variant: str):
        """
        Phase 6: Declare a manual winner and shift 100% traffic.
        """
        if "experiments" not in self.overrides:
            self.overrides["experiments"] = {}
        
        self.overrides["experiments"][experiment_name] = {
            "status": "completed",
            "winner": winning_variant,
            "traffic_split": {winning_variant: 100}
        }
        self.save_overrides(self.overrides)

    def get_experiment_override(self, experiment_name: str) -> Optional[Dict[str, Any]]:
        """Retrieve manual experiment configuration."""
        return self.overrides.get("experiments", {}).get(experiment_name)

    def get_dashboard_metrics(self) -> Dict[str, Any]:
        """
        Phase 1 & 2: Aggregate metrics for the business owner.
        """
        user_data = memory_engine.user_memory
        perf_data = memory_engine.performance
        
        total_users = len(user_data)
        total_reports = sum(m.get("session_count", 0) for m in user_data.values())
        
        # Aggregate Revenue
        total_revenue = 0.0
        for exp in memory_engine.experiments.values():
            for var in exp.values():
                total_revenue += var.get("revenue", 0.0)

        # Dimension Leaderboard
        dimension_stats = []
        for name, data in perf_data.items():
            dimension_stats.append({
                "name": name,
                "shown": data["shown"],
                "converted": data["converted"],
                "cr": round(data["conversion_rate"] * 100, 2),
                "revenue": 0 # Logic to tie specific revenue to dimension if needed
            })
        
        # Sort by Conversion Rate
        dimension_stats = sorted(dimension_stats, key=lambda x: x["cr"], reverse=True)

        # Feedback Stats
        feedback_data = memory_engine.feedback
        avg_rating = 0
        if feedback_data:
            avg_rating = sum(f.get("rating", 0) for f in feedback_data.values()) / len(feedback_data)

        return {
            "overview": {
                "total_users": total_users,
                "total_reports": total_reports,
                "total_revenue": total_revenue,
                "avg_revenue_per_user": round(total_revenue / max(total_users, 1), 2),
                "avg_rating": round(avg_rating, 2)
            },
            "growth": {
                "live": growth_engine.get_live_metrics(),
                "funnel": growth_engine.get_funnel_stats()
            },
            "dimensions": dimension_stats,
            "feedback": list(feedback_data.values())[-10:], # Last 10 comments
            "experiments": experiment_engine.get_experiment_stats(),
            "health": monitor.get_health_status()
        }

    def get_priority_override(self, dimension_name: str) -> Optional[float]:
        """
        Phase 3: Manual Priority Override logic.
        """
        return self.overrides.get("priorities", {}).get(dimension_name)

    def get_pricing_override(self, offer_id: str) -> Optional[int]:
        """
        Phase 4: Manual Pricing Override logic.
        """
        return self.overrides.get("pricing", {}).get(offer_id)

admin_engine = AdminEngine()
