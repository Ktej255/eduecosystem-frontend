import os
import re
import glob

LAYOUT_DIR = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch2\upanishads"

layout_files = glob.glob(os.path.join(LAYOUT_DIR, "*Layout.tsx"))

# Colors used across diverse layouts: 
# emerald, teal, amber, orange, red, purple, indigo, fuchsia, sky, slate, stone, neutral, blue, rose

# Mapping logic:
# Backgrounds:
# bg-slate-900, bg-neutral-900, bg-stone-900, bg-slate-950, bg-black -> bg-[var(--sp-surface)] or bg-[var(--sp-bg)]
# Text:
# text-{color}-50, 100, 200 -> text-[var(--sp-text-hi)]
# text-{color}-300, 400, 500, 600 -> text-[var(--sp-gold)] or text-[var(--sp-text-lo)]
# Borders:
# border-{color}-500/10 -> border-[var(--sp-border)]

def replace_colors(content):
    # Backgrounds
    content = re.sub(r'bg-(slate|stone|neutral|zinc|gray)-(900|950)', r'bg-[var(--sp-surface)]', content)
    content = re.sub(r'bg-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-(900|950)(/\d+)?', r'bg-[var(--sp-surface)]', content)
    
    # Text high contrast
    content = re.sub(r'text-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|slate|stone|neutral|blue|rose|zinc|gray)-(50|100|200)(/\d+)?', r'text-[var(--sp-text-hi)]', content)
    
    # Text low contrast / accents
    content = re.sub(r'text-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|slate|stone|neutral|blue|rose|zinc|gray)-(300|400|500)(/\d+)?', r'text-[var(--sp-text-lo)]', content)
    
    # Text specific high accents (600+)
    content = re.sub(r'text-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-(600|700|800)', r'text-[var(--sp-gold)]', content)
    
    # Borders
    content = re.sub(r'border-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|slate|stone|neutral|blue|rose|zinc|gray)-(500|600|400|800|900)/\d+', r'border-[var(--sp-border)]', content)
    content = re.sub(r'border-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|slate|stone|neutral|blue|rose|zinc|gray)-(400|500|600|700|800|900)', r'border-[var(--sp-border)]', content)
    
    # Hover states
    content = re.sub(r'hover:bg-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-[A-Za-z0-9/]+', r'hover:bg-[#1a1a33]', content)
    content = re.sub(r'hover:border-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-[A-Za-z0-9/]+', r'hover:border-[var(--sp-gold)]/50', content)
    content = re.sub(r'hover:text-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-[A-Za-z0-9/]+', r'hover:text-[var(--sp-gold)]', content)
    
    # Gradients (standardize direction and intensity)
    content = re.sub(r'from-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-[0-9]+', r'from-[var(--sp-gold)]', content)
    content = re.sub(r'to-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-[0-9]+', r'to-[var(--sp-bg)]', content)
    content = re.sub(r'via-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-[0-9]+(?!/)', r'via-[var(--sp-surface)]', content)
    content = re.sub(r'via-(emerald|teal|amber|orange|red|purple|indigo|fuchsia|sky|blue|rose)-[0-9]+/\d+', r'via-[var(--sp-surface)]', content)
    
    # Main backgrounds
    content = re.sub(r'bg-black', r'bg-[var(--sp-bg)]', content)
    
    return content

for file_path in layout_files:
    basename = os.path.basename(file_path)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = replace_colors(content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {basename}")
    else:
        print(f"No changes for {basename}")
