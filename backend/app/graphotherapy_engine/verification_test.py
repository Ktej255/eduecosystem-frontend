import os
import sys
import json
import logging
from unittest.mock import MagicMock

# Mocking external services for testing
sys.modules['app.services.gemini_service'] = MagicMock()
from app.services.gemini_service import gemini_service

# Mocking database
sys.modules['app.db.session'] = MagicMock()

# Import the engine
from d.Development.EduEcosystem.backend.app.graphotherapy_engine.orchestrator import orchestrator

logging.basicConfig(level=logging.INFO)

def run_test_suite():
    print("=== STARTING ENGINE VERIFICATION SUITE ===")
    
    # 5 Different Input Profiles
    test_cases = [
        {"name": "Profile A: High Drive / High Intensity", "features": {"slant": "right", "pressure": "heavy", "spacing": "normal", "size": "large", "baseline": "rising"}},
        {"name": "Profile B: Stoic / Disciplined", "features": {"slant": "straight", "pressure": "medium", "spacing": "tight", "size": "small", "baseline": "straight"}},
        {"name": "Profile C: Sensitive / Emotional", "features": {"slant": "right", "pressure": "light", "spacing": "wide", "size": "medium", "baseline": "falling"}},
        {"name": "Profile D: Guarded / Intense (Conflict)", "features": {"slant": "left", "pressure": "heavy", "spacing": "wide", "size": "large", "baseline": "straight"}},
        {"name": "Profile E: Balanced Pragmatist", "features": {"slant": "straight", "pressure": "medium", "spacing": "normal", "size": "medium", "baseline": "rising"}},
    ]

    results = []

    for i, case in enumerate(test_cases):
        print(f"\nProcessing {case['name']}...")
        
        # Mock Gemini response for feature extraction
        gemini_service.analyze_image.return_value = json.dumps(case['features'])
        
        # Mock Gemini response for narrative
        gemini_service.generate_text.return_value = f"This is a unique narrative for {case['name']} with signature XYZ."
        
        # Run pipeline
        # payload = {"user_id": i+1, "image": "mock_path.png", "session_id": f"sess_{i}"}
        # results.append(orchestrator.run_pipeline(payload))
        
        # We'll just run the logic directly to see the outputs
        from d.Development.EduEcosystem.backend.app.graphotherapy_engine.feature_extractor import feature_extractor
        from d.Development.EduEcosystem.backend.app.graphotherapy_engine.rule_engine import rule_engine
        
        features = feature_extractor.extract("mock.png")
        traits = rule_engine.calculate_traits(features, session_id=f"sess_{i}")
        conflicts = rule_engine.detect_conflicts(features, traits)
        
        results.append({
            "name": case['name'],
            "features": features,
            "traits": {k: v['score'] for k, v in traits.items()},
            "conflicts": conflicts
        })

    # Save verification results
    with open("verification_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    print("\n=== VERIFICATION COMPLETE ===")
    print(f"Total Profiles Processed: {len(results)}")
    print("Sample Output Check:")
    for res in results:
        print(f"- {res['name']}: {res['traits']} | Conflicts: {len(res['conflicts'])}")

if __name__ == "__main__":
    run_test_suite()
