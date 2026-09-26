import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site';

// This is a setup for Nodemailer. In a production environment,
// you would configure this with a real SMTP server like SendGrid, AWS SES, or Resend.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendAdminNotification(lead: any) {
  if (!process.env.SMTP_USER) {
    console.log('Admin Email Mock:', { lead });
    return;
  }

  const mailOptions = {
    from: process.env.SMTP_FROM || siteConfig.email,
    to: siteConfig.email, // Send to business owner
    subject: `New Lead: ${lead.service || 'General Inquiry'} from ${lead.name}`,
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Phone:</strong> ${lead.phone}</p>
      <p><strong>Email:</strong> ${lead.email || 'N/A'}</p>
      <p><strong>Service Requested:</strong> ${lead.service || 'N/A'}</p>
      <p><strong>Location:</strong> ${lead.location || 'N/A'}</p>
      <p><strong>Source:</strong> ${lead.source}</p>
      <p><strong>Message/Details:</strong><br/> ${lead.message || 'N/A'}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendCustomerConfirmation(lead: any) {
  if (!lead.email) return;
  
  if (!process.env.SMTP_USER) {
    console.log('Customer Email Mock:', { to: lead.email });
    return;
  }

  const mailOptions = {
    from: process.env.SMTP_FROM || siteConfig.email,
    to: lead.email,
    subject: 'We received your inquiry - SafeHaven Pest Control',
    html: `
      <h2>Thank you for contacting SafeHaven Pest Control</h2>
      <p>Hi ${lead.name},</p>
      <p>We have received your request for pest control services. One of our experts will review your details and contact you shortly at ${lead.phone}.</p>
      <p>If you need immediate assistance, please call us directly at ${siteConfig.phone}.</p>
      <br/>
      <p>Best regards,</p>
      <p><strong>The SafeHaven Pest Control Team</strong></p>
      <p>${siteConfig.url}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

// ─── Admin Reply to Client ───────────────────────────────────────────────────

interface ReplyEmailOptions {
  toEmail: string;
  toName: string;
  adminMessage: string;
  leadService?: string | null;
}

export async function sendReplyEmail({
  toEmail,
  toName,
  adminMessage,
  leadService,
}: ReplyEmailOptions): Promise<{ success: boolean; error?: string }> {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[Email] SMTP not configured — reply saved to DB only.');
    return { success: false, error: 'SMTP not configured' };
  }

  const subject = leadService
    ? `Re: Your ${leadService} inquiry – SafeHaven Pest Control`
    : `Re: Your pest control inquiry – SafeHaven Pest Control`;

  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE || siteConfig.phone;
  const phoneTel    = process.env.NEXT_PUBLIC_PHONE_TEL || siteConfig.phoneTel;
  const whatsapp    = process.env.NEXT_PUBLIC_WHATSAPP || siteConfig.whatsapp;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 20px;">
  <tr><td align="center">
    <table width="100%" style="max-width:580px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
      <tr>
        <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:32px 40px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">SafeHaven<span style="color:#e85d04;">Pest</span></h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Professional Pest Control Solutions</p>
        </td>
      </tr>
      <tr>
        <td style="padding:40px;">
          <p style="margin:0 0 8px;font-size:15px;color:#374151;">Hello <strong>${toName}</strong>,</p>
          <p style="margin:0 0 24px;font-size:14px;color:#6b7280;">Our team has reviewed your inquiry and here is our response:</p>
          <div style="background:#f8f9ff;border-left:4px solid #e85d04;border-radius:8px;padding:20px 24px;margin-bottom:24px;">
            <p style="margin:0;font-size:15px;color:#111827;line-height:1.7;white-space:pre-wrap;">${adminMessage}</p>
          </div>
          <p style="margin:0 0 20px;font-size:14px;color:#6b7280;">Need more help? Reach us directly:</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 6px 0 0;">
                <a href="tel:${phoneTel}" style="display:block;text-align:center;background:#1a1a2e;color:#fff;padding:12px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">📞 ${phoneDisplay}</a>
              </td>
              <td style="padding:0 0 0 6px;">
                <a href="https://wa.me/${whatsapp}" style="display:block;text-align:center;background:#25d366;color:#fff;padding:12px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">💬 WhatsApp Us</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">SafeHaven Pest Control · Hyderabad, Telangana</p>
          <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">This is a reply to your inquiry on our website.</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.EMAIL_FROM || siteConfig.email,
      to: toEmail,
      subject,
      html,
    });
    return { success: true };
  } catch (err) {
    console.error('[Email] Reply send failed:', err);
    return { success: false, error: String(err) };
  }
}
