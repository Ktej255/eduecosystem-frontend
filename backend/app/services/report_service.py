"""
Report Generation and Export Service
PDF and CSV export functionality
"""

import csv
import io
from datetime import date, datetime
from typing import Optional

from sqlalchemy.orm import Session

from app.models.course import Course
from app.models.order import Order, OrderStatus
from app.services.revenue_analytics_service import RevenueAnalyticsService


class ReportService:
    """Service for generating reports and exports"""

    def __init__(self, db: Session):
        self.db = db

    def generate_revenue_csv(
        self,
        instructor_id: Optional[int] = None,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
    ) -> str:
        """
        Generate CSV report of revenue data.
        Returns CSV as string.
        """
        revenue_service = RevenueAnalyticsService(self.db)
        breakdown = revenue_service.get_revenue_breakdown(
            instructor_id=instructor_id, start_date=start_date, end_date=end_date
        )

        # Create CSV in memory
        output = io.StringIO()
        writer = csv.writer(output)

        # Header
        writer.writerow(["Revenue Report"])
        writer.writerow(["Generated", datetime.now().strftime("%Y-%m-%d %H:%M:%S")])
        start_dt = breakdown['period']['start_date']
        end_dt = breakdown['period']['end_date']
        writer.writerow(
            [
                "Period",
                f"{start_dt} to {end_dt}",
            ]
        )
        writer.writerow([])

        # Summary
        writer.writerow(["Summary"])
        writer.writerow(["Total Revenue", breakdown["total_revenue"]])
        writer.writerow(["Order Count", breakdown["order_count"]])
        writer.writerow(["Average Order Value", breakdown["average_order_value"]])
        writer.writerow([])

        # By Course
        if breakdown["by_course"]:
            writer.writerow(["Revenue by Course"])
            writer.writerow(["Course", "Revenue", "Percentage"])
            for course_data in breakdown["by_course"]:
                writer.writerow(
                    [
                        course_data["course"],
                        course_data["revenue"],
                        f"{course_data['percentage']}%",
                    ]
                )
            writer.writerow([])

        # By Day of Week
        writer.writerow(["Revenue by Day of Week"])
        writer.writerow(["Day", "Revenue"])
        for day_data in breakdown["by_day_of_week"]:
            writer.writerow([day_data["day"], day_data["revenue"]])

        return output.getvalue()

    def generate_orders_csv(
        self,
        instructor_id: Optional[int] = None,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
    ) -> str:
        """
        Generate CSV of individual orders.
        """
        query = self.db.query(Order).filter(Order.status == OrderStatus.COMPLETED)

        if start_date:
            query = query.filter(
                Order.created_at >= datetime.combine(start_date, datetime.min.time())
            )
        if end_date:
            query = query.filter(
                Order.created_at <= datetime.combine(end_date, datetime.max.time())
            )

        if instructor_id:
            from app.models.order import OrderItem

            query = (
                query.join(OrderItem)
                .join(Course)
                .filter(Course.instructor_id == instructor_id)
            )

        orders = query.all()

        # Create CSV
        output = io.StringIO()
        writer = csv.writer(output)

        # Header
        writer.writerow(
            [
                "Order Number",
                "Date",
                "Customer Email",
                "Items",
                "Subtotal",
                "Discount",
                "Tax",
                "Total",
                "Status",
            ]
        )

        # Data
        for order in orders:
            writer.writerow(
                [
                    order.order_number,
                    order.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                    order.billing_email or order.guest_email,
                    len(order.items),
                    order.subtotal,
                    order.discount,
                    order.tax,
                    order.total,
                    order.status,
                ]
            )

        return output.getvalue()

    def generate_analytics_csv(
        self,
        instructor_id: int,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
    ) -> str:
        """
        Generate comprehensive analytics CSV.
        """
        from app.models.analytics import InstructorAnalytics

        query = self.db.query(InstructorAnalytics).filter(
            InstructorAnalytics.instructor_id == instructor_id
        )

        if start_date:
            query = query.filter(InstructorAnalytics.date >= start_date)
        if end_date:
            query = query.filter(InstructorAnalytics.date <= end_date)

        analytics = query.order_by(InstructorAnalytics.date).all()

        if not analytics:
            return "No analytics data available for the selected period"

        # Create CSV
        output = io.StringIO()
        writer = csv.writer(output)

        # Header
        writer.writerow(
            [
                "Date",
                "Course",
                "Total Students",
                "Active Students",
                "New Enrollments",
                "Avg Progress",
                "Avg Quiz Score",
                "Total Revenue",
                "New Revenue",
                "Avg Rating",
                "Discussion Posts",
            ]
        )

        # Data
        for record in analytics:
            writer.writerow(
                [
                    record.date,
                    record.course.title if record.course else "N/A",
                    record.total_students,
                    record.active_students,
                    record.new_enrollments,
                    f"{record.avg_progress:.1f}%",
                    f"{record.avg_quiz_score:.1f}",
                    record.total_revenue,
                    record.new_revenue,
                    f"{record.avg_rating:.1f}",
                    record.discussion_posts,
                ]
            )

        return output.getvalue()

    def generate_forecast_csv(
        self, instructor_id: Optional[int] = None, forecast_days: int = 30
    ) -> str:
        """
        Generate revenue forecast CSV.
        """
        revenue_service = RevenueAnalyticsService(self.db)
        forecast = revenue_service.forecast_revenue(
            instructor_id=instructor_id, forecast_days=forecast_days
        )

        # Create CSV
        output = io.StringIO()
        writer = csv.writer(output)

        # Header
        writer.writerow(["Revenue Forecast Report"])
        writer.writerow(["Generated", datetime.now().strftime("%Y-%m-%d %H:%M:%S")])
        writer.writerow([])

        # Summary
        writer.writerow(["Forecast Summary"])
        writer.writerow(["Forecast Period (days)", forecast["forecast_period_days"]])
        writer.writerow(["Predicted Revenue", forecast["predicted_revenue"]])
        writer.writerow(
            ["Predicted Daily Average", forecast.get("predicted_daily_avg", "N/A")]
        )
        writer.writerow(["Trend", forecast["trend"]])
        writer.writerow(["Growth Rate", f"{forecast.get('growth_rate', 0)}%"])
        writer.writerow([])

        # Confidence interval
        writer.writerow(["Confidence Interval"])
        writer.writerow(["Lower Bound", forecast["confidence_interval"][0]])
        writer.writerow(["Upper Bound", forecast["confidence_interval"][1]])
        writer.writerow([])

        # Weekly breakdown
        if "breakdown_by_week" in forecast:
            writer.writerow(["Weekly Forecast"])
            writer.writerow(["Week", "Days", "Predicted Revenue"])
            for week_data in forecast["breakdown_by_week"]:
                writer.writerow(
                    [
                        week_data["week"],
                        week_data["days"],
                        week_data["predicted_revenue"],
                    ]
                )

        return output.getvalue()

    def generate_revenue_pdf(
        self,
        instructor_id: Optional[int] = None,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
    ) -> bytes:
        """
        Generate PDF report with ReportLab.
        """
        from reportlab.graphics.charts.barcharts import VerticalBarChart
        from reportlab.graphics.shapes import Drawing
        from reportlab.lib import colors
        from reportlab.lib.pagesizes import letter
        from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
        from reportlab.lib.units import inch
        from reportlab.platypus import (
            Paragraph,
            SimpleDocTemplate,
            Spacer,
            Table,
            TableStyle,
        )

        revenue_service = RevenueAnalyticsService(self.db)
        breakdown = revenue_service.get_revenue_breakdown(
            instructor_id=instructor_id, start_date=start_date, end_date=end_date
        )

        buffer = io.BytesIO()
        doc = SimpleDocTemplate(
            buffer,
            pagesize=letter,
            rightMargin=72,
            leftMargin=72,
            topMargin=72,
            bottomMargin=18,
        )

        elements = []
        styles = getSampleStyleSheet()

        # Branding/Title
        title_style = ParagraphStyle(
            "TitleStyle",
            parent=styles["Title"],
            fontSize=24,
            textColor=colors.HexColor("#2C3E50"),
            spaceAfter=30,
        )
        elements.append(Paragraph("<b>Revenue Report</b>", title_style))

        # Generation Info
        elements.append(
            Paragraph(
                f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                styles["Normal"],
            )
        )
        start_dt = breakdown['period']['start_date']
        end_dt = breakdown['period']['end_date']
        elements.append(
            Paragraph(
                f"Period: {start_dt} to {end_dt}",
                styles["Normal"],
            )
        )
        elements.append(Spacer(1, 0.25 * inch))

        # Summary Table
        elements.append(Paragraph("<b>Summary</b>", styles["Heading2"]))
        summary_data = [
            ["Metric", "Value"],
            ["Total Revenue", f"${breakdown['total_revenue']:.2f}"],
            ["Order Count", str(breakdown["order_count"])],
            ["Average Order Value", f"${breakdown['average_order_value']:.2f}"],
        ]

        summary_table = Table(summary_data, colWidths=[2.5 * inch, 2.5 * inch])
        summary_table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#34495E")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
                    ("ALIGN", (0, 0), (-1, -1), "LEFT"),
                    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                    ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
                    ("BACKGROUND", (0, 1), (-1, -1), colors.HexColor("#F2F4F4")),
                    ("GRID", (0, 0), (-1, -1), 1, colors.HexColor("#BDC3C7")),
                    ("PADDING", (0, 0), (-1, -1), 6),
                ]
            )
        )
        elements.append(summary_table)
        elements.append(Spacer(1, 0.5 * inch))

        # Course Breakdown Table
        if breakdown.get("by_course"):
            elements.append(Paragraph("<b>Revenue by Course</b>", styles["Heading2"]))
            course_data = [["Course", "Revenue", "Percentage"]]
            for course in breakdown["by_course"]:
                course_data.append(
                    [
                        course["course"],
                        f"${course['revenue']:.2f}",
                        f"{course['percentage']:.1f}%",
                    ]
                )

            course_table = Table(course_data, colWidths=[3 * inch, 1 * inch, 1 * inch])
            course_table.setStyle(
                TableStyle(
                    [
                        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#34495E")),
                        ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
                        ("ALIGN", (0, 0), (0, -1), "LEFT"),
                        ("ALIGN", (1, 0), (-1, -1), "RIGHT"),
                        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                        ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
                        ("GRID", (0, 0), (-1, -1), 1, colors.HexColor("#BDC3C7")),
                        ("PADDING", (0, 0), (-1, -1), 6),
                    ]
                )
            )
            elements.append(course_table)
            elements.append(Spacer(1, 0.5 * inch))

        # Day of Week Chart
        if breakdown.get("by_day_of_week"):
            elements.append(
                Paragraph("<b>Revenue by Day of Week</b>", styles["Heading2"])
            )
            elements.append(Spacer(1, 0.25 * inch))

            days = [
                d["day"][:3] for d in breakdown["by_day_of_week"]
            ]  # Shorten day names
            revenues = [d["revenue"] for d in breakdown["by_day_of_week"]]

            drawing = Drawing(400, 200)
            bc = VerticalBarChart()
            bc.x = 50
            bc.y = 50
            bc.height = 125
            bc.width = 300
            bc.data = [revenues]
            bc.strokeColor = colors.white
            bc.valueAxis.valueMin = 0

            max_rev = max(revenues) if revenues else 100
            bc.valueAxis.valueMax = max_rev * 1.1 if max_rev > 0 else 100
            bc.valueAxis.valueStep = max_rev / 5 if max_rev > 0 else 20

            bc.categoryAxis.labels.boxAnchor = "ne"
            bc.categoryAxis.labels.dx = 8
            bc.categoryAxis.labels.dy = -2
            bc.categoryAxis.categoryNames = days

            drawing.add(bc)
            elements.append(drawing)

        # Build PDF
        doc.build(elements)
        pdf_bytes = buffer.getvalue()
        buffer.close()

        return pdf_bytes
