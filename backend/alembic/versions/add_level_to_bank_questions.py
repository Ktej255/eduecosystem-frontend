"""add level source_id to bank_questions

Revision ID: add_level_to_bank_questions
Revises: create_ai_portal_conversations
Create Date: 2026-03-31

"""
from alembic import op
import sqlalchemy as sa

revision = 'add_level_to_bank_questions'
down_revision = 'create_ai_portal_conv'
branch_labels = None
depends_on = None



def upgrade():
    # Add level column (1=Easy, 2=Medium/UPSC Prelims, 3=Hard/UPSC Standard)
    op.add_column('bank_questions',
        sa.Column('level', sa.Integer(), nullable=True)
    )
    op.create_index('ix_bank_questions_level', 'bank_questions', ['level'], unique=False)

    # Add source_id for deduplication (maps to original TS file id)
    op.add_column('bank_questions',
        sa.Column('source_id', sa.String(100), nullable=True)
    )
    op.create_index('ix_bank_questions_source_id', 'bank_questions', ['source_id'], unique=True)

    # Add index on chapter_number if not already indexed
    try:
        op.create_index('ix_bank_questions_chapter_number', 'bank_questions', ['chapter_number'], unique=False)
    except Exception:
        pass  # Index may already exist


def downgrade():
    op.drop_index('ix_bank_questions_level', table_name='bank_questions')
    op.drop_column('bank_questions', 'level')
    op.drop_index('ix_bank_questions_source_id', table_name='bank_questions')
    op.drop_column('bank_questions', 'source_id')
