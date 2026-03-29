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
            "strategy": "",
            "books": []
        }
        
        # Title
        title_tag = soup.find('h1')
        if title_tag:
            content["title"] = title_tag.get_text(strip=True).replace("UPSC Optional Syllabus 2025", "").strip()
        
        # Find all sections
        sections = []
        current_section = None
        
        # Strategy and Books (often in their own divs or after specific headers)
        strategy_div = soup.find(id="strategy") or soup.find('div', class_='strategy-content')
        if strategy_div:
            content["strategy"] = strategy_div.get_text(separator="\n", strip=True)
            
        books_div = soup.find(id="books") or soup.find('div', class_='books-list')
        if books_div:
            content["books"] = [li.get_text(strip=True) for li in books_div.find_all('li')]

        # Multi-strategy header search
        headers = soup.find_all(['h2', 'h3'])
        
        paper1_keywords = ["Paper-1", "Paper 1", "Physical Geography"]
        paper2_keywords = ["Paper-2", "Paper 2", "Human Geography", "Indian Administration"]
        
        current_paper = None
        
        for h in headers:
            text = h.get_text(strip=True)
            
            # Detect Paper transition
            if any(k in text for k in paper1_keywords):
                current_paper = "paper1"
                continue
            elif any(k in text for k in paper2_keywords):
                current_paper = "paper2"
                continue
            
            if current_paper and h.name == 'h3':
                module = {
                    "title": text,
                    "topics": []
                }
                # Find following content until next h2/h3
                sibling = h.find_next_sibling()
                while sibling and sibling.name not in ['h2', 'h3']:
                    if sibling.name == 'ul':
                        module["topics"].extend([li.get_text(strip=True) for li in sibling.find_all('li')])
                    elif sibling.name == 'p':
                        # Handle comma separated topics in p tags
                        txt = sibling.get_text(strip=True)
                        if ',' in txt:
                            module["topics"].extend([t.strip() for t in txt.split(',') if t.strip()])
                        else:
                            module["topics"].append(txt)
                    sibling = sibling.find_next_sibling()
                
                if module["title"] and (module["topics"] or "Strategy" not in module["title"]):
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
            
    with open('optional_data.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    print("Saved to optional_data.json")

if __name__ == "__main__":
    main()
