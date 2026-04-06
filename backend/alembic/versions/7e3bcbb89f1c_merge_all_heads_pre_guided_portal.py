"""merge_all_heads_pre_guided_portal

Revision ID: 7e3bcbb89f1c
Revises: 07dd8fa4d33d, add_level_to_bank_questions, add_wolfpack_and_ai_portal
Create Date: 2026-04-02 14:22:33.415334

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7e3bcbb89f1c'
down_revision: Union[str, Sequence[str], None] = ('07dd8fa4d33d', 'add_level_to_bank_questions', 'add_wolfpack_and_ai_portal')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
