"""
Advanced Analytics Testing & Demo Script

Run this script to test all advanced analytics features:
- Course comparison
- Cohort analysis
- Executive dashboard
- PDF generation
"""

import requests
import json
from datetime import datetime
from typing import Dict, Any

# Configuration
BASE_URL = "http://localhost:8000/api/v1"
AUTH_TOKEN = "YOUR_AUTH_TOKEN_HERE"  # Replace with actual token

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}


def print_section(title: str):
    """Print a formatted section header"""
    print("\n" + "=" * 70)
    print(f"  {title}")
    print("=" * 70 + "\n")


def test_course_comparison():
    """Test course comparison endpoints"""
    print_section("Testing Course Comparison")
    
    # Test 1: Compare courses
    print("1. Comparing courses (IDs: 1, 2, 3)...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/compare/courses",
            params={"course_ids": "1,2,3"},
            headers=headers
        )
        
        if response.status_code == 200:
            data = response.json()
            print(f"   ✅ SUCCESS: Compared {len(data.get('courses', []))} courses")
            print(f"   📊 Insights: {len(data.get('insights', []))} insights generated")
            
            # Print first insight
            if data.get('insights'):
                print(f"   💡 {data['insights'][0]}")
        else:
            print(f"   ❌ ERROR: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    print()


def test_cohort_analysis():
    """Test cohort analysis endpoints"""
    print_section("Testing Cohort Analysis")
    
    # Test 1: List cohorts
    print("1. Listing all cohorts...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/cohorts",
            headers=headers
        )
        
        if response.status_code == 200:
            data = response.json()
            cohort_count = len(data.get('cohorts', []))
            print(f"   ✅ SUCCESS: Found {cohort_count} cohorts")
            
            if cohort_count > 0:
                cohort = data['cohorts'][0]
                cohort_period = cohort['period']
                
                # Test 2: Get cohort retention
                print(f"\n2. Getting retention for cohort {cohort_period}...")
                retention_response = requests.get(
                    f"{BASE_URL}/analytics/cohorts/{cohort_period}/retention",
                    headers=headers
                )
                
                if retention_response.status_code == 200:
                    retention_data = retention_response.json()
                    print(f"   ✅ SUCCESS: Retrieved retention data")
                    print(f"   👥 Initial size: {retention_data.get('initial_size', 0)} users")
                    print(f"   📈 Tracking: {len(retention_data.get('retention_data', []))} months")
                else:
                    print(f"   ❌ ERROR: {retention_response.status_code}")
                
                # Test 3: Get cohort performance
                print(f"\n3. Getting performance for cohort {cohort_period}...")
                perf_response = requests.get(
                    f"{BASE_URL}/analytics/cohorts/{cohort_period}/performance",
                    headers=headers
                )
                
                if perf_response.status_code == 200:
                    perf_data = perf_response.json()
                    metrics = perf_data.get('metrics', {})
                    print(f"   ✅ SUCCESS: Retrieved performance metrics")
                    print(f"   💰 LTV: ${metrics.get('ltv', 0):.2f}")
                    print(f"   📊 Completion Rate: {metrics.get('completion_rate', 0):.1f}%")
                else:
                    print(f"   ❌ ERROR: {perf_response.status_code}")
        else:
            print(f"   ❌ ERROR: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    print()


def test_executive_dashboard():
    """Test executive dashboard endpoints"""
    print_section("Testing Executive Dashboard")
    
    # Test 1: Get KPIs
    print("1. Getting platform KPIs...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/executive/kpis",
            headers=headers
        )
        
        if response.status_code == 200:
            data = response.json()
            print(f"   ✅ SUCCESS: Retrieved platform KPIs")
            print(f"   👥 Monthly Active Users: {data.get('active_users', {}).get('monthly', 0):,}")
            print(f"   💵 Monthly Revenue: ${data.get('revenue', {}).get('monthly', 0):,.2f}")
            print(f"   📈 Revenue Growth: {data.get('revenue', {}).get('growth_rate', 0):.1f}%")
        else:
            print(f"   ❌ ERROR: {response.status_code}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    # Test 2: Get health score
    print("\n2. Getting platform health score...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/executive/health",
            headers=headers
        )
        
        if response.status_code == 200:
            data = response.json()
            score = data.get('score', 0)
            grade = data.get('grade', 'N/A')
            trend = data.get('trend', 'N/A')
            
            print(f"   ✅ SUCCESS: Retrieved health score")
            print(f"   🎯 Score: {score:.1f}/100 (Grade: {grade})")
            print(f"   📊 Trend: {trend.upper()}")
            
            # Print components
            components = data.get('components', {})
            if components:
                print(f"   Components:")
                for key, value in components.items():
                    print(f"      - {key.replace('_', ' ').title()}: {value:.1f}%")
        else:
            print(f"   ❌ ERROR: {response.status_code}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    # Test 3: Get risks
    print("\n3. Identifying platform risks...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/executive/risks",
            headers=headers
        )
        
        if response.status_code == 200:
            data = response.json()
            risks = data.get('risks', [])
            critical_count = data.get('critical_count', 0)
            
            print(f"   ✅ SUCCESS: Retrieved risk indicators")
            print(f"   ⚠️  Total Risks: {len(risks)}")
            print(f"   🚨 Critical Risks: {critical_count}")
            
            if risks:
                print(f"   Top Risk: {risks[0].get('message', 'N/A')}")
        else:
            print(f"   ❌ ERROR: {response.status_code}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    # Test 4: Get growth metrics
    print("\n4. Getting growth metrics...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/executive/growth",
            headers=headers
        )
        
        if response.status_code == 200:
            data = response.json()
            trends = data.get('monthly_trends', [])
            print(f"   ✅ SUCCESS: Retrieved growth trends")
            print(f"   📈 Tracking: {len(trends)} months")
        else:
            print(f"   ❌ ERROR: {response.status_code}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    print()


def test_pdf_generation():
    """Test PDF generation endpoints"""
    print_section("Testing PDF Generation")
    
    # Test 1: Revenue PDF
    print("1. Generating revenue PDF report...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/export/revenue/pdf",
            headers=headers
        )
        
        if response.status_code == 200:
            filename = f"revenue_report_{datetime.now().strftime('%Y%m%d')}.pdf"
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"   ✅ SUCCESS: PDF saved as {filename}")
            print(f"   📄 Size: {len(response.content):,} bytes")
        else:
            print(f"   ❌ ERROR: {response.status_code}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    # Test 2: Executive PDF
    print("\n2. Generating executive summary PDF...")
    try:
        response = requests.get(
            f"{BASE_URL}/analytics/admin/export/executive/pdf",
            headers=headers
        )
        
        if response.status_code == 200:
            filename = f"executive_summary_{datetime.now().strftime('%Y%m%d')}.pdf"
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"   ✅ SUCCESS: PDF saved as {filename}")
            print(f"   📄 Size: {len(response.content):,} bytes")
        else:
            print(f"   ❌ ERROR: {response.status_code}")
    except Exception as e:
        print(f"   ❌ EXCEPTION: {str(e)}")
    
    print()


def run_all_tests():
    """Run all analytics tests"""
    print("\n" + "🚀" * 35)
    print("  ADVANCED ANALYTICS - COMPREHENSIVE TEST SUITE")
    print("🚀" * 35)
    
    print(f"\nTesting against: {BASE_URL}")
    print(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
    
    # Run all test suites
    test_course_comparison()
    test_cohort_analysis()
    test_executive_dashboard()
    test_pdf_generation()
    
    # Summary
    print_section("Test Suite Complete")
    print("✅ All tests executed!")
    print("\nNext steps:")
    print("1. Check the generated PDF files in current directory")
    print("2. Visit frontend pages:")
    print("   - http://localhost:3000/analytics/comparison")
    print("   - http://localhost:3000/analytics/cohorts")
    print("   - http://localhost:3000/admin/executive")
    print("\n")


if __name__ == "__main__":
    print("\n⚠️  IMPORTANT: Make sure to:")
    print("   1. Start backend server: uvicorn app.main:app --reload")
    print("   2. Replace AUTH_TOKEN with valid token")
    print("   3. Have at least some data in the database")
    print("\nPress Enter to continue or Ctrl+C to cancel...")
    input()
    
    run_all_tests()
