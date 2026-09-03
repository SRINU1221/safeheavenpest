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
