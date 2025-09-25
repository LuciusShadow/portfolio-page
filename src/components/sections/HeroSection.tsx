import { Download } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { StatItem } from '../../data/StatItem';
import { scrollToProjects } from '../../utils/scrollUtils';
import { getTexts } from '../../config/texts';

interface HeroSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
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
    statItems = texts.statItems,
  } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewWork = () => {
    scrollToProjects(location.pathname, navigate);
  };

  const handleDownloadResume = () => {
    // Add your resume download logic here
    console.log('Download resume clicked');
  };
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <h1 className="hero-section__title">{title}</h1>
        <p className="hero-section__description">
          {description}
        </p>
        <div className="hero-section__buttons">
          <button
            className="hero-section__button hero-section__button--primary"
            onClick={handleViewWork}
          >
            {primaryButtonText}
          </button>
          <button
            className="hero-section__button hero-section__button--secondary"
            onClick={handleDownloadResume}
          >
            <Download className="hero-section__button-icon" />
            {secondaryButtonText}
          </button>
        </div>
        <div className="hero-section__stats">
          {statItems.map((item, index) => (
            <div key={item.label} className={`hero-section__stat-item hero-section__stat-item--${index + 1}`}>
              <span className="hero-section__stat-value">{item.value}</span>
              <span className="hero-section__stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}