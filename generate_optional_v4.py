import json
import os
import re

def clean_text(text):
    # Remove markdown links [text](url) -> text
    text = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', text)
    # Remove copyright/artifacts
    artifacts = ["Copyright", "©", "Back to Top", "Disclaimer", "All rights reserved", "Sarit Classes"]
    for a in artifacts:
        text = text.replace(a, "")
    return text.strip()

def split_to_chips(text):
    text = clean_text(text)
    # Split by semicolon, or comma if it's a list
    # Use regex to avoid splitting middle of words
    parts = re.split(r'[;,\n]', text)
    chips = [p.strip() for p in parts if len(p.strip()) > 2]
    return chips

def generate_optional_page(slug, data):
    paper_tag = "UPSC Optional Paper I & II"
    subject_title = data['title']
    
    # Breadcrumb
    breadcrumb_html = f'<div class="breadcrumb"><a href="index.html">Home</a> <span>&gt;</span> <a href="optional-subjects.html">Optional Subjects</a> <span>&gt;</span> {subject_title}</div>'
    
    # Paper 1 Accordion Items
    p1_html = ""
    for mod in data['paper1']:
        chips = []
        for t in mod['topics']:
            chips.extend(split_to_chips(t))
        topics_html = "".join([f'<span class="topic-chip">{c}</span>' for c in chips])
        p1_html += f'''
        <div class="accordion-item">
            <div class="accordion-header">
                <h4>{mod['title']}</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="accordion-body">
                <div class="accordion-content">
                    <div class="topic-chips">
                        {topics_html}
                    </div>
                </div>
            </div>
        </div>'''
        
    # Paper 2 Accordion Items
    p2_html = ""
    for mod in data['paper2']:
        chips = []
        for t in mod['topics']:
            chips.extend(split_to_chips(t))
        topics_html = "".join([f'<span class="topic-chip">{c}</span>' for c in chips])
        p2_html += f'''
        <div class="accordion-item">
            <div class="accordion-header">
                <h4>{mod['title']}</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="accordion-body">
                <div class="accordion-content">
                    <div class="topic-chips">
                        {topics_html}
                    </div>
                </div>
            </div>
        </div>'''

    strategy_list = data.get('strategy_list', ["Regular practice of previous year questions and mapping is essential."])
    strategy_html = "".join([f'<li>{s}</li>' for s in strategy_list])
    
    books = data.get('books', ["UPSC Official Syllabus", "Standard Textbooks"])
    books_html = "".join([f'<li>{b}</li>' for b in books])

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{subject_title} Optional Syllabus — Sarit Classes</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/sarit-design.css">
    <style>
        .optional-layout {{ display: grid; grid-template-columns: 1fr 320px; gap: 40px; max-width: 1200px; margin: 0 auto; padding: 40px 5%; }}
        .paper-section {{ margin-bottom: 48px; }}
        .paper-title {{ font-family: var(--font-head); font-size: 1.5rem; color: var(--gold); margin-bottom: 24px; border-left: 4px solid var(--gold); padding-left: 16px; }}
        .sidebar-panel {{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; position: sticky; top: 100px; }}
        .sidebar-panel h4 {{ font-family: var(--font-head); font-size: 1rem; color: var(--gold); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }}
        .sidebar-panel ul {{ list-style: none; margin-bottom: 24px; }}
        .sidebar-panel li {{ font-size: 0.85rem; color: var(--text); padding: 8px 0; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; gap: 10px; line-height: 1.4; }}
        .sidebar-panel li::before {{ content: "\\f058"; font-family: "Font Awesome 6 Free"; font-weight: 900; color: var(--gold); font-size: 0.8rem; margin-top: 2px; }}
        .cta-bottom {{ margin-top: 40px; padding: 32px; background: rgba(59,130,246,0.05); border: 1px solid var(--border); border-radius: var(--radius-lg); text-align: center; }}
        @media (max-width: 1024px) {{ .optional-layout {{ grid-template-columns: 1fr; }} .sidebar-panel {{ position: static; }} }}
    </style>
</head>
<body>
    <nav class="sc-nav">
        <a href="index.html" class="sc-logo">SARIT <span>CLASSES</span></a>
        <ul class="sc-nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="gs-notes.html">GS Notes</a></li>
            <li><a href="optional-subjects.html">Optionals</a></li>
            <li><a href="pyq-analysis.html">PYQs</a></li>
            <li><a href="about-us.html">About</a></li>
        </ul>
        <div class="sc-nav-actions">
            <a href="https://eduecosystem-frontend-yqncvzxdma-uc.a.run.app" class="btn-nav-platform">Student Portal</a>
        </div>
        <button class="sc-hamburger" id="sc-hamburger"><span></span><span></span><span></span></button>
    </nav>

    <section class="page-hero">
        <div class="page-hero-glow"></div>
        {breadcrumb_html}
        <div class="badge badge-gold mb-2"><i class="fas fa-graduation-cap"></i> UPSC Optional Subject</div>
        <h1 class="section-title">{subject_title} Optional</h1>
        <div class="badge badge-blue mt-2">{paper_tag}</div>
    </section>

    <div class="optional-layout">
        <div class="optional-main">
            <div class="paper-section">
                <h2 class="paper-title">Paper I: Theoretical Foundations</h2>
                <div class="accordion-container">
                    {p1_html}
                </div>
            </div>

            <div class="paper-section">
                <h2 class="paper-title">Paper II: Indian Context & Application</h2>
                <div class="accordion-container">
                    {p2_html}
                </div>
            </div>

            <div class="cta-bottom">
                <h3 class="mb-2" style="font-family: var(--font-head);">Start Your {subject_title} Journey</h3>
                <p class="mb-4">Access 19,000+ MCQs, AI-drills, and toppers' notes on India's most advanced platform.</p>
                <a href="https://eduecosystem-frontend-yqncvzxdma-uc.a.run.app" class="btn-blue">Join EduEcosystem Platform →</a>
            </div>
        </div>

        <aside class="optional-sidebar">
            <div class="sidebar-panel">
                <h4><i class="fas fa-rocket"></i> Strategy Guide</h4>
                <ul>
                    {strategy_html}
                </ul>
                
                <h4><i class="fas fa-book"></i> Reading List</h4>
                <ul>
                    {books_html}
                </ul>
                
                <a href="https://wa.me/91XXXXXXXXXX" class="btn-primary w-full" style="justify-content: center; background: #25D366; border-color: #25D366;"><i class="fab fa-whatsapp"></i> Chat with Mentor</a>
            </div>
        </aside>
    </div>

    <footer class="sc-footer">
        <div class="sc-footer-top">
            <div class="sc-footer-brand">
                <div class="footer-logo">SARIT <span>CLASSES</span></div>
                <p>Premium UPSC preparation platform powered by AI and data-driven insights.</p>
            </div>
            <div class="footer-col">
                <h5>Resources</h5>
                <ul>
                    <li><a href="gs-notes.html">GS Notes</a></li>
                    <li><a href="optional-subjects.html">Optional Subjects</a></li>
                    <li><a href="pyq-analysis.html">PYQ Analysis</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h5>Legal</h5>
                <ul>
                    <li><a href="terms.html">Terms</a></li>
                    <li><a href="privacy.html">Privacy</a></li>
                </ul>
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
    # Load History Data (Parsed from markdown manually for speed in script)
    history_p1 = [
        {"title": "1. Sources", "topics": ["Archaeological sources: Exploration, excavation, epigraphy, numismatics, monuments.", "Literary sources: Indigenous: Primary and secondary; poetry, scientific literature, religious literature.", "Foreign account: Greek, Chinese and Arab writers."]},
        {"title": "2. Pre-history and Proto-history", "topics": ["Geographical factors", "Hunting and gathering (paleolithic and mesolithic)", "Beginning of agriculture (neolithic and chalcolithic)"]},
        {"title": "3. Indus Valley Civilization", "topics": ["Origin, date, extent, characteristics, decline, survival and significance, art and architecture"]},
        {"title": "4. Megalithic Cultures", "topics": ["Distribution of pastoral and farming cultures outside the Indus", "Development of community life", "Settlements", "Agriculture", "Crafts", "Pottery", "Iron industry"]},
        {"title": "5. Aryans and Vedic Period", "topics": ["Expansions of Aryans in India", "Vedic literature", "Rig Vedic vs Later Vedic", "Political, social and economical life", "Monarchy and Varna system"]}
    ]
    # (Simplified for script, I will populate the full 51 in the actual file)
    
    # I'll create a full data structure
    full_data = {
        "optional-history": {
            "title": "History",
            "paper1": history_p1, # Full 24 will be added
            "paper2": [], # Full 27 will be added
            "strategy_list": [
                "Analyze Syllabus: Familiarize with themes and periods for both papers.",
                "Notes Creation: Create organized notes for quick revision.",
                "Map-Based Learning: Track geographical changes and trade routes.",
                "Historiography: Understand diverse scholarly interpretations.",
                "Practice PYQs: Solve papers (2013-2024) to master answer-writing.",
                "Mock Tests: Take full-length tests to simulate exam conditions."
            ]
        }
    }
    
    # Paper 2 Section 1 for History
    full_data["optional-history"]["paper2"].append({
        "title": "1. European Penetration into India",
        "topics": ["Early Settlements; Portuguese and Dutch; English and French Companies; Carnatic Wars; Battle of Plassey; Significance of Plassey."]
    })

    # Sociology
    full_data["optional-sociology"] = {
        "title": "Sociology",
        "paper1": [
            {"title": "1. Sociology: The Discipline", "topics": ["Modernity and social changes in Europe", "Scope of the subject", "Comparison with other social sciences", "Sociology and common sense"]},
            {"title": "2. Sociology as a Science", "topics": ["Scientific method and critique", "Positivism and its critique", "Fact value and objectivity", "Non-positivist methodologies"]}
        ],
        "paper2": [
            {"title": "A. Introducing Indian Society", "topics": ["Indology (GS Ghurye)", "Structural functionalism (MN Srinivas)", "Marxist sociology (AR Desai)"]}
        ],
        "strategy_list": [
            "Master Thinkers: Clear understanding of Marx, Weber, Durkheim is crucial.",
            "Case Studies: Link theoretical concepts with Indian social issues.",
            "Diagrams: Use flowcharts to explain social systems."
        ]
    }

    output_dir = "d:/Development/EduEcosystem/Sarit Classes website code"
    for slug, sdata in full_data.items():
        content = generate_optional_page(slug, sdata)
        with open(os.path.join(output_dir, f"{slug}.html"), 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Generated {slug}.html")

if __name__ == "__main__":
    main()
