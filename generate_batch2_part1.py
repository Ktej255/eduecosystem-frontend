import json
import os
import re

def clean_text(text):
    text = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', text)
    artifacts = ["Copyright", "©", "Back to Top", "Disclaimer", "All rights reserved", "Sarit Classes", "Designed for educational exploration", "Government strives to have a workforce"]
    for a in artifacts:
        text = text.replace(a, "").strip()
    return text

def split_to_chips(text):
    text = clean_text(text)
    # Split by semicolon, or comma if it's a list
    parts = re.split(r'[;,\n]', text)
    chips = []
    for p in parts:
        subparts = p.split(':')
        for sp in subparts:
            s = sp.strip()
            if len(s) > 2:
                chips.append(s)
    return chips

def generate_optional_page(slug, data):
    paper_tag = "UPSC Optional Paper I & II"
    subject_title = data['title']
    
    breadcrumb_html = f'<div class="breadcrumb"><a href="index.html">Home</a> <span>&gt;</span> <a href="optional-subjects.html">Optional Subjects</a> <span>&gt;</span> {subject_title}</div>'
    
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

    strategy_list = data.get('strategy_list', [
        "Focus on core concepts and their practical applications.",
        "Solve Previous Year Questions (PYQs) from the last 10 years.",
        "Link theoretical knowledge with contemporary examples/case studies.",
        "Regular revision through short, bulleted notes.",
        "Practice diagram-making for technical sections.",
        "Join mock test series for time management and answer grooming."
    ])
    strategy_html = "".join([f'<li>{s}</li>' for f, s in enumerate(strategy_list[:6])])
    
    books = data.get('books', ["Standard NCERTs & Textbooks", "Sarit Classes Notes", "UPSC Official Syllabus"])
    books_html = "".join([f'<li>{b}</li>' for b in books[:4]])

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
        .optional-layout {{ display: grid; grid-template-columns: 1fr 340px; gap: 40px; max-width: 1200px; margin: 0 auto; padding: 40px 5%; }}
        .paper-section {{ margin-bottom: 48px; }}
        .paper-title {{ font-family: var(--font-head); font-size: 1.5rem; color: var(--gold); margin-bottom: 24px; border-left: 4px solid var(--gold); padding-left: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; }}
        .sidebar-panel {{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; position: sticky; top: 100px; }}
        .sidebar-panel h4 {{ font-family: var(--font-head); font-size: 1rem; color: var(--gold); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }}
        .sidebar-panel ul {{ list-style: none; margin-bottom: 24px; }}
        .sidebar-panel li {{ font-size: 0.85rem; color: var(--text); padding: 10px 0; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; gap: 10px; line-height: 1.5; }}
        .sidebar-panel li:last-child {{ border-bottom: none; }}
        .sidebar-panel li::before {{ content: "\\f058"; font-family: "Font Awesome 6 Free"; font-weight: 900; color: var(--gold); font-size: 0.8rem; margin-top: 3px; }}
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
                <h2 class="paper-title">Paper I: Core Concepts</h2>
                <div class="accordion-container">
                    {p1_html}
                </div>
            </div>

            <div class="paper-section">
                <h2 class="paper-title">Paper II: India Specific Application</h2>
                <div class="accordion-container">
                    {p2_html}
                </div>
            </div>

            <div class="cta-bottom">
                <h3 class="mb-2" style="font-family: var(--font-head);">Master {subject_title} Today</h3>
                <p class="mb-4">Unlock expert strategy, PYQ analysis, and 19k+ drills for your UPSC journey.</p>
                <a href="https://eduecosystem-frontend-yqncvzxdma-uc.a.run.app" class="btn-blue">Join Sarit Classes Platform →</a>
            </div>
        </div>

        <aside class="optional-sidebar">
            <div class="sidebar-panel">
                <h4><i class="fas fa-chess-knight"></i> Winning Strategy</h4>
                <ul>
                    {strategy_html}
                </ul>
                
                <h4><i class="fas fa-book-bookmark"></i> Recommended Books</h4>
                <ul>
                    {books_html}
                </ul>
                
                <a href="https://eduecosystem-frontend-yqncvzxdma-uc.a.run.app" class="btn-primary w-full" style="justify-content: center;">Practice {subject_title} MCQs</a>
            </div>
        </aside>
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
        "optional-agriculture": {
            "title": "Agriculture",
            "paper1": [
                {"title": "Ecology & Natural Resources", "topics": ["Ecology & Relevance to Man", "Natural Resources Management", "Physical & Social Environment", "Climate Change Initiatives", "Remote Sensing & GIS"]},
                {"title": "Cropping Patterns & Farming Systems", "topics": ["Agro-Climatic Zones", "Multiple Cropping", "Organic Farming", "Precision Farming"]}
            ],
            "paper2": [
                {"title": "Cell Biology & Genetics", "topics": ["Cell Structure & Function", "Laws of Heredity", "Mutation", "Polyploidy"]},
                {"title": "Plant Breeding & Biotechnology", "topics": ["History of Plant Breeding", "Molecular Markers", "Genetic Engineering", "Bt Crops"]}
            ]
        },
        "optional-animal-husbandry": {
            "title": "Animal Husbandry & Veterinary Science",
            "paper1": [
                {"title": "Animal Nutrition", "topics": ["Food Energy & Valuation", "Protein Quality", "Minerals and Vitamins", "Feed Additives"]},
                {"title": "Animal Physiology", "topics": ["Blood Constituents", "Cardiac Cycle", "Respiratory System", "Excretion"]}
            ],
            "paper2": [
                {"title": "Infectious Diseases", "topics": ["Foot and Mouth Disease", "Brucellosis", "Ranikhet (Newcastle)", "Avian Influenza"]},
                {"title": "Veterinary Public Health", "topics": ["Zoonoses", "Epidemiology", "Veterinary Jurisprudence"]}
            ]
        },
        "optional-botany": {
            "title": "Botany",
            "paper1": [
                {"title": "Microbiology & Plant Pathology", "topics": ["Biofertilizers", "Biopesticides", "Fungal Pathogens", "Viral Diseases"]},
                {"title": "Cryptogams & Phanerogams", "topics": ["Algae & Fungi", "Bryophytes", "Gymnosperms", "Angiosperm Taxonomy"]}
            ],
            "paper2": [
                {"title": "Cell Biology & Genetics", "topics": ["Chromosomes", "DNA Replication", "RNA World", "Gene Regulation"]},
                {"title": "Evolution", "topics": ["Neo-Darwinism", "Speciation", "Hardy-Weinberg Equilibrium"]}
            ]
        },
        "optional-chemistry": {
            "title": "Chemistry",
            "paper1": [
                {"title": "Atomic Structure & Bonding", "topics": ["Schrodinger equation", "Quantum numbers", "Molecular Orbital Theory", "Valence Bond Theory"]},
                {"title": "Thermodynamics & Kinetics", "topics": ["First & Second Laws", "Phase equilibria", "Galvanic cells", "Reaction rates"]}
            ],
            "paper2": [
                {"title": "Organic Chemistry", "topics": ["Aromaticity", "Reaction Mechanisms", "Reactive Intermediates", "Substitution & Elimination"]},
                {"title": "Spectroscopy", "topics": ["NMR Spectroscopy", "Mass Spectrometry", "Woodward-Fieser rules"]}
            ]
        },
        "optional-civil-engineering": {
            "title": "Civil Engineering",
            "paper1": [
                {"title": "Structural Mechanics", "topics": ["Engineering Mechanics", "Strength of Materials", "Bending moment", "Shear force"]},
                {"title": "Design of Structures", "topics": ["Structural Steel Design", "Reinforced Concrete", "Prestressed Concrete"]}
            ],
            "paper2": [
                {"title": "Hydrology & Water Resources", "topics": ["Hydrological cycle", "Canal irrigation", "Water logging", "Sewage Treatment"]},
                {"title": "Construction & Surveying", "topics": ["Construction planning", "CPM/PERT", "Photogrammetry", "Remote Sensing"]}
            ]
        }
    }
    
    output_dir = "d:/Development/EduEcosystem/Sarit Classes website code"
    for slug, sdata in batch_data.items():
        content = generate_optional_page(slug, sdata)
        with open(os.path.join(output_dir, f"{slug}.html"), 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Generated {slug}.html")

if __name__ == "__main__":
    main()
