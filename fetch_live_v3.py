import urllib.request
from bs4 import BeautifulSoup
import re
import os

pages = {
    "science-tech": {
        "local_file": None,  # will fetch
        "url": "https://saritclasses.com/notes-science-tech.html",
        "subject_name": "Science & Technology",
        "subject_icon": "fas fa-microscope",
        "subject_desc": "Complete UPSC Science & Technology syllabus — Space, Defence, Biotech, ICT, and Emerging Technologies.",
        "gs_paper": "GS Paper 3",
        "topic_count": "900"
    },
    "indian-polity": {
        "local_file": None,
        "url": "https://saritclasses.com/notes-indian-polity.html",
        "subject_name": "Indian Polity",
        "subject_icon": "fas fa-landmark",
        "subject_desc": "Complete UPSC Indian Polity syllabus — Constitution, Parliament, Judiciary, Federalism, and Governance systems.",
        "gs_paper": "GS Paper 2",
        "topic_count": "2,100"
    },
    "governance": {
        "local_file": None,
        "url": "https://saritclasses.com/notes-governance.html",
        "subject_name": "Governance",
        "subject_icon": "fas fa-users-cog",
        "subject_desc": "Complete UPSC Governance syllabus — e-Governance, Transparency, Accountability, and Government Interventions.",
        "gs_paper": "GS Paper 2",
        "topic_count": "700"
    },
    "indian-society": {
        "local_file": None,
        "url": "https://saritclasses.com/notes-indian-society.html",
        "subject_name": "Indian Society",
        "subject_icon": "fas fa-users",
        "subject_desc": "Complete UPSC Indian Society syllabus — Diversity, Population, Poverty, Urbanization, and Social Empowerment.",
        "gs_paper": "GS Paper 1",
        "topic_count": "600"
    }
}

roman_numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"]

ICON_LIST = [
    "fas fa-info-circle", "fas fa-flask", "fas fa-satellite", "fas fa-shield-alt",
    "fas fa-laptop-code", "fas fa-dna", "fas fa-atom", "fas fa-heartbeat",
    "fas fa-leaf", "fas fa-brain", "fas fa-globe", "fas fa-newspaper",
    "fas fa-graduation-cap", "fas fa-landmark", "fas fa-users"
]

def clean_text(text):
    text = text.strip()
    text = re.sub(r'^(Module|Topic)\s+[\d\.]+\s*:?\s*', '', text)
    text = re.sub(r'^[\d\.]+:?\s*', '', text)
    return text.strip()

def extract_modules(html):
    soup = BeautifulSoup(html, 'html.parser')
    
    # Strategy 1: ul.nav-menu (Science & Tech, Polity)
    nav = soup.find('ul', class_='nav-menu')
    if nav:
        modules = []
        top_lis = nav.find_all('li', recursive=False)
        for idx, top_li in enumerate(top_lis):
            label_el = top_li.find('label', recursive=False)
            if not label_el: continue
            module_title = clean_text(label_el.get_text(strip=True))
            module_icon = ICON_LIST[idx % len(ICON_LIST)]
            sub_ul = top_li.find('ul', recursive=False)
            if not sub_ul: continue
            chapters = []
            topic_lis = sub_ul.find_all('li', recursive=False)
            for topic_li in topic_lis:
                topic_label = topic_li.find('label', recursive=False)
                if not topic_label:
                    a = topic_li.find('a', recursive=False)
                    if a and chapters:
                        txt = clean_text(a.get_text(strip=True))
                        if txt: chapters[-1]['topics'].append(txt)
                    continue
                chapter_title = clean_text(topic_label.get_text(strip=True))
                topics = []
                sub_ul2 = topic_li.find('ul', recursive=False)
                if sub_ul2:
                    for a in sub_ul2.find_all('a'):
                        t = clean_text(a.get_text(strip=True))
                        if t: topics.append(t)
                if not topics: topics = [chapter_title]
                chapters.append({'title': chapter_title, 'topics': topics})
            if chapters:
                modules.append({'title': module_title, 'icon': module_icon, 'chapters': chapters})
        if modules: return modules

    # Strategy 2: details.module-detail (Governance)
    module_details = soup.find_all('details', class_='module-detail')
    if module_details:
        modules = []
        for idx, mod_el in enumerate(module_details):
            summary = mod_el.find('summary', recursive=False)
            if not summary: continue
            module_title = clean_text(summary.get_text(strip=True))
            module_icon = ICON_LIST[idx % len(ICON_LIST)]
            chapters = []
            # Governance has nested details: topic-detail -> subtopic-detail
            topic_details = mod_el.find_all('details', class_='topic-detail')
            for topic_el in topic_details:
                topic_summary = topic_el.find('summary', recursive=False)
                if not topic_summary: continue
                chapter_title = clean_text(topic_summary.get_text(strip=True))
                topics = []
                # Subtopics or direct links
                subtopic_details = topic_el.find_all('details', class_='subtopic-detail')
                for sub_el in subtopic_details:
                    sub_summary = sub_el.find('summary', recursive=False)
                    if sub_summary:
                        topics.append(clean_text(sub_summary.get_text(strip=True)))
                # Also check for direct list items
                for a in topic_el.find_all('a'):
                    t = clean_text(a.get_text(strip=True))
                    if t and t not in topics: topics.append(t)
                
                if not topics: topics = [chapter_title]
                chapters.append({'title': chapter_title, 'topics': topics})
            if chapters:
                modules.append({'title': module_title, 'icon': module_icon, 'chapters': chapters})
        if modules: return modules

    # Strategy 3: div.accordion-item.syllabus-card (Society)
    society_cards = soup.find_all('div', class_='syllabus-card')
    if society_cards:
        modules = []
        for idx, card in enumerate(society_cards):
            header = card.find('div', class_='accordion-header')
            if not header: continue
            module_title = clean_text(header.get_text(strip=True))
            module_icon = ICON_LIST[idx % len(ICON_LIST)]
            chapters = []
            content = card.find('div', class_='accordion-content')
            if content:
                # Find topic groups
                groups = content.find_all('div', class_='topic-link-group')
                for group in groups:
                    a_tag = group.find('a')
                    if not a_tag: continue
                    chapter_title = clean_text(a_tag.get_text(strip=True))
                    topics = []
                    for li in group.find_all('li'):
                        t = clean_text(li.get_text(strip=True))
                        if t: topics.append(t)
                    if not topics: topics = [chapter_title]
                    chapters.append({'title': chapter_title, 'topics': topics})
            if chapters:
                modules.append({'title': module_title, 'icon': module_icon, 'chapters': chapters})
        if modules: return modules

    return []

def format_html(modules, subject_id, conf):
    template_path = os.path.join(os.path.dirname(__file__), 'Sarit Classes website code', 'notes-geography.html')
    with open(template_path, 'r', encoding='utf-8') as f:
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
    template = re.sub(r'<meta name="keywords" content="[^"]+">', f'<meta name="keywords" content="UPSC {subject_name} notes, Sarit Classes">', template)
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
    
    output_path = os.path.join(os.path.dirname(__file__), 'Sarit Classes website code', f"notes-{subject_id}.html")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(template)

# Fetch all files first, then parse
for subject_id, conf in pages.items():
    url = conf['url']
    # Try local saved copy first, else fetch
    local_name = f"temp_{subject_id.replace('-', '_')}.html"
    local_path = os.path.join("d:\\Development\\EduEcosystem", local_name)
    
    if subject_id == "science-tech":
        local_path = "d:\\Development\\EduEcosystem\\test_st.html"
    
    if os.path.exists(local_path):
        print(f"Using cached file for {subject_id}...")
        with open(local_path, 'r', encoding='utf-8') as f:
            html = f.read()
    else:
        print(f"Fetching {url}...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        with open(local_path, 'w', encoding='utf-8') as f:
            f.write(html)
    
    modules = extract_modules(html)
    print(f"notes-{subject_id}.html — {len(modules)} sections extracted from live site")
    if len(modules) > 0:
        format_html(modules, subject_id, conf)
        print(f"  -> Written successfully")
    else:
        print(f"  -> FAILED (0 sections)")
