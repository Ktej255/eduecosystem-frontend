from typing import Dict, Any, List

class PersonalityMapper:
    """
    PHASE 4: Personality Mapping
    Converts quantified traits into human archetypes and life domain insights.
    """

    def map_to_profile(self, trait_scores: Dict[str, Any]) -> Dict[str, Any]:
        """
        Map trait scores to a comprehensive personality profile.
        """
        scores = {k: v["score"] for k, v in trait_scores.items()}
        
        # Determine Archetype
        archetype = self._determine_archetype(scores)
        
        # Extract Strengths & Weaknesses
        strengths = self._extract_strengths(scores)
        weaknesses = self._extract_weaknesses(scores)
        
        # Career Alignment
        career = self._align_career(scores)
        
        # Behavioral Patterns
        patterns = self._extract_patterns(scores)
        
        return {
            "archetype": archetype,
            "strengths": strengths,
            "weaknesses": weaknesses,
            "career_alignment": career,
            "behavioral_patterns": patterns
        }

    def _determine_archetype(self, scores: Dict[str, int]) -> Dict[str, str]:
        if scores["confidence"] > 70 and scores["determination"] > 70:
            return {"name": "The Visionary Leader", "summary": "Driven by high self-belief and an unstoppable will to execute."}
        if scores["emotional_expression"] < 40 and scores["determination"] > 70:
            return {"name": "The Stoic Achiever", "summary": "Highly disciplined and goal-oriented, keeping emotions separate from objectives."}
        if scores["emotional_expression"] > 70 and scores["intensity"] < 50:
            return {"name": "The Sensitive Dreamer", "summary": "Rich inner emotional life with a deep capacity for empathy and imagination."}
        if scores["social_boundaries"] > 70 and scores["intensity"] > 70:
            return {"name": "The Cautious Powerhouse", "summary": "Intense internal drive paired with a strong need for privacy and guardedness."}
        
        return {"name": "The Balanced Pragmatist", "summary": "A stable blend of logic and emotion, capable of adapting to varied situations."}

    def _extract_strengths(self, scores: Dict[str, int]) -> List[str]:
        strengths = []
        if scores["determination"] > 75: strengths.append("Unwavering Persistence")
        if scores["confidence"] > 75: strengths.append("Strong Self-Presence")
        if scores["emotional_expression"] > 75: strengths.append("High Emotional Intelligence")
        if scores["social_boundaries"] > 75: strengths.append("Discerning & Private")
        if scores["intensity"] > 75: strengths.append("High Vitality & Drive")
        
        if not strengths: strengths = ["Reliability", "Adaptability", "Practical Thinking"]
        return strengths[:3]

    def _extract_weaknesses(self, scores: Dict[str, int]) -> List[str]:
        weaknesses = []
        if scores["determination"] < 40: weaknesses.append("Difficulty with Follow-through")
        if scores["confidence"] < 40: weaknesses.append("Self-Doubt in New Situations")
        if scores["emotional_expression"] > 85: weaknesses.append("Potential for Emotional Overwhelm")
        if scores["intensity"] > 85: weaknesses.append("Risk of Burnout or Impatience")
        if scores["social_boundaries"] < 30: weaknesses.append("Lack of Personal Space / Over-sharing")
        
        if not weaknesses: weaknesses = ["Routine Boredom", "Occasional Perfectionism"]
        return weaknesses[:3]

    def _align_career(self, scores: Dict[str, int]) -> str:
        if scores["confidence"] > 70 and scores["determination"] > 70:
            return "Entrepreneurship, Executive Leadership, or High-Stakes Management."
        if scores["emotional_expression"] > 70:
            return "Counseling, Arts, Public Relations, or Teaching."
        if scores["social_boundaries"] > 70:
            return "Research, Strategic Planning, Technical Analysis, or Writing."
        if scores["determination"] > 70:
            return "Operations Management, Sales, or Results-Oriented Project Work."
            
        return "Versatile roles in collaborative environments or service-oriented sectors."

    def _extract_patterns(self, scores: Dict[str, int]) -> List[str]:
        patterns = []
        if scores["emotional_expression"] > 70: patterns.append("Decisions are often influenced by immediate emotional resonance.")
        else: patterns.append("Approach to decision-making is typically detached and analytical.")
        
        if scores["intensity"] > 70: patterns.append("Engagement with tasks is deep and immersive.")
        else: patterns.append("Conserves energy and prefers a steady, sustainable pace.")
        
        return patterns

personality_mapper = PersonalityMapper()
