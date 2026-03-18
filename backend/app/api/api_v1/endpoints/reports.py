"""
Report Export API Endpoints
CSV and PDF export functionality
"""

from fastapi import APIRouter, Depends, Query, Response
from sqlalchemy.orm import Session
from typing import Optional
from datetime import date, datetime

from app.api import deps
from app.models.user import User
from app.services.report_service import ReportService
from app.services.pdf_service import PDFReportService
from app.services.revenue_analytics_service import RevenueAnalyticsService
from app.services.executive_service import ExecutiveService

router = APIRouter()


@router.get("/export/revenue/csv")
def export_revenue_csv(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    current_user: User = Depends(deps.get_current_instructor),
    db: Session = Depends(deps.get_db),
):
    """
    Export revenue breakdown as CSV.
    """
    service = ReportService(db)
    csv_content = service.generate_revenue_csv(
        instructor_id=current_user.id, start_date=start_date, end_date=end_date
    )

    filename = f"revenue_report_{datetime.now().strftime('%Y%m%d')}.csv"

    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


@router.get("/export/orders/csv")
def export_orders_csv(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    current_user: User = Depends(deps.get_current_instructor),
    db: Session = Depends(deps.get_db),
):
    """
    Export individual orders as CSV.
    """
    service = ReportService(db)
    csv_content = service.generate_orders_csv(
        instructor_id=current_user.id, start_date=start_date, end_date=end_date
    )

    filename = f"orders_{datetime.now().strftime('%Y%m%d')}.csv"

    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


@router.get("/export/analytics/csv")
def export_analytics_csv(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    current_user: User = Depends(deps.get_current_instructor),
    db: Session = Depends(deps.get_db),
):
    """
    Export comprehensive analytics as CSV.
    """
    service = ReportService(db)
    csv_content = service.generate_analytics_csv(
        instructor_id=current_user.id, start_date=start_date, end_date=end_date
    )

    filename = f"analytics_{datetime.now().strftime('%Y%m%d')}.csv"

    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


@router.get("/export/forecast/csv")
def export_forecast_csv(
    forecast_days: int = Query(30, ge=7, le=365),
    current_user: User = Depends(deps.get_current_instructor),
    db: Session = Depends(deps.get_db),
):
    """
    Export revenue forecast as CSV.
    """
    service = ReportService(db)
    csv_content = service.generate_forecast_csv(
        instructor_id=current_user.id, forecast_days=forecast_days
    )

    filename = f"forecast_{datetime.now().strftime('%Y%m%d')}.csv"

    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


# Admin endpoints


@router.get("/admin/export/revenue/csv")
def admin_export_revenue_csv(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    current_user: User = Depends(deps.get_current_admin),
    db: Session = Depends(deps.get_db),
):
    """
    Export platform-wide revenue as CSV (admin only).
    """
    service = ReportService(db)
    csv_content = service.generate_revenue_csv(
        instructor_id=None,  # Platform-wide
        start_date=start_date,
        end_date=end_date,
    )

    filename = f"platform_revenue_{datetime.now().strftime('%Y%m%d')}.csv"

    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


@router.get("/admin/export/orders/csv")
def admin_export_orders_csv(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    current_user: User = Depends(deps.get_current_admin),
    db: Session = Depends(deps.get_db),
):
    """
    Export all platform orders as CSV (admin only).
    """
    service = ReportService(db)
    csv_content = service.generate_orders_csv(
        instructor_id=None,  # Platform-wide
        start_date=start_date,
        end_date=end_date,
    )

    filename = f"platform_orders_{datetime.now().strftime('%Y%m%d')}.csv"

    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


# PDF Export Endpoints


@router.get("/export/revenue/pdf")
def export_revenue_pdf(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    current_user: User = Depends(deps.get_current_instructor),
    db: Session = Depends(deps.get_db),
):
    """
    Generate revenue report as PDF.
    """
    # Get revenue data
    service = RevenueAnalyticsService(db)
    instructor_id = current_user.id if not current_user.is_superuser else None
    
    breakdown = service.get_revenue_breakdown(
        instructor_id=instructor_id,
        start_date=start_date,
        end_date=end_date
    )
    
    comparison = service.compare_periods(
        instructor_id=instructor_id,
        comparison_type="mom"
    )
    
    revenue_data = {
        "revenue_summary": {
            "total": breakdown["total_revenue"],
            "monthly": comparison["current_period"]["revenue"],
            "growth_rate": comparison["change"]["percentage"],
            "avg_order": breakdown["average_order_value"],
        },
        "monthly_data": [
            {"month": comparison["previous_period"]["start"][:7], "revenue": comparison["previous_period"]["revenue"]},
            {"month": comparison["current_period"]["start"][:7], "revenue": comparison["current_period"]["revenue"]},
        ],
        "top_courses": [
            {"name": c["course"], "revenue": c["revenue"], "enrollments": 0} # enrollments not directly in breakdown
            for c in breakdown["by_course"][:5]
        ],
    }

    pdf_bytes = PDFReportService.generate_revenue_report(revenue_data)

    filename = f"revenue_report_{datetime.now().strftime('%Y%m%d')}.pdf"

    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


@router.get("/admin/export/executive/pdf")
def admin_export_executive_pdf(
    current_user: User = Depends(deps.get_current_admin),
    db: Session = Depends(deps.get_db),
):
    """
    Generate executive summary PDF (admin only).
    """
    # Get executive data
    kpis = ExecutiveService.get_kpis(db)
    health = ExecutiveService.calculate_health_score(db)
    risks = ExecutiveService.identify_risks(db)

    pdf_bytes = PDFReportService.generate_executive_summary(kpis, health, risks)

    filename = f"executive_summary_{datetime.now().strftime('%Y%m%d')}.pdf"

    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )
