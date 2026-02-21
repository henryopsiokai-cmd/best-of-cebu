import re

with open('qr.svg', 'r') as f:
    qr_svg = f.read()

# Extract the path d attribute
match = re.search(r'<path style="fill:rgb\(0, 0, 0\)" d="(.*?)"', qr_svg)
if not match:
    # Try another pattern if the first fails
    match = re.search(r'd="(.*?)"', qr_svg)

qr_path = match.group(1) if match else ""

# The template with the real path inserted
card_content = f'''<svg width="1050" height="600" viewBox="0 0 1050 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1050" height="600" fill="#fafaf9" />
  
  <!-- Accent Line -->
  <rect x="0" y="580" width="1050" height="20" fill="#d97706" />
  
  <!-- Brand Logo -->
  <text x="50" y="80" font-family="Serif" font-size="28" font-weight="900" font-style="italic" fill="#1c1917" letter-spacing="-1">BEST OF CEBU</text>
  <rect x="50" y="95" width="40" height="2" fill="#d97706" />

  <!-- Name and Title -->
  <text x="50" y="280" font-family="Serif" font-size="64" font-weight="bold" fill="#1c1917">Criste Joy</text>
  <text x="50" y="330" font-family="Sans-serif" font-size="20" font-weight="bold" fill="#d97706" letter-spacing="3">EDITORIAL CONTRIBUTOR</text>
  
  <!-- Contact Details -->
  <g transform="translate(50, 450)">
    <text x="0" y="0" font-family="Sans-serif" font-size="18" fill="#57534e">bestofcebu.com</text>
    <text x="0" y="35" font-family="Sans-serif" font-size="18" fill="#57534e">cristejoycalosor13@gmail.com</text>
    <text x="0" y="70" font-family="Sans-serif" font-size="16" font-weight="bold" fill="#78716c">@bestofcebu_official</text>
  </g>
  
  <!-- QR Code Section (Right Side) -->
  <g transform="translate(800, 360)">
    <!-- QR Background Box -->
    <rect width="180" height="180" rx="10" fill="white" stroke="#e7e5e4" stroke-width="1" />
    
    <!-- Real QR Pattern (Scaled to fit) -->
    <g transform="translate(15, 15) scale(1.0)">
      <path fill="#1c1917" d="{qr_path}" />
    </g>
    
    <text x="90" y="205" font-family="Sans-serif" font-size="12" font-weight="bold" fill="#a8a29e" text-anchor="middle" letter-spacing="1">SCAN TO EXPLORE</text>
  </g>

  <!-- Right Side Visual (Minimalist Geometric) -->
  <path d="M700 0 L1050 0 L1050 300 L950 300 Z" fill="#1c1917" opacity="0.03" />
</svg>'''

with open('business_card_mockup.svg', 'w') as f:
    f.write(card_content)
print("Merged QR code into business card SVG.")
