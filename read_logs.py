import json
import os

def read_logs():
    filename = 'detailed_logs.json'
    if not os.path.exists(filename):
        print(f"File {filename} not found.")
        return
    
    with open(filename, 'r') as f:
        try:
            data = json.load(f)
            events = data.get('events', [])
            for event in events:
                print(event.get('message', ''))
        except Exception as e:
            print(f"Error reading JSON: {e}")

if __name__ == "__main__":
    read_logs()
