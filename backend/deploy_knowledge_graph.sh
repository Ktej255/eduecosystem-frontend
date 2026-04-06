#!/bin/bash
# deploy_knowledge_graph.sh -- Run on production server
# Sequence: bootstrap → seed relationships → verify

set -e
echo "=== Knowledge Graph Deployment ==="

# 1. Ensure tables exist (idempotent)
echo "Step 1: Table bootstrap..."
python startup_tables.py

# 2. Seed 120 concept nodes (idempotent, skips existing)
echo "Step 2: Seeding concept nodes..."
python seed_guided_portal.py

# 3. Seed ~300 concept relationships (idempotent, skips existing)
echo "Step 3: Seeding concept relationships..."
python seed_concept_relationships.py

# 4. Quick verification
echo "Step 4: Verification..."
python -c "
from sqlalchemy import create_engine, text
from app.core.config import settings
engine = create_engine(str(settings.DATABASE_URL))
with engine.connect() as conn:
    nodes = conn.execute(text('SELECT COUNT(*) FROM concept_nodes WHERE subject_slug = :s'), {'s':'environment'}).scalar()
    edges = conn.execute(text('SELECT COUNT(*) FROM concept_relationships')).scalar()
    print(f'  Nodes: {nodes}  |  Edges: {edges}')
    assert nodes >= 120, f'Expected 120 nodes, got {nodes}'
    assert edges >= 200, f'Expected 200+ edges, got {edges}'
    print('  Verification PASSED')
"

echo ""
echo "=== Deployment Complete ==="
echo "Knowledge Graph is ready at:"
echo "  GET /api/v1/guided/knowledge-graph"
echo "  GET /api/v1/guided/student-knowledge-graph"
echo "  GET /api/v1/guided/weak-nodes"
echo "  GET /api/v1/guided/revision-plan"
