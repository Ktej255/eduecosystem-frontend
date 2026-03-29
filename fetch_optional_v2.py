import requests
from bs4 import BeautifulSoup
import json
import os
import re

def fetch_optional_content(url):
    print(f"Fetching {url}...")
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        content = {
            "title": "",
            "paper1": [],
            "paper2": [],
            "strategy": "Regular practice of previous year questions and mapping is essential for this subject.", # Default
            "books": []
        }
        
        # Title
        title_tag = soup.find('h1')
        if title_tag:
            t = title_tag.get_text(strip=True)
            t = re.sub(r'UPSC|Optional|Syllabus|2025|Explorer|Interactive|Guide', '', t, flags=re.I).strip()
            content["title"] = t or "Optional Subject"
        
        # Strategy and Books
        strategy_keywords = ["Strategy", "How to Prepare"]
        book_keywords = ["Books", "Suggested Reading", "Resources"]
        
        all_headers = soup.find_all(['h2', 'h3', 'h4'])
        
        for h in all_headers:
            h_text = h.get_text(strip=True)
            if any(k in h_text for k in strategy_keywords):
                sib = h.find_next_sibling()
                strat_text = []
                while sib and sib.name not in ['h1', 'h2', 'h3']:
                    strat_text.append(sib.get_text(strip=True))
                    sib = sib.find_next_sibling()
                if strat_text:
                    content["strategy"] = " ".join(strat_text)
            
            if any(k in h_text for k in book_keywords):
                sib = h.find_next_sibling()
                while sib and sib.name not in ['h1', 'h2', 'h3']:
                    if sib.name == 'ul':
                        content["books"].extend([li.get_text(strip=True) for li in sib.find_all('li')])
                    elif sib.name == 'p':
                        content["books"].append(sib.get_text(strip=True))
                    sib = sib.find_next_sibling()

        # Paper Content
        paper1_keywords = ["Paper-1", "Paper 1", "Physical Geography", "Administrative Theory"]
        paper2_keywords = ["Paper-2", "Paper 2", "Human Geography", "Indian Administration", "Indian Society"]
        
        current_paper = None
        
        tags_to_track = soup.find_all(['h2', 'h3', 'h4', 'ul', 'p'])
        
        for i, tag in enumerate(tags_to_track):
            text = tag.get_text(strip=True)
            if not text: continue
            
            # Detect Paper transition
            if any(k in text for k in paper1_keywords):
                current_paper = "paper1"
                continue
            elif any(k in text for k in paper2_keywords):
                current_paper = "paper2"
                continue
            
            if current_paper and tag.name in ['h3', 'h4']:
                # New module
                if any(k in text for k in (strategy_keywords + book_keywords)):
                    continue # Skip strategy/books headers inside paper flow
                
                module = {
                    "title": text,
                    "topics": []
                }
                
                # Check next siblings until next header
                idx = i + 1
                while idx < len(tags_to_track):
                    next_tag = tags_to_track[idx]
                    if next_tag.name in ['h2', 'h3', 'h4']:
                        break
                    
                    if next_tag.name == 'ul':
                        module["topics"].extend([li.get_text(strip=True) for li in next_tag.find_all('li')])
                    elif next_tag.name == 'p':
                        t_text = next_tag.get_text(strip=True)
                        if t_text and len(t_text) > 5: # Avoid tiny fragments
                            if ',' in t_text and len(t_text.split(',')) > 2:
                                module["topics"].extend([t.strip() for t in t_text.split(',') if len(t.strip()) > 2])
                            else:
                                module["topics"].append(t_text)
                    idx += 1
                
                if module["title"] and (module["topics"] or len(module["title"]) > 10):
                    content[current_paper].append(module)
                    
        return content
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def main():
    urls = [
        "https://saritclasses.com/optional-geography.html",
        "https://saritclasses.com/optional-history.html",
        "https://saritclasses.com/optional-anthropology.html",
        "https://saritclasses.com/optional-pubad.html",
        "https://saritclasses.com/optional-sociology.html"
    ]
    
    results = {}
    for url in urls:
        slug = url.split('/')[-1].replace('.html', '')
        data = fetch_optional_content(url)
        if data:
            results[slug] = data
            
    with open('optional_data_v2.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    print("Saved to optional_data_v2.json")

if __name__ == "__main__":
    main()
