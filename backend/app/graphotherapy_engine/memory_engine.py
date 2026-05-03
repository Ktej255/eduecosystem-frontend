"""
MemoryEngine — 100% Redis-backed user state.
All user memory (session counts, purchase history, offers) is stored
in Redis hashes keyed by user_id. No flat files.
TTL: 30 days per user record.
"""
import json
import logging
import time
from typing import Dict, Any, Optional

logger = logging.getLogger(__name__)

USER_MEMORY_PREFIX = "memory:user:"
DIM_PERF_KEY = "memory:dimension_performance"
EXPERIMENTS_KEY = "memory:experiment_results"
FEEDBACK_PREFIX = "memory:feedback:"
USER_TTL = 86400 * 30  # 30 days

_EMPTY_USER = {
    "traits_history": [],
    "dimensions_history": [],
    "purchase_history": [],
    "offers_seen": [],
    "offers_clicked": [],
    "offers_declined": [],
    "session_count": 0,
}


def _redis():
    from app.services.cache_service import cache_service
    return cache_service.client


def _rget(key: str) -> Dict[str, Any]:
    """Read a JSON value from Redis. Returns {} on miss or error."""
    try:
        raw = _redis().get(key)
        if raw:
            return json.loads(raw)
    except Exception as e:
        logger.warning(f"[MEMORY] Redis GET failed for '{key}': {e}")
    return {}


def _rset(key: str, data: Dict[str, Any], ttl: Optional[int] = None):
    """Write a JSON value to Redis with optional TTL."""
    try:
        payload = json.dumps(data)
        if ttl:
            _redis().set(key, payload, ex=ttl)
        else:
            _redis().set(key, payload)
    except Exception as e:
        logger.warning(f"[MEMORY] Redis SET failed for '{key}': {e}")


class MemoryEngine:
    # ── User Memory ────────────────────────────────────────────────────────────

    def get_user_memory(self, user_id: str) -> Dict[str, Any]:
        """Fetch user memory from Redis. Returns empty template on first visit."""
        key = f"{USER_MEMORY_PREFIX}{user_id}"
        data = _rget(key)
        if not data:
            return dict(_EMPTY_USER)
        # Backfill any missing keys from template
        return {**_EMPTY_USER, **data}

    def update_user_memory(self, user_id: str, event: Dict[str, Any]):
        """Apply an event update to the user's Redis memory record."""
        user_id = str(user_id)
        key = f"{USER_MEMORY_PREFIX}{user_id}"
        memory = self.get_user_memory(user_id)

        event_type = event.get("type")
        if event_type == "session_start":
            memory["session_count"] += 1
        elif event_type == "trait_analysis":
            memory["traits_history"].extend(event.get("traits", []))
        elif event_type == "purchase":
            memory["purchase_history"].append(event.get("item"))
        elif event_type == "offer_interaction":
            action = event.get("action")
            offer_id = event.get("offer_id")
            memory["offers_seen"].append(offer_id)
            if action == "click":
                memory["offers_clicked"].append(offer_id)
            elif action == "decline":
                memory["offers_declined"].append(offer_id)

        _rset(key, memory, ttl=USER_TTL)

    # ── Dimension Performance ──────────────────────────────────────────────────

    def track_dimension_performance(self, dimension_name: str, converted: bool = False):
        """Update shown/converted counters for a dimension in Redis."""
        perf = _rget(DIM_PERF_KEY)
        dim = perf.get(dimension_name, {"shown": 0, "converted": 0, "conversion_rate": 0.0})
        dim["shown"] += 1
        if converted:
            dim["converted"] += 1
        dim["conversion_rate"] = dim["converted"] / max(dim["shown"], 1)
        perf[dimension_name] = dim
        _rset(DIM_PERF_KEY, perf)

    def get_dimension_boosts(self) -> Dict[str, float]:
        """Return adaptive score boosts per dimension based on live conversion rates."""
        perf = _rget(DIM_PERF_KEY)
        boosts = {}
        for dim, data in perf.items():
            if data.get("shown", 0) >= 20:  # Minimum learning threshold
                boosts[dim] = min(data["conversion_rate"] * 0.5, 0.15)
            else:
                boosts[dim] = 0.0
        return boosts

    # ── Experiment Tracking ────────────────────────────────────────────────────

    def track_experiment_event(
        self, experiment: str, variant: str, event_type: str, revenue: float = 0.0
    ):
        """Accumulate experiment impressions/conversions in Redis."""
        exp_data = _rget(EXPERIMENTS_KEY)
        exp = exp_data.get(experiment, {})
        var_data = exp.get(variant, {"impressions": 0, "conversions": 0, "revenue": 0.0})

        if event_type == "impression":
            var_data["impressions"] += 1
        elif event_type == "conversion":
            var_data["conversions"] += 1
            var_data["revenue"] += revenue

        exp[variant] = var_data
        exp_data[experiment] = exp
        _rset(EXPERIMENTS_KEY, exp_data)

    @property
    def experiments(self) -> Dict[str, Any]:
        """Read-only access to experiment results (for ExperimentEngine.get_stats)."""
        return _rget(EXPERIMENTS_KEY)

    # ── Feedback ───────────────────────────────────────────────────────────────

    def store_feedback(self, user_id: str, rating: int, comment: str):
        """Persist user feedback to Redis."""
        key = f"{FEEDBACK_PREFIX}{user_id}"
        _rset(key, {
            "rating": rating,
            "comment": comment,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        }, ttl=USER_TTL)


memory_engine = MemoryEngine()
