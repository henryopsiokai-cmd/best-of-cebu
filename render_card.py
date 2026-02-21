import sys
from PIL import Image, ImageDraw, ImageFont
import os

def create_card_png(output_path):
    # Standard business card ratio: 1050x600 (3.5x2 at 300dpi)
    width, height = 1050, 600
    bg_color = "#1c1917"  # Dark stone 900
    accent_color = "#d97706" # Amber 600
    text_color = "#fafaf9" # Stone 50
    secondary_text = "#a8a29e" # Stone 400
    
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to load fonts
    try:
        # These are common paths in many Linux distros
        serif_font_bold = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 64)
        serif_font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-BoldItalic.ttf", 28)
        sans_font_bold = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
        sans_font_reg = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
    except:
        # Fallback to default
        serif_font_bold = ImageFont.load_default()
        serif_font_small = ImageFont.load_default()
        sans_font_bold = ImageFont.load_default()
        sans_font_reg = ImageFont.load_default()

    # Accent Line at bottom
    draw.rectangle([0, 580, 1050, 600], fill=accent_color)
    
    # Brand Logo
    draw.text((50, 50), "BEST OF CEBU", font=serif_font_small, fill=text_color)
    draw.rectangle([50, 95, 90, 97], fill=accent_color)

    # Name and Title
    draw.text((50, 240), "Criste Joy", font=serif_font_bold, fill=text_color)
    draw.text((50, 310), "EDITORIAL CONTRIBUTOR", font=sans_font_bold, fill=accent_color)
    
    # Contact Details
    draw.text((50, 450), "bestofcebu.com", font=sans_font_reg, fill=secondary_text)
    draw.text((50, 485), "joy@bestofcebu.com", font=sans_font_reg, fill=secondary_text)
    draw.text((50, 520), "@bestofcebu_official", font=sans_font_reg, fill="#78716c")
    
    # QR Code Placeholder (since we can't easily draw the SVG path here without more logic)
    # Drawing a white rounded rect for the QR area
    draw.rectangle([800, 360, 980, 540], fill="white")
    draw.text((815, 440), "QR CODE", fill="black")
    draw.text((890, 565), "SCAN TO EXPLORE", fill=secondary_text, anchor="ms")

    img.save(output_path)
    print(f"Saved PNG to {output_path}")

if __name__ == "__main__":
    create_card_png("/home/node/.openclaw/workspace/business_card_dark.png")
