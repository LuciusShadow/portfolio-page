// Request logging middleware
export const requestLogger = (req, res, next) => {
  const start = Date.now();

  // Log request
  console.log(`📥 ${req.method} ${req.url}`, {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    timestamp: new Date().toISOString(),
  });

  // Log response when finished
  res.on('finish', () => {
    const duration = Date.now() - start;
    const statusEmoji = res.statusCode >= 400 ? '❌' : '✅';

    console.log(
      `📤 ${statusEmoji} ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`
    );
  });

  next();
};
