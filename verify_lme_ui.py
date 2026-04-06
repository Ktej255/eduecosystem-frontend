from playwright.sync_api import sync_playwright
import time
import os

def run_verification():
    print("Starting Playwright verification...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        
        url = "http://localhost:3001/student/upsc/environment/guided/knowledge-graph"
        print(f"Navigating to {url}")
        
        page.goto(url, wait_until="networkidle")
        time.sleep(3) # Let React flow and animations settle
        
        # 1. Screenshot of the full graph
        graph_screenshot = "LME_Graph_View.png"
        page.screenshot(path=graph_screenshot)
        print(f"Captured full graph view: {graph_screenshot}")
        
        # 2. Find a node and click it (Photosynthesis has node_id '1')
        print("Looking for a concept node...")
        node = page.locator(".react-flow__node-concept").first
        if node.count() > 0:
            node.click()
            time.sleep(1) # wait for panel
            
            # 3. Screenshot with side panel open
            panel_screenshot = "LME_Node_Panel_View.png"
            page.screenshot(path=panel_screenshot)
            print(f"Captured node panel view: {panel_screenshot}")
            
            # 4. Click Summon AI Tutor
            tutor_btn = page.locator("button:has-text('Summon AI Tutor')")
            if tutor_btn.count() > 0:
                print("Clicking 'Summon AI Tutor'...")
                tutor_btn.first.click()
                time.sleep(1) # wait for modal
                
                # 5. Screenshot of Tutor Modal
                modal_screenshot = "LME_Tutor_Modal.png"
                page.screenshot(path=modal_screenshot)
                print(f"Captured Tutor Modal view: {modal_screenshot}")
            else:
                print("Could not find 'Summon AI Tutor' button.")
        else:
            print("No nodes found on graph.")
            
        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    run_verification()
