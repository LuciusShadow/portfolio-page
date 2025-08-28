import nodemailer from 'nodemailer';
import { createContactEmailTemplate } from '../templates/emailTemplates.js';

// Create email transporter
const createTransporter = () => {
  const config = {
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  // If not using a predefined service, use custom SMTP settings
  if (!process.env.EMAIL_SERVICE || process.env.EMAIL_SERVICE === 'custom') {
    delete config.service;
    config.host = process.env.EMAIL_HOST;
    config.port = parseInt(process.env.EMAIL_PORT) || 587;
    config.secure = process.env.EMAIL_SECURE === 'true';
  }

  return nodemailer.createTransport(config);
};

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    console.log('🔍 Debug - Creating transporter with config:');
    console.log('EMAIL_SERVICE:', process.env.EMAIL_SERVICE);
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log(
      'EMAIL_PASS length:',
      process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'undefined'
    );

    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email configuration verification failed:', error.message);
    console.error('Full error:', error);
    return false;
  }
};

// Send contact form email
export const sendContactEmail = async ({
  firstName,
  lastName,
  email,
  subject,
  message,
  senderIP,
  userAgent,
}) => {
  const transporter = createTransporter();

  const fullName = `${firstName} ${lastName}`;
  const emailSubject = `[Portfolio Contact] ${subject}`;

  // Create email content
  const emailTemplate = createContactEmailTemplate({
    fullName,
    email,
    subject,
    message,
    senderIP,
    userAgent,
    timestamp: new Date().toISOString(),
  });

  // Email options
  const mailOptions = {
    from: {
      name: fullName,
      address: process.env.EMAIL_USER, // Use your email as the sender
    },
    to: {
      name: process.env.RECIPIENT_NAME || 'Portfolio Owner',
      address: process.env.RECIPIENT_EMAIL,
    },
    replyTo: {
      name: fullName,
      address: email, // This allows you to reply directly to the sender
    },
    subject: emailSubject,
    html: emailTemplate.html,
    text: emailTemplate.text,
    headers: {
      'X-Priority': '1',
      'X-MSMail-Priority': 'High',
      Importance: 'high',
    },
  };

  // Send the email
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error(`Email sending failed: ${error.message}`);
  }
};

// Initialize email service (verify configuration on startup)
export const initializeEmailService = async () => {
  console.log('🔧 Initializing email service...');
  const isValid = await verifyEmailConfig();

  if (!isValid) {
    console.warn(
      '⚠️  Email service not properly configured. Check your .env file.'
    );
  }

  return isValid;
};
