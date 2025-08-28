import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalConfig, createEmailLink } from '../../config/personal';

export default function Footer() {
  // Email obfuscation function using config
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = createEmailLink();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__separator"></div>

        <div className="footer__content">
          <div className="footer__bottom-row">
            <Link to="/imprint" className="footer__link">
              Impressum
            </Link>
            <div className="footer__copyright">
              © {new Date().getFullYear()} {personalConfig.name}. All rights reserved.
            </div>
          </div>

          <div className="footer__social">
            <button
              className="footer__social-button"
              onClick={() => window.open(personalConfig.social.github.url, '_blank')}
              aria-label="GitHub Profile"
            >
              <Github className="footer__social-icon" />
            </button>

            <button
              className="footer__social-button"
              onClick={() => window.open(personalConfig.social.linkedin.url, '_blank')}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="footer__social-icon" />
            </button>

            <button
              className="footer__social-button"
              onClick={handleEmailClick}
              aria-label="Send Email"
            >
              <Mail className="footer__social-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}