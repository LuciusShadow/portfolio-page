import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { personalConfig, getObfuscatedEmail } from '../../config/personal';
import { getTexts } from '../../config/texts';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  connectTitle?: string;
  connectDescription?: string;
  buttonText?: string;
  socialTitle?: string;
  availabilityText?: string;
  responseTimeLabel?: string;
  responseTimeValue?: string;
  preferredContactLabel?: string;
  preferredContactValue?: string;
  locationLabel?: string;
  locationValue?: string;
}

// TODO Create contact form with backend access
export default function ContactSection(props: ContactSectionProps = {}) {
  const texts = getTexts().contact;

  // Use centralized texts as defaults, allow props to override
  const {
    title = texts.title,
    subtitle = texts.subtitle,
    connectTitle = texts.connectTitle,
    connectDescription = texts.connectDescription,
    buttonText = texts.buttonText,
    socialTitle = texts.socialTitle,
    availabilityText = texts.availabilityText,
    responseTimeLabel = texts.responseTimeLabel,
    responseTimeValue = texts.responseTimeValue,
    preferredContactLabel = texts.preferredContactLabel,
    preferredContactValue = texts.preferredContactValue,
    locationLabel = texts.locationLabel,
    locationValue = texts.locationValue,
  } = props;

  // Create email link with pre-filled subject and body
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Portfolio Inquiry - Let's discuss my project");
    const body = encodeURIComponent("Hello Sascha,\n\nI visited your portfolio and would like to discuss a potential project or collaboration.\n\nBest regards,");
    window.location.href = `mailto:info@sascha-bach.de?subject=${subject}&body=${body}`;
  };

  // Replace the hardcoded email with obfuscated construction
  const getEmailAddress = () => {
    const parts = ['freelancer', 'sascha-bach', 'de'];
    return parts[0] + '@' + parts[1] + '.' + parts[2];
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
          {/* Let's Connect Card */}
          <div className="contact-section__connect-card">
            <div className="contact-section__connect-header">
              <Mail className="contact-section__email-icon" />
              <div className="contact-section__connect-text">
                <h3 className="contact-section__email-title">{connectTitle}</h3>
                <p className="contact-section__email-description">
                  {connectDescription}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const email = getEmailAddress();
                const subject = encodeURIComponent("Portfolio Inquiry - Let's discuss your project");
                const body = encodeURIComponent("Hello Sascha,\n\nI visited your portfolio and would like to discuss a potential project or collaboration.\n\nBest regards,");
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
              className="contact-section__email-button"
              type="button"
            >
              <Send className="contact-section__button-icon" />
              <span className="contact-section__button-text">
                {buttonText}
              </span>
            </button>
          </div>

          {/* Contact Info Sidebar */}
          <div className="contact-section__sidebar">
            <div className="contact-section__info-card">
              <div className="contact-section__availability">
                <div className="contact-section__status-indicator"></div>
                <span className="contact-section__status-text">{availabilityText}</span>
              </div>

              <div className="contact-section__quick-facts">
                <div className="contact-section__fact">
                  <span className="contact-section__fact-label">{responseTimeLabel}</span>
                  <span className="contact-section__fact-value">{responseTimeValue}</span>
                </div>
                <div className="contact-section__fact">
                  <span className="contact-section__fact-label">{preferredContactLabel}</span>
                  <span className="contact-section__fact-value">{preferredContactValue}</span>
                </div>
                <div className="contact-section__fact">
                  <span className="contact-section__fact-label">{locationLabel}</span>
                  <span className="contact-section__fact-value">{locationValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Contact Methods - Below connect card but same width */}
          <div className="contact-section__social-card">
            <h4 className="contact-section__social-title">{socialTitle}</h4>
            <div className="contact-section__social-list">
              <div className="contact-section__detail-item">
                <button
                  className="contact-section__social-button contact-section__social-button--email"
                  onClick={handleEmailClick}
                  aria-label="Send Email"
                >
                  <Mail className="contact-section__social-icon" />
                </button>
                <span className="contact-section__detail-text">{getObfuscatedEmail()}</span>
              </div>
              <div className="contact-section__detail-item">
                <button
                  className="contact-section__social-button contact-section__social-button--github"
                  onClick={() => window.open(personalConfig.social.github.url, '_blank')}
                  aria-label="GitHub Profile"
                >
                  <Github className="contact-section__social-icon" />
                </button>
                <span className="contact-section__detail-text">{personalConfig.social.github.username}</span>
              </div>
              <div className="contact-section__detail-item">
                <button
                  className="contact-section__social-button contact-section__social-button--linkedin"
                  onClick={() => window.open(personalConfig.social.linkedin.url, '_blank')}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="contact-section__social-icon" />
                </button>
                <span className="contact-section__detail-text">{personalConfig.social.linkedin.username}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
