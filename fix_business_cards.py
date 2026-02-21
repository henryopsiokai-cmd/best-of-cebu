import re
import subprocess
import os

def generate_svg(theme, qr_path, output_path):
    if theme == 'dark':
        bg_color = "#1c1917"  # Dark stone 900
        accent_color = "#d97706" # Amber 600
        text_primary = "#fafaf9" # Stone 50
        text_secondary = "#a8a29e" # Stone 400
        qr_bg = "#ffffff"
        qr_fill = "#1c1917"
    else:
        bg_color = "#fafaf9" # Stone 50
        accent_color = "#d97706" # Amber 600
        text_primary = "#1c1917" # Stone 900
        text_secondary = "#57534e" # Stone 600
        qr_bg = "#ffffff"
        qr_fill = "#1c1917"

    content = f'''<svg width="1050" height="600" viewBox="0 0 1050 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1050" height="600" fill="{bg_color}" />
  
  <!-- Accent Line -->
  <rect x="0" y="580" width="1050" height="20" fill="{accent_color}" />
  
  <!-- Brand Logo -->
  <text x="50" y="80" font-family="serif" font-size="28" font-weight="900" font-style="italic" fill="{text_primary}">BEST OF CEBU</text>
  <rect x="50" y="95" width="40" height="2" fill="{accent_color}" />

  <!-- Name and Title -->
  <text x="50" y="280" font-family="serif" font-size="64" font-weight="bold" fill="{text_primary}">Criste Joy</text>
  <text x="50" y="330" font-family="sans-serif" font-size="20" font-weight="bold" fill="{accent_color}">EDITORIAL CONTRIBUTOR</text>
  
  <!-- Contact Details -->
  <g transform="translate(50, 450)">
    <text x="0" y="0" font-family="sans-serif" font-size="18" fill="{text_secondary}">bestofcebu.com</text>
    <text x="0" y="35" font-family="sans-serif" font-size="18" fill="{text_secondary}">joy@bestofcebu.com</text>
    <text x="0" y="70" font-family="sans-serif" font-size="16" font-weight="bold" fill="{text_secondary}">@bestofcebu_official</text>
  </g>
  
  <!-- QR Code Section (Right Side) -->
  <g transform="translate(800, 360)">
    <!-- QR Background Box -->
    <rect width="180" height="180" rx="10" fill="{qr_bg}" stroke="{text_secondary}" stroke-width="0.5" />
    
    <!-- Real QR Pattern -->
    <g transform="translate(15, 15) scale(1.0)">
      <path fill="{qr_fill}" d="{qr_path}" />
    </g>
    
    <text x="90" y="205" font-family="sans-serif" font-size="12" font-weight="bold" fill="{text_secondary}" text-anchor="middle">SCAN TO EXPLORE</text>
  </g>

  <!-- Side Accent -->
  <path d="M750 0 L1050 0 L1050 300 L850 300 Z" fill="{accent_color}" opacity="0.05" />
</svg>'''
    
    with open(output_path, 'w') as f:
        f.write(content)

def main():
    # 1. Read QR Path
    with open('/home/node/.openclaw/workspace/qr.svg', 'r') as f:
        qr_svg = f.read()
    
    match = re.search(r'd="(.*?)"', qr_svg)
    if not match:
        print("Could not find QR path")
        return
    qr_path = match.group(1)

    # 2. Generate SVGs
    generate_svg('light', qr_path, 'business-card-light.svg')
    generate_svg('dark', qr_path, 'business-card-dark.svg')

    # 3. Convert to PNG using ImageMagick
    # Using high density for better quality
    subprocess.run(['convert', '-density', '300', 'business-card-light.svg', 'business-card-light.png'])
    subprocess.run(['convert', '-density', '300', 'business-card-dark.svg', 'business-card-dark.png'])
    
    # 4. Move to public assets
    dest_dir = '/home/node/.openclaw/workspace/best-of-cebu/public/assets/'
    os.makedirs(dest_dir, exist_ok=True)
    subprocess.run(['cp', 'business-card-light.png', os.path.join(dest_dir, 'business-card-light.png')])
    subprocess.run(['cp', 'business-card-dark.png', os.path.join(dest_dir, 'business-card-dark.png')])
    subprocess.run(['cp', 'business-card-light.svg', os.path.join(dest_dir, 'business-card-light.svg')])
    subprocess.run(['cp', 'business-card-dark.svg', os.path.join(dest_dir, 'business-card-dark.svg')])

    print("Business cards updated successfully.")

if __name__ == "__main__":
    main()
