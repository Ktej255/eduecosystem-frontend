import sqlalchemy
from sqlalchemy import text

DB_URI = "postgresql://pizza_blitz_user:PizzaBlitz123!@34.55.250.166/pizza_blitz_db"

# Added ALTER command to fix the table_number type mismatch
SQL = """
-- Fix existing table if it was created with INTEGER table_number
DO $$ 
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='tables' AND column_name='table_number' AND data_type='integer') THEN
        ALTER TABLE tables ALTER COLUMN table_number TYPE VARCHAR(20);
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS shift_log (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    staff_name VARCHAR(255) NOT NULL,
    role VARCHAR(100),
    shift_start TIME,
    shift_end TIME,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tables (
    id SERIAL PRIMARY KEY,
    table_number VARCHAR(20) UNIQUE NOT NULL,
    capacity INTEGER DEFAULT 4,
    status VARCHAR(20) DEFAULT 'available',
    current_order_id INTEGER,
    last_updated TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    order_type VARCHAR(20) NOT NULL DEFAULT 'dine-in',
    table_number VARCHAR(20),
    items JSONB,
    subtotal FLOAT DEFAULT 0,
    tax_amount FLOAT DEFAULT 0,
    total_amount FLOAT DEFAULT 0,
    payment_status VARCHAR(20) DEFAULT 'pending',
    payment_method VARCHAR(20),
    status VARCHAR(20) DEFAULT 'open',
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    closed_at TIMESTAMP
);

INSERT INTO tables (table_number, capacity) VALUES
('T1',4),('T2',4),('T3',6),('T4',2),('T5',4),('T6',8),('T7',2),('T8',4)
ON CONFLICT (table_number) DO NOTHING;

CREATE TABLE IF NOT EXISTS fixed_costs (
    id SERIAL PRIMARY KEY,
    month VARCHAR(7) NOT NULL,
    rent FLOAT DEFAULT 0,
    salaries FLOAT DEFAULT 0,
    utilities FLOAT DEFAULT 0,
    other_fixed FLOAT DEFAULT 0,
    avg_order_value FLOAT DEFAULT 250,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(month)
);

CREATE TABLE IF NOT EXISTS invoices (
    id SERIAL PRIMARY KEY,
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    order_id INTEGER,
    customer_name VARCHAR(255),
    customer_gstin VARCHAR(20),
    items JSONB,
    subtotal FLOAT,
    cgst FLOAT,
    sgst FLOAT,
    total FLOAT,
    payment_method VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS vendors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT,
    whatsapp_number TEXT,
    items_supplied TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vendor_price_history (
    id SERIAL PRIMARY KEY,
    vendor_id INTEGER REFERENCES vendors(id),
    item_name VARCHAR(255),
    price_per_unit FLOAT,
    unit VARCHAR(50),
    recorded_date DATE DEFAULT CURRENT_DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS promotions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description TEXT,
    discount_type VARCHAR(50),
    discount_value FLOAT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);
"""

def migrate():
    engine = sqlalchemy.create_engine(DB_URI)
    print(f"Connecting to {DB_URI.split('@')[1]}...")
    try:
        with engine.connect() as conn:
            # First the fix
            conn.execute(text(SQL.split('CREATE TABLE')[0]))
            conn.commit()
            
            # Then the rest
            remaining_sql = 'CREATE TABLE' + 'CREATE TABLE'.join(SQL.split('CREATE TABLE')[1:])
            for statement in remaining_sql.split(';'):
                if statement.strip():
                    conn.execute(text(statement))
            conn.commit()
            print("✅ All 8 tables created/verified.")
            
            res = conn.execute(text("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"))
            print("\nFinal Table List:")
            for row in res:
                print(f"- {row[0]}")
    except Exception as e:
        print(f"❌ Migration failed: {e}")

if __name__ == "__main__":
    migrate()
