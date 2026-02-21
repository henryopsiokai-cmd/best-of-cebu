import sys
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM, renderPDF
import os

def convert_svg(svg_path):
    try:
        drawing = svg2rlg(svg_path)
        
        # Paths
        png_path = svg_path.replace(".svg", ".png")
        pdf_path = svg_path.replace(".svg", ".pdf")
        
        # Render PNG
        renderPM.drawToFile(drawing, png_path, fmt="PNG")
        print(f"Created {png_path}")
        
        # Render PDF
        renderPDF.drawToFile(drawing, pdf_path)
        print(f"Created {pdf_path}")
        
    except Exception as e:
        print(f"Error converting {svg_path}: {e}")

if __name__ == "__main__":
    files = ["/home/node/.openclaw/workspace/business_card_editorial_dark.svg", "/home/node/.openclaw/workspace/business_card_mockup.svg"]
    for f in files:
        if os.path.exists(f):
            convert_svg(f)
