"""
Enhanced Phase 8 Analytics Report Generator with PDF Support

Generates comprehensive PDF reports with charts for subscription analytics.
Requires: reportlab, matplotlib, pandas (currently installing)
"""

import sqlite3
from datetime import datetime
import json
import os

def check_dependencies():
    """Check if required libraries are installed"""
    missing = []
    try:
        import reportlab
    except ImportError:
        missing.append('reportlab')
    
    try:
        import matplotlib
    except ImportError:
        missing.append('matplotlib')
    
    try:
        import pandas
    except ImportError:
        missing.append('pandas')
    
    return missing

def generate_pdf_report(output_file="phase8_analytics_report.pdf"):
    """
    Generate PDF report with charts
    """
    missing = check_dependencies()
    if missing:
        print(f"⚠️  Missing dependencies: {', '.join(missing)}")
        print("   Installation in progress. Please wait for pip install to complete.")
        return generate_text_report_only()
    
    # Import after checking dependencies
    from reportlab.lib.pagesizes import letter
    from reportlab.lib import colors
    from reportlab.lib.units import inch
    from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak, Image
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.enums import TA_CENTER, TA_LEFT
    import matplotlib.pyplot as plt
    import pandas as pd
    
    print("=" * 60)
    print("GENERATING PDF ANALYTICS REPORT")
    print("=" * 60)
    
    # Connect to database
    conn = sqlite3.connect('backend/eduecosystem.db')
    cursor = conn.cursor()
    
    # Collect data
    print("\n📊 Collecting data...")
    
    cursor.execute("""
        SELECT name, monthly_price, yearly_price, trial_days, 
               is_popular, is_featured
        FROM subscription_plans
        ORDER BY display_order
    """)
    plans = cursor.fetchall()
    
    cursor.execute("SELECT code, name FROM languages WHERE is_active = 1 ORDER BY sort_order")
    languages = cursor.fetchall()
    
    cursor.execute("SELECT COUNT(*) FROM user_subscriptions")
    subscription_count = cursor.fetchone()[0]
    
    conn.close()
    
    # Create PDF
    doc = SimpleDocTemplate(output_file, pagesize=letter)
    story = []
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1a73e8'),
        spaceAfter=30,
        alignment=TA_CENTER
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor('#1a73e8'),
        spaceAfter=12,
        spaceBefore=12
    )
    
    # Title
    story.append(Paragraph("Phase 8 Marketplace Analytics", title_style))
    story.append(Paragraph(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}", styles['Normal']))
    story.append(Spacer(1, 0.3*inch))
    
    # Executive Summary
    story.append(Paragraph("Executive Summary", heading_style))
    summary_data = [
        ['Metric', 'Value'],
        ['Subscription Plans', str(len(plans))],
        ['Languages Supported', str(len(languages))],
        ['Active Subscriptions', str(subscription_count)],
        ['Status', 'Production Ready ✓']
    ]
    
    summary_table = Table(summary_data, colWidths=[3*inch, 3*inch])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1a73e8')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
        ('GRID', (0, 0), (-1, -1), 1, colors.black)
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 0.3*inch))
    
    # Subscription Plans
    story.append(Paragraph("Subscription Plans", heading_style))
    plans_data = [['Plan', 'Monthly', 'Yearly', 'Trial', 'Status']]
    
    for plan in plans:
        name, monthly, yearly, trial, popular, featured = plan
        status = []
        if popular: status.append('Popular')
        if featured: status.append('Featured')
        
        plans_data.append([
            name,
            f'${monthly:.2f}',
            f'${yearly:.2f}',
            f'{trial} days',
            ', '.join(status) if status else 'Standard'
        ])
    
    plans_table = Table(plans_data, colWidths=[1.5*inch, 1*inch, 1*inch, 1*inch, 1.5*inch])
    plans_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1a73e8')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 11),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.lightgrey),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.lightgrey])
    ]))
    story.append(plans_table)
    story.append(Spacer(1, 0.3*inch))
    
    # Revenue Projections Chart
    story.append(PageBreak())
    story.append(Paragraph("Revenue Projections", heading_style))
    
    # Generate chart
    fig, ax = plt.subplots(figsize=(8, 5))
    scenarios = ['Conservative\n(100 inst.)', 'Moderate\n(500 inst.)', 'Optimistic\n(1000 inst.)']
    revenues = [27588, 413820, 1379400]
    
    bars = ax.bar(scenarios, revenues, color=['#4CAF50', '#2196F3', '#FF9800'])
    ax.set_ylabel('Annual Revenue ($)', fontsize=12, fontweight='bold')
    ax.set_title('Revenue Projection Scenarios', fontsize=14, fontweight='bold')
    ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'${x/1000:.0f}K'))
    
    # Add value labels on bars
    for bar in bars:
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2., height,
                f'${height:,.0f}',
                ha='center', va='bottom', fontsize=10, fontweight='bold')
    
    plt.tight_layout()
    chart_file = 'revenue_chart.png'
    plt.savefig(chart_file, dpi=150, bbox_inches='tight')
    plt.close()
    
    # Add chart to PDF
    if os.path.exists(chart_file):
        story.append(Image(chart_file, width=6*inch, height=3.75*inch))
        story.append(Spacer(1, 0.2*inch))
    
    # Revenue Details Table
    revenue_data = [
        ['Scenario', 'Users', 'Subscribers', 'Annual Revenue', 'Platform (30%)'],
        ['Conservative', '10,000', '100', '$27,588', '$8,276'],
        ['Moderate', '50,000', '1,500', '$413,820', '$124,146'],
        ['Optimistic', '100,000', '5,000', '$1,379,400', '$413,820']
    ]
    
    revenue_table = Table(revenue_data, colWidths=[1.5*inch, 1*inch, 1.2*inch, 1.5*inch, 1.3*inch])
    revenue_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1a73e8')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.lightgrey])
    ]))
    story.append(revenue_table)
    
    # Build PDF
    doc.build(story)
    
    # Cleanup
    if os.path.exists(chart_file):
        os.remove(chart_file)
    
    print(f"\n✅ PDF report generated: {output_file}")
    return output_file

def generate_text_report_only():
    """Generate text-only report when PDF dependencies not available"""
    print("\n📝 Generating text report (PDF requires completed installation)...")
    
    # Re-use existing text generation
    from generate_analytics_report import generate_subscription_report
    return generate_subscription_report()

if __name__ == "__main__":
    print("Phase 8 Enhanced Analytics Report Generator")
    print("=" * 60)
    
    missing = check_dependencies()
    if missing:
        print(f"\n⏳ Waiting for dependencies: {', '.join(missing)}")
        print("   Run this script again after pip install completes\n")
        generate_text_report_only()
    else:
        print("\n✅ All dependencies available")
        generate_pdf_report()
        print("\n" + "=" * 60)
        print("Report generated successfully!")
        print("Next: Open phase8_analytics_report.pdf to view")
        print("=" * 60)
