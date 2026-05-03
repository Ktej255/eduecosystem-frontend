"""
KnowledgeEngine: Loads structured graphology domain knowledge and injects
it into the LLM prompt as grounding context. Prevents generic AI output.
"""
import json
import os
import logging
from typing import Dict, Any, List

logger = logging.getLogger(__name__)

_KB_PATH = os.path.join(os.path.dirname(__file__), "research", "knowledge_base.json")


class KnowledgeEngine:
    def __init__(self):
        self._kb: Dict[str, Any] = {}
        self._load()

    def _load(self):
        try:
            with open(_KB_PATH, "r", encoding="utf-8") as f:
                self._kb = json.load(f)
            logger.info("[KnowledgeEngine] Knowledge base loaded OK.")
        except Exception as e:
            logger.error(f"[KnowledgeEngine] Failed to load KB: {e}")
            self._kb = {}

    # ─── Public API ───────────────────────────────────────────────────────────

    def build_grounding_context(self, features: Dict[str, str]) -> str:
        """
        Converts extracted features into a rich knowledge context block
        to be injected verbatim into the LLM narrative prompt.
        """
        interp = self._kb.get("feature_interpretations", {})
        lines: List[str] = ["=== DOMAIN KNOWLEDGE (MANDATORY REFERENCE) ==="]

        for feat, val in features.items():
            if feat in interp and val in interp[feat]:
                entry = interp[feat][val]
                lines.append(
                    f"\n[{feat.upper()}: {entry['label']}]\n"
                    f"Core Meaning: {entry['core_meaning']}\n"
                    f"Psychological Driver: {entry['psychological_driver']}\n"
                    f"Behavioural Traits: {', '.join(entry['behavioral_traits'])}\n"
                    f"Shadow Side: {entry['shadow_side']}"
                )

        return "\n".join(lines)

    def get_conflict_context(self, conflict_type: str) -> Dict[str, str]:
        return self._kb.get("conflict_explanations", {}).get(conflict_type, {})

    def get_archetype_narrative(self, archetype_name: str) -> str:
        return self._kb.get("archetype_narratives", {}).get(archetype_name, "")

    def enrich_conflicts(self, conflicts: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Add deep_insight and resolution from KB to each conflict."""
        enriched = []
        for c in conflicts:
            extra = self.get_conflict_context(c.get("type", ""))
            enriched.append({
                **c,
                "title": extra.get("title", c.get("type", "").replace("_", " ").title()),
                "deep_insight": extra.get("deep_insight", c.get("insight", "")),
                "resolution": extra.get("resolution", ""),
            })
        return enriched


knowledge_engine = KnowledgeEngine()
