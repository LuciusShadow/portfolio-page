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

export default function ContactSection(props: ContactSectionProps = {}) {
  const texts = getTexts().contact;

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

  // Enhanced email handler with better accessibility
  const handleEmailClick = () => {
    const email = getEmailAddress();
    const subject = encodeURIComponent("Portfolio Inquiry - Let's discuss your project");
    const body = encodeURIComponent("Hello Sascha,\n\nI visited your portfolio and would like to discuss a potential project or collaboration.\n\nBest regards,");

    // Announce action to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('class', 'sr-only');
    announcement.textContent = 'Opening email client with pre-filled message';
    document.body.appendChild(announcement);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const getEmailAddress = () => {
    const parts = ['freelancer', 'sascha-bach', 'de'];
    return parts[0] + '@' + parts[1] + '.' + parts[2];
  };

  // Enhanced social link handler with announcements
  const handleSocialClick = (platform: string, url: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('class', 'sr-only');
    announcement.textContent = `Opening ${platform} profile in new tab`;
    document.body.appendChild(announcement);

    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-section__container">
        {/* Section Header */}
        <header className="contact-section__header">
          <h2 id="contact-title" className="contact-section__title">
            {title}
          </h2>
          <p className="contact-section__subtitle">
            {subtitle}
          </p>
        </header>

        {/* Skip link for keyboard navigation */}
        <div className="contact-section__skip">
          <a href="#contact-form" className="sr-only sr-only-focusable">
            Skip to contact form
          </a>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-section__grid" role="main">
          {/* Let's Connect Card */}
          <div className="contact-section__connect-card" role="region" aria-labelledby="connect-heading">
            <div className="contact-section__connect-header">
              <Mail
                className="contact-section__email-icon"
                aria-hidden="true"
                role="img"
                aria-label="Email icon"
              />
              <div className="contact-section__connect-text">
                <h3 id="connect-heading" className="contact-section__email-title">
                  {connectTitle}
                </h3>
                <p className="contact-section__email-description">
                  {connectDescription}
                </p>
              </div>
            </div>

            <button
              onClick={handleEmailClick}
              className="contact-section__email-button"
              type="button"
              aria-describedby="email-button-description"
            >
              <Send className="contact-section__button-icon" aria-hidden="true" />
              <span className="contact-section__button-text">
                {buttonText}
              </span>
            </button>

            {/* Hidden description for screen readers */}
            <div id="email-button-description" className="sr-only">
              This button will open your default email client with a pre-filled message to {getEmailAddress()}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <aside className="contact-section__sidebar" aria-labelledby="info-heading">
            <div className="contact-section__info-card">
              <h3 id="info-heading" className="sr-only">Contact Information</h3>

              <div className="contact-section__availability" role="status" aria-live="polite">
                <div
                  className="contact-section__status-indicator"
                  aria-hidden="true"
                  role="img"
                  aria-label="Available status indicator"
                ></div>
                <span className="contact-section__status-text">{availabilityText}</span>
              </div>

              <div className="contact-section__quick-facts">
                <dl className="contact-section__fact-list">
                  <div className="contact-section__fact">
                    <dt className="contact-section__fact-label">{responseTimeLabel}</dt>
                    <dd className="contact-section__fact-value">{responseTimeValue}</dd>
                  </div>
                  <div className="contact-section__fact">
                    <dt className="contact-section__fact-label">{preferredContactLabel}</dt>
                    <dd className="contact-section__fact-value">{preferredContactValue}</dd>
                  </div>
                  <div className="contact-section__fact">
                    <dt className="contact-section__fact-label">{locationLabel}</dt>
                    <dd className="contact-section__fact-value">{locationValue}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>

          {/* Social Contact Methods */}
          <div className="contact-section__social-card" role="region" aria-labelledby="social-heading">
            <h4 id="social-heading" className="contact-section__social-title">{socialTitle}</h4>
            <div className="contact-section__social-list" role="list">

              <div className="contact-section__detail-item" role="listitem">
                <button
                  className="contact-section__social-button contact-section__social-button--email"
                  onClick={handleEmailClick}
                  aria-label={`Send email to ${getObfuscatedEmail()}`}
                  type="button"
                >
                  <Mail className="contact-section__social-icon" aria-hidden="true" />
                </button>
                <span className="contact-section__detail-text" aria-label="Email address">
                  {getObfuscatedEmail()}
                </span>
              </div>

              <div className="contact-section__detail-item" role="listitem">
                <button
                  className="contact-section__social-button contact-section__social-button--github"
                  onClick={() => handleSocialClick('GitHub', personalConfig.social.github.url)}
                  aria-label={`Visit GitHub profile: ${personalConfig.social.github.username} (opens in new tab)`}
                  type="button"
                >
                  <Github className="contact-section__social-icon" aria-hidden="true" />
                </button>
                <span className="contact-section__detail-text" aria-label="GitHub username">
                  {personalConfig.social.github.username}
                </span>
              </div>

              <div className="contact-section__detail-item" role="listitem">
                <button
                  className="contact-section__social-button contact-section__social-button--linkedin"
                  onClick={() => handleSocialClick('LinkedIn', personalConfig.social.linkedin.url)}
                  aria-label={`Visit LinkedIn profile: ${personalConfig.social.linkedin.username} (opens in new tab)`}
                  type="button"
                >
                  <Linkedin className="contact-section__social-icon" aria-hidden="true" />
                </button>
                <span className="contact-section__detail-text" aria-label="LinkedIn username">
                  {personalConfig.social.linkedin.username}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
