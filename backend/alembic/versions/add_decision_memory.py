"""add decision_memory table

Revision ID: add_decision_memory
Revises: 25cc6e95b81e, 72a707a51302, guided_portal_001
Create Date: 2026-05-03

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'add_decision_memory'
down_revision = ('25cc6e95b81e', '72a707a51302', 'guided_portal_001')
branch_labels = None
depends_on = None

def upgrade() -> None:
    # Create decision_memory table
    op.create_table(
        'decision_memory',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('timestamp', sa.DateTime(), nullable=True),
        sa.Column('action_type', sa.String(length=100), nullable=True),
        sa.Column('before_state', sa.JSON(), nullable=False),
        sa.Column('after_state', sa.JSON(), nullable=False),
        sa.Column('reason', sa.Text(), nullable=False),
        sa.Column('impact_score', sa.Integer(), nullable=True),
        sa.Column('target_entity', sa.String(length=100), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_decision_memory_action_type'), 'decision_memory', ['action_type'], unique=False)
    op.create_index(op.f('ix_decision_memory_id'), 'decision_memory', ['id'], unique=False)
    op.create_index(op.f('ix_decision_memory_timestamp'), 'decision_memory', ['timestamp'], unique=False)

def downgrade() -> None:
    op.drop_index(op.f('ix_decision_memory_timestamp'), table_name='decision_memory')
    op.drop_index(op.f('ix_decision_memory_id'), table_name='decision_memory')
    op.drop_index(op.f('ix_decision_memory_action_type'), table_name='decision_memory')
    op.drop_table('decision_memory')
