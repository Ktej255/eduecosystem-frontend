import glob
files = glob.glob('D:\\Graphology\\Paid Students\\Mians ready Dec 2025\\Morning Batch\\prelims\\History\\**\\*.docx', recursive=True)
with open('docx_list.txt', 'w', encoding='utf-8') as f:
    for file in files:
        f.write(file + '\n')
