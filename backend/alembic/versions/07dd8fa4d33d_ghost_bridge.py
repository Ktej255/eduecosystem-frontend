"""ghost bridge
Revision ID: 07dd8fa4d33d
Revises: f736139666aa
Create Date: 2026-03-26 13:15:00.000000
"""
from alembic import op
import sqlalchemy as sa

revision = '07dd8fa4d33d'
down_revision = 'f736139666aa'
branch_labels = None
depends_on = None

def upgrade():
    # This is a bridge for a ghost revision found in production DB
    pass

def downgrade():
    pass
