import os
import sys
from importlib import import_module

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.db.session import engine, Base

# Dynamic import of all models so metadata knows them
models_dir = os.path.join(os.path.dirname(__file__), "app", "models")
for module in os.listdir(models_dir):
    if module.endswith(".py") and not module.startswith("__"):
        module_name = module[:-3]
        try:
            import_module(f"app.models.{module_name}")
        except Exception as e:
            print(f"Skipping {module_name}: {e}")

Base.metadata.create_all(bind=engine)
print("All tables created successfully.")
