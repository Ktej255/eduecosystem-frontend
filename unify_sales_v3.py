import re
from datetime import datetime

months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

data = {} 

def parse_block(filename, start_year):
    print(f"--- Parsing {filename} starting at {start_year} ---")
    with open(filename, "r") as f:
        lines = f.readlines()
    
    current_year = start_year
    last_month_idx = -1
    
    for i, line in enumerate(lines):
        line = line.strip()
        if not line or line.startswith("Date") or "Vacation" in line or "Holiday" in line or line.startswith("b"):
            continue
            
        parts = line.split("\t")
        if len(parts) < 3: continue
        
        date_part = parts[0].strip()
        if "-" not in date_part: continue
        
        try:
            day_str, month_name = date_part.split("-")[:2]
            day = int(day_str)
            m_idx = months.index(month_name)
        except: continue
        
        # Year change detection: if we go from Dec back to Jan, or any lower index
        if last_month_idx != -1 and m_idx < last_month_idx:
            current_year += 1
            print(f"   [!] Year incremented to {current_year} at line {i+1} ({date_part})")
        
        last_month_idx = m_idx
        
        try:
            cash = float(parts[1].replace(",", "")) if len(parts) > 1 and parts[1].strip() else 0
            expense = float(parts[2].replace(",", "")) if len(parts) > 2 and parts[2].strip() else 0
            # Sale is usually the last column
            sale = float(parts[-1].replace(",", "")) if len(parts) > 2 and parts[-1].strip() else 0
            
            data[(current_year, m_idx+1, day)] = (cash, expense, sale)
        except Exception as ex:
            print(f"   [?] Error on line {i+1}: {ex}")

# Parse blocks as per user confirmation
# File 1: Sept 2023 - Dec 2024
parse_block("raw_sales_data.txt", 2023)

# File 2: Jan 2025 - Mar 2026
parse_block("raw_sales_data_v2.txt", 2025)

keys = sorted(data.keys())
print(f"Total Unique Days: {len(keys)}")

# Verification Table
current_m = None
print(f"| Month-Year | Entries | Sales Sum |")
mt_s = mt_c = 0
for (y, m, d) in keys:
    m_key = f"{months[m-1]}-{y}"
    if current_m and current_m != m_key:
        print(f"| {current_m} | {mt_c} | {mt_s:,.0f} |")
        mt_s = mt_c = 0
    current_m = m_key
    mt_s += data[(y, m, d)][2]
    mt_c += 1
if current_m:
    print(f"| {current_m} | {mt_c} | {mt_s:,.0f} |")

# Generate multi-statement SQL to avoid buffer limits
sql_lines = []
for (y, m, d) in keys:
    c, e, s = data[(y, m, d)]
    dt = f"{y}-{str(m).zfill(2)}-{str(d).zfill(2)}"
    sql_lines.append(f"INSERT INTO daily_sales (date, cash_collected, total_expense, total_sale) VALUES ('{dt}', {c}, {e}, {s}) ON CONFLICT (date) DO UPDATE SET cash_collected = EXCLUDED.cash_collected, total_expense = EXCLUDED.total_expense, total_sale = EXCLUDED.total_sale;")

with open("master_seed_v3.sql", "w") as f:
    f.write("\n".join(sql_lines))
