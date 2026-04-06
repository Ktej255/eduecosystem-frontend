from alembic import op
import sqlalchemy as sa
from datetime import datetime

revision = 'create_ai_portal_conv'
down_revision = 'f736139666aa'
branch_labels = None
depends_on = None



def upgrade():
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
    op.drop_index('ix_ai_portal_conversations_id', table_name='ai_portal_conversations')
    op.drop_table('ai_portal_conversations')
