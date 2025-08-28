// Error handling middleware

export const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    timestamp: new Date().toISOString(),
  });

  // Default error
  let error = {
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && {
      error: err.message,
      stack: err.stack,
    }),
  };

  // Rate limit error
  if (err.status === 429) {
    error = {
      success: false,
      message: 'Too many requests. Please try again later.',
      retryAfter: err.retryAfter,
    };
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    error = {
      success: false,
      message: 'Validation failed',
      errors: Object.values(err.errors).map((e) => e.message),
    };
  }

  // JSON parsing errors
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    error = {
      success: false,
      message: 'Invalid JSON in request body',
    };
  }

  res.status(err.status || 500).json(error);
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.url} not found`,
    availableRoutes: {
      'GET /health': 'Health check endpoint',
      'POST /api/contact': 'Send contact form email',
      ...(process.env.NODE_ENV === 'development' && {
        'GET /api/contact/test': 'Test contact API (development only)',
      }),
    },
  });
};
