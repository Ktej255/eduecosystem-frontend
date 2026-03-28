import os
import re
import requests

directories = [
    r"D:\Development\EduEcosystem\frontend\src\components\batch1\current-affairs",
    r"D:\Development\EduEcosystem\frontend\src\components\upsc\subjects\current-affairs"
]

print("=== AUDIT 4: CURRENT AFFAIRS LINKS AUDIT ===")
print("| Topic | Source URL | Status |")
print("|---|---|---|")

external_links = []
# Find all files
for d in directories:
    if not os.path.exists(d):
        continue
    for root, _, files in os.walk(d):
        for f in files:
            if f.endswith('.tsx') or f.endswith('.ts'):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as fh:
                    content = fh.read()
                    
                    # Look for URLs in the file. Often href="http..." or href={'http...'}
                    urls = re.findall(r'href=["\']?(http[s]?://[^"\'\s>]+)["\']?', content)
                    urls += re.findall(r'url:\s*["\']?(http[s]?://[^"\'\s>]+)["\']?', content)
                    urls += re.findall(r'source:\s*["\']?(http[s]?://[^"\'\s>]+)["\']?', content)
                    
                    urls = list(set(urls))
                    
                    for url in urls:
                        try:
                            # Test if reachable
                            r = requests.get(url, timeout=5, allow_redirects=True, headers={'User-Agent': 'Mozilla/5.0'})
                            if r.status_code == 200:
                                status = "Working"
                            elif len(r.history) > 0:
                                status = "Redirect"
                            else:
                                status = f"Broken ({r.status_code})"
                        except Exception as e:
                            status = "Broken (Error)"
                            
                        print(f"| {f} | {url} | {status} |")
                        
                        # Save for Audit 5
                        external_links.append((path, url, content))

print("\n=== AUDIT 5: CONTROLLED EXTERNAL LINK BEHAVIOR ===")
target_blank_count = 0
modal_count = 0
total = len(external_links)

for path, url, content in set(external_links):
    if 'target="_blank"' in content or "target='_blank'" in content:
        target_blank_count += 1
    
    # Check for warning modal behavior
    if "ExternalLinkModal" in content or "warning" in content.lower() or "leaving" in content.lower():
        modal_count += 1

print(f"Total external links found: {total}")
print(f"Links using target='_blank': {target_blank_count}")
print(f"Files containing warning/modal mechanism: {modal_count}")
if target_blank_count == total and modal_count > 0:
    print("Conclusion: External links open in new tab and warning mechanism appears to be present.")
else:
    print("Conclusion: External links lack consistent target='_blank' or warning modals.")

