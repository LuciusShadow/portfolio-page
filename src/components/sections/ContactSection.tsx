import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { personalConfig, getObfuscatedEmail, createEmailLink } from '../../config/personal';

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
      return;
    }

    // Prevent rapid submissions
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    
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
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Formspree (replace YOUR_FORM_ID with actual ID from Formspree)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          subject: data.subject || 'Contact from Portfolio',
          message: data.message,
          _replyto: data.email, // This tells Formspree what email to reply to
        }),
      });

      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        e.currentTarget.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
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
