"""Add guided portal tables: guided_clips, concept_nodes,
concept_relationships, student_concept_mastery, student_activity_log

Revision ID: guided_portal_001
Revises: 7e3bcbb89f1c
Create Date: 2026-04-02
"""
from alembic import op
import sqlalchemy as sa

revision = 'guided_portal_001'
down_revision = '7e3bcbb89f1c'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ── 1. guided_clips ───────────────────────────────────────────────────────
    op.create_table(
        'guided_clips',
        sa.Column('id', sa.Integer(), primary_key=True, index=True),
        sa.Column('module_id', sa.Integer(), sa.ForeignKey('modules.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('youtube_id', sa.String(), nullable=True),
        sa.Column('order_index', sa.Integer(), server_default='0'),
        sa.Column('notes_markdown', sa.Text(), nullable=True),
        sa.Column('pause_points', sa.JSON(), server_default='[]'),
        sa.Column('node_ids', sa.JSON(), server_default='[]'),
        sa.Column('is_published', sa.Boolean(), server_default='false'),
    )
    op.create_index('ix_guided_clips_module_id', 'guided_clips', ['module_id'])

    # ── 2. concept_nodes ──────────────────────────────────────────────────────
    op.create_table(
        'concept_nodes',
        sa.Column('id', sa.Integer(), primary_key=True, index=True),
        sa.Column('node_id', sa.String(), nullable=False, unique=True, index=True),
        sa.Column('subject_slug', sa.String(), nullable=False, index=True),
        sa.Column('module_id', sa.Integer(), nullable=True, index=True),
        sa.Column('clip_id', sa.Integer(), sa.ForeignKey('guided_clips.id'), nullable=True, index=True),
        sa.Column('node_name', sa.String(), nullable=False),
        sa.Column('node_description', sa.Text(), nullable=True),
        sa.Column('prerequisite_nodes', sa.JSON(), server_default='[]'),
        sa.Column('exam_relevance', sa.JSON(), server_default='{}'),
        sa.Column('difficulty_level', sa.String(), server_default='foundation'),
    )

    # ── 3. concept_relationships ──────────────────────────────────────────────
    op.create_table(
        'concept_relationships',
        sa.Column('id', sa.Integer(), primary_key=True, index=True),
        sa.Column('from_node_id', sa.Integer(), sa.ForeignKey('concept_nodes.id'), nullable=False, index=True),
        sa.Column('to_node_id', sa.Integer(), sa.ForeignKey('concept_nodes.id'), nullable=False, index=True),
        sa.Column('relationship_type', sa.String(), nullable=False, server_default='influences'),
        sa.Column('strength', sa.Integer(), server_default='2'),
    )

    # ── 4. student_concept_mastery ────────────────────────────────────────────
    op.create_table(
        'student_concept_mastery',
        sa.Column('id', sa.Integer(), primary_key=True, index=True),
        sa.Column('student_id', sa.Integer(), sa.ForeignKey('users.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('node_id', sa.Integer(), sa.ForeignKey('concept_nodes.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('mastery_score', sa.Float(), server_default='0.0'),
        sa.Column('attempt_count', sa.Integer(), server_default='0'),
        sa.Column('last_activity_date', sa.DateTime(), nullable=True),
        sa.Column('next_review_date', sa.Date(), nullable=True),
        sa.Column('ease_factor', sa.Float(), server_default='2.5'),
        sa.Column('interval', sa.Integer(), server_default='0'),
        sa.Column('created_at', sa.DateTime(), server_default=sa.func.now()),
        sa.Column('updated_at', sa.DateTime(), server_default=sa.func.now()),
    )
    op.create_index('ix_mastery_student_node', 'student_concept_mastery', ['student_id', 'node_id'], unique=True)

    # ── 5. student_activity_log ───────────────────────────────────────────────
    op.create_table(
        'student_activity_log',
        sa.Column('id', sa.Integer(), primary_key=True, index=True),
        sa.Column('student_id', sa.Integer(), sa.ForeignKey('users.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('node_id', sa.Integer(), sa.ForeignKey('concept_nodes.id'), nullable=True, index=True),
        sa.Column('activity_type', sa.String(), nullable=False, index=True),
        sa.Column('score', sa.Float(), nullable=True),
        sa.Column('duration_seconds', sa.Integer(), nullable=True),
        sa.Column('error_nodes', sa.JSON(), server_default='[]'),
        sa.Column('metadata', sa.JSON(), server_default='{}'),
        sa.Column('timestamp', sa.DateTime(), server_default=sa.func.now(), index=True),
    )


def downgrade() -> None:
    op.drop_table('student_activity_log')
    op.drop_index('ix_mastery_student_node', table_name='student_concept_mastery')
    op.drop_table('student_concept_mastery')
    op.drop_table('concept_relationships')
    op.drop_table('concept_nodes')
    op.drop_index('ix_guided_clips_module_id', table_name='guided_clips')
    op.drop_table('guided_clips')
