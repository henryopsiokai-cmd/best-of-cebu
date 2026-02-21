import sys
from PIL import Image, ImageDraw, ImageFont
import os
import subprocess

def create_card(theme, output_path):
    # Standard business card ratio: 1050x600 (3.5x2 at 300dpi)
    width, height = 1050, 600
    
    if theme == 'dark':
        bg_color = (28, 25, 23)  # #1c1917
        accent_color = (217, 119, 6) # #d97706
        text_color = (250, 250, 249) # #fafaf9
        secondary_text = (168, 162, 158) # #a8a29e
    else:
        bg_color = (250, 250, 249) # #fafaf9
        accent_color = (217, 119, 6) # #d97706
        text_color = (28, 25, 23) # #1c1917
        secondary_text = (87, 83, 78) # #57534e

    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to load fonts
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
    ]
    
    def get_font(size, bold=True):
        for path in font_paths:
            if os.path.exists(path):
                return ImageFont.truetype(path, size)
        return ImageFont.load_default()

    font_serif_large = get_font(64)
    font_serif_small = get_font(28)
    font_sans_bold = get_font(20)
    font_sans_reg = get_font(18)

    # Accent Line at bottom
    draw.rectangle([0, 580, 1050, 600], fill=accent_color)
    
    # Brand Logo
    draw.text((50, 50), "BEST OF CEBU", font=font_serif_small, fill=text_color)
    draw.rectangle([50, 95, 90, 97], fill=accent_color)

    # Name and Title
    draw.text((50, 240), "Criste Joy", font=font_serif_large, fill=text_color)
    draw.text((50, 310), "EDITORIAL CONTRIBUTOR", font=font_sans_bold, fill=accent_color)
    
    # Contact Details
    draw.text((50, 450), "bestofcebu.com", font=font_sans_reg, fill=secondary_text)
    draw.text((50, 485), "joy@bestofcebu.com", font=font_sans_reg, fill=secondary_text)
    draw.text((50, 520), "@bestofcebu_official", font=font_sans_reg, fill=secondary_text)
    
    # QR Code Area
    qr_box = [800, 360, 980, 540]
    draw.rectangle(qr_box, fill="white", outline=secondary_text)
    
    # Convert and paste real QR
    # Increase density for a sharp QR
    subprocess.run(['convert', '-density', '600', 'qr.svg', 'temp_qr.png'])
    if os.path.exists('temp_qr.png'):
        qr_img = Image.open('temp_qr.png')
        # Resize to fit the box (180x180) minus some padding
        qr_img = qr_img.resize((150, 150), Image.LANCZOS)
        img.paste(qr_img, (815, 375))
        os.remove('temp_qr.png')
    
    draw.text((890, 565), "SCAN TO EXPLORE", font=font_sans_reg, fill=secondary_text, anchor="ms")

    img.save(output_path, dpi=(300, 300))
    print(f"Saved {output_path}")

if __name__ == "__main__":
    dest_dir = '/home/node/.openclaw/workspace/best-of-cebu/public/assets/'
    os.makedirs(dest_dir, exist_ok=True)
    
    create_card('light', os.path.join(dest_dir, 'business-card-light.png'))
    create_card('dark', os.path.join(dest_dir, 'business-card-dark.png'))
