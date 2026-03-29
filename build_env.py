import re
import sys
import json
import uuid

def parse_module(html):
    # Regex to find <details class="module-accordion"> and its content
    modules = []
    
    module_pattern = re.compile(r'<details class="module-accordion">(.*?)</details>\s*(?=<!-- Module|\</section>)', re.DOTALL)
    for match in module_pattern.finditer(html):
        m_html = match.group(1)
        
        # summary -> Module title
        summary_match = re.search(r'<summary>.*?<span class="module-title-text">.*?</i>(.*?)</span>', m_html, re.DOTALL)
        if not summary_match: continue
        module_title = summary_match.group(1).strip()
        icon_match = re.search(r'<i class="(fas fa-[^"]+) icon">', m_html)
        module_icon = icon_match.group(1) if icon_match else "fas fa-leaf"
        
        # Find chapters inside
        chapters = []
        chapter_pattern = re.compile(r'<details>\s*<summary>.*?<span class="module-title-text">.*?</i>(.*?)</span>.*?</summary>\s*<div class="accordion-content">(.*?)</div>\s*</details>', re.DOTALL)
        for c_match in chapter_pattern.finditer(m_html):
            chapter_title = c_match.group(1).strip()
            c_content = c_match.group(2)
            
            # Find subtopics (links)
            topics = []
            topic_pattern = re.compile(r'<a[^>]+>.*?</i>(.*?)</a>', re.DOTALL)
            for t_match in topic_pattern.finditer(c_content):
                topic_text = t_match.group(1).strip()
                # Remove chapter prefix like "1.1 "
                topic_text = re.sub(r'^\d+\.\d+\s+', '', topic_text)
                topics.append(topic_text)
            
            # Check if there are li items (Appendix)
            if not topics:
                li_pattern = re.compile(r'<li><a[^>]+>.*?</i>(.*?)</a></li>', re.DOTALL)
                for t_match in li_pattern.finditer(c_content):
                    topic_text = t_match.group(1).strip()
                    topics.append(topic_text)
                    
            chapters.append({
                'title': chapter_title,
                'topics': topics
            })
            
        # Also check for direct links in module content (if no chapters)
        if not chapters:
            topics = []
            topic_pattern = re.compile(r'<a[^>]+>.*?</i>(.*?)</a>', re.DOTALL)
            c_content_match = re.search(r'<div class="accordion-content">(.*?)</div>$', m_html, re.DOTALL)
            if c_content_match:
                for t_match in topic_pattern.finditer(c_content_match.group(1)):
                    topic_text = t_match.group(1).strip()
                    topic_text = re.sub(r'^\d+\.\d+\s+', '', topic_text)
                    topics.append(topic_text)
            if topics:
                chapters.append({'title': 'General Topics', 'topics': topics})
                
        # Also check list items directly in module
        if not chapters:
            ul_match = re.search(r'<ul[^>]*>(.*?)</ul>', m_html, re.DOTALL)
            if ul_match:
                topics = []
                li_pattern = re.compile(r'<li><a[^>]+>.*?</i>(.*?)</a></li>', re.DOTALL)
                for t_match in li_pattern.finditer(ul_match.group(1)):
                    topics.append(t_match.group(1).strip())
                if topics:
                    chapters.append({'title': 'Resources', 'topics': topics})
            
        modules.append({
            'title': module_title,
            'icon': module_icon,
            'chapters': chapters
        })
        
    return modules


html = open("notes-environment.html", "r", encoding="utf-8").read()
modules = parse_module(html)

def generate_new_html(modules, subject_id, subject_name, subject_icon, subject_desc, gs_paper, topic_count):
    sidebar_links = []
    accordion_html = []
    
    for i, mod in enumerate(modules):
        slug = f"module-{i}"
        short_title = mod['title'].split(':', 1)[0] if ':' in mod['title'] else mod['title']
        
        sidebar_links.append(f'<li><a href="#{slug}"><i class="{mod["icon"]}"></i> {short_title}</a></li>')
        
        acc = f"""
      <div class="notes-section" id="{slug}">
        <div class="notes-section-header" onclick="toggleSection(this)">
          <div class="header-left">
            <div class="notes-section-icon"><i class="{mod['icon']}"></i></div>
            <h3>{"I" * (i+1) if i < 3 else "IV" if i == 3 else "V" if i == 4 else "VI" if i == 5 else "VII" if i == 6 else "VIII" if i == 7 else "IX"}. {mod['title']}</h3>
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


    template = open("notes-geography.html", "r", encoding="utf-8").read()
    
    # Replace titles, metas
    template = re.sub(r'<title>.*?</title>', f'<title>{subject_name} Notes for UPSC — Complete Syllabus | Sarit Classes</title>', template)
    template = re.sub(r'<meta name="description" content="[^"]+">', f'<meta name="description" content="Comprehensive UPSC {subject_name} notes covering all key syllabus topics.">', template)
    template = re.sub(r'<meta name="keywords" content="[^"]+">', f'<meta name="keywords" content="UPSC {subject_name} notes, {subject_name.lower()} for UPSC, Sarit Classes">', template)
    template = re.sub(r'<link rel="canonical" href="[^"]+">', f'<link rel="canonical" href="https://saritclasses.com/notes-{subject_id}.html">', template)
    template = re.sub(r'<meta property="og:title" content="[^"]+">', f'<meta property="og:title" content="UPSC {subject_name} Notes — Sarit Classes">', template)
    template = re.sub(r'<meta property="og:description" content="[^"]+">', f'<meta property="og:description" content="Complete {subject_name} syllabus for UPSC.">', template)
    
    # Replace Breadcrumb
    template = re.sub(r'<span style="color: var\(--text\);">Geography</span>', f'<span style="color: var(--text);">{subject_name}</span>', template)
    
    # Replace Hero metadata
    template = re.sub(r'<span class="badge badge-blue"><i class="fas fa-globe-asia"></i> GS Paper 1</span>', f'<span class="badge badge-blue"><i class="fas fa-book"></i> {gs_paper}</span>', template)
    template = re.sub(r'<span class="badge badge-gold"><i class="fas fa-layer-group"></i> 9 Sections</span>', f'<span class="badge badge-gold"><i class="fas fa-layer-group"></i> {len(modules)} Modules</span>', template)
    
    # Replace Hero H1
    template = re.sub(r'<h1>\s*<span class="icon"><i class="fas fa-globe text-gold"></i></span>\s*Geography\s*</h1>', f'<h1>\n      <span class="icon"><i class="{subject_icon} text-gold"></i></span>\n      {subject_name}\n    </h1>', template)
    
    # Replace Hero Desc
    template = re.sub(r'<p>Complete UPSC Geography syllabus(.*?)</p>', f'<p>{subject_desc}</p>', template)
    
    # Replace Stats
    template = re.sub(r'<div class="notes-stat"><i class="fas fa-list-ul"></i> 9 Major Topics</div>', f'<div class="notes-stat"><i class="fas fa-list-ul"></i> {len(modules)} Major Modules</div>', template)
    template = re.sub(r'<div class="notes-stat"><i class="fas fa-book-reader"></i> GS Paper 1 \+ Paper 3</div>', f'<div class="notes-stat"><i class="fas fa-book-reader"></i> {gs_paper}</div>', template)
    
    # Sidebar
    old_sidebar_links = re.search(r'<ul>(.*?)</ul>', template, re.DOTALL).group(1)
    template = template.replace(old_sidebar_links, "\n" + "\n".join(sidebar_links) + "\n    ")
    
    # Drill URLs
    template = re.sub(r'/geography/drill', f'/{subject_id}/drill', template)
    template = re.sub(r'Geography MCQs', f'{subject_name} MCQs', template)
    template = re.sub(r'1,515\+', f'{topic_count}+', template)
    template = re.sub(r'Start Geography Drill ', f'Start {subject_name} Drill ', template)
    
    # Accordion substitution
    old_accordion = re.search(r'<div class="notes-accordion">(.*?)</div><!-- end accordion -->', template, re.DOTALL).group(1)
    template = template.replace(old_accordion, "\n" + "\n".join(accordion_html) + "\n\n    ")
    
    return template

new_html = generate_new_html(
    modules, 
    "environment", 
    "Environment & Ecology", 
    "fas fa-leaf", 
    "Complete UPSC Environment & Ecology syllabus — Biodiversity, Conservation, Climate Change, Pollution, and International Conventions.", 
    "GS Paper 3", 
    "1,200"
)

with open(f"notes-environment.html", "w", encoding="utf-8") as f:
    f.write(new_html)

print(f"Generated notes-environment.html")
