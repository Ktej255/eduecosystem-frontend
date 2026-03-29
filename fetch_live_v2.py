import urllib.request
from bs4 import BeautifulSoup
import re
import os

pages = {
    "science-tech": {
        "url": "https://saritclasses.com/notes-science-tech.html",
        "subject_name": "Science & Technology",
        "subject_icon": "fas fa-microscope",
        "subject_desc": "Complete UPSC Science & Technology syllabus — Space, Defence, Biotech, ICT, and Emerging Technologies.",
        "gs_paper": "GS Paper 3",
        "topic_count": "900"
    },
    "indian-polity": {
        "url": "https://saritclasses.com/notes-indian-polity.html",
        "subject_name": "Indian Polity",
        "subject_icon": "fas fa-landmark",
        "subject_desc": "Complete UPSC Indian Polity syllabus — Constitution, Parliament, Judiciary, Federalism, and Governance systems.",
        "gs_paper": "GS Paper 2",
        "topic_count": "2,100"
    },
    "governance": {
        "url": "https://saritclasses.com/notes-governance.html",
        "subject_name": "Governance",
        "subject_icon": "fas fa-users-cog",
        "subject_desc": "Complete UPSC Governance syllabus — e-Governance, Transparency, Accountability, and Government Interventions.",
        "gs_paper": "GS Paper 2",
        "topic_count": "700"
    },
    "indian-society": {
        "url": "https://saritclasses.com/notes-indian-society.html",
        "subject_name": "Indian Society",
        "subject_icon": "fas fa-users",
        "subject_desc": "Complete UPSC Indian Society syllabus — Diversity, Population, Poverty, Urbanization, and Social Empowerment.",
        "gs_paper": "GS Paper 1",
        "topic_count": "600"
    }
}

roman_numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"]

ICON_MAP = {
    "Module 0": "fas fa-info-circle",
    "Module 1": "fas fa-flask",
    "Module 2": "fas fa-satellite",
    "Module 3": "fas fa-shield-alt",
    "Module 4": "fas fa-laptop-code",
    "Module 5": "fas fa-dna",
    "Module 6": "fas fa-atom",
    "Module 7": "fas fa-heartbeat",
    "Module 8": "fas fa-leaf",
    "Module 9": "fas fa-brain",
    "Module 10": "fas fa-globe",
    "Module 11": "fas fa-newspaper",
    "Module 12": "fas fa-graduation-cap",
}

def get_icon(title):
    for key, icon in ICON_MAP.items():
        if key in title: return icon
    return "fas fa-book"

def clean_label_text(text):
    """Clean module/topic title from label tags (strips numbering prefix)"""
    text = text.strip()
    # Remove Module/Topic prefix patterns like "Module 0:", "Topic 0.1:"
    text = re.sub(r'^(Module|Topic)\s+[\d\.]+\s*:?\s*', '', text)
    # Also strip standalone number prefix like "3.7.4: "
    text = re.sub(r'^[\d\.]+:?\s*', '', text)
    return text.strip()

def clean_link_text(text):
    text = text.strip()
    # Strip number prefix like "0.1.1:", "3.7.4.2:"
    text = re.sub(r'^[\d\.]+:?\s*', '', text)
    return text.strip()

def extract_modules_nav_menu(html):
    """Parse pages with ul.nav-menu structure (Sci-Tech style)"""
    soup = BeautifulSoup(html, 'lxml')
    nav = soup.find('ul', class_='nav-menu')
    if not nav:
        return None

    modules = []

    # Top-level <li> are the modules
    for top_li in nav.find_all('li', recursive=False):
        label = top_li.find('label', recursive=False)
        if not label: continue
        
        module_title = clean_label_text(label.get_text(strip=True))
        module_icon = get_icon(label.get_text(strip=True)[:10])

        chapters = []
        
        # Direct <ul> children of this <li> (topics level)
        topics_ul = top_li.find('ul', recursive=False)
        if not topics_ul: continue
        
        # Each <li> inside is a topic (chapter)
        for topic_li in topics_ul.find_all('li', recursive=False):
            topic_label = topic_li.find('label', recursive=False)
            
            if topic_label:
                chapter_title = clean_label_text(topic_label.get_text(strip=True))
            else:
                # Might be a direct link (leaf)
                a = topic_li.find('a', recursive=False)
                if a:
                    txt = clean_link_text(a.get_text(strip=True))
                    if chapters:
                        chapters[-1]['topics'].append(txt)
                    else:
                        chapters.append({'title': 'General Topics', 'topics': [txt]})
                continue
            
            # Gather all leaf <a> tags under this topic (recursively)
            subtopics = []
            # The actual links are inside the sub-ul under this topic_li
            inner_ul = topic_li.find('ul', recursive=False)
            if inner_ul:
                for a in inner_ul.find_all('a'):
                    txt = clean_link_text(a.get_text(strip=True))
                    if txt: subtopics.append(txt)
            
            if subtopics:
                chapters.append({'title': chapter_title, 'topics': subtopics})
            else:
                # No sub-list, but we have a label — the label itself is content worth showing
                chapters.append({'title': chapter_title, 'topics': [chapter_title]})
        
        if chapters:
            modules.append({
                'title': module_title,
                'icon': module_icon,
                'chapters': chapters
            })
    
    return modules

def format_html(modules, subject_id, conf):
    with open('notes-geography.html', 'r', encoding='utf-8') as f:
        template = f.read()

    sidebar_links = []
    accordion_html = []
    
    for i, mod in enumerate(modules):
        slug = f"module-{i}"
        short_title = mod['title'][:35] + "..." if len(mod['title']) > 35 else mod['title']
        
        sidebar_links.append(f'<li><a href="#{slug}"><i class="{mod["icon"]}"></i> {short_title}</a></li>')
        
        numeral = roman_numerals[i] if i < len(roman_numerals) else str(i+1)
        
        acc = f"""
      <div class="notes-section" id="{slug}">
        <div class="notes-section-header" onclick="toggleSection(this)">
          <div class="header-left">
            <div class="notes-section-icon"><i class="{mod['icon']}"></i></div>
            <h3>{numeral}. {mod['title']}</h3>
          </div>
          <i class="fas fa-chevron-down chevron"></i>
        </div>
        <div class="notes-section-body">
          <div class="notes-section-content">"""
          
        for ch in mod['chapters']:
            acc += f"""
            <div class="topic-group">
              <div class="topic-group-title">{ch['title']}</div>
              <div class="chips-list">"""
            for t in ch['topics']:
                acc += f'\n                <span class="chip">{t}</span>'
            acc += """
              </div>
            </div>"""
        
        acc += """
          </div>
        </div>
      </div>"""
        accordion_html.append(acc)

    subject_name = conf['subject_name']
    
    template = re.sub(r'<title>.*?</title>', f'<title>{subject_name} Notes for UPSC — Complete Syllabus | Sarit Classes</title>', template)
    template = re.sub(r'<meta name="description" content="[^"]+">', f'<meta name="description" content="Comprehensive UPSC {subject_name} notes covering the complete official syllabus.">', template)
    template = re.sub(r'<meta name="keywords" content="[^"]+">', f'<meta name="keywords" content="UPSC {subject_name} notes, {subject_name.lower()} for UPSC, Sarit Classes">', template)
    template = re.sub(r'<link rel="canonical" href="[^"]+">', f'<link rel="canonical" href="https://saritclasses.com/notes-{subject_id}.html">', template)
    template = re.sub(r'<meta property="og:title" content="[^"]+">', f'<meta property="og:title" content="UPSC {subject_name} Notes — Sarit Classes">', template)
    template = re.sub(r'<meta property="og:description" content="[^"]+">', f'<meta property="og:description" content="Complete {subject_name} syllabus for UPSC.">', template)
    
    template = re.sub(r'<span style="color: var\(--text\);">Geography</span>', f'<span style="color: var(--text);">{subject_name}</span>', template)
    template = re.sub(r'<span class="badge badge-blue">.*?</span>', f'<span class="badge badge-blue"><i class="fas fa-book"></i> {conf["gs_paper"]}</span>', template, count=1)
    template = re.sub(r'<span class="badge badge-gold"><i class="fas fa-layer-group"></i> \d+ (?:Sections|Modules)</span>', f'<span class="badge badge-gold"><i class="fas fa-layer-group"></i> {len(modules)} Modules</span>', template)
    
    template = re.sub(r'<h1>\s*<span class="icon"><i class="fas fa-globe text-gold"></i></span>\s*Geography\s*</h1>', 
        f'<h1>\n      <span class="icon"><i class="{conf["subject_icon"]} text-gold"></i></span>\n      {subject_name}\n    </h1>', template)
    
    template = re.sub(r'<p>Complete UPSC Geography syllabus.*?</p>', f'<p>{conf["subject_desc"]}</p>', template)
    template = re.sub(r'<div class="notes-stat"><i class="fas fa-list-ul"></i> \d+ Major (?:Topics|Modules)</div>', 
        f'<div class="notes-stat"><i class="fas fa-list-ul"></i> {len(modules)} Major Modules</div>', template)
    template = re.sub(r'<div class="notes-stat"><i class="fas fa-book-reader"></i>.*?</div>', 
        f'<div class="notes-stat"><i class="fas fa-book-reader"></i> {conf["gs_paper"]}</div>', template)
    
    ul_match = re.search(r'<ul>(.*?)</ul>', template, re.DOTALL)
    if ul_match:
        template = template.replace(ul_match.group(1), "\n" + "\n".join(sidebar_links) + "\n    ")
    
    template = re.sub(r'/geography/drill', f'/{subject_id}/drill', template)
    template = re.sub(r'Geography MCQs', f'{subject_name} MCQs', template)
    template = re.sub(r'1,515\+', f'{conf["topic_count"]}+', template)
    template = re.sub(r'Start Geography Drill ', f'Start {subject_name} Drill ', template)
    
    acc_match = re.search(r'<div class="notes-accordion">(.*?)</div><!-- end accordion -->', template, re.DOTALL)
    if acc_match:
        template = template.replace(acc_match.group(1), "\n" + "\n".join(accordion_html) + "\n\n    ")
    
    with open(f"notes-{subject_id}.html", "w", encoding="utf-8") as f:
        f.write(template)

for subject_id, conf in pages.items():
    print(f"Fetching {conf['url']}...")
    req = urllib.request.Request(conf['url'], headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        modules = extract_modules_nav_menu(html)
        if modules and len(modules) > 0:
            print(f"notes-{subject_id}.html — {len(modules)} sections extracted from live site")
            format_html(modules, subject_id, conf)
        else:
            print(f"notes-{subject_id}.html — FAILED to parse (0 sections)")
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"Failed {subject_id}: {e}")
