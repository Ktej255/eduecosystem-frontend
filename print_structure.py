import urllib.request
from bs4 import BeautifulSoup

def analyze(url):
    print(f"Analyzing {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    soup = BeautifulSoup(html, 'lxml')
    
    sections = soup.find_all('div', id=lambda x: x and x.startswith('section-'))
    print(f"Found {len(sections)} div[id^='section-']")
    if len(sections) > 0:
        h3s = sections[0].find_all('h3')
        h4s = sections[0].find_all('h4')
        links = sections[0].find_all('a')
        print(f"Section 0 has {len(h3s)} h3s, {len(h4s)} h4s, {len(links)} a tags")
        if h3s: print("Sample H3:", h3s[0].text.strip()[:50])
        if h4s: print("Sample H4:", h4s[0].text.strip()[:50])
        if links: print("Sample Link:", links[0].text.strip()[:50])
    
    # Try finding module-accordion details
    module_details = soup.find_all('details', class_='module-accordion')
    print(f"Found {len(module_details)} details.module-accordion")
    if len(module_details) > 0:
        summary = module_details[0].find('summary')
        if summary: print("Sample summary:", summary.text.strip()[:50])

analyze('https://saritclasses.com/notes-science-tech.html')
analyze('https://saritclasses.com/notes-indian-polity.html')
