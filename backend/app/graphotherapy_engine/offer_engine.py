import logging
from typing import Dict, Any, List, Optional
import time
from .memory_engine import memory_engine
from .experiment_engine import experiment_engine
from .admin_engine import admin_engine
from .growth_engine import growth_engine

logger = logging.getLogger(__name__)

# TONE VARIANTS (Phase 5 & Phase 11 Experimentation)
TONE_VARIANTS = {
    "default": "Unlock your complete analysis to reveal your full potential.",
    "curiosity": "Wait! There's a hidden layer in your writing you haven't seen yet. Want to know what it is?",
    "confidence": "You've already taken the first step. Complete your blueprint to master your results.",
    "urgency": "This specific insight is only available for a limited time. Don't miss your correction window.",
    "fear": "You are currently repeating a behavior pattern that is costing you significant results. Stop the leak now.",
    "logical": "Data-driven analysis shows your top 3 growth blocks. Access the specific corrections to optimize your performance."
}

OFFER_CONFIG = {
    "full_1299": {"price": 1299, "base_price": 1699, "discount": "23%"},
    "bundle_299": {"price": 299, "base_price": 499, "discount": "40%"},
    "bundle_118": {"price": 118, "base_price": 249, "discount": "52%"},
    "upsell_59": {"price": 59, "base_price": 99, "discount": "40%"},
    "downsell_29": {"price": 29, "base_price": 59, "discount": "50%"}
}

DIMENSION_HOOKS = {
    "Self Esteem": "You are overlooking a critical self-belief pattern that is affecting your decisions.",
    "Emotional Stability": "Your emotional variability is high. Unlock the root cause to achieve consistency.",
    "Procrastination": "Your delay pattern is silently reducing your results. See the impact now.",
    "Thinking Pattern": "Your investigative mind is sharp, but there is a hidden block in your logic.",
    "Behavioral Drive": "You have the power, but you are leaking energy. Fix your focus today."
}

class OfferEngine:
    def get_optimal_offer(
        self,
        purchase_history: List[str],
        current_state: str,
        top_dimension: str,
        user_id: str = None,
        db=None  # Accept DB session for config reads
    ) -> Dict[str, Any]:
        """
        Determine next best offer.
        Pricing mode and recovery flags are read from DB via config_service (100% config-driven).
        """
        from app.core.config_service import get_pricing_mode, is_recovery_active

        user_memory = memory_engine.get_user_memory(user_id) if user_id else {}

        # ── Base offer selection ──────────────────────────────────────────────
        offer_key = "full_1299"

        if not purchase_history or "free" in purchase_history:
            if current_state == "declined_59":
                offer_key = "downsell_29"
            elif current_state == "viewed_report":
                offer_key = "upsell_59"
            else:
                offer_key = "full_1299"
        elif "upsell_59" in purchase_history or "downsell_29" in purchase_history:
            offer_key = "bundle_118"
        elif "bundle_118" in purchase_history:
            offer_key = "bundle_299"
        elif "bundle_299" in purchase_history:
            offer_key = "full_1299"

        config = OFFER_CONFIG.get(offer_key, OFFER_CONFIG["full_1299"])

        # ── PART 1: Read pricing_mode from DB config ─────────────────────────
        pricing_mode = get_pricing_mode(db)  # "STANDARD" | "AGGRESSIVE_RECOVERY" | "PREMIUM_MAX"
        recovery_mode_active = is_recovery_active(db)  # True | False

        logger.info(
            f"OfferEngine: user={user_id} pricing_mode={pricing_mode} "
            f"recovery_active={recovery_mode_active} offer={offer_key}"
        )

        # ── PRICING MODE ENFORCEMENT (config-driven, not hardcoded) ──────────
        price = config["price"]

        if pricing_mode == "AGGRESSIVE_RECOVERY":
            # Recovery: discount all prices by 20% to maximize conversion
            price = int(config["price"] * 0.80)
            logger.info(f"OfferEngine: AGGRESSIVE_RECOVERY — price dropped to {price} for {offer_key}")
        elif pricing_mode == "PREMIUM_MAX":
            # Premium: lift price 15% — only high-intent users reach here
            price = int(config["price"] * 1.15)
            logger.info(f"OfferEngine: PREMIUM_MAX — price lifted to {price} for {offer_key}")
        else:
            # STANDARD — check for manual admin override
            manual_price = admin_engine.get_pricing_override(offer_key)
            if manual_price:
                price = manual_price
            elif user_id:
                overrides = experiment_engine.get_pricing_override(user_id, {offer_key: price}, db=db)
                price = overrides.get(offer_key, price)

        # ── RECOVERY FLAGS: override offer if recovery is active ─────────────
        if recovery_mode_active and offer_key == "full_1299" and not purchase_history:
            # Recovery mode forces downsell funnel entry
            offer_key = "bundle_299"
            config = OFFER_CONFIG["bundle_299"]
            price = int(config["price"] * 0.80)  # still apply recovery discount
            logger.info(f"OfferEngine: recovery_flags active — rerouting to bundle_299 at {price}")

        # ── Growth interventions ──────────────────────────────────────────────
        drop_stage = growth_engine.detect_drop_off(user_id)
        if drop_stage == "checkout_abandon" and offer_key != "downsell_29":
            price = int(price * 0.8)
            logger.info(f"[GROWTH] Auto-intervention: Discount applied for {user_id}")

        user_memory = memory_engine.get_user_memory(user_id)
        if user_memory.get("session_count", 0) > 3 or len(user_memory.get("purchase_history", [])) > 0:
            if offer_key == "upsell_59":
                offer_key = "bundle_299"
                config = OFFER_CONFIG["bundle_299"]
                price = config["price"]
                if pricing_mode == "AGGRESSIVE_RECOVERY":
                    price = int(price * 0.80)
                logger.info(f"[GROWTH] High-Value User: Upselling {user_id} to Bundle")

        # ── Messaging ─────────────────────────────────────────────────────────
        base_message = DIMENSION_HOOKS.get(top_dimension, "Unlock your complete analysis.")

        tone = "default"
        if user_id:
            tone = experiment_engine.get_message_tone(user_id, db=db)
        elif user_memory.get("purchase_history"):
            tone = "confidence"
        elif user_memory.get("offers_declined"):
            tone = "curiosity"

        # Recovery mode forces urgency messaging
        if recovery_mode_active:
            tone = "urgency"

        seen_count = user_memory.get("offers_seen", []).count(offer_key)
        if seen_count > 2:
            fatigue_tones = ["curiosity", "fear", "logical"]
            tone = fatigue_tones[seen_count % len(fatigue_tones)]

        variant_text = TONE_VARIANTS.get(tone, TONE_VARIANTS["default"])
        message = f"{base_message} {variant_text}"

        if offer_key == "full_1299":
            message = "You've only seen a small part of your personality. " + message
        elif offer_key == "downsell_29":
            message = "Wait! Don't leave your patterns half-understood. At least unlock this core insight."

        validity_timer = 300

        return {
            "offer_id": offer_key,
            "title": self._get_offer_title(offer_key),
            "message": message,
            "price": price,
            "base_price": config["base_price"],
            "discount": config["discount"],
            "urgency": "Limited Time Offer",
            "validity_timer": validity_timer,
            "cta_text": "Unlock Now",
            # Proof fields — removed in production if needed
            "_config_source": {
                "pricing_mode": pricing_mode,
                "recovery_active": recovery_mode_active,
                "source": "DB:app_configs + Redis:config:pricing_strategy"
            }
        }



    def _get_offer_title(self, offer_key: str) -> str:
        titles = {
            "full_1299": "Complete Personality Blueprint",
            "bundle_299": "Deep Intelligence Bundle",
            "bundle_118": "Core Trinity Pack",
            "upsell_59": "Emotional Deep-Dive",
            "downsell_29": "Pattern Spotlight"
        }
        return titles.get(offer_key, "Special Offer")

    def get_triggers(self) -> Dict[str, int]:
        """
        PHASE 7: Offer Trigger Points
        """
        return {
            "primary": 65,
            "secondary": 85
        }

offer_engine = OfferEngine()
