"""Add wolf pack columns and ai_portal_conversations table

Revision ID: add_wolfpack_and_ai_portal
Revises: create_ai_portal_conv
Branch_labels: None
Depends_on: None

This migration adds:
1. Wolf Pack columns to learning_groups (house_type, pack_points, weekly_points, pack_metadata)
   - Fixes the 500 error on GET /api/v1/packs/leaderboard
2. Ensures ai_portal_conversations table exists
   - Fixes the 500 error on POST /api/v1/ai/tutor/portal-chat
"""

from alembic import op
import sqlalchemy as sa
from sqlalchemy.engine.reflection import Inspector

revision = 'add_wolfpack_and_ai_portal'
down_revision = 'create_ai_portal_conv'
branch_labels = None
depends_on = None


def column_exists(table_name: str, column_name: str) -> bool:
    """Check if a column already exists (safe re-run guard)."""
    conn = op.get_bind()
    inspector = Inspector.from_engine(conn)
    columns = [c['name'] for c in inspector.get_columns(table_name)]
    return column_name in columns


def table_exists(table_name: str) -> bool:
    """Check if a table already exists."""
    conn = op.get_bind()
    inspector = Inspector.from_engine(conn)
    return table_name in inspector.get_table_names()


def upgrade():
    # ── 1. Wolf Pack columns on learning_groups ──────────────────────────
    if table_exists('learning_groups'):
        if not column_exists('learning_groups', 'house_type'):
            op.add_column(
                'learning_groups',
                sa.Column(
                    'house_type',
                    sa.Enum('ALPHA', 'BETA', 'GAMMA', 'DELTA', name='housetype'),
                    nullable=True
                )
            )

        if not column_exists('learning_groups', 'pack_points'):
            op.add_column(
                'learning_groups',
                sa.Column('pack_points', sa.Integer(), nullable=True, server_default='0')
            )

        if not column_exists('learning_groups', 'weekly_points'):
            op.add_column(
                'learning_groups',
                sa.Column('weekly_points', sa.Integer(), nullable=True, server_default='0')
            )

        if not column_exists('learning_groups', 'pack_metadata'):
            op.add_column(
                'learning_groups',
                sa.Column('pack_metadata', sa.Text(), nullable=True)
            )

    # ── 2. ai_portal_conversations (safety net if first migration failed) ─
    if not table_exists('ai_portal_conversations'):
        op.create_table(
            'ai_portal_conversations',
            sa.Column('id', sa.Integer(), nullable=False),
            sa.Column('student_id', sa.Integer(), nullable=False),
            sa.Column('message', sa.Text(), nullable=False),
            sa.Column('response', sa.Text(), nullable=False),
            sa.Column('topic', sa.String(length=100), nullable=True),
            sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
            sa.ForeignKeyConstraint(['student_id'], ['users.id']),
            sa.PrimaryKeyConstraint('id')
        )
        op.create_index('ix_ai_portal_conversations_id', 'ai_portal_conversations', ['id'])


def downgrade():
    # Only remove what we added — don't drop the whole table
    conn = op.get_bind()
    inspector = Inspector.from_engine(conn)

    if 'learning_groups' in inspector.get_table_names():
        cols = [c['name'] for c in inspector.get_columns('learning_groups')]
        for col in ['pack_metadata', 'weekly_points', 'pack_points', 'house_type']:
            if col in cols:
                op.drop_column('learning_groups', col)
