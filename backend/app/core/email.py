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


async def send_webinar_confirmation(email_to: str, full_name: str):
    import os
    html_content = f"""
    <h2>You're Registered! UPSC Focused Portal Webinar</h2>
    <p>Hi {full_name},</p>
    <p>Your registration is confirmed.</p>
    <p><strong>Date:</strong> Tomorrow at 6:00 PM</p>
    <p><strong>Google Meet Link:</strong> <a href="https://meet.google.com/esi-kkyb-vws">https://meet.google.com/esi-kkyb-vws</a></p>
    <p>See you there!</p>
    <p>— Tej, Sarit Classes</p>
    """
    message = MessageSchema(
        subject="You're Registered — UPSC Webinar at 6 PM Tomorrow",
        recipients=[email_to],
        body=html_content,
        subtype=MessageType.html
    )
    fm = FastMail(conf)
    await fm.send_message(message)
