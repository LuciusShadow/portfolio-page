import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalConfig, createEmailLink } from '../../config/personal';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { texts } = useLanguage();
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
              {texts.footer.imprintText}
            </Link>
            <div className="footer__copyright">
              © {new Date().getFullYear()} {personalConfig.name}. {texts.footer.copyrightText}
            </div>
          </div>

          <div className="footer__social">
            <button
              className="footer__social-button"
              onClick={() => window.open(personalConfig.social.github.url, '_blank')}
              aria-label={texts.footer.githubAriaLabel}
            >
              <Github className="footer__social-icon" />
            </button>

            <button
              className="footer__social-button"
              onClick={() => window.open(personalConfig.social.linkedin.url, '_blank')}
              aria-label={texts.footer.linkedinAriaLabel}
            >
              <Linkedin className="footer__social-icon" />
            </button>

            <button
              className="footer__social-button"
              onClick={handleEmailClick}
              aria-label={texts.footer.emailAriaLabel}
            >
              <Mail className="footer__social-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}