import PyPDF2
import os

pdf_path = r"d:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\Environement\Environment_Part2_FINAL.pdf"
output_path = r"d:\Graphology\Master Software\Eduecosystem\environment_part2_text.txt"

def extract_text(pdf_file, output_file):
    with open(pdf_file, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        total_pages = len(reader.pages)
        print(f"Total pages: {total_pages}")
        
        with open(output_file, 'w', encoding='utf-8') as out:
            for i in range(total_pages):
                page = reader.pages[i]
                text = page.extract_text()
                out.write(f"--- PAGE {i+1} ---\n")
                out.write(text)
                out.write("\n\n")
    print(f"Extracted text saved to {output_file}")

if __name__ == "__main__":
    if os.path.exists(pdf_path):
        extract_text(pdf_path, output_path)
    else:
        print(f"PDF not found at {pdf_path}")
