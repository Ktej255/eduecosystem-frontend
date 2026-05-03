import json
import os
import logging
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).parent
RESEARCH_DIR = BASE_DIR / "research"

TRAITS_PATH = RESEARCH_DIR / "traits.json"
DIMENSIONS_PATH = RESEARCH_DIR / "dimensions.json"
TEMPLATES_PATH = RESEARCH_DIR / "templates.json"

# Environments
ENV = os.getenv("APP_ENV", "development") # development, staging, production
DEBUG = ENV == "development"

# Logging Level
LOG_LEVEL = logging.DEBUG if DEBUG else logging.INFO

# --- Startup Cache System (Phase 10) ---
_CONFIG_CACHE = {}

def get_config(name: str):
    """Retrieve config from memory cache."""
    if name not in _CONFIG_CACHE:
        path_map = {
            "traits": TRAITS_PATH,
            "dimensions": DIMENSIONS_PATH,
            "templates": TEMPLATES_PATH
        }
        path = path_map.get(name)
        if path and os.path.exists(path):
            with open(path, "r") as f:
                _CONFIG_CACHE[name] = json.load(f)
        else:
            _CONFIG_CACHE[name] = {}
    return _CONFIG_CACHE[name]

# Pre-load cache at startup
TRAITS_CONFIG = get_config("traits").get("traits", [])
DIMENSIONS_CONFIG = get_config("dimensions").get("dimensions", [])
TEMPLATES_CONFIG = get_config("templates")

# PHASE 13: Launch Protocol
LAUNCH_CONFIG = {
    "system_status": "live", # development, beta, live
    "launch_mode": "full_public_launch",
    "traffic_limit": 500,
    "maintenance_mode": False
}

# PHASE 14: User Onboarding Flow
ONBOARDING_ASSETS = {
    "loading_states": [
        "Analyzing stroke patterns...",
        "Mapping personality traits...",
        "Decoding behavioral patterns...",
        "Identifying cognitive loops...",
        "Finalizing your Intelligence Blueprint..."
    ],
    "activation_hook": "You are about to see patterns in your handwriting that most people never discover."
}

# Global Performance Thresholds
PERFORMANCE_BUDGET_MS = 200

# --- Production Settings ---
PURCHASE_TYPES = [
    "free",
    "upsell_59",
    "downsell_29",
    "bundle_118",
    "bundle_299",
    "full_1299"
]

# Weights for scoring
WEIGHT_CONFIDENCE = 0.5
WEIGHT_FREQUENCY = 0.2
WEIGHT_PRIORITY = 0.3

# Depth mapping
DEPTH_MAP = {
    "free": "low",
    "upsell_59": "medium",
    "downsell_29": "medium",
    "bundle_118": "high",
    "bundle_299": "high",
    "full_1299": "high"
}

# Rate Limits (Phase 10)
MAX_REQUESTS_PER_MINUTE = 5
