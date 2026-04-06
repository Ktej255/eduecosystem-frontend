# -*- coding: utf-8 -*-
"""
seed_badges.py -- Core Gamification Trophies
===========================================
Seeds the database with initial badges for the rewards system.
"""
import os, sys, json, logging
import uuid
from sqlalchemy import create_engine, text
from app.core.config import settings

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
log = logging.getLogger(__name__)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

engine = create_engine(str(settings.DATABASE_URL))

BADGES = [
    {
        "name": "Streak Warrior",
        "description": "Maintain a study streak for 7 consecutive days.",
        "criteria_type": "STREAK",
        "criteria_value": 7,
        "icon_url": "/assets/badges/streak_7.png"
    },
    {
        "name": "Mastery Initiate",
        "description": "Reach 95% mastery on any core concept node.",
        "criteria_type": "MASTERY",
        "criteria_value": 95,
        "icon_url": "/assets/badges/mastery_initiate.png"
    },
    {
        "name": "Syllabus Conqueror",
        "description": "Complete all topics in a single module with 100% video coverage.",
        "criteria_type": "VOLUME",
        "criteria_value": 1,
        "icon_url": "/assets/badges/module_complete.png"
    }
]

def run():
    log.info("🏆 Seeding Core Badges...")
    with engine.begin() as conn:
        for b in BADGES:
            # Check if exists
            row = conn.execute(text("SELECT id FROM badges WHERE name = :n"), {"n": b["name"]}).fetchone()
            if not row:
                conn.execute(
                    text("INSERT INTO badges (id, name, description, icon_url, criteria_type, criteria_value) VALUES (:id, :n, :d, :i, :ct, :cv)"),
                    {"id": str(uuid.uuid4()), "n": b["name"], "d": b["description"], "i": b["icon_url"], "ct": b["criteria_type"], "cv": b["criteria_value"]}
                )
                log.info(f"  Created Badge: {b['name']}")
            else:
                log.info(f"  Badge exists: {b['name']}")

if __name__ == '__main__':
    run()
