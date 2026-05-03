"""
Premium PDF Renderer — Production Grade
ReportLab-based renderer producing premium A4 PDF reports.
"""
import os
import time
import logging
from typing import Dict, Any, List

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT

logger = logging.getLogger(__name__)

# ── Brand Colors ──────────────────────────────────────────────────────────────
C_NAVY    = colors.HexColor("#0F172A")  # Deep Navy
C_ORANGE  = colors.HexColor("#FF6B35")  # Brand Orange
C_GOLD    = colors.HexColor("#B45309")  # Darker Gold
C_SOFT    = colors.HexColor("#F8FAFC")  # Light Slate
C_MID     = colors.HexColor("#E2E8F0")  # Slate 200
C_WARN    = colors.HexColor("#FFFBEB")  # Amber 50
C_WARN_B  = colors.HexColor("#D97706")  # Amber 600
C_RED_BG  = colors.HexColor("#FEF2F2")  # Red 50
C_RED_B   = colors.HexColor("#DC2626")  # Red 600
C_GREEN   = colors.HexColor("#065F46")  # Green 800
C_GREEN_B = colors.HexColor("#D1FAE5")  # Green 100
C_GREY    = colors.HexColor("#64748B")  # Slate 500
C_WHITE   = colors.white

W, H = A4  # 595 x 842 pts

class PDFRenderer:
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self._register_styles()
        self.output_dir = os.path.join("app", "static", "reports")
        os.makedirs(self.output_dir, exist_ok=True)

    def _register_styles(self):
        add = self.styles.add
        add(ParagraphStyle("Cover_Title",    fontSize=36, leading=42, alignment=TA_CENTER, textColor=C_WHITE,  fontName="Helvetica-Bold"))
        add(ParagraphStyle("Cover_Sub",      fontSize=16, leading=22, alignment=TA_CENTER, textColor=C_ORANGE, fontName="Helvetica-Bold", spaceBefore=10))
        add(ParagraphStyle("Cover_Meta",     fontSize=11, leading=14, alignment=TA_CENTER, textColor=C_GREY,   fontName="Helvetica"))
        add(ParagraphStyle("Section_Head",   fontSize=20, leading=24, textColor=C_NAVY,    fontName="Helvetica-Bold",  spaceBefore=24, spaceAfter=12))
        add(ParagraphStyle("Sub_Head",       fontSize=13, leading=17, textColor=C_ORANGE,  fontName="Helvetica-Bold",  spaceBefore=14, spaceAfter=6))
        add(ParagraphStyle("Body",           fontSize=11, leading=17, textColor=C_NAVY,    fontName="Helvetica",       alignment=TA_JUSTIFY, spaceAfter=10))
        add(ParagraphStyle("Body_Bold",      fontSize=11, leading=17, textColor=C_NAVY,    fontName="Helvetica-Bold"))
        add(ParagraphStyle("Insight_Box",    fontSize=10, leading=15, textColor=C_NAVY,    fontName="Helvetica",       backColor=C_SOFT,    borderPadding=(12,15,12,15), borderRound=5))
        add(ParagraphStyle("Shadow_Side",    fontSize=10, leading=14, textColor=C_RED_B,   fontName="Helvetica-Oblique", backColor=C_RED_BG, borderPadding=(10,12,10,12)))
        add(ParagraphStyle("Roadmap_Item",   fontSize=11, leading=15, textColor=C_NAVY,    fontName="Helvetica-Bold",  spaceBefore=12))
        add(ParagraphStyle("Roadmap_Text",   fontSize=10, leading=15, textColor=C_GREY,    fontName="Helvetica"))

    # ── Helpers ───────────────────────────────────────────────────────────────

    def _hr(self, color=None, thickness=1):
        return HRFlowable(width="100%", thickness=thickness, color=color or C_ORANGE, spaceAfter=12, spaceBefore=6)

    def _draw_score_bar(self, score: float) -> Table:
        """Render a sleek graphical score bar."""
        bar_width = 200
        bar_height = 8
        fill_width = (score / 100) * bar_width
        
        # We simulate the bar using a nested table for precision layout
        bar_table = Table([[""]], colWidths=[bar_width], rowHeights=[bar_height])
        bar_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), C_MID),
            ("LINEBELOW",  (0, 0), (0, 0), 0, C_WHITE), # Rounding simulation
        ]))
        
        # This is a bit complex in Platypus without custom Flowables, 
        # so we'll use a simpler representation that still looks premium.
        return bar_table

    def _score_table_premium(self, traits: Dict[str, Any]) -> Table:
        data = [[Paragraph("Neural Dimension", self.styles["Body_Bold"]), Paragraph("Forensic Intensity", self.styles["Body_Bold"]), Paragraph("Diagnostic Status", self.styles["Body_Bold"])]]
        
        for name, d in traits.items():
            score = d["score"]
            level = "Optimized" if score > 80 else "Stabilized" if score > 50 else "Developing"
            color = C_ORANGE if score > 80 else C_NAVY if score > 50 else C_GREY
            
            # Use a textual representation that feels more "Forensic" than a simple bar
            viz = f"[{'■' * int(score/10)}{' ' * (10 - int(score/10))}] {score}%"
            
            data.append([
                Paragraph(name.replace("_", " ").upper(), self.styles["Body"]),
                Paragraph(f"<b>{viz}</b>", ParagraphStyle("Viz", fontSize=10, fontName="Courier-Bold", textColor=color)),
                Paragraph(level, self.styles["Body"])
            ])

        t = Table(data, colWidths=[180, 180, 140])
        t.setStyle(TableStyle([
            ("BACKGROUND",    (0, 0), (-1, 0),  C_SOFT),
            ("LINEBELOW",     (0, 0), (-1, 0),  2, C_ORANGE),
            ("GRID",          (0, 0), (-1, -1), 0.5, C_MID),
            ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
            ("TOPPADDING",    (0, 0), (-1, -1), 10),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ]))
        return t

    # ── Main Render ───────────────────────────────────────────────────────────

    def render_pdf(self, report_data: Dict[str, Any], user_id: int) -> str:
        sig = report_data.get("signature", "v2")[:6]
        timestamp = int(time.time())
        filename = f"report_{user_id}_{sig}_{timestamp}.pdf"
        save_path = os.path.join(self.output_dir, filename)

        doc = SimpleDocTemplate(
            save_path, pagesize=A4,
            rightMargin=20*mm, leftMargin=20*mm,
            topMargin=20*mm, bottomMargin=20*mm
        )
        elements = self._build_elements(report_data, user_id)

        try:
            doc.build(elements)
            return f"/static/reports/{filename}"
        except Exception as e:
            logger.error(f"[PDF] Build failed: {e}")
            return "PDF_ERROR"

    def _build_elements(self, data: Dict[str, Any], user_id: int) -> list:
        traits      = data.get("trait_scores", {})
        conflicts   = data.get("conflicts", [])
        narrative   = data.get("narrative", "")
        roadmap     = data.get("roadmap", [])
        features    = data.get("features", {})
        sig         = data.get("signature", "N/A")
        archetype   = data.get("personality", {}).get("archetype", {}).get("name", "Individual")
        
        import datetime
        today = datetime.date.today().strftime("%B %d, %Y")

        E = []

        # ── PAGE 1: PREMIUM COVER ──────────────────────────────────────────────
        E.append(Spacer(1, 40*mm))
        
        cover_box = Table([[
            Paragraph("FORENSIC BEHAVIORAL DIAGNOSIS", self.styles["Cover_Meta"]),
            Paragraph("NEURO-SIGNATURE BLUEPRINT", self.styles["Cover_Title"]),
            Spacer(1, 5*mm),
            self._hr(color=C_WHITE, thickness=2),
            Paragraph(f"CERTIFIED ARCHETYPE: {archetype.upper()}", self.styles["Cover_Sub"]),
        ]], colWidths=[W - 40*mm])
        
        cover_box.setStyle(TableStyle([
            ("BACKGROUND",    (0, 0), (-1, -1), C_NAVY),
            ("TOPPADDING",    (0, 0), (-1, -1), 40),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 40),
            ("LEFTPADDING",   (0, 0), (-1, -1), 30),
            ("RIGHTPADDING",  (0, 0), (-1, -1), 30),
            ("BOX",           (0, 0), (-1, -1), 4, C_ORANGE),
        ]))
        E.append(cover_box)
        
        E.append(Spacer(1, 20*mm))
        E.append(Paragraph(f"DIAGNOSTIC ID: {sig} &nbsp;&nbsp;|&nbsp;&nbsp; GENERATED: {today}", self.styles["Cover_Meta"]))
        E.append(Spacer(1, 10*mm))
        E.append(Paragraph("CONFIDENTIAL FORENSIC DATA &bull; UNAUTHORIZED SHARING PROHIBITED", self.styles["Cover_Meta"]))
        
        E.append(PageBreak())

        # ── PAGE 2: EXECUTIVE SUMMARY ──────────────────────────────────────────
        E.append(Paragraph("01. Diagnostic Introduction", self.styles["Section_Head"]))
        E.append(self._hr())
        
        E.append(Paragraph(
            "This report is a clinical diagnostic of your subconscious neurological patterns. Unlike subjective "
            "assessments, Graphotherapy markers are derived from motor-cortex impulses. Every stroke in your "
            "handwriting is a physiological record of how your brain processes stress, emotion, and ambition. "
            "This blueprint bypasses social masking to expose the underlying operational bottlenecks currently "
            "throttling your performance.",
            self.styles["Body"]
        ))
        
        E.append(Spacer(1, 10*mm))
        E.append(Paragraph("NEUROLOGICAL MARKERS DETECTED", self.styles["Sub_Head"]))
        
        feat_data = []
        for feat, val in features.items():
            feat_data.append([
                Paragraph(f"<b>{feat.replace('_', ' ').upper()}</b>", self.styles["Body"]),
                Paragraph(val.title(), self.styles["Body"])
            ])
        
        ft = Table(feat_data, colWidths=[200, 200])
        ft.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), C_SOFT),
            ("GRID", (0, 0), (-1, -1), 1, C_WHITE),
            ("LEFTPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ]))
        E.append(ft)

        E.append(PageBreak())

        # ── PAGE 3: TRAIT ARCHITECTURE ─────────────────────────────────────────
        E.append(Paragraph("02. Trait Architecture", self.styles["Section_Head"]))
        E.append(self._hr())
        E.append(Paragraph(
            "The following scores quantify the intensity of specific psychological drivers detected in your writing sample.",
            self.styles["Body"]
        ))
        E.append(Spacer(1, 5*mm))
        E.append(self._score_table_premium(traits))
        
        E.append(PageBreak())

        # ── PAGE 4: DEEP NARRATIVE ─────────────────────────────────────────────
        E.append(Paragraph("03. Forensic Narrative", self.styles["Section_Head"]))
        E.append(self._hr())
        
        for para in narrative.split("\n"):
            para = para.strip()
            if not para: continue
            if ":" in para and len(para.split()) < 5:
                E.append(Paragraph(para.upper(), self.styles["Sub_Head"]))
            else:
                E.append(Paragraph(para, self.styles["Body"]))
        
        E.append(PageBreak())

        # ── PAGE 5: CONFLICTS & SHADOW ─────────────────────────────────────────
        if conflicts:
            E.append(Paragraph("04. Conflict Analysis", self.styles["Section_Head"]))
            E.append(self._hr())
            E.append(Paragraph(
                "Internal friction occurs when two neurological markers contradict each other. This creates a leakage of "
                "mental energy and results in inconsistent behavior patterns.",
                self.styles["Body"]
            ))
            
            for c in conflicts:
                title = c.get("title", "Friction Point").upper()
                insight = c.get("deep_insight", c.get("insight", ""))
                relatable = c.get("relatable_scenario", "")
                gap = c.get("resolution_gap", "")
                shadow = c.get("shadow_hint", "")
                
                E.append(Spacer(1, 5*mm))
                E.append(Paragraph(f"PHASE: {title}", self.styles["Sub_Head"]))
                E.append(Paragraph(insight, self.styles["Insight_Box"]))
                if relatable:
                    E.append(Paragraph(f"<b>THE IDENTITY MIRROR:</b> {relatable}", self.styles["Body"]))
                if gap:
                    E.append(Paragraph(f"<b>THE RESOLUTION GAP:</b> {gap}", self.styles["Shadow_Side"]))
                elif shadow:
                    E.append(Paragraph(f"<b>SHADOW WARNING:</b> {shadow}", self.styles["Shadow_Side"]))
            
            E.append(PageBreak())

        # ── PAGE 6: THE ROADMAP & NEXT STEPS ──────────────────────────────────
        E.append(Paragraph("05. Strategic Roadmap", self.styles["Section_Head"]))
        E.append(self._hr())
        
        for item in roadmap:
            E.append(Paragraph(item.get("area", "").upper(), self.styles["Roadmap_Item"]))
            E.append(Paragraph(f"<b>Action:</b> {item.get('action', '')}", self.styles["Body"]))
            E.append(Paragraph(f"<b>Justification:</b> {item.get('why', '')}", self.styles["Roadmap_Text"]))
            E.append(Spacer(1, 4*mm))

        E.append(Spacer(1, 10*mm))
        
        # ── FINAL CTA: THE TRANSFORMATION PROTOCOL ────────────────────────────
        cta_box = Table([[
            Paragraph("PHASE 06: THE TRANSFORMATION PROTOCOL", self.styles["Sub_Head"]),
            Paragraph(
                "The analysis above is your diagnostic X-Ray. You now see the internal structures that have been "
                "throttling your performance. However, awareness is not correction.",
                self.styles["Body"]
            ),
            Paragraph(
                "Your Full Transformation Report contains the 21-day Neural Rewiring Protocol—the exact "
                "graphotherapy strokes required to physically restructure your brain's response to stress, "
                "fear, and ambition. Your current pattern is a choice your subconscious makes every time you "
                "pick up a pen. It's time to choose differently.",
                self.styles["Body"]
            ),
        ]], colWidths=[W - 40*mm])
        
        cta_box.setStyle(TableStyle([
            ("BACKGROUND",    (0, 0), (-1, -1), C_WARN),
            ("BOX",           (0, 0), (-1, -1), 1, C_ORANGE),
            ("TOPPADDING",    (0, 0), (-1, -1), 20),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 20),
            ("LEFTPADDING",   (0, 0), (-1, -1), 20),
            ("RIGHTPADDING",  (0, 0), (-1, -1), 20),
        ]))
        E.append(cta_box)

        return E


# Singleton
pdf_renderer = PDFRenderer()
