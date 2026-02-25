import os
import re

directory = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch2\upanishads"
layouts = ["KenaLayout.tsx", "IshaLayout.tsx", "KathaLayout.tsx", "MandukyaLayout.tsx", "MundakaLayout.tsx", "TaittiriyaLayout.tsx"]

for layout in layouts:
    filepath = os.path.join(directory, layout)
    if not os.path.exists(filepath): continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    upa_key = layout.replace("Layout.tsx", "").lower()
    upa_name = layout.replace("Layout.tsx", "") + " Upanishad"
    
    if "useBatch2Events" not in content:
        import_statement = 'import { useBatch2Events } from "../hooks/useBatch2Events";\n'
        last_import_idx = content.rfind("import ")
        if last_import_idx != -1:
            end_of_line = content.find("\n", last_import_idx)
            content = content[:end_of_line+1] + import_statement + content[end_of_line+1:]
        else:
            content = import_statement + content
    
    hook_str = "    const { logEvent } = useBatch2Events();\n"
    if hook_str not in content:
        match = re.search(r'export default function \w+Layout\(\) \{', content)
        if match:
            pos = match.end() + 1
            content = content[:pos] + "\n" + hook_str + content[pos:]
            
    replacement = f"""console.log("Experience Logged:", data);
                            logEvent("upanishad_session_completed", {{
                                module: "{upa_name}",
                                duration: 15,
                                data: {{ upanishadKey: "{upa_key}", mantra: "Session Complete" }}
                            }});
                            logEvent("journal_entry_saved", {{
                                module: "{upa_name}",
                                text: data.text,
                                gunas: data.gunas,
                            }});"""
    content = content.replace('console.log("Experience Logged:", data);', replacement)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Done patching Layouts")
