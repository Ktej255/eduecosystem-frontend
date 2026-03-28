import sys

# Month Order Mapping
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

with open("raw_sales_data_v2.txt", "r") as f:
    lines = f.readlines()

# The user's new block likely starts at Jan of a certain year.
# Based on the sequence, it looks like a full year plus an extension.
# If I start at 2024 (since previous was 2023), let's see.

current_year = 2024 
last_month_idx = -1
aggregates = []

current_month_name = None
month_sales = 0
month_expense = 0
month_count = 0

print(f"| Month-Year | Entries | Total Sales | Total Expense | Net Profit |")
print(f"| :--- | :--- | :--- | :--- | :--- |")

line_idx = 0
while line_idx < len(lines):
    line = lines[line_idx].strip()
    if not line or line.startswith("Date") or line.startswith("b") or "Vacation" in line or "Holiday" in line:
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
        
    try:
        day, month_name = date_part.split("-")[:2]
        month_idx = months.index(month_name)
    except:
        line_idx += 1
        continue
    
    # Year logic
    if last_month_idx != -1 and month_idx < last_month_idx:
        current_year += 1
    last_month_idx = month_idx
    
    month_key = f"{month_name}-{current_year}"
    
    if current_month_name and current_month_name != month_key:
        profit = month_sales - month_expense
        print(f"| {current_month_name} | {month_count} | Rs.{month_sales:,.0f} | Rs.{month_expense:,.0f} | Rs.{profit:,.0f} |")
        month_sales = 0
        month_expense = 0
        month_count = 0
        
    current_month_name = month_key
    
    try:
        cash = float(parts[1].replace(",", "")) if len(parts) > 1 and parts[1].strip() else 0
        expense = float(parts[2].replace(",", "")) if len(parts) > 2 and parts[2].strip() else 0
        sale = float(parts[3].replace(",", "")) if len(parts) > 3 and parts[3].strip() else 0
        
        # In current context, if sale is 0 but cash/expense are there, maybe skip or take cash?
        # But user said "Sale" column is the one.
        
        month_sales += sale
        month_expense += expense
        month_count += 1
    except:
        pass
        
    line_idx += 1

# Print last month
if current_month_name:
    profit = month_sales - month_expense
    print(f"| {current_month_name} | {month_count} | Rs.{month_sales:,.0f} | Rs.{month_expense:,.0f} | Rs.{profit:,.0f} |")
