"""
Create Enterprise SSO Tables Directly
Bypasses alembic migration due to circular dependency issues
"""

import sqlite3
import os

db_path = 'backend/eduecosystem.db'

if not os.path.exists(db_path):
    print(f"❌ Database not found at: {db_path}")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

print("=" * 60)
print("CREATING ENTERPRISE SSO TABLES")
print("=" * 60)

try:
    # Create organizations table
    print("\n📊 Creating organizations table...")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS organizations (
            id INTEGER PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            domain VARCHAR(255) NOT NULL UNIQUE,
            slug VARCHAR(100) NOT NULL UNIQUE,
            sso_enabled BOOLEAN DEFAULT 0,
            sso_provider VARCHAR(50),
            sso_enforced BOOLEAN DEFAULT 0,
            is_active BOOLEAN DEFAULT 1,
            max_users INTEGER,
            settings JSON,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
        )
    """)
    print("  ✓ organizations table created")
    
    # Create sso_configs table
    print("\n📊 Creating sso_configs table...")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS sso_configs (
            id INTEGER PRIMARY KEY,
            organization_id INTEGER NOT NULL,
            provider_type VARCHAR(20) NOT NULL,
            provider_name VARCHAR(100),
            entity_id VARCHAR(500),
            idp_entity_id VARCHAR(500),
            sso_url VARCHAR(500),
            slo_url VARCHAR(500),
            x509_cert TEXT,
            certificate_expires_at TIMESTAMP,
            client_id VARCHAR(500),
            client_secret VARCHAR(500),
            authorization_endpoint VARCHAR(500),
            token_endpoint VARCHAR(500),
            userinfo_endpoint VARCHAR(500),
            scopes JSON,
            attribute_mapping JSON,
            role_mapping JSON,
            settings JSON,
            is_active BOOLEAN DEFAULT 1,
            jit_enabled BOOLEAN DEFAULT 1,
            auto_assign_roles BOOLEAN DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            last_tested_at TIMESTAMP,
            FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE
        )
    """)
    print("  ✓ sso_configs table created")
    
    # Create sso_sessions table
    print("\n📊 Creating sso_sessions table...")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS sso_sessions (
            id INTEGER PRIMARY KEY,
            user_id INTEGER NOT NULL,
            organization_id INTEGER NOT NULL,
            session_id VARCHAR(255) NOT NULL UNIQUE,
            provider_session_id VARCHAR(255),
            name_id VARCHAR(500),
            provider_type VARCHAR(20) NOT NULL,
            login_method VARCHAR(50),
            ip_address VARCHAR(50),
            user_agent VARCHAR(500),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            expires_at TIMESTAMP NOT NULL,
            last_activity_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            logged_out_at TIMESTAMP,
            FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS ix_sso_sessions_user_id ON sso_sessions(user_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS ix_sso_sessions_provider_session_id ON sso_sessions(provider_session_id)")
    print("  ✓ sso_sessions table created")
    
    # Create sso_audit_logs table
    print("\n📊 Creating sso_audit_logs table...")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS sso_audit_logs (
            id INTEGER PRIMARY KEY,
            organization_id INTEGER,
            user_id INTEGER,
            event_type VARCHAR(50) NOT NULL,
            event_status VARCHAR(20),
            provider_type VARCHAR(20),
            ip_address VARCHAR(50),
            user_agent VARCHAR(500),
            details JSON,
            error_message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
        )
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS ix_sso_audit_logs_organization_id ON sso_audit_logs(organization_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS ix_sso_audit_logs_user_id ON sso_audit_logs(user_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS ix_sso_audit_logs_event_type ON sso_audit_logs(event_type)")
    cursor.execute("CREATE INDEX IF NOT EXISTS ix_sso_audit_logs_created_at ON sso_audit_logs(created_at)")
    print("  ✓ sso_audit_logs table created")
    
    # Add SSO fields to users table (if not exists)
    print("\n📊 Adding SSO fields to users table...")
    
    # Check if columns already exist
    cursor.execute("PRAGMA table_info(users)")
    existing_columns = [col[1] for col in cursor.fetchall()]
    
    if 'organization_id' not in existing_columns:
        cursor.execute("ALTER TABLE users ADD COLUMN organization_id INTEGER")
        cursor.execute("CREATE INDEX IF NOT EXISTS ix_users_organization_id ON users(organization_id)")
        print("  ✓ Added organization_id column")
    else:
        print("  ℹ organization_id column already exists")
    
    if 'is_sso_user' not in existing_columns:
        cursor.execute("ALTER TABLE users ADD COLUMN is_sso_user BOOLEAN DEFAULT 0")
        print("  ✓ Added is_sso_user column")
    else:
        print("  ℹ is_sso_user column already exists")
    
    if 'sso_external_id' not in existing_columns:
        cursor.execute("ALTER TABLE users ADD COLUMN sso_external_id VARCHAR(255)")
        cursor.execute("CREATE INDEX IF NOT EXISTS ix_users_sso_external_id ON users(sso_external_id)")
        print("  ✓ Added sso_external_id column")
    else:
        print("  ℹ sso_external_id column already exists")
    
    conn.commit()
    
    # Verify tables
    print("\n" + "=" * 60)
    print("VERIFYING SSO TABLES")
    print("=" * 60)
    
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%sso%' OR name='organizations' ORDER BY name")
    tables = cursor.fetchall()
    print(f"\nSSO Tables: {len(tables)}/4")
    for table in tables:
        cursor.execute(f"SELECT COUNT(*) FROM {table[0]}")
        count = cursor.fetchone()[0]
        print(f"  ✓ {table[0]}: {count} rows")
    
    print("\n✅ Enterprise SSO tables created successfully!")
    
except Exception as e:
    print(f"\n❌ Error: {e}")
    conn.rollback()
    raise
finally:
    conn.close()

print("\n" + "=" * 60)
print("Next Steps:")
print("  1. Create Organization model in app/models/sso.py")
print("  2. Create SSO services")
print("  3. Create API endpoints")
print("=" * 60)
