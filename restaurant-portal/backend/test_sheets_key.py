import os
import requests
import json

API_KEY = "AIzaSyCXnt6xEOzQUB7toHpUb_UEhEgeH7gu_Sg"
SPREADSHEET_ID = "19oM-A7K2_p3u2Z_mHl2m3y2g-e_zF2x-y"

def test_access():
    url = f"https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}?key={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        sheets = [s['properties']['title'] for s in data['sheets']]
        print(f"SUCCESS! Found {len(sheets)} tabs: {', '.join(sheets)}")
        return True
    else:
        print(f"FAILED: {response.status_code} - {response.text}")
        return False

if __name__ == "__main__":
    test_access()
