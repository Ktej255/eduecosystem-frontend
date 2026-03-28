from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, extract, text
from app.api.deps import get_db
from app.models.domain import DailySales
from datetime import datetime, timedelta

router = APIRouter()

@router.get("/dashboard-stats")
def get_dashboard_stats(period: str = "30days", db: Session = Depends(get_db)):
    today = datetime.utcnow().date()
    if period == "7days":
        start_date = today - timedelta(days=7)
    elif period == "90days" or period == "3months":
        start_date = today - timedelta(days=90)
    elif period == "1year":
        start_date = today - timedelta(days=365)
    elif period == "2years":
        start_date = today - timedelta(days=730)
    elif period == "lifetime":
        # Get earliest date in DB
        first_record = db.query(func.min(DailySales.date)).scalar()
        start_date = first_record if first_record else today
    else:
        start_date = today - timedelta(days=30)
    
    # Current Period Summary
    current = db.query(
        func.sum(DailySales.total_sale).label("sales"),
        func.sum(DailySales.total_expense).label("expenses"),
        func.avg(DailySales.total_sale).label("avg_sale")
    ).filter(DailySales.date >= start_date, DailySales.date <= today).first()
    
    # Previous Period for Trend (Same duration as start_date to today)
    delta = (today - start_date).days
    prev_start = start_date - timedelta(days=delta if delta > 0 else 30)
    prev_end = start_date - timedelta(days=1)
    
    previous_sales = float(db.query(
        func.sum(DailySales.total_sale).label("sales")
    ).filter(DailySales.date >= prev_start, DailySales.date <= prev_end).scalar() or 0)
    
    total_sales = float(current.sales) if current.sales else 0
    total_expenses = float(current.expenses) if current.expenses else 0
    avg_daily_sale = float(current.avg_sale) if current.avg_sale else 0
    net_profit = total_sales - total_expenses
    
    # Chart Data (Last 30-60 points depending on period)
    chart_query = db.query(DailySales).filter(DailySales.date >= start_date, DailySales.date <= today).order_by(DailySales.date.asc())
    if period in ["1year", "2years", "lifetime"]:
        # For long periods, don't return 800 days of daily data for the main chart?
        # Maybe just the last 60 days for granular chart, but we need monthly data too.
        # Let's keep it daily for now, or the frontend will struggle.
        chart_sales = chart_query.all()
    else:
        chart_sales = chart_query.all()
    
    chart_data = [
        {
            "date": s.date.strftime("%d %b"),
            "sale": float(s.total_sale),
            "expense": float(s.total_expense),
            "profit": float(s.profit or 0)
        } for s in chart_sales
    ]

    return {
        "chart_data": chart_data,
        "metrics": {
            "total_sales": total_sales,
            "total_expense": total_expenses,
            "total_profit": net_profit,
            "avg_daily_sale": avg_daily_sale,
            "sales_growth": round(((total_sales - previous_sales) / previous_sales * 100), 2) if previous_sales > 0 else 0
        }
    }

@router.get("/insights/monthly-breakdown")
def monthly_breakdown(db: Session = Depends(get_db)):
    """Groups ALL sales data by month for the multi-year chart."""
    results = db.query(
        extract('year', DailySales.date).label('year'),
        extract('month', DailySales.date).label('month'),
        func.sum(DailySales.total_sale).label('total_sale'),
        func.sum(DailySales.total_expense).label('total_expense')
    ).group_by('year', 'month').order_by('year', 'month').all()
    
    data = []
    for r in results:
        sale = float(r.total_sale)
        expense = float(r.total_expense)
        profit = sale - expense
        margin = (profit / sale * 100) if sale > 0 else 0
        
        month_name = datetime(int(r.year), int(r.month), 1).strftime("%b %Y")
        
        data.append({
            "month": month_name,
            "year": int(r.year),
            "total_sale": sale,
            "total_expense": expense,
            "profit": profit,
            "margin_percent": round(margin, 2)
        })
    return data

@router.get("/insights/lifetime-summary")
def get_lifetime_summary(db: Session = Depends(get_db)):
    """Summary data for the lifetime performance card."""
    stats = db.query(
        func.sum(DailySales.total_sale).label("total_revenue"),
        func.sum(DailySales.total_sale - DailySales.total_expense).label("total_profit"),
        func.min(DailySales.date).label("start_date")
    ).first()
    
    if not stats.total_revenue:
        return {"error": "No data"}
        
    revenue = float(stats.total_revenue)
    profit = float(stats.total_profit)
    
    # Best Month
    best_month_res = db.query(
        extract('year', DailySales.date).label('year'),
        extract('month', DailySales.date).label('month'),
        func.sum(DailySales.total_sale).label('total')
    ).group_by('year', 'month').order_by(text('total DESC')).first()
    
    # Worst Month
    worst_month_res = db.query(
        extract('year', DailySales.date).label('year'),
        extract('month', DailySales.date).label('month'),
        func.sum(DailySales.total_sale).label('total')
    ).group_by('year', 'month').order_by(text('total ASC')).first()
    
    best_month_name = datetime(int(best_month_res.year), int(best_month_res.month), 1).strftime("%b %Y")
    worst_month_name = datetime(int(worst_month_res.year), int(worst_month_res.month), 1).strftime("%b %Y")
    
    # Avg Monthly Revenue
    total_months = db.query(func.count(func.distinct(func.date_trunc('month', DailySales.date)))).scalar()
    avg_monthly = revenue / total_months if total_months > 0 else revenue
    
    return {
        "total_revenue": revenue,
        "total_profit": profit,
        "avg_monthly_revenue": round(avg_monthly, 2),
        "best_month": {"name": best_month_name, "amount": float(best_month_res.total)},
        "worst_month": {"name": worst_month_name, "amount": float(worst_month_res.total)},
        "start_date": stats.start_date.strftime("%d %b %Y")
    }

@router.get("/compare/same-period")
def compare_same_period(period: str = "7days", db: Session = Depends(get_db)):
    if period == "7days":
        days = 7
    elif period == "3months":
        days = 90
    else:
        days = 30
    
    today = datetime.utcnow().date()
    current_start = today - timedelta(days=days)
    last_year_start = current_start - timedelta(days=365)
    last_year_end = today - timedelta(days=365)
    
    current = db.query(func.sum(DailySales.total_sale)).filter(
        DailySales.date >= current_start, DailySales.date <= today
    ).scalar() or 0
    
    last_year = db.query(func.sum(DailySales.total_sale)).filter(
        DailySales.date >= last_year_start, DailySales.date <= last_year_end
    ).scalar() or 0
    
    change_percent = ((float(current) - float(last_year)) / float(last_year) * 100) if last_year else 0
    
    return {
        "period": period,
        "current_total": float(current),
        "last_year_total": float(last_year),
        "change_percent": round(change_percent, 2),
        "direction": "up" if change_percent >= 0 else "down"
    }

@router.get("/insights/day-of-week")
def day_of_week_analysis(db: Session = Depends(get_db)):
    records = db.query(DailySales).all()
    day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    day_totals = {i: [] for i in range(7)}
    
    for r in records:
        dow = r.date.weekday()
        day_totals[dow].append(float(r.total_sale))
    
    result = []
    for i, name in enumerate(day_names):
        avg = sum(day_totals[i]) / len(day_totals[i]) if day_totals[i] else 0
        result.append({"day": name, "average_sale": round(avg, 2), "data_points": len(day_totals[i])})
    
    best = max(result, key=lambda x: x["average_sale"])
    worst = min(result, key=lambda x: x["average_sale"])
    
    return {"by_day": result, "best_day": best, "worst_day": worst}

@router.get("/insights/best-worst")
def best_worst_days(limit: int = 10, db: Session = Depends(get_db)):
    best = db.query(DailySales).order_by(DailySales.total_sale.desc()).limit(limit).all()
    worst = db.query(DailySales).order_by(DailySales.total_sale.asc()).limit(limit).all()
    
    def fmt(r):
        return {"date": r.date.strftime("%d %b %Y"), "total_sale": float(r.total_sale), "profit": float(r.profit or 0)}
    
    return {"best_days": [fmt(r) for r in best], "worst_days": [fmt(r) for r in worst]}

@router.get("/insights/monthly-forecast")
def monthly_forecast(db: Session = Depends(get_db)):
    today = datetime.utcnow().date()
    month_start = today.replace(day=1)
    
    current_month = db.query(DailySales).filter(DailySales.date >= month_start).all()
    days_elapsed = today.day
    import calendar
    days_in_month = calendar.monthrange(today.year, today.month)[1]
    
    current_total = sum(float(r.total_sale) for r in current_month)
    daily_avg = current_total / days_elapsed if days_elapsed else 0
    projected = daily_avg * days_in_month
    
    last_year_start = month_start.replace(year=today.year - 1)
    last_year_end = last_year_start.replace(day=calendar.monthrange(last_year_start.year, last_year_start.month)[1])
    last_year = db.query(func.sum(DailySales.total_sale)).filter(
        DailySales.date >= last_year_start, DailySales.date <= last_year_end
    ).scalar() or 0
    
    change_percent = ((projected - float(last_year)) / float(last_year) * 100) if last_year else 0
    
    return {
        "month": today.strftime("%B %Y"),
        "current_total": round(current_total, 2),
        "daily_average": round(daily_avg, 2),
        "projected_total": round(projected, 2),
        "last_year_actual": round(float(last_year), 2),
        "change_percent": round(change_percent, 2),
        "direction": "up" if change_percent >= 0 else "down"
    }

@router.get("/insights/profit-trend")
def profit_trend(months: int = 12, db: Session = Depends(get_db)):
    today = datetime.utcnow().date()
    result = []
    
    for i in range(months - 1, -1, -1):
        # Approximate month subtraction
        month_date = today.replace(day=1) - timedelta(days=i * 30.4)
        month_start = month_date.replace(day=1)
        import calendar
        last_day = calendar.monthrange(month_start.year, month_start.month)[1]
        month_end = month_start.replace(day=last_day)
        
        rows = db.query(DailySales).filter(
            DailySales.date >= month_start, DailySales.date <= month_end
        ).all()
        
        if rows:
            total_sale = sum(float(r.total_sale) for r in rows)
            total_expense = sum(float(r.total_expense) for r in rows)
            profit = total_sale - total_expense
            margin = (profit / total_sale * 100) if total_sale else 0
            result.append({
                "month": month_start.strftime("%b %Y"),
                "total_sale": round(total_sale, 2),
                "total_expense": round(total_expense, 2),
                "profit": round(profit, 2),
                "margin_percent": round(margin, 2)
            })
    
    return {"trend": result, "months_analyzed": len(result)}
