"""add user activity sessions

Revision ID: eaf9a7586267
Revises: 8a224b850935
Create Date: 2026-03-15 14:04:23.901826

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'eaf9a7586267'
down_revision: Union[str, Sequence[str], None] = '8a224b850935'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table('user_activity_sessions',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('start_time', sa.DateTime(), nullable=True),
        sa.Column('last_heartbeat', sa.DateTime(), nullable=True),
        sa.Column('end_time', sa.DateTime(), nullable=True),
        sa.Column('duration_seconds', sa.Integer(), nullable=True),
        sa.Column('is_active', sa.Boolean(), nullable=True),
        sa.Column('ip_address', sa.String(), nullable=True),
        sa.Column('user_agent', sa.String(), nullable=True),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_activity_sessions_id'), 'user_activity_sessions', ['id'], unique=False)
    op.create_index(op.f('ix_user_activity_sessions_user_id'), 'user_activity_sessions', ['user_id'], unique=False)


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_index(op.f('ix_user_activity_sessions_user_id'), table_name='user_activity_sessions')
    op.drop_index(op.f('ix_user_activity_sessions_id'), table_name='user_activity_sessions')
    op.drop_table('user_activity_sessions')
