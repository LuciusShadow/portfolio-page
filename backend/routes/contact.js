import express from 'express';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// GDPR compliant rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 3 requests per windowMs
  message: {
    error: 'Too many contact requests from this IP, please try again later.',
    retryAfter: 15 * 60,
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// GDPR compliant validation
const validateContactForm = [
  body('firstName').trim().isLength({ min: 1, max: 50 }).escape(),
  body('lastName').trim().isLength({ min: 1, max: 50 }).escape(),
  body('email').trim().isEmail().normalizeEmail().isLength({ max: 254 }),
  body('subject').trim().isLength({ min: 1, max: 100 }).escape(),
  body('message').trim().isLength({ min: 10, max: 2000 }).escape(),
  body('gdprConsent').equals('true').withMessage('GDPR consent required'),
  body('website').optional().isEmpty(), // Honeypot
];

router.post('/', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data.',
        errors: errors.array(),
      });
    }

    const {
      firstName,
      lastName,
      email,
      subject,
      message,
      gdprConsent,
      website,
    } = req.body;

    // Honeypot check
    if (website) {
      console.warn('🚨 Spam detected:', req.ip);
      return res.status(400).json({
        success: false,
        message: 'Invalid submission detected.',
      });
    }

    // GDPR consent check
    if (gdprConsent !== 'true') {
      return res.status(400).json({
        success: false,
        message: 'GDPR consent required.',
      });
    }

    // Send email with minimal logging for GDPR
    await sendContactEmail({
      firstName,
      lastName,
      email,
      subject,
      message,
      senderIP: req.ip,
      userAgent: req.get('User-Agent'),
    });

    res.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    });
  } catch (error) {
    console.error('❌ Contact error:', error.message); // No personal data in logs
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
});

export { router as contactRouter };
