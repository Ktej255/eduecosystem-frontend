from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from app.core.config import settings
from pathlib import Path

conf = ConnectionConfig(
    MAIL_USERNAME=settings.MAIL_USERNAME,
    MAIL_PASSWORD=settings.MAIL_PASSWORD,
    MAIL_FROM=settings.MAIL_FROM,
    MAIL_PORT=settings.MAIL_PORT,
    MAIL_SERVER=settings.MAIL_SERVER,
    MAIL_FROM_NAME=settings.MAIL_FROM_NAME,
    MAIL_STARTTLS=settings.MAIL_STARTTLS,
    MAIL_SSL_TLS=settings.MAIL_SSL_TLS,
    USE_CREDENTIALS=settings.USE_CREDENTIALS,
    VALIDATE_CERTS=settings.VALIDATE_CERTS,
    TEMPLATE_FOLDER=Path(__file__).parent.parent / "templates" / "email",
    SUPPRESS_SEND=settings.MAIL_SUPPRESS_SEND,
)


async def send_email(
    email_to: str, subject: str, template_name: str, template_body: dict
):
    message = MessageSchema(
        subject=subject,
        recipients=[email_to],
        template_body=template_body,
        subtype=MessageType.html,
    )

    fm = FastMail(conf)
    await fm.send_message(message, template_name=template_name)


async def send_focused_portal_welcome(email_to: str, full_name: str, password: str = None):
    import os
    frontend_url = os.getenv("FRONTEND_URL", "https://eduecosystem-frontend.vercel.app")
    
    if password:
        message_text = "Your 30-day access starts today. Login and begin your first study session."
        pwd_text = f"<p><strong>Password:</strong> {password}</p>"
    else:
        message_text = "Your existing account has been upgraded. Login with your existing password."
        pwd_text = ""

    html_content = f"""
    <h2>Your 30-Day UPSC Focused Portal Access is Ready</h2>
    <p>Hi {full_name},</p>
    <p>{message_text}</p>
    <p><strong>Login URL:</strong> <a href="{frontend_url}/student/focused">{frontend_url}/student/focused</a></p>
    <p><strong>Email:</strong> {email_to}</p>
    {pwd_text}
    """
    
    message = MessageSchema(
        subject="Your 30-Day UPSC Focused Portal Access is Ready",
        recipients=[email_to],
        body=html_content,
        subtype=MessageType.html
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)


async def send_webinar_confirmation(email_to: str, full_name: str, password: str = None):
    if password:
        cred_block = f"""
<p style="background: #1a1a1a; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
<strong>Your Login Details:</strong><br><br>
📧 Email: {email_to}<br>
🔑 Password: {password}<br><br>
<a href="https://eduecosystem-frontend-503001969959.us-central1.run.app" style="background: #d4af37; color: #000; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Login Now →</a>
</p>"""
    else:
        cred_block = f"""
<p style="background: #1a1a1a; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
<strong>Welcome Back!</strong><br><br>
Your account has been upgraded with Focused Portal access.<br>
📧 Email: {email_to}<br><br>
<a href="https://eduecosystem-frontend-503001969959.us-central1.run.app" style="background: #d4af37; color: #000; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Login Now →</a>
</p>"""

    html_content = f"""
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
<h1 style="color: #d4af37;">Welcome to EduEcosystem 🎯</h1>
<p>Hi {full_name},</p>
<p>Your payment is confirmed and your 30-day focused preparation portal is ready right now.</p>
{cred_block}
<p style="color: #888; font-size: 14px;">Your exam is in 30 days. Every day counts.<br>Log in today and start your first session.</p>
<p>— Tej<br><span style="color: #888;">Sarit Classes | EduEcosystem</span></p>
</div>
"""
    message = MessageSchema(
        subject="Your UPSC Battle Plan is Ready — Login Now 🎯",
        recipients=[email_to],
        body=html_content,
        subtype=MessageType.html
    )
    fm = FastMail(conf)
    await fm.send_message(message)
