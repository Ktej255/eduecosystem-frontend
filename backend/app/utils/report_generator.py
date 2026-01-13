from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from datetime import datetime
import os

class GraphoReportGenerator:
    def __init__(self, output_dir="uploads/reports"):
        self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)
        self.styles = getSampleStyleSheet()

    def generate_report(self, submission_id, user_name, analysis_data):
        filename = f"Grapho_Report_{submission_id}_{datetime.now().strftime('%Y%m%d')}.pdf"
        filepath = os.path.join(self.output_dir, filename)
        
        doc = SimpleDocTemplate(filepath, pagesize=letter)
        story = []

        # -- Title Style --
        title_style = ParagraphStyle(
            'CustomTitle',
            parent=self.styles['Heading1'],
            fontSize=24,
            spaceAfter=30,
            textColor=colors.HexColor('#0A1628')
        )

        # -- Header --
        story.append(Paragraph("Graphotherapy Personality Report", title_style))
        story.append(Paragraph(f"<b>Student:</b> {user_name}", self.styles['Normal']))
        story.append(Paragraph(f"<b>Date:</b> {datetime.now().strftime('%B %d, %Y')}", self.styles['Normal']))
        story.append(Spacer(1, 12))

        # -- Overall Score --
        score = analysis_data.get('overall_score', 0)
        score_color = colors.green if score > 80 else colors.orange
        story.append(Paragraph(f"<b>Overall Verification Score:</b> <font color={score_color}>{score}/100</font>", self.styles['Heading2']))
        story.append(Spacer(1, 12))

        # -- Summary --
        story.append(Paragraph("<b>Analysis Summary:</b>", self.styles['Heading3']))
        story.append(Paragraph(analysis_data.get('summary', 'No summary available.'), self.styles['Normal']))
        story.append(Spacer(1, 24))

        # -- Traits Table --
        traits = analysis_data.get('traits', [])
        if traits:
            story.append(Paragraph("<b>Detailed Trait Analysis:</b>", self.styles['Heading3']))
            story.append(Spacer(1, 12))
            
            table_data = [['Trait', 'Score', 'Observation']]
            for t in traits:
                table_data.append([t['trait'], f"{t['score']}%", t['observation']])

            t = Table(table_data, colWidths=[1.5*inch, 1*inch, 4*inch])
            t.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f3f4f6')),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#374151')),
                ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                ('BACKGROUND', (0, 1), (-1, -1), colors.white),
                ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#e5e7eb')),
                ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                ('PADDING', (0, 0), (-1, -1), 8),
            ]))
            story.append(t)

        # -- Footer --
        story.append(Spacer(1, 40))
        story.append(Paragraph("<i>Powered by Graphotherapy AI Engine</i>", self.styles['Italic']))

        doc.build(story)
        return f"/{self.output_dir}/{filename}"

# Singleton instance
report_generator = GraphoReportGenerator()
