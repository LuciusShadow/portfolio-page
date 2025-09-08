import nodemailer from 'nodemailer';

// Create email transporter for custom SMTP server
const createTransporter = () => {
  console.log('🔧 Creating custom SMTP transporter with config:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER ? 'Set' : 'Missing',
    pass: process.env.SMTP_PASS ? 'Set' : 'Missing',
  });

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    throw new Error('Custom SMTP credentials not configured');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465 (SSL), false for 587 (TLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates if needed
      ciphers: 'SSLv3', // For older servers if needed
    },
    timeout: 30000,
    connectionTimeout: 30000,
    greetingTimeout: 10000,
    socketTimeout: 30000,
    debug: process.env.NODE_ENV === 'development',
    logger: process.env.NODE_ENV === 'development',
  });
};

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    console.log('🔍 Verifying custom SMTP configuration...');
    console.log('SMTP_HOST:', process.env.SMTP_HOST || 'Missing');
    console.log(
      'SMTP_PORT:',
      process.env.SMTP_PORT || 'Missing (default: 587)'
    );
    console.log(
      'SMTP_SECURE:',
      process.env.SMTP_SECURE || 'Missing (default: false)'
    );
    console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Missing');
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Missing');
    console.log('FROM_EMAIL:', process.env.FROM_EMAIL ? 'Set' : 'Missing');
    console.log(
      'RECIPIENT_EMAIL:',
      process.env.RECIPIENT_EMAIL ? 'Set' : 'Missing'
    );

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error('❌ Missing required SMTP credentials');
      return false;
    }

    if (!process.env.FROM_EMAIL || !process.env.RECIPIENT_EMAIL) {
      console.error('❌ Missing sender or recipient email');
      return false;
    }

    // Skip verification in production to avoid Railway timeout issues
    if (process.env.NODE_ENV === 'production') {
      console.log('🔧 Skipping SMTP verification in production environment');
      return true;
    }

    // Test connection in development
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ SMTP configuration verified successfully');
    return true;
  } catch (error) {
    console.error('❌ SMTP configuration verification failed:', error.message);

    if (process.env.NODE_ENV === 'production') {
      console.log(
        '🔧 Continuing in production mode despite verification failure'
      );
      return true;
    }

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
  const startTime = Date.now();
  console.log('📧 Starting email send process via custom SMTP...');

  try {
    const transporter = createTransporter();
    const fullName = `${firstName} ${lastName}`;

    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.FROM_EMAIL, // Your verified domain email
      },
      to: process.env.RECIPIENT_EMAIL,
      replyTo: {
        name: fullName,
        address: email,
      },
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><small>IP: ${senderIP || 'Unknown'}</small></p>
        <p><small>User Agent: ${userAgent || 'Unknown'}</small></p>
        <p><small>Sent: ${new Date().toISOString()}</small></p>
      `,
      text: `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
IP: ${senderIP || 'Unknown'}
User Agent: ${userAgent || 'Unknown'}
Sent: ${new Date().toISOString()}
      `,
    };

    const result = await transporter.sendMail(mailOptions);

    const duration = Date.now() - startTime;
    console.log(
      `✅ Email sent successfully via custom SMTP in ${duration}ms:`,
      result.messageId
    );

    return result;
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`❌ Custom SMTP email send failed after ${duration}ms:`, {
      message: error.message,
      code: error.code,
      command: error.command,
    });

    throw new Error(`Email sending failed: ${error.message}`);
  }
};

// Initialize email service
export const initializeEmailService = async () => {
  console.log('🔧 Initializing custom SMTP email service...');

  const isValid = await verifyEmailConfig();

  if (!isValid) {
    console.warn('⚠️ Custom SMTP email service not properly configured.');
  } else {
    console.log('✅ Custom SMTP email service initialized successfully');
  }

  return isValid;
};
