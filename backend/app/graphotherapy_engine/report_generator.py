import logging
import hashlib
import os
from typing import Dict, Any, List
from openai import OpenAI
from .knowledge_engine import knowledge_engine

logger = logging.getLogger(__name__)

# NVIDIA NIM Client Initialization
client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=os.getenv("NVIDIA_API_KEY")
)


class ReportGenerator:
    """
    PHASE 5: Controlled, Knowledge-Grounded LLM Narrative
    Produces unique, psychologically precise reports per user using NVIDIA NIM (MiniMax M2.7).
    """
    MODEL_ID = "minimaxai/minimax-m2.7"

    def _generate_signature(self, features: Dict[str, str], trait_scores: Dict[str, Any]) -> str:
        feat_str = "".join([f"{k}:{v}" for k, v in sorted(features.items())])
        trait_str = "".join([f"{k}:{v['score']}" for k, v in sorted(trait_scores.items())])
        return hashlib.md5(f"{feat_str}|{trait_str}".encode()).hexdigest()[:10]

    def _build_action_roadmap(
        self, traits: Dict[str, Any], conflicts: List[Dict[str, Any]], personality: Dict[str, Any]
    ) -> List[Dict[str, str]]:
        """Deterministic roadmap — derived from traits and friction points."""
        roadmap = []
        scores = {k: v["score"] for k, v in traits.items()}

        # 1. Trait-Based Actions
        if scores.get("determination", 0) < 50:
            roadmap.append({
                "area": "Follow-Through Calibration",
                "action": "Implement the 'Rule of 3': Execute three critical tasks before noon. No exceptions.",
                "why": "Your handwriting shows interrupted baseline continuity, indicating momentum leakage during execution."
            })
        if scores.get("confidence", 0) < 50:
            roadmap.append({
                "area": "Internal Authority",
                "action": "Increase the vertical height of your capital letters by 20%.",
                "why": "Small capitals signal a minimized self-concept. Adjusting this stroke recalibrates your subconscious space-taking."
            })
        if scores.get("emotional_expression", 0) > 75:
            roadmap.append({
                "area": "Impulse Shielding",
                "action": "Apply a '5-Second Breath' rule before responding to high-stakes communication.",
                "why": "Extreme right slant indicates a heart-driven response style that can bypass logical filters under pressure."
            })

        # 2. Conflict-Based Actions
        for conflict in conflicts:
            if conflict.get("severity") == "high":
                roadmap.append({
                    "area": f"Conflict Resolution: {conflict.get('title', 'Inner Friction')}",
                    "action": conflict.get("resolution", "Engage in 10 minutes of reflective journaling on this specific friction."),
                    "why": "This specific handwriting contradiction creates a significant drainage of mental energy."
                })

        # 3. Archetype-Specific Strategy
        archetype = personality.get("archetype", {}).get("name", "")
        archetype_strategies = {
            "The Visionary Leader": {"area": "Strategic Concentration", "action": "Ruthlessly audit your week. Eliminate any task that doesn't leverage your core vision.", "why": "Visionaries are often derailed by 'low-level' noise that dilutes their authority."},
            "The Stoic Achiever": {"area": "Relational Intelligence", "action": "Initiate one conversation daily focused purely on emotion/feeling rather than logistics.", "why": "Stoicism builds efficiency but can create an isolation trap that limits long-term leadership."},
            "The Sensitive Dreamer": {"area": "Reality Anchoring", "action": "End every day by listing three concrete, physical achievements—not feelings.", "why": "Sensitive profiles can lose themselves in the internal landscape; physical markers prevent drift."},
            "The Cautious Powerhouse": {"area": "Trust Expansion", "action": "Identify one project where you can delegate control to someone else entirely.", "why": "Control is your safety net, but it's also your bottleneck for scaling impact."},
            "The Balanced Pragmatist": {"area": "Ambition Scaling", "action": "Set one goal that is 50% larger than what feels 'safe' right now.", "why": "Pragmatists often under-reach because they prioritize the achievable over the exceptional."},
        }
        if archetype in archetype_strategies:
            roadmap.append(archetype_strategies[archetype])

        return roadmap[:5]

    def _generate_narrative_prompt(
        self,
        features: Dict[str, str],
        trait_scores: Dict[str, Any],
        personality: Dict[str, Any],
        conflicts: List[Dict[str, Any]],
        session_id: str,
        signature: str,
    ) -> str:
        # 1. Build knowledge-grounded context
        kb_context = knowledge_engine.build_grounding_context(features)
        archetype_narrative = knowledge_engine.get_archetype_narrative(
            personality.get("archetype", {}).get("name", "")
        )

        # 2. Data Synthesis with Psychological Hooks
        trait_details = []
        for name, d in trait_scores.items():
            # Get data from knowledge base if available
            feat_val = features.get(name.split('_')[0], 'normal')
            if isinstance(feat_val, dict): feat_val = 'normal'
            
            # This is a simplified fetch, ideally knowledge_engine would provide this
            trait_details.append(
                f"- {name.replace('_', ' ').title()}: {d['score']}/100\n"
                f"  Relatable Trigger: [Explain a scenario where this trait causes friction]\n"
                f"  Emotional Cost: [Explain the internal feeling of this trait]"
            )

        trait_summary = "\n".join(trait_details)

        conflict_summary = "\n".join([
            f"- {c.get('title', c['type'])}: {c.get('deep_insight')}\n"
            f"  The Mirror: {c.get('relatable_scenario')}\n"
            f"  The Gap: {c.get('resolution_gap')}"
            for c in conflicts
        ]) if conflicts else "None detected."

        return f"""
You are a Lead Forensic Graphologist & Behavioral Architect. You are delivering a HIGH-IMPACT TRANSFORMATION BLUEPRINT.
Tone: Expert, Empathetic, Piercing, and Irresistible.

=== YOUR MISSION ===
1. IDENTITY MIRRORING: Make the user say "This is exactly me" by describing relatable, real-life behaviors.
2. EMOTIONAL RESONANCE: Don't just diagnose; describe how it FEELS to live inside their head.
3. THE RESOLUTION GAP: Clearly expose the problem and its cost, but HINT that the exact 'how-to' correction is in the Full Transformation Report.

STRICT CONVERSION RULES:
- Use "Recognition Triggers": Describe a scenario (e.g., "You're in a meeting and...") that they recognize instantly.
- Use "Tension Triggers": Show exactly what this pattern is costing them (time, money, love, health).
- CONTROLLED OPEN LOOP: Every section must end with a realization that this pattern cannot fix itself and requires the 'Stroke-Correction Blueprint' found in the full version.

{kb_context}

=== ARCHETYPE: {personality['archetype']['name']} ===
{archetype_narrative}

=== DIAGNOSTIC DATA ===
{trait_summary}

=== CONFLICT MATRIX (THE ENGINE BREAKDOWN) ===
{conflict_summary}

=== NARRATIVE STRUCTURE (CONVERSION FLOW) ===

SECTION 1: THE IDENTITY MIRROR (The Core)
Mirror their reality. Use a relatable scenario. Explain why they feel 'misunderstood' or 'stuck' in this specific way.
Emotional Hook: Describe the internal feeling of being this archetype.

SECTION 2: THE SHADOW COST (The Tension)
Expose the 'Hidden Tax' they are paying. What does their social mask cost them at 2 AM when the lights are off? 
Open Loop: Mention that their signature contains a specific 'Energy Leak' that is only fully decoded in the premium analysis.

SECTION 3: THE ENGINE FRICTION (The Urgency)
Focus on the Conflicts. Describe them as a 'Loop of Sabotage'. 
Trigger: "This pattern will repeat forever unless the neural pathway is physically re-routed."
Resolution Gap: Hint at the specific graphotherapy strokes needed to break this loop.

SECTION 4: THE TRANSFORMATION GAP (The CTA)
Explain that while this diagnosis is 100% accurate, it is only the 'X-Ray'. The 'Surgery' (the actual correction) is the next step.
Final Blow: "Your current pattern is a choice your subconscious is making every time you pick up a pen. The Full Report shows you how to choose differently."

STRICT CONSTRAINTS:
- No generic AI fluff.
- Start every paragraph with a direct observation or a relatable scenario.
- Balance "Diagnostic Authority" (Forensic) with "Emotional Relatability" (Empathy).
- Ensure the user feels INCOMPLETE without the full report.
""".strip()

    def generate_narrative(
        self,
        features: Dict[str, str],
        trait_scores: Dict[str, Any],
        personality: Dict[str, Any],
        conflicts: List[Dict[str, Any]],
        session_id: str,
        signature: str,
    ) -> str:
        try:
            prompt = self._generate_narrative_prompt(
                features, trait_scores, personality, conflicts, session_id, signature
            )
            response = client.chat.completions.create(
                model=self.MODEL_ID,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.45,
                max_tokens=1500
            )
            narrative = response.choices[0].message.content
            return narrative.strip()
        except Exception as e:
            logger.error(f"Narrative Generation CRITICAL FAILURE: {e}")
            raise RuntimeError(f"Narrative generation failed: {e}")

    def assemble_report(
        self,
        features: Dict[str, str],
        trait_scores: Dict[str, Any],
        personality: Dict[str, Any],
        conflicts: List[Dict[str, Any]],
        session_id: str,
        purchase_type: str = "free"
    ) -> Dict[str, Any]:
        print(f"[STRICT_VERIFICATION] report_generator.assemble_report triggered")
        enriched_conflicts = knowledge_engine.enrich_conflicts(conflicts)
        signature = self._generate_signature(features, trait_scores)
        
        narrative = self.generate_narrative(
            features, trait_scores, personality, enriched_conflicts, session_id, signature
        )
        
        # Parse narrative into sections for the frontend
        # We expect 4 paragraphs based on the prompt
        paragraphs = [p.strip() for p in narrative.split("\n\n") if p.strip()]
        section_titles = [
            "The Architectural Core",
            "The Shadow & Social Dynamics",
            "The Engine Friction",
            "The Neural Rewiring Path"
        ]
        
        narrative_sections = []
        for i, p in enumerate(paragraphs[:4]):
            narrative_sections.append({
                "title": section_titles[i] if i < len(section_titles) else f"Analysis Section {i+1}",
                "content": p
            })

        roadmap = self._build_action_roadmap(trait_scores, enriched_conflicts, personality)

        # Mapping for Premium UI
        overall_score = sum(t["score"] for t in trait_scores.values()) // len(trait_scores) if trait_scores else 85
        
        metrics = []
        for name, data in sorted(trait_scores.items(), key=lambda x: x[1]["score"], reverse=True):
            metrics.append({
                "label": name.replace("_", " ").title(),
                "value": "High" if data["score"] > 70 else "Moderate" if data["score"] > 40 else "Underdeveloped",
                "status": "good" if data["score"] > 70 else "neutral" if data["score"] > 40 else "warning",
                "score": data["score"]
            })

        insights = []
        # Priority 1: High Severity Conflicts
        for c in enriched_conflicts:
            if c.get("severity") == "high":
                insights.append({
                    "title": c.get("title", "High Friction Alert"),
                    "analysis": c.get("deep_insight", ""),
                    "relatable": c.get("relatable_scenario", ""),
                    "emotional_impact": c.get("emotional_impact", ""),
                    "gap": c.get("resolution_gap", ""),
                    "shadow_hint": f"Behavioral tax: {c.get('insight', '')}"
                })
        
        # Priority 2: Deep Traits
        top_traits = sorted(trait_scores.items(), key=lambda x: x[1]["score"], reverse=True)
        for name, data in top_traits:
            if len(insights) >= 5: break
            insights.append({
                "title": f"Dominant {name.replace('_', ' ').title()}",
                "analysis": f"A score of {data['score']}/100 indicates this is a core driver of your personality.",
                "shadow_hint": "This strength can become a rigid habit if not consciously balanced."
            })

        return {
            "features": features,
            "trait_scores": trait_scores,
            "personality": personality,
            "conflicts": enriched_conflicts,
            "narrative": narrative,
            "narrative_sections": narrative_sections,
            "roadmap": roadmap,
            "signature": signature,
            "session_id": session_id,
            "purchase_type": purchase_type,
            "overall_score": overall_score,
            "metrics": metrics[:4],
            "insights": insights[:5],
            "hook": "Your current struggles are not a result of lack of effort or intelligence. They are the direct output of a hidden behavioral blueprint that is repeating a cycle of friction. The markers below decode exactly why your progress is being throttled. You feel understood, because for the first time, your biology is being heard."
        }


report_generator = ReportGenerator()
