
import os
import sys

# Add backend to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)) + "/../backend")

print("Starting import test...")
try:
    print("Importing settings...")
    from app.core.config import settings
    print(f"DATABASE_URL: {settings.DATABASE_URL}")

    print("Importing api_router...")
    from app.api.api_v1.api import api_router
    print("api_router imported successfully!")

    from fastapi import FastAPI
    app = FastAPI()
    print("Including router in test app...")
    app.include_router(api_router)
    print("Router included successfully!")

    print("Listing routes:")
    for route in app.routes:
        print(f"  {getattr(route, 'path', '???')}")

except Exception as e:
    print(f"Error during import: {e}")
    import traceback
    traceback.print_exc()

print("Import test complete.")
