"""
Quick Analytics Verification Script

Verifies all advanced analytics components are in place and ready to test.
"""

import os
from pathlib import Path

def check_file_exists(path: str, description: str) -> bool:
    """Check if a file exists"""
    exists = os.path.exists(path)
    status = "✅" if exists else "❌"
    print(f"  {status} {description}")
    return exists

def verify_analytics_implementation():
    """Verify all analytics components"""
    
    print("\n" + "="*70)
    print("  ADVANCED ANALYTICS - VERIFICATION")
    print("="*70 + "\n")
    
    base_path = Path(__file__).parent
    all_good = True
    
    # Backend Services
    print("📦 Backend Services:")
    backend_services = [
        ("backend/app/services/comparison_service.py", "ComparisonService"),
        ("backend/app/services/cohort_service.py", "CohortService"),
        ("backend/app/services/executive_service.py", "ExecutiveService"),
        ("backend/app/services/pdf_service.py", "PDFService"),
    ]
    
    for file, desc in backend_services:
        all_good &= check_file_exists(base_path / file, desc)
    
    # API Endpoints
    print("\n🔌 API Endpoints:")
    api_endpoints = [
        ("backend/app/api/api_v1/endpoints/comparison_analytics.py", "Comparison Analytics"),
        ("backend/app/api/api_v1/endpoints/cohort_analytics.py", "Cohort Analytics"),
        ("backend/app/api/api_v1/endpoints/executive_analytics.py", "Executive Analytics"),
        ("backend/app/api/api_v1/endpoints/reports.py", "Reports (updated)"),
    ]
    
    for file, desc in api_endpoints:
        all_good &= check_file_exists(base_path / file, desc)
    
    # Frontend Pages
    print("\n🎨 Frontend Pages:")
    frontend_pages = [
        ("frontend/src/pages/ComparisonAnalytics.tsx", "ComparisonAnalytics"),
        ("frontend/src/pages/CohortAnalytics.tsx", "CohortAnalytics"),
        ("frontend/src/pages/ExecutiveDashboard.tsx", "ExecutiveDashboard"),
    ]
    
    for file, desc in frontend_pages:
        all_good &= check_file_exists(base_path / file, desc)
    
    # App Router Wrappers
    print("\n📄 App Router Pages:")
    router_pages = [
        ("frontend/src/app/(dashboard)/analytics/comparison/page.tsx", "Comparison Route"),
        ("frontend/src/app/(dashboard)/analytics/cohorts/page.tsx", "Cohorts Route"),
        ("frontend/src/app/(dashboard)/admin/executive/page.tsx", "Executive Route"),
    ]
    
    for file, desc in router_pages:
        all_good &= check_file_exists(base_path / file, desc)
    
    # Documentation
    print("\n📚 Documentation:")
    docs = [
        ("ANALYTICS_QUICKSTART.md", "Quick Start Guide"),
        ("test_analytics.py", "Test Script"),
        ("SESSION_SUMMARY.md", "Session Summary"),
    ]
    
    for file, desc in docs:
        all_good &= check_file_exists(base_path / file, desc)
    
    # Summary
    print("\n" + "="*70)
    if all_good:
        print("  ✅ ALL COMPONENTS VERIFIED - READY TO TEST!")
    else:
        print("  ⚠️  SOME COMPONENTS MISSING - CHECK ABOVE")
    print("="*70 + "\n")
    
    # Next Steps
    if all_good:
        print("🚀 Next Steps:\n")
        print("1. Start Backend:")
        print("   cd backend")
        print("   uvicorn app.main:app --reload --port 8000\n")
        
        print("2. Start Frontend:")
        print("   cd frontend")
        print("   npm run dev\n")
        
        print("3. Test New Pages:")
        print("   → http://localhost:3000/analytics/comparison")
        print("   → http://localhost:3000/analytics/cohorts")
        print("   → http://localhost:3000/admin/executive\n")
        
        print("4. Test APIs:")
        print("   → http://localhost:8000/docs\n")
        
        print("5. Run Test Script:")
        print("   python test_analytics.py\n")
    
    return all_good

if __name__ == "__main__":
    verify_analytics_implementation()
