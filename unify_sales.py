import re
from datetime import datetime

months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
month_map = {name: i+1 for i, name in enumerate(months)}

data = {} # (year, month, day) -> (cash, expense, sale)

def parse_block(filename, start_year):
    with open(filename, "r") as f:
        lines = f.readlines()
    
    current_year = start_year
    last_month_idx = -1
    
    for line in lines:
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
        
        if last_month_idx != -1 and m_idx < last_month_idx:
            current_year += 1
        last_month_idx = m_idx
        
        try:
            cash = float(parts[1].replace(",", "")) if len(parts) > 1 and parts[1].strip() else 0
            expense = float(parts[2].replace(",", "")) if len(parts) > 2 and parts[2].strip() else 0
            sale = float(parts[-1].replace(",", "")) if len(parts) > 2 and parts[-1].strip() else 0
            
            data[(current_year, m_idx+1, day)] = (cash, expense, sale)
        except: pass

# 1. Parse the first block (Sept 2023 - Dec 2024)
parse_block("raw_sales_data.txt", 2023)

# 2. Parse the second block (Jan 2025 - Mar 2026)
# Note: Since this block starts after Dec 2024, we set start year to 2025
parse_block("raw_sales_data_v2.txt", 2025)

# Sort and Aggregate
sorted_keys = sorted(data.keys())
current_m = None
print(f"| Month-Year | Entries | Total Sales | Total Expense | Net Profit |")
print(f"| :--- | :--- | :--- | :--- | :--- |")

mt_sales = mt_expense = mt_count = 0

for (y, m, d) in sorted_keys:
    m_key = f"{months[m-1]}-{y}"
    if current_m and current_m != m_key:
        print(f"| {current_m} | {mt_count} | Rs.{mt_sales:,.0f} | Rs.{mt_expense:,.0f} | Rs.{mt_sales-mt_expense:,.0f} |")
        mt_sales = mt_expense = mt_count = 0
    current_m = m_key
    c, e, s = data[(y, m, d)]
    mt_sales += s
    mt_expense += e
    mt_count += 1

if current_m:
    print(f"| {current_m} | {mt_count} | Rs.{mt_sales:,.0f} | Rs.{mt_expense:,.0f} | Rs.{mt_sales-mt_expense:,.0f} |")

# Generate SQL
sql_vals = []
for (y, m, d) in sorted_keys:
    c, e, s = data[(y, m, d)]
    date_str = f"{y}-{str(m).zfill(2)}-{str(d).zfill(2)}"
    sql_vals.append(f"('{date_str}', {c}, {e}, {s})")

sql_cmd = "INSERT INTO daily_sales (date, cash_collected, total_expense, total_sale) VALUES " + ", ".join(sql_vals) + " ON CONFLICT (date) DO UPDATE SET cash_collected = EXCLUDED.cash_collected, total_expense = EXCLUDED.total_expense, total_sale = EXCLUDED.total_sale;"
with open("master_seed.sql", "w") as f:
    f.write(sql_cmd)
