import sys

# Month Order Mapping
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

with open("raw_sales_data.txt", "r") as f:
    lines = f.readlines()

current_year = 2023
last_month_idx = 8 # Sept is index 8
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
    
    # Year logic: If month index jumps back (e.g. Dec to Jan), increment year
    if month_idx < last_month_idx:
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
        # Columns based on the provided text format
        cash = float(parts[1].replace(",", "")) if parts[1].strip() else 0
        expense = float(parts[2].replace(",", "")) if parts[2].strip() else 0
        sale = float(parts[-1].replace(",", "")) if parts[-1].strip() else 0
        
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
