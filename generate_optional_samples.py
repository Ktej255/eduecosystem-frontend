import json
import os

def generate_optional_page(slug, data):
    # Determine GS paper tag (e.g., GS Paper I & II equivalent)
    # For optionals, it's just Optional Paper I & II
    paper_tag = "UPSC Optional Paper I & II"
    subject_title = data['title']
    
    # Breadcrumb
    breadcrumb_html = f'<div class="breadcrumb"><a href="index.html">Home</a> <span>&gt;</span> <a href="optional-subjects.html">Optional Subjects</a> <span>&gt;</span> {subject_title}</div>'
    
    # Paper 1 Accordion Items
    p1_html = ""
    for mod in data['paper1']:
        topics_html = "".join([f'<span class="topic-chip">{t}</span>' for t in mod['topics']])
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
        topics_html = "".join([f'<span class="topic-chip">{t}</span>' for t in mod['topics']])
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

    strategy = data.get('strategy', "Regular practice of previous year questions and mapping is essential for this subject.")
    books = data.get('books', ["UPSC Official Syllabus", "Standard Textbooks", "Sarit Classes Notes"])
    books_html = "".join([f'<li>{b}</li>' for b in books]) if books else "<li>UPSC Official Syllabus</li>"

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
        .sidebar-panel p {{ font-size: 0.88rem; color: var(--muted); line-height: 1.6; margin-bottom: 24px; }}
        .sidebar-panel ul {{ list-style: none; }}
        .sidebar-panel li {{ font-size: 0.85rem; color: var(--text); padding: 8px 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 8px; }}
        .sidebar-panel li::before {{ content: "\\f02d"; font-family: "Font Awesome 6 Free"; font-weight: 900; color: var(--gold); font-size: 0.75rem; }}
        .cta-bottom {{ margin-top: 40px; padding: 24px; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); border-radius: var(--radius-md); text-align: center; }}
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
            <a href="https://eduecosystem.com" class="btn-nav-platform">Student Portal</a>
        </div>
        <button class="sc-hamburger" id="sc-hamburger"><span></span><span></span><span></span></button>
    </nav>

    <div class="sc-mobile-menu" id="sc-mobile-menu">
        <a href="index.html">Home</a>
        <a href="gs-notes.html">GS Notes</a>
        <a href="optional-subjects.html">Optionals</a>
        <a href="pyq-analysis.html">PYQs</a>
        <a href="about-us.html">About</a>
    </div>

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
                <h2 class="paper-title">Paper I: Administrative / Theoretical Foundations</h2>
                <div class="accordion-container">
                    {p1_html}
                </div>
            </div>

            <div class="paper-section">
                <h2 class="paper-title">Paper II: Applied / Indian Context</h2>
                <div class="accordion-container">
                    {p2_html}
                </div>
            </div>

            <div class="cta-bottom">
                <p class="mb-3">Master {subject_title} with AI-powered drills and 19,000+ MCQs.</p>
                <a href="https://eduecosystem-frontend-yqncvzxdma-uc.a.run.app" class="btn-blue">Explore EduEcosystem Platform →</a>
            </div>
        </div>

        <aside class="optional-sidebar">
            <div class="sidebar-panel">
                <h4><i class="fas fa-lightbulb"></i> Preparation Strategy</h4>
                <p>{strategy}</p>
                
                <h4><i class="fas fa-book"></i> Recommended Books</h4>
                <ul>
                    {books_html}
                </ul>
                
                <a href="contact.html" class="btn-primary w-full mt-4" style="justify-content: center;">Ask a Mentor</a>
            </div>
        </aside>
    </div>

    <footer class="sc-footer">
        <div class="sc-footer-top">
            <div class="sc-footer-brand">
                <div class="footer-logo">SARIT <span>CLASSES</span></div>
                <p>India's most advanced UPSC preparation platform. AI-powered, result-oriented.</p>
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
                <h5>Platform</h5>
                <ul>
                    <li><a href="https://eduecosystem.com">Student Login</a></li>
                    <li><a href="ebook-store.html">E-Book Store</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h5>Legal</h5>
                <ul>
                    <li><a href="terms.html">Terms of Service</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="refund.html">Refund Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="sc-footer-bottom">
            <p>&copy; 2025 Sarit Classes. All rights reserved. Managed by Tej Bahadur.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-telegram"></i></a>
            </div>
        </div>
    </footer>

    <script src="js/sarit-nav.js"></script>
</body>
</html>'''
    return html

def main():
    with open('optional_data_v2.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Manually add PubAd and Anthro data from subagent report
    # (Simplified for the sample)
    data['optional-pubad']['paper1'] = [{"title": t, "topics": []} for t in [
        "Introduction", "Administrative Thought", "Administrative Behaviour", "Organisations", 
        "Accountability and Control", "Administrative Law", "Comparative Public Administration", 
        "Development Dynamics", "Personnel Administration", "Public Policy", 
        "Techniques of Administrative Improvement", "Financial Administration"
    ]]
    data['optional-pubad']['paper2'] = [{"title": t, "topics": []} for t in [
        "Evolution of Indian Administration", "Philosophical and Constitutional Framework", 
        "Public Sector Undertakings", "Union Government", "Plans and Priorities", 
        "State Government", "District Administration", "Civil Services", 
        "Financial Management", "Administrative Reforms", "Rural Development", 
        "Urban Local Government", "Law and Order", "Significant issues"
    ]]
    
    data['optional-anthropology']['paper1'] = [{"title": f"Module {i}", "topics": []} for i in range(1, 13)]
    data['optional-anthropology']['paper2'] = [{"title": f"Module {i}", "topics": []} for i in range(1, 10)]

    output_dir = "d:/Development/EduEcosystem/Sarit Classes website code"
    for slug, sdata in data.items():
        filename = f"{slug}.html"
        content = generate_optional_page(slug, sdata)
        with open(os.path.join(output_dir, filename), 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Generated {filename}")

if __name__ == "__main__":
    main()
