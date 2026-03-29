import sys
import urllib.request
from bs4 import BeautifulSoup
import re
import os

pages = {
    "science-tech": {
        "url": "https://saritclasses.com/notes-science-tech.html",
        "subject_name": "Science & Technology",
        "subject_icon": "fas fa-microscope",
        "subject_desc": "Complete UPSC Science & Tech syllabus \u2014 Space, Defense, Nano-tech, Bio-tech, and IT.",
        "gs_paper": "GS Paper 3",
        "topic_count": "900"
    },
    "indian-polity": {
        "url": "https://saritclasses.com/notes-indian-polity.html",
        "subject_name": "Indian Polity",
        "subject_icon": "fas fa-landmark",
        "subject_desc": "Complete UPSC Indian Polity syllabus \u2014 Constitution, Parliament, Judiciary, and Governance systems.",
        "gs_paper": "GS Paper 2",
        "topic_count": "2,100"
    },
    "governance": {
        "url": "https://saritclasses.com/notes-governance.html",
        "subject_name": "Governance",
        "subject_icon": "fas fa-users-cog",
        "subject_desc": "Complete UPSC Governance syllabus \u2014 e-Governance, Transparency, Accountability, and Government Interventions.",
        "gs_paper": "GS Paper 2",
        "topic_count": "700"
    },
    "indian-society": {
        "url": "https://saritclasses.com/notes-indian-society.html",
        "subject_name": "Indian Society",
        "subject_icon": "fas fa-users",
        "subject_desc": "Complete UPSC Indian Society syllabus \u2014 Diversity, Population, Poverty, Urbanization, and Social Empowerment.",
        "gs_paper": "GS Paper 1",
        "topic_count": "600"
    }
}

roman_numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"]

def clean_title(title):
    title = title.strip()
    title = re.sub(r'^(Topic|Module|Chapter|\d+)\s*[\d\.]*\s*:?\s*', '', title, flags=re.IGNORECASE)
    return title

def extract_modules(html_content):
    soup = BeautifulSoup(html_content, 'lxml')
    modules = []

    # First try the environment.html structure (details)
    details_blocks = soup.find_all('details')
    top_level_details = [d for d in details_blocks if not d.find_parent('details')]

    if top_level_details:
        for detail in top_level_details:
            summary = detail.find('summary')
            if not summary: continue
            module_title = clean_title(summary.get_text(strip=True))
            
            icon_tag = summary.find('i', class_=re.compile('fas'))
            module_icon = "fas fa-book"
            if icon_tag and 'class' in icon_tag.attrs:
                classes = " ".join(icon_tag['class'])
                m = re.search(r'(fas fa-[^ ]+)', classes)
                if m: module_icon = m.group(1)
            
            chapters = []
            inner_details = detail.find_all('details')
            if inner_details:
                for inner in inner_details:
                    ch_summary = inner.find('summary')
                    ch_title = clean_title(ch_summary.get_text(strip=True)) if ch_summary else "General"
                    topics = [re.sub(r'^\d+\.\d+\S*\s+', '', a.get_text(strip=True)) for a in inner.find_all('a')]
                    if topics: chapters.append({'title': ch_title, 'topics': topics})
            else:
                c_div = detail.find('div', class_=re.compile('(accordion-content|content)'))
                if c_div:
                    topics = [re.sub(r'^\d+\.\d+\S*\s+', '', a.get_text(strip=True)) for a in c_div.find_all('a')]
                    if not topics: topics = [li.get_text(strip=True) for li in c_div.find_all('li')]
                    if topics: chapters.append({'title': 'General Topics', 'topics': topics})
            
            if chapters:
                modules.append({'title': module_title, 'icon': module_icon, 'chapters': chapters})

    if not modules:
        # Fallback to the Polity structure (div id=section-X)
        sections = soup.find_all('div', id=re.compile(r'^section-\d+'))
        for sec in sections:
            h3 = sec.find('h3')
            if not h3: continue
            
            module_title = clean_title(h3.get_text(strip=True))
            icon_tag = h3.find('i')
            module_icon = "fas fa-book"
            if icon_tag and 'class' in icon_tag.attrs:
                classes = " ".join(icon_tag['class'])
                m = re.search(r'(fas fa-[^ ]+)', classes)
                if m: module_icon = m.group(1)

            chapters = []
            ch_divs = sec.find_all('div', class_='mb-6')
            for ch_div in ch_divs:
                h4 = ch_div.find('h4')
                if not h4: continue
                ch_title = clean_title(h4.get_text(strip=True))
                
                topics = []
                for a in ch_div.find_all('a', class_='topic-link'):
                    t_text = a.get_text(strip=True)
                    # For polity topics the prefix looks like '1.1.1:'
                    t_text = re.sub(r'^[\d\.]+:?\s*', '', t_text)
                    topics.append(t_text)
                
                if topics:
                    chapters.append({'title': ch_title, 'topics': topics})
            
            if chapters:
                modules.append({'title': module_title, 'icon': module_icon, 'chapters': chapters})

    return modules


def format_new_html(modules, subject_id, conf):
    with open('notes-geography.html', 'r', encoding='utf-8') as f:
        template = f.read()

    sidebar_links = []
    accordion_html = []
    
    for i, mod in enumerate(modules):
        slug = f"module-{i}"
        short_title = mod['title'].split(':')[0] if ':' in mod['title'] else mod['title']
        short_title = short_title[:30] + "..." if len(short_title) > 30 else short_title
        
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
    
    template = re.sub(r'<title>.*?</title>', f'<title>{subject_name} Notes for UPSC \u2014 Complete Syllabus | Sarit Classes</title>', template)
    template = re.sub(r'<meta name="description" content="[^"]+">', f'<meta name="description" content="Comprehensive UPSC {subject_name} notes covering all key syllabus topics.">', template)
    template = re.sub(r'<meta name="keywords" content="[^"]+">', f'<meta name="keywords" content="UPSC {subject_name} notes, {subject_name.lower()} for UPSC, Sarit Classes">', template)
    template = re.sub(r'<link rel="canonical" href="[^"]+">', f'<link rel="canonical" href="https://saritclasses.com/notes-{subject_id}.html">', template)
    template = re.sub(r'<meta property="og:title" content="[^"]+">', f'<meta property="og:title" content="UPSC {subject_name} Notes \u2014 Sarit Classes">', template)
    template = re.sub(r'<meta property="og:description" content="[^"]+">', f'<meta property="og:description" content="Complete {subject_name} syllabus for UPSC.">', template)
    
    template = re.sub(r'<span style="color: var\(--text\);">Geography</span>', f'<span style="color: var(--text);">{subject_name}</span>', template)
    
    template = re.sub(r'<span class="badge badge-blue"><i class="fas fa-book"></i> GS Paper 1</span>|<span class="badge badge-blue"><i class="fas fa-globe-asia"></i> GS Paper 1</span>', f'<span class="badge badge-blue"><i class="fas fa-book"></i> {conf["gs_paper"]}</span>', template)
    template = re.sub(r'<span class="badge badge-gold"><i class="fas fa-layer-group"></i> \d+ Sections</span>|<span class="badge badge-gold"><i class="fas fa-layer-group"></i> \d+ Modules</span>', f'<span class="badge badge-gold"><i class="fas fa-layer-group"></i> {len(modules)} Modules</span>', template)
    
    template = re.sub(r'<h1>\s*<span class="icon"><i class="fas fa-globe text-gold"></i></span>\s*Geography\s*</h1>', f'<h1>\n      <span class="icon"><i class="{conf["subject_icon"]} text-gold"></i></span>\n      {subject_name}\n    </h1>', template)
    
    template = re.sub(r'<p>Complete UPSC Geography syllabus.*?</p>', f'<p>{conf["subject_desc"]}</p>', template)
    
    template = re.sub(r'<div class="notes-stat"><i class="fas fa-list-ul"></i> \d+ Major Topics</div>|<div class="notes-stat"><i class="fas fa-list-ul"></i> \d+ Major Modules</div>', f'<div class="notes-stat"><i class="fas fa-list-ul"></i> {len(modules)} Major Modules</div>', template)
    template = re.sub(r'<div class="notes-stat"><i class="fas fa-book-reader"></i> GS Paper 1 \+ Paper 3</div>', f'<div class="notes-stat"><i class="fas fa-book-reader"></i> {conf["gs_paper"]}</div>', template)
    
    old_sidebar_links_match = re.search(r'<ul>(.*?)</ul>', template, re.DOTALL)
    if old_sidebar_links_match:
        old_sidebar_links = old_sidebar_links_match.group(1)
        template = template.replace(old_sidebar_links, "\n" + "\n".join(sidebar_links) + "\n    ")
    
    template = re.sub(r'/geography/drill', f'/{subject_id}/drill', template)
    template = re.sub(r'Geography MCQs', f'{subject_name} MCQs', template)
    template = re.sub(r'1,515\+', f'{conf["topic_count"]}+', template)
    template = re.sub(r'Start Geography Drill ', f'Start {subject_name} Drill ', template)
    
    old_accordion_match = re.search(r'<div class="notes-accordion">(.*?)</div><!-- end accordion -->', template, re.DOTALL)
    if old_accordion_match:
        old_accordion = old_accordion_match.group(1)
        template = template.replace(old_accordion, "\n" + "\n".join(accordion_html) + "\n\n    ")
    
    with open(f"notes-{subject_id}.html", "w", encoding="utf-8") as f:
        f.write(template)

for subject_id, conf in pages.items():
    print(f"Fetching {conf['url']}...")
    req = urllib.request.Request(conf['url'], headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        modules = extract_modules(html)
        print(f"notes-{subject_id}.html \u2014 {len(modules)} sections extracted from live site")
        format_new_html(modules, subject_id, conf)
    except Exception as e:
        print(f"Failed {subject_id}: {e}")
