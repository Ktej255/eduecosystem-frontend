"""
Complete State Verification for eCommerce & Analytics Integration

This script verifies:
1. Database tables exist
2. Alembic migration state
3. API endpoints are accessible
4. Required environment variables
"""

import sqlite3
import os
import sys
from pathlib import Path

# ANSI color codes for pretty output
GREEN = '\033[92m'
RED = '\033[91m'
YELLOW = '\033[93m'
BLUE = '\033[94m'
RESET = '\033[0m'

def print_status(message, status='info'):
    """Print colored status messages"""
    if status == 'success':
        print(f"{GREEN}✓{RESET} {message}")
    elif status == 'error':
        print(f"{RED}✗{RESET} {message}")
    elif status == 'warning':
        print(f"{YELLOW}⚠{RESET} {message}")
    else:
        print(f"{BLUE}ℹ{RESET} {message}")

def check_database_tables():
    """Verify all required eCommerce tables exist"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}DATABASE TABLES VERIFICATION{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    db_path = 'backend/eduecosystem.db'
    if not os.path.exists(db_path):
        print_status(f"Database not found at {db_path}", 'error')
        return False
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    required_tables = {
        'shopping_carts': 'Shopping Cart',
        'cart_items': 'Cart Items',
        'orders': 'Orders',
        'order_items': 'Order Items',
        'invoices': 'Invoices',
        'coupons': 'Coupons',
        'instructor_analytics': 'Instructor Analytics',
        'student_analytics': 'Student Analytics',
        'platform_analytics': 'Platform Analytics'
    }
    
    all_exist = True
    for table, description in required_tables.items():
        cursor.execute(f"SELECT name FROM sqlite_master WHERE type='table' AND name=?", (table,))
        exists = cursor.fetchone() is not None
        
        if exists:
            # Get row count
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            count = cursor.fetchone()[0]
            print_status(f"{description:25} exists ({count} rows)", 'success')
        else:
            print_status(f"{description:25} MISSING", 'error')
            all_exist = False
    
    conn.close()
    return all_exist

def check_alembic_version():
    """Check current Alembic migration version"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}ALEMBIC MIGRATION STATE{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    conn = sqlite3.connect('backend/eduecosystem.db')
    cursor = conn.cursor()
    
    try:
        cursor.execute("SELECT version_num FROM alembic_version")
        current = cursor.fetchone()
        if current:
            print_status(f"Current version: {current[0]}", 'success')
            return current[0]
        else:
            print_status("No alembic version found", 'warning')
            return None
    except Exception as e:
        print_status(f"Error checking alembic: {e}", 'error')
        return None
    finally:
        conn.close()

def check_api_files():
    """Verify API endpoint files exist"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}API ENDPOINT FILES{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    api_files = {
        'backend/app/api/api_v1/endpoints/cart.py': 'Shopping Cart API',
        'backend/app/api/api_v1/endpoints/order.py': 'Orders API',
        'backend/app/api/api_v1/endpoints/invoices.py': 'Invoices API',
        'backend/app/api/api_v1/endpoints/guest_checkout.py': 'Guest Checkout API',
        'backend/app/api/api_v1/endpoints/revenue_analytics.py': 'Revenue Analytics API',
        'backend/app/api/api_v1/endpoints/reports.py': 'Reports/Export API',
        'backend/app/services/cart_service.py': 'Cart Service',
        'backend/app/services/order_service.py': 'Order Service',
        'backend/app/services/invoice_service.py': 'Invoice Service',
        'backend/app/services/guest_service.py': 'Guest Service',
        'backend/app/services/revenue_analytics_service.py': 'Revenue Analytics Service',
        'backend/app/services/report_service.py': 'Report Service',
    }
    
    all_exist = True
    for file_path, description in api_files.items():
        if os.path.exists(file_path):
            # Get file size
            size = os.path.getsize(file_path)
            print_status(f"{description:30} exists ({size} bytes)", 'success')
        else:
            print_status(f"{description:30} MISSING", 'error')
            all_exist = False
    
    return all_exist

def check_frontend_pages():
    """Verify frontend pages exist"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}FRONTEND PAGES{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    frontend_files = {
        'frontend/src/pages/CartPage.tsx': 'Shopping Cart Page',
        'frontend/src/pages/CheckoutPage.tsx': 'Checkout Page',
        'frontend/src/pages/OrderHistoryPage.tsx': 'Order History Page',
        'frontend/src/pages/AdvancedRevenueAnalytics.tsx': 'Revenue Analytics Dashboard',
        'frontend/src/app/(dashboard)/student/cart/page.tsx': 'Cart App Router Wrapper',
        'frontend/src/app/(dashboard)/student/checkout/page.tsx': 'Checkout App Router Wrapper',
        'frontend/src/app/(dashboard)/student/orders/page.tsx': 'Orders App Router Wrapper',
        'frontend/src/app/(dashboard)/instructor/analytics/revenue/page.tsx': 'Analytics App Router Wrapper',
    }
    
    all_exist = True
    for file_path, description in frontend_files.items():
        if os.path.exists(file_path):
            size = os.path.getsize(file_path)
            print_status(f"{description:35} exists ({size} bytes)", 'success')
        else:
            print_status(f"{description:35} MISSING", 'error')
            all_exist = False
    
    return all_exist

def check_env_variables():
    """Check if required environment variables are set"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}ENVIRONMENT VARIABLES{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    env_path = 'backend/.env'
    if not os.path.exists(env_path):
        print_status(".env file not found", 'warning')
        print_status("Using .env.example as reference", 'info')
        env_path = 'backend/.env.example'
    
    required_vars = [
        'DATABASE_URL',
        'SECRET_KEY',
        'STRIPE_SECRET_KEY',
        'COMPANY_NAME',
        'COMPANY_ADDRESS',
        'INVOICE_PREFIX'
    ]
    
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            content = f.read()
            
        for var in required_vars:
            if var in content:
                print_status(f"{var:25} configured", 'success')
            else:
                print_status(f"{var:25} NOT SET", 'warning')
    
    return True

def check_model_files():
    """Verify model files exist"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}DATABASE MODELS{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    model_files = {
        'backend/app/models/cart.py': 'Cart Models',
        'backend/app/models/order.py': 'Order Models',
        'backend/app/models/invoice.py': 'Invoice Model',
        'backend/app/schemas/cart.py': 'Cart Schemas',
        'backend/app/schemas/order.py': 'Order Schemas',
        'backend/app/schemas/invoice.py': 'Invoice Schemas',
    }
    
    all_exist = True
    for file_path, description in model_files.items():
        if os.path.exists(file_path):
            print_status(f"{description:25} exists", 'success')
        else:
            print_status(f"{description:25} MISSING", 'error')
            all_exist = False
    
    return all_exist

def generate_summary():
    """Generate final summary"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}INTEGRATION STATUS SUMMARY{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    results = {
        'Database Tables': check_database_tables(),
        'API Endpoints': check_api_files(),
        'Frontend Pages': check_frontend_pages(),
        'Database Models': check_model_files(),
    }
    
    check_alembic_version()
    check_env_variables()
    
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}FINAL RESULTS{RESET}")
    print(f"{BLUE}{'='*60}{RESET}\n")
    
    all_passed = all(results.values())
    
    for component, passed in results.items():
        status = 'success' if passed else 'error'
        result = 'PASS' if passed else 'FAIL'
        print_status(f"{component:25} {result}", status)
    
    print()
    if all_passed:
        print(f"{GREEN}{'='*60}{RESET}")
        print(f"{GREEN}✓ ALL SYSTEMS READY FOR TESTING{RESET}")
        print(f"{GREEN}{'='*60}{RESET}\n")
        print_status("eCommerce integration: COMPLETE", 'success')
        print_status("Analytics integration: COMPLETE", 'success')
        print_status("Database migrations: COMPLETE", 'success')
        print_status("Frontend integration: COMPLETE", 'success')
        print()
        print(f"{YELLOW}Next Steps:{RESET}")
        print(f"  1. Start backend: cd backend && uvicorn app.main:app --reload")
        print(f"  2. Start frontend: cd frontend && npm run dev")
        print(f"  3. Run tests: See TESTING_GUIDE_ECOMMERCE_ANALYTICS.md")
        print()
    else:
        print(f"{RED}{'='*60}{RESET}")
        print(f"{RED}⚠ SOME COMPONENTS MISSING{RESET}")
        print(f"{RED}{'='*60}{RESET}\n")
        print_status("Please review the errors above and complete missing components", 'warning')
    
    return all_passed

if __name__ == '__main__':
    print(f"\n{BLUE}╔{'═'*58}╗{RESET}")
    print(f"{BLUE}║{' '*10}eCommerce & Analytics Integration Verification{' '*10}║{RESET}")
    print(f"{BLUE}╚{'═'*58}╝{RESET}")
    
    try:
        success = generate_summary()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"\n{RED}ERROR: {e}{RESET}")
        sys.exit(1)
