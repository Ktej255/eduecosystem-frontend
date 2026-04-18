"""Add focused portal flag to User

Revision ID: 25cc6e95b81e
Revises: med_phase2_001
Create Date: 2026-04-18 10:21:50.515322

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '25cc6e95b81e'
down_revision: Union[str, Sequence[str], None] = 'med_phase2_001'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column('users', sa.Column('is_focused_portal_user', sa.Boolean(), server_default='0', nullable=True))
    op.create_index(op.f('ix_users_is_focused_portal_user'), 'users', ['is_focused_portal_user'], unique=False)


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_index(op.f('ix_users_is_focused_portal_user'), table_name='users')
    op.drop_column('users', 'is_focused_portal_user')
