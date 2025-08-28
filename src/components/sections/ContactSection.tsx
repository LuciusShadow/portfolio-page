import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { personalConfig, getObfuscatedEmail, createEmailLink } from '../../config/personal';
import { getApiUrl, ENDPOINTS } from '../../config/api';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  connectTitle?: string;
  connectDescription?: string;
}

// TODO Create Backend API for handling form submissions securely
export default function ContactSection({
  title = "Get In Touch",
  subtitle = "Let's discuss your next project or collaboration opportunity",
  github = personalConfig.social.github.username,
  connectTitle = "Let's Connect",
  connectDescription = "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!"
}: ContactSectionProps) {
  // Anti-spam honeypot state
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Email obfuscation function using config
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = createEmailLink();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot - if filled, it's likely spam
    if (honeypot) {
      console.warn('Spam detected - honeypot field was filled');
      setFormStatus({
        type: 'error',
        message: 'Invalid form submission detected.'
      });
      setIsSubmitting(false);
      return;
    }

    // Prevent rapid submissions
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' }); // Clear previous status

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to your own backend API
      const apiUrl = `${getApiUrl()}${ENDPOINTS.contact}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          subject: data.subject || 'Contact from Portfolio',
          message: data.message,
          website: honeypot, // Include honeypot for spam detection
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: 'success',
          message: result.message
        });
        e.currentTarget.reset();
        setHoneypot(''); // Reset honeypot

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ type: null, message: '' });
        }, 5000);
      } else {
        // Handle different types of server errors
        let errorMessage = 'Form submission failed';

        if (response.status === 400) {
          if (result.errors && Array.isArray(result.errors)) {
            // Validation errors from server
            const validationErrors = result.errors.map((err: any) =>
              typeof err === 'object' ? err.message : err
            ).join(', ');
            errorMessage = `Validation errors: ${validationErrors}`;
          } else if (result.message) {
            errorMessage = result.message;
          } else {
            errorMessage = 'Please check your form data and try again.';
          }
        } else if (response.status === 429) {
          errorMessage = 'Too many requests. Please wait a moment and try again.';
        } else if (response.status === 500) {
          errorMessage = 'Server error. Our team has been notified. Please try again later.';
        } else if (result.message) {
          errorMessage = result.message;
        }

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Form submission error:', error);

      let userMessage = 'Sorry, there was an error sending your message.';

      if (error instanceof Error) {
        // Network errors
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          userMessage = 'Network error: Please check your internet connection and try again.';
        }
        // Timeout errors
        else if (error.message.includes('timeout')) {
          userMessage = 'Request timeout: The server is taking too long to respond. Please try again.';
        }
        // CORS errors
        else if (error.message.includes('CORS')) {
          userMessage = 'Connection error: Please refresh the page and try again.';
        }
        // Server validation errors or custom error messages
        else if (error.message.length > 0 && !error.message.includes('Form submission failed')) {
          userMessage = error.message;
        }
        // Generic fallback
        else {
          userMessage = 'Unexpected error occurred. Please try again or contact us directly.';
        }
      }

      setFormStatus({
        type: 'error',
        message: userMessage
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">
        {/* Section Header */}
        <div className="contact-section__header">
          <h2 className="contact-section__title">
            {title}
          </h2>
          <p className="contact-section__subtitle">
            {subtitle}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-section__grid">
          {/* Contact Info */}
          <div className="contact-section__info">
            <div className="contact-section__connect">
              <h3 className="contact-section__connect-title">{connectTitle}</h3>
              <p className="contact-section__connect-description">
                {connectDescription}
              </p>
            </div>

            <div className="contact-section__details">
              <div className="contact-section__detail-item">
                <Mail className="contact-section__detail-icon" />
                <span className="contact-section__detail-text">{getObfuscatedEmail()}</span>
              </div>
              <div className="contact-section__detail-item">
                <Github className="contact-section__detail-icon" />
                <span className="contact-section__detail-text">{github}</span>
              </div>
              <div className="contact-section__detail-item">
                <Linkedin className="contact-section__detail-icon" />
                <span className="contact-section__detail-text">{personalConfig.social.linkedin.username}</span>
              </div>
            </div>

            <div className="contact-section__social">
              <button
                className="contact-section__social-button"
                onClick={() => window.open(personalConfig.social.github.url, '_blank')}
                aria-label="GitHub Profile"
              >
                <Github className="contact-section__social-icon" />
              </button>
              <button
                className="contact-section__social-button"
                onClick={() => window.open(personalConfig.social.linkedin.url, '_blank')}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="contact-section__social-icon" />
              </button>
              <button
                className="contact-section__social-button"
                onClick={handleEmailClick}
                aria-label="Send Email"
              >
                <Mail className="contact-section__social-icon" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-section__form-card">
            <div className="contact-section__form-header">
              <h3 className="contact-section__form-title">Send a Message</h3>
              <p className="contact-section__form-description">
                I'll get back to you as soon as possible
              </p>
            </div>

            {/* Status Message Display */}
            {formStatus.type && (
              <div className={`contact-section__status contact-section__status--${formStatus.type}`}>
                <p className="contact-section__status-message">
                  {formStatus.message}
                </p>
              </div>
            )}

            <form className="contact-section__form" onSubmit={handleSubmit}>
              {/* Honeypot field - hidden from users but visible to bots */}
              <div className="contact-section__honeypot">
                <label htmlFor="website" className="contact-section__honeypot-label">
                  Website (leave blank)
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="contact-section__honeypot-input"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="contact-section__form-row">
                <div className="contact-section__form-group">
                  <label htmlFor="firstName" className="contact-section__form-label">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    className="contact-section__form-input"
                    required
                  />
                </div>
                <div className="contact-section__form-group">
                  <label htmlFor="lastName" className="contact-section__form-label">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className="contact-section__form-input"
                    required
                  />
                </div>
              </div>

              <div className="contact-section__form-group">
                <label htmlFor="email" className="contact-section__form-label">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="contact-section__form-input"
                  required
                />
              </div>

              <div className="contact-section__form-group">
                <label htmlFor="subject" className="contact-section__form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="contact-section__form-input"
                />
              </div>

              <div className="contact-section__form-group">
                <label htmlFor="message" className="contact-section__form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="contact-section__form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-section__form-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
