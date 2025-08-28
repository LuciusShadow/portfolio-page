import Joi from 'joi';

// Validation schema for contact form
const contactSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s\-']+$/)
    .required()
    .messages({
      'string.empty': 'First name is required',
      'string.min': 'First name must be at least 1 character long',
      'string.max': 'First name cannot exceed 50 characters',
      'string.pattern.base':
        'First name can only contain letters, spaces, hyphens, and apostrophes',
    }),

  lastName: Joi.string()
    .trim()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s\-']+$/)
    .required()
    .messages({
      'string.empty': 'Last name is required',
      'string.min': 'Last name must be at least 1 character long',
      'string.max': 'Last name cannot exceed 50 characters',
      'string.pattern.base':
        'Last name can only contain letters, spaces, hyphens, and apostrophes',
    }),

  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .max(254)
    .required()
    .messages({
      'string.email': 'Please provide a valid email address',
      'string.empty': 'Email address is required',
      'string.max': 'Email address is too long',
    }),

  subject: Joi.string().trim().max(200).allow('').messages({
    'string.max': 'Subject cannot exceed 200 characters',
  }),

  message: Joi.string().trim().min(10).max(5000).required().messages({
    'string.empty': 'Message is required',
    'string.min': 'Message must be at least 10 characters long',
    'string.max': 'Message cannot exceed 5000 characters',
  }),

  // Honeypot field (should be empty)
  website: Joi.string().allow('').max(0).messages({
    'string.max': 'Invalid form submission',
  }),
});

// Validation middleware
export const validateContactForm = (req, res, next) => {
  const { error, value } = contactSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  });

  if (error) {
    const errors = error.details.map((detail) => ({
      field: detail.path[0],
      message: detail.message,
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  // Replace req.body with validated and sanitized data
  req.body = value;
  next();
};
