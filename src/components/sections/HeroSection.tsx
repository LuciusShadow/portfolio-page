import { Download } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { StatItem } from '../../data/StatItem';
import { scrollToProjects } from '../../utils/scrollUtils';
import { getTexts } from '../../config/texts';
import resumePDF from '../../assets/CV_Sascha_Bach.pdf';

interface HeroSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  tertiaryButtonText?: string;
  statItems?: StatItem[];
}

export default function HeroSection(props: HeroSectionProps = {}) {
  const texts = getTexts().hero;

  // Use centralized texts as defaults, allow props to override
  const {
    title = texts.title,
    description = texts.description,
    primaryButtonText = texts.primaryButtonText,
    secondaryButtonText = texts.secondaryButtonText,
    tertiaryButtonText = texts.tertiaryButtonText,
    statItems = texts.statItems,
  } = props;
  const location = useLocation();
  const navigate = useNavigate();

  // Enhanced announcement function for screen readers
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.setAttribute('class', 'sr-only');
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => {
      announcement.remove();
    }, 1000);
  };

  const handleViewWork = () => {
    announceToScreenReader('Navigating to projects section');
    scrollToProjects(location.pathname, navigate);
  };

  const handleDownloadResume = () => {
    try {
      announceToScreenReader('Starting resume download');

      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'CV_Sascha_Bach.pdf'; // Specify the filename for download
      link.target = '_blank'; // Optional: open in new tab as fallback

      // Temporarily add to DOM and trigger click
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.remove();

      console.log('✅ Resume download initiated');
      announceToScreenReader('Resume download started successfully');
    } catch (error) {
      console.error('❌ Error downloading resume:', error);
      announceToScreenReader('Resume download failed, opening in new tab');

      // Fallback: open in new tab if download fails
      try {
        window.open(resumePDF, '_blank');
      } catch (fallbackError) {
        console.error('❌ Fallback method also failed:', fallbackError);
        announceToScreenReader('Unable to access resume file');
      }
    }
  };

  const handleGetInTouch = () => {
    announceToScreenReader('Navigating to contact section');
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__container">
        {/* Skip link for keyboard navigation */}
        <div className="hero-section__skip">
          <a href="#about" className="sr-only sr-only-focusable">
            Skip to about section
          </a>
        </div>

        <header className="hero-section__header">
          <h1 id="hero-title" className="hero-section__title">{title}</h1>
          <p className="hero-section__description">
            {description}
          </p>
        </header>

        <nav className="hero-section__buttons" role="navigation" aria-label="Main actions">
          <button
            className="hero-section__button hero-section__button--primary"
            onClick={handleViewWork}
            aria-label="View my work and projects"
            type="button"
          >
            {primaryButtonText}
          </button>
          <button
            className="hero-section__button hero-section__button--secondary"
            onClick={handleDownloadResume}
            aria-label="Download my resume as PDF file"
            type="button"
            aria-describedby="resume-description"
          >
            <Download className="hero-section__button-icon" aria-hidden="true" />
            {secondaryButtonText}
          </button>
          <button
            className="hero-section__button hero-section__button--tertiary"
            onClick={handleGetInTouch}
            aria-label="Navigate to contact section to get in touch"
            type="button"
          >
            {tertiaryButtonText}
          </button>
        </nav>

        {/* Hidden descriptions for screen readers */}
        <div id="resume-description" className="sr-only">
          This will download my current resume in PDF format
        </div>

        <aside className="hero-section__stats" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Professional Statistics</h2>
          {statItems.map((item, index) => (
            <div
              key={item.label}
              className={`hero-section__stat-item hero-section__stat-item--${index + 1}`}
              aria-labelledby={`stat-${index}-label`}
            >
              <span
                className="hero-section__stat-value"
                aria-describedby={`stat-${index}-label`}
              >
                {item.value}
              </span>
              <span
                id={`stat-${index}-label`}
                className="hero-section__stat-label"
              >
                {item.label}
              </span>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
}