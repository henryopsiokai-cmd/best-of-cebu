import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_html_email(from_email, to_email, subject, html_body, password):
    """Send HTML email using Gmail SMTP"""
    try:
        message = MIMEMultipart('alternative')
        message["From"] = from_email
        message["To"] = to_email
        message["Subject"] = subject
        
        # Attach HTML content
        html_part = MIMEText(html_body, 'html')
        message.attach(html_part)
        
        # Gmail SMTP
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(from_email, password)
        server.send_message(message)
        server.quit()
        
        print(f"✅ Email sent successfully to {to_email}")
        return True
    except Exception as e:
        print(f"❌ Failed: {e}")
        return False

# Beautiful HTML email showcasing Kimi K2.5
html_content = '''<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 24px;
            padding: 48px 40px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(10px);
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .logo {
            font-size: 56px;
            margin-bottom: 16px;
        }
        
        .title {
            font-size: 32px;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0 0 8px 0;
        }
        
        .subtitle {
            font-size: 16px;
            color: #6b7280;
            font-weight: 400;
        }
        
        .divider {
            height: 4px;
            width: 80px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 2px;
            margin: 32px auto;
        }
        
        .feature-grid {
            display: grid;
            gap: 20px;
            margin: 32px 0;
        }
        
        .feature {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 16px;
            border-left: 4px solid #667eea;
        }
        
        .feature-icon {
            font-size: 28px;
            flex-shrink: 0;
        }
        
        .feature-content h3 {
            margin: 0 0 6px 0;
            font-size: 16px;
            font-weight: 600;
            color: #1f2937;
        }
        
        .feature-content p {
            margin: 0;
            font-size: 14px;
            color: #6b7280;
            line-height: 1.5;
        }
        
        .highlight-box {
            background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
            border-radius: 16px;
            padding: 28px;
            margin: 32px 0;
            text-align: center;
            border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .highlight-box h2 {
            margin: 0 0 12px 0;
            font-size: 20px;
            color: #1f2937;
        }
        
        .highlight-box p {
            margin: 0;
            font-size: 15px;
            color: #4b5563;
            line-height: 1.6;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 32px;
            border-top: 1px solid #e5e7eb;
        }
        
        .signature {
            font-size: 14px;
            color: #6b7280;
        }
        
        .signature strong {
            color: #1f2937;
        }
        
        .badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="header">
                <div class="logo">🚀</div>
                <h1 class="title">Kimi K2.5</h1>
                <p class="subtitle">Next-Generation AI Intelligence</p>
            </div>
            
            <div class="divider"></div>
            
            <div class="feature-grid">
                <div class="feature">
                    <span class="feature-icon">⚡</span>
                    <div class="feature-content">
                        <h3>Lightning-Fast Reasoning</h3>
                        <p>Advanced chain-of-thought capabilities enabling complex multi-step problem solving with unprecedented speed and accuracy.</p>
                    </div>
                </div>
                
                <div class="feature">
                    <span class="feature-icon">📚</span>
                    <div class="feature-content">
                        <h3>256K Context Window</h3>
                        <p>Process entire codebases, long documents, and extended conversations without losing context or coherence.</p>
                    </div>
                </div>
                
                <div class="feature">
                    <span class="feature-icon">🎯</span>
                    <div class="feature-content">
                        <h3>Precision Coding</h3>
                        <p>Exceptional code generation, debugging, and refactoring across 50+ programming languages with best practices.</p>
                    </div>
                </div>
                
                <div class="feature">
                    <span class="feature-icon">🔍</span>
                    <div class="feature-content">
                        <h3>Deep Analysis</h3>
                        <p>Sophisticated analytical capabilities for research, data interpretation, and extracting insights from complex information.</p>
                    </div>
                </div>
                
                <div class="feature">
                    <span class="feature-icon">💡</span>
                    <div class="feature-content">
                        <h3>Creative Synthesis</h3>
                        <p>Blend technical precision with creative problem-solving for innovative solutions to novel challenges.</p>
                    </div>
                </div>
                
                <div class="feature">
                    <span class="feature-icon">🛡️</span>
                    <div class="feature-content">
                        <h3>Thoughtful & Safe</h3>
                        <p>Built-in safety considerations with nuanced understanding of context, intent, and potential implications.</p>
                    </div>
                </div>
            </div>
            
            <div class="highlight-box">
                <h2>Why Kimi K2.5 Excels</h2>
                <p>Built on a Mixture-of-Experts architecture with 1 trillion total parameters, Kimi K2.5 activates 32 billion parameters per forward pass—delivering top-tier performance in coding, reasoning, and long-context tasks while maintaining efficiency.</p>
            </div>
            
            <div class="footer">
                <p class="signature">Delivered with 💜 by <strong>Henry</strong> 🦅</p>
                <p class="signature" style="margin-top: 8px; font-size: 12px;">Your Digital Chief of Staff</p>
                <span class="badge">Powered by OpenClaw</span>
            </div>
        </div>
    </div>
</body>
</html>'''

# Send the email
password = 'muixqszczxvotcua'
send_html_email(
    'henry.ops.iokai@gmail.com',
    'shukribr@gmail.com',
    '🚀 Kimi K2.5: Next-Gen AI Intelligence',
    html_content,
    password
)
