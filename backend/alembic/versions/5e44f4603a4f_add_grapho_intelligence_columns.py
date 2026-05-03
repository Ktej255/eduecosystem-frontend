"""add_grapho_intelligence_columns

Revision ID: 5e44f4603a4f
Revises: add_decision_memory
Create Date: 2026-05-03 09:52:39.554822

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5e44f4603a4f'
down_revision: Union[str, Sequence[str], None] = 'add_decision_memory'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # Add columns to student_reports
    with op.batch_alter_table('student_reports', schema=None) as batch_op:
        batch_op.add_column(sa.Column('traits', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('dimensions', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('report_content', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('purchase_type', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('features_json', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('traits_json', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('conflicts_json', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('personality_json', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('report_text', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('pdf_url', sa.String(), nullable=True))


def downgrade() -> None:
    """Downgrade schema."""
    with op.batch_alter_table('student_reports', schema=None) as batch_op:
        batch_op.drop_column('pdf_url')
        batch_op.drop_column('report_text')
        batch_op.drop_column('personality_json')
        batch_op.drop_column('conflicts_json')
        batch_op.drop_column('traits_json')
        batch_op.drop_column('features_json')
        batch_op.drop_column('purchase_type')
        batch_op.drop_column('report_content')
        batch_op.drop_column('dimensions')
        batch_op.drop_column('traits')
