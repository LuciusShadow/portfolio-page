import express from 'express';
import { sendContactEmail } from '../services/emailService.js';
import { validateContactForm } from '../middleware/validation.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = express.Router();

// POST /api/contact - Send contact form email
router.post(
  '/',
  validateContactForm,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    // Check for honeypot (if present in body)
    if (req.body.website && req.body.website.trim() !== '') {
      console.warn('Spam detected: honeypot field filled', {
        ip: req.ip,
        email,
      });
      return res.status(400).json({
        success: false,
        message: 'Invalid form submission detected.',
      });
    }

    try {
      // Send the email
      await sendContactEmail({
        firstName,
        lastName,
        email,
        subject: subject || 'New Portfolio Contact',
        message,
        senderIP: req.ip,
        userAgent: req.get('User-Agent'),
      });

      console.log('Contact email sent successfully', {
        from: email,
        name: `${firstName} ${lastName}`,
        subject: subject || 'New Portfolio Contact',
        ip: req.ip,
      });

      res.json({
        success: true,
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });
    } catch (error) {
      console.error('Failed to send contact email:', error);

      res.status(500).json({
        success: false,
        message:
          'Sorry, there was an error sending your message. Please try again later.',
      });
    }
  })
);

// GET /api/contact/test - Test endpoint (development only)
if (process.env.NODE_ENV === 'development') {
  router.get('/test', (req, res) => {
    res.json({
      message: 'Contact API is working!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });
  });
}

export { router as contactRouter };
