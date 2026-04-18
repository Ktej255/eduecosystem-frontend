"""
Standalone email diagnostic.
Run: python email_diag.py
"""
import asyncio
import sys
import os

print("=== EMAIL DIAGNOSTIC START ===")
print(f"MAIL_SERVER  : {os.environ.get('MAIL_SERVER', 'NOT SET')}")
print(f"MAIL_PORT    : {os.environ.get('MAIL_PORT', 'NOT SET')}")
print(f"MAIL_USERNAME: {os.environ.get('MAIL_USERNAME', 'NOT SET')}")
print(f"MAIL_FROM    : {os.environ.get('MAIL_FROM', 'NOT SET')}")
print(f"MAIL_PASSWORD: {'SET' if os.environ.get('MAIL_PASSWORD') else 'NOT SET'}")
print(f"MAIL_STARTTLS: {os.environ.get('MAIL_STARTTLS', 'NOT SET')}")
print(f"MAIL_SSL_TLS : {os.environ.get('MAIL_SSL_TLS', 'NOT SET')}")


async def main():
    print("\n--- Importing email module ---")
    try:
        from app.core.email import send_focused_portal_welcome
        print("--- Import OK ---")
    except Exception as e:
        print(f"IMPORT ERROR: {type(e).__name__}: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

    print("\n--- Calling send_focused_portal_welcome ---")
    try:
        await send_focused_portal_welcome(
            "ktej255@gmail.com",
            "Final Diagnostic Test",
            "DiagPass123"
        )
        print("=== EMAIL DIAGNOSTIC SUCCESS — email sent ===")
    except Exception as e:
        print(f"=== EMAIL DIAGNOSTIC FAILURE: {type(e).__name__}: {e} ===")
        import traceback
        traceback.print_exc()
        sys.exit(1)


asyncio.run(main())
