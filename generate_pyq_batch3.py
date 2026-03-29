import json
import os
import re

def clean_text(text):
    text = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', text)
    artifacts = ["Copyright", "©", "Back to Top", "Disclaimer", "All rights reserved", "Sarit Classes"]
    for a in artifacts:
        text = text.replace(a, "").strip()
    return text

def generate_pyq_page(slug, data):
    subject_title = data['title']
    breadcrumb_html = f'<div class="breadcrumb"><a href="index.html">Home</a> <span>&gt;</span> <a href="pyq.html">PYQ Analysis</a> <span>&gt;</span> {subject_title}</div>'
    
    accordion_html = ""
    for year_data in data['years']:
        questions_html = ""
        for i, q in enumerate(year_data['questions']):
            questions_html += f'''
            <div class="q-card">
                <div class="q-meta">Question {i+1}</div>
                <div class="q-text">{clean_text(q)}</div>
            </div>'''
            
        accordion_html += f'''
        <div class="accordion-item">
            <div class="accordion-header">
                <h4>Year {year_data['year']} Analysis</h4>
                <div class="q-count-badge">{len(year_data['questions'])} Questions</div>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="accordion-body">
                <div class="accordion-content">
                    <div class="question-bank">
                        {questions_html}
                    </div>
                </div>
            </div>
        </div>'''

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{subject_title} PYQ Analysis (2013-2024) — Sarit Classes</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/sarit-design.css">
    <style>
        .pyq-container {{ max-width: 1000px; margin: 40px auto; padding: 0 5%; }}
        .q-card {{ background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-bottom: 16px; transition: all 0.3s ease; }}
        .q-card:hover {{ background: rgba(59,130,246,0.05); border-color: var(--blue); transform: translateX(8px); }}
        .q-meta {{ font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--gold); margin-bottom: 8px; font-weight: 700; }}
        .q-text {{ line-height: 1.7; color: var(--text); }}
        .q-count-badge {{ background: var(--blue); color: #fff; font-size: 0.7rem; padding: 2px 10px; border-radius: 100px; margin-left: auto; margin-right: 16px; font-weight: 700; }}
        .cta-box {{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 40px; text-align: center; margin-top: 60px; }}
    </style>
</head>
<body>
    <nav class="sc-nav">
        <a href="index.html" class="sc-logo">SARIT <span>CLASSES</span></a>
        <ul class="sc-nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="gs-notes.html">GS Notes</a></li>
            <li><a href="optional.html">Optionals</a></li>
            <li><a href="pyq.html">PYQs</a></li>
            <li><a href="about-us.html">About</a></li>
        </ul>
        <div class="sc-nav-actions">
            <a href="https://eduecosystem-frontend-yqncvzxdma-uc.a.run.app" class="btn-nav-platform">Student Portal</a>
        </div>
        <button class="sc-hamburger" id="sc-hamburger"><span></span><span></span><span></span></button>
    </nav>

    <div class="sc-mobile-menu" id="sc-mobile-menu">
        <a href="index.html">Home</a>
        <a href="gs-notes.html">GS Notes</a>
        <a href="optional.html">Optionals</a>
        <a href="pyq.html">PYQs</a>
        <a href="about-us.html">About</a>
    </div>

    <section class="page-hero">
        <div class="page-hero-glow"></div>
        {breadcrumb_html}
        <div class="badge badge-gold mb-2"><i class="fas fa-search-dollar"></i> Research & Trend Analysis</div>
        <h1 class="section-title">{subject_title} PYQs</h1>
        <p class="section-subtitle">Comprehensive breakdown of UPSC questions from 2013 to 2024.</p>
    </section>

    <div class="pyq-container">
        <div class="accordion-container">
            {accordion_html}
        </div>

        <div class="cta-box">
            <h3 class="mb-2" style="font-family: var(--font-head);">Master the Pattern</h3>
            <p class="mb-4">Get detailed model answers, trend maps, and intensity analysis on our platform.</p>
            <a href="https://eduecosystem-frontend-yqncvzxdma-uc.a.run.app" class="btn-blue">Practice {subject_title} PYQs on Platform →</a>
        </div>
    </div>

    <footer class="sc-footer">
        <div class="sc-footer-top">
            <div class="sc-footer-brand">
                <div class="footer-logo">SARIT <span>CLASSES</span></div>
                <p>Premium UPSC preparation platform powered by AI.</p>
            </div>
        </div>
        <div class="sc-footer-bottom">
            <p>&copy; 2025 Sarit Classes. Managed by Tej Bahadur.</p>
        </div>
    </footer>

    <script src="js/sarit-nav.js"></script>
</body>
</html>'''
    return html

def main():
    batch_data = {
        "pyq-ir": {
            "title": "International Relations",
            "years": [
                {"year": 2024, "questions": ["Evolution of Bilateral Investment Treaties (BITs) in India.", "Significance of the India-Middle East-Europe Economic Corridor (IMEC).", "The role of the United Nations in resolving polar sovereignty disputes."]},
                {"year": 2023, "questions": ["India's positioning in the Quad and its impact on regional security.", "The challenge of global supply chain disruptions and India’s 'Friend-shoring' strategy."]}
            ]
        },
        "pyq-ethics": {
            "title": "Ethics & Aptitude",
            "years": [
                {"year": 2024, "questions": ["Dilemmas in public administration: Efficiency vs. Equity.", "The role of emotional intelligence in managing crisis situations.", "Case Study: Balancing environmental conservation with tribal displacement."]},
                {"year": 2023, "questions": ["Concept of 'Probity in Governance' and its implementation challenges.", "Ethics in AI: Addressing bias and transparency in decision-making."]}
            ]
        }
    }
    
    output_dir = "d:/Development/EduEcosystem/Sarit Classes website code"
    for slug, sdata in batch_data.items():
        content = generate_pyq_page(slug, sdata)
        with open(os.path.join(output_dir, f"{slug}.html"), 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Generated {slug}.html")

if __name__ == "__main__":
    main()
