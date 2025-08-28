# Portfolio Backend API

A secure Node.js backend API for handling contact form submissions from your portfolio website.

## Features

- 🔒 **Security**: Rate limiting, CORS protection, input validation, spam protection
- 📧 **Email Integration**: Nodemailer with Gmail/SMTP support
- ✅ **Validation**: Comprehensive form validation with Joi
- 🚀 **Performance**: Express.js with async error handling
- 🛡️ **Anti-Spam**: Honeypot fields and rate limiting
- 📝 **Logging**: Request/response logging and error tracking
- 🎨 **Email Templates**: Professional HTML email templates

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Copy the example environment file and configure your settings:

```bash
cp .env.example .env
```

Edit `.env` with your actual configuration:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Email Configuration (Gmail example)
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Recipient Configuration
RECIPIENT_EMAIL=your-email@gmail.com
RECIPIENT_NAME=Your Name

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 3. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this as `EMAIL_PASS` in your `.env` file

### 4. Alternative Email Providers

**Outlook/Hotmail:**

```env
EMAIL_SERVICE=hotmail
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

**Custom SMTP:**

```env
EMAIL_SERVICE=
EMAIL_HOST=your-smtp-host.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

### 5. Run the Server

**Development:**

```bash
npm run dev
```

**Production:**

```bash
npm start
```

### 6. Test the API

Visit: `http://localhost:3001/health` to verify the server is running.

For development, you can test the contact endpoint: `http://localhost:3001/api/contact/test`

## API Endpoints

### Health Check

- **GET** `/health` - Server health status

### Contact Form

- **POST** `/api/contact` - Send contact email

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Your message has been sent successfully! I'll get back to you soon."
}
```

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Joi schema validation for all fields
- **CORS Protection**: Configurable origin restrictions
- **Helmet Security**: Security headers
- **Honeypot Anti-Spam**: Hidden field detection
- **Request Logging**: IP and user agent tracking

## Deployment Options

### 1. Heroku

```bash
# Install Heroku CLI, then:
heroku create your-portfolio-api
heroku config:set NODE_ENV=production
heroku config:set EMAIL_USER=your-email@gmail.com
# ... set other environment variables
git push heroku main
```

### 2. Railway

```bash
# Install Railway CLI, then:
railway login
railway new
railway add
railway up
```

### 3. DigitalOcean App Platform

- Create new app from GitHub repository
- Set environment variables in the dashboard
- Deploy automatically

### 4. Vercel (Serverless)

- Convert Express app to serverless functions
- Deploy with `vercel` CLI

## Environment Variables Reference

| Variable                  | Description                 | Example                |
| ------------------------- | --------------------------- | ---------------------- |
| `PORT`                    | Server port                 | `3001`                 |
| `NODE_ENV`                | Environment                 | `production`           |
| `EMAIL_SERVICE`           | Email service provider      | `gmail`                |
| `EMAIL_HOST`              | SMTP host                   | `smtp.gmail.com`       |
| `EMAIL_PORT`              | SMTP port                   | `587`                  |
| `EMAIL_SECURE`            | Use SSL/TLS                 | `false`                |
| `EMAIL_USER`              | Email username              | `your@gmail.com`       |
| `EMAIL_PASS`              | Email password/app password | `app-password`         |
| `RECIPIENT_EMAIL`         | Where to send emails        | `your@gmail.com`       |
| `RECIPIENT_NAME`          | Recipient display name      | `Your Name`            |
| `FRONTEND_URL`            | Frontend URL for CORS       | `https://yoursite.com` |
| `RATE_LIMIT_WINDOW_MS`    | Rate limit window           | `900000` (15 min)      |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window     | `5`                    |

## Troubleshooting

### Email Not Sending

1. Check Gmail app password is correct
2. Verify 2FA is enabled on Gmail
3. Check console logs for detailed errors
4. Test with `/health` endpoint first

### CORS Issues

1. Verify `FRONTEND_URL` matches your frontend domain exactly
2. Include protocol (http/https) in the URL
3. No trailing slashes

### Rate Limiting

- Default: 5 requests per 15 minutes per IP
- Adjust `RATE_LIMIT_*` variables as needed
- Check IP address in logs for debugging

## Production Checklist

- [ ] Environment variables configured
- [ ] Email service tested
- [ ] Rate limiting configured
- [ ] CORS origins restricted
- [ ] SSL/HTTPS enabled
- [ ] Error monitoring setup
- [ ] Logs configured
- [ ] Backup strategy in place

## Support

If you encounter issues:

1. Check the console logs
2. Verify your `.env` configuration
3. Test email configuration with `/health` endpoint
4. Ensure your email provider allows SMTP access
