// Email templates for contact form submissions

export const createContactEmailTemplate = ({
  fullName,
  email,
  subject,
  message,
  senderIP,
  userAgent,
  timestamp,
}) => {
  // HTML template
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Contact</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                background-color: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                border-bottom: 3px solid #007bff;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .header h1 {
                margin: 0;
                color: #007bff;
                font-size: 24px;
            }
            .field {
                margin-bottom: 20px;
            }
            .field-label {
                font-weight: 600;
                color: #495057;
                margin-bottom: 5px;
                display: block;
            }
            .field-value {
                background-color: #f8f9fa;
                padding: 10px 15px;
                border-left: 4px solid #007bff;
                border-radius: 4px;
                word-break: break-word;
            }
            .message-content {
                background-color: #fff3cd;
                border: 1px solid #ffeaa7;
                padding: 20px;
                border-radius: 6px;
                white-space: pre-wrap;
                font-family: Georgia, serif;
                line-height: 1.8;
            }
            .metadata {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #dee2e6;
                font-size: 14px;
                color: #6c757d;
            }
            .reply-info {
                background-color: #e7f3ff;
                border: 1px solid #b3d9ff;
                padding: 15px;
                border-radius: 6px;
                margin-top: 20px;
            }
            .reply-info strong {
                color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 New Portfolio Contact</h1>
                <p>You've received a new message through your portfolio contact form!</p>
            </div>
            
            <div class="field">
                <span class="field-label">👤 From:</span>
                <div class="field-value"><strong>${fullName}</strong></div>
            </div>
            
            <div class="field">
                <span class="field-label">📧 Email:</span>
                <div class="field-value"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></div>
            </div>
            
            <div class="field">
                <span class="field-label">📋 Subject:</span>
                <div class="field-value">${subject}</div>
            </div>
            
            <div class="field">
                <span class="field-label">💬 Message:</span>
                <div class="message-content">${message}</div>
            </div>
            
            <div class="reply-info">
                <strong>💡 Quick Reply:</strong> You can reply directly to this email to respond to ${fullName}.
            </div>
            
            <div class="metadata">
                <p><strong>📅 Received:</strong> ${new Date(
                  timestamp
                ).toLocaleString()}</p>
                <p><strong>🌐 IP Address:</strong> ${senderIP}</p>
                <p><strong>🔧 User Agent:</strong> ${
                  userAgent || 'Not provided'
                }</p>
            </div>
        </div>
    </body>
    </html>
  `;

  // Plain text version
  const text = `
NEW PORTFOLIO CONTACT
=====================

From: ${fullName}
Email: ${email}
Subject: ${subject}

Message:
--------
${message}

Metadata:
---------
Received: ${new Date(timestamp).toLocaleString()}
IP Address: ${senderIP}
User Agent: ${userAgent || 'Not provided'}

You can reply directly to this email to respond to the sender.
  `;

  return { html, text };
};
