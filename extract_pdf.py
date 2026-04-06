import sys
import json
import re
from pypdf import PdfReader

def extract_pdf_to_js(pdf_path, output_js_path, var_name="hardcodedPdfData"):
    print(f"Reading {pdf_path}...")
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)
    all_chunks = []
    
    doc_name = pdf_path.split("/")[-1]
    
    for p_idx, page in enumerate(reader.pages):
        page_num = p_idx + 1
        text = page.extract_text()
        if not text:
            continue
            
        # replace any whitespace runs with a single space
        page_text = re.sub(r'\s+', ' ', text).strip()
        if not page_text:
            continue
            
        words = page_text.split(' ')
        chunk_size = 300
        overlap = 60
        
        start = 0
        while start < len(words):
            chunk = " ".join(words[start:start+chunk_size])
            if len(chunk.strip()) > 40:
                all_chunks.append({
                    "text": chunk,
                    "page": page_num,
                    "docName": doc_name
                })
            start += (chunk_size - overlap)
            
    doc_obj = {
        "name": doc_name,
        "pages": total_pages,
        "chunks": all_chunks,
        "size": 7567684, # hardcoded approx for vigilance manual
        "storedAt": None # will specify something in JS
    }
    
    js_content = f"const {var_name} = " + json.dumps(doc_obj, indent=2) + ";\n"
    
    with open(output_js_path, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Extraction complete! Created {output_js_path} with {len(all_chunks)} chunks from {total_pages} pages.")

if __name__ == "__main__":
    pdf_file = "Vigilance Manual (Updated 2021).pdf"
    out_file = "pdf_data.js"
    extract_pdf_to_js(pdf_file, out_file)
