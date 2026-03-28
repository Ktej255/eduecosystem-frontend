import sys

# Month Order Mapping
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
month_map = {name: str(i+1).zfill(2) for i, name in enumerate(months)}

with open("raw_sales_data.txt", "r") as f:
    lines = f.readlines()

current_year = 2023
last_month_idx = 8 # Sept is index 8
sql_values = []

line_idx = 0
while line_idx < len(lines):
    line = lines[line_idx].strip()
    if not line or line.startswith("Date"):
        line_idx += 1
        continue
    
    parts = line.split("\t")
    if len(parts) < 3:
        line_idx += 1
        continue
        
    date_part = parts[0].strip()
    if "-" not in date_part:
        line_idx += 1
        continue
        
    day, month_name = date_part.split("-")[:2]
    month_idx = months.index(month_name)
    
    if month_idx < last_month_idx:
        current_year += 1
    last_month_idx = month_idx
    
    date_str = f"{current_year}-{month_map[month_name]}-{day.zfill(2)}"
    
    try:
        cash = float(parts[1].replace(",", "")) if parts[1].strip() else 0
        expense = float(parts[2].replace(",", "")) if parts[2].strip() else 0
        sale = float(parts[-1].replace(",", "")) if parts[-1].strip() else 0
        
        sql_values.append(f"('{date_str}', {cash}, {expense}, {sale})")
    except:
        pass
        
    line_idx += 1

sql_command = "INSERT INTO daily_sales (date, cash_collected, total_expense, total_sale) VALUES " + ", ".join(sql_values) + " ON CONFLICT (date) DO UPDATE SET cash_collected = EXCLUDED.cash_collected, total_expense = EXCLUDED.total_expense, total_sale = EXCLUDED.total_sale;"

with open("seed_sales.sql", "w") as f:
    f.write(sql_command)

print(f"Generated seed_sales.sql with {len(sql_values)} records.")
