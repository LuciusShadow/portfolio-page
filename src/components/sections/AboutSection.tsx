import { Code, Palette, ShieldCheck, Eye } from 'lucide-react';
import { getTexts } from '../../config/texts';
import type { Service } from '../../data/Service';
import saschaImage from '../../assets/sascha.png';

interface AboutSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  bio?: string[];
  profileImage?: string;
  featureCards?: Service[];
}

export default function AboutSection(props: AboutSectionProps = {}) {
  const texts = getTexts().about;

  // Use centralized texts as defaults, allow props to override
  const {
    name = texts.name,
    title = texts.title,
    subtitle = texts.subtitle,
    bio = texts.bio,
    profileImage = saschaImage,
    featureCards = [
      {
        icon: Code,
        title: "Web Development",
        description: "Building modern web applications with Angular and React frameworks, leveraging TypeScript and JavaScript for robust, scalable solutions.",
        colorClass: "primary"
      },
      {
        icon: Palette,
        title: "Responsive Design",
        description: "Creating pixel-perfect, responsive interfaces that work seamlessly across all devices and screen sizes.",
        colorClass: "secondary"
      },
      {
        icon: ShieldCheck,
        title: "Cross-Browser Compatibility",
        description: "Ensuring consistent user experiences across all major browsers with thorough testing and optimization.",
        colorClass: "tertiary"
      },
      {
        icon: Eye,
        title: "Web Accessibility",
        description: "Implementing accessibility best practices to deliver websites that support screen readers, keyboard navigation, and assistive technologies.",
        colorClass: "quaternary"
      }
    ]
  } = props;

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-section__container">
        {/* Section Header */}
        <header className="about-section__header">
          <h2 id="about-title" className="about-section__title">
            {title}
          </h2>
          <p className="about-section__subtitle">
            {subtitle}
          </p>
        </header>

        {/* Skip link for keyboard navigation */}
        <div className="about-section__skip">
          <a href="#features" className="sr-only sr-only-focusable">
            Skip to features section
          </a>
        </div>

        {/* Personal Photo and Bio */}
        <div className="about-section__content" role="main">
          <div className="about-section__image-wrapper">
            <img
              src={profileImage}
              alt={`Professional headshot of ${name}, Web Developer and Software Engineer`}
              className="about-section__image"
              loading="lazy"
            />
            <div className="about-section__image-overlay" aria-hidden="true"></div>
          </div>

          <div className="about-section__bio-section">
            <div className="about-section__bio-content">
              <h3 className="about-section__greeting">
                Hi, I'm {name}!
              </h3>
              <div className="about-section__bio-text">
                {bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div
          id="features"
          className="about-section__features"
          role="region"
          aria-labelledby="features-heading"
        >
          <h3 id="features-heading" className="sr-only">My Areas of Expertise</h3>

          <div className="about-section__features-grid">
            {featureCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <article
                  key={index}
                  className={`about-section__feature-card about-section__feature-card--${card.colorClass}`}
                  role="group"
                  aria-labelledby={`feature-${index}-title`}
                  aria-describedby={`feature-${index}-description`}
                >
                  <header className="about-section__feature-header">
                    <IconComponent
                      className={`about-section__feature-icon about-section__feature-icon--${card.colorClass}`}
                      aria-hidden="true"
                      role="img"
                      aria-label={`${card.title} icon`}
                    />
                    <h4
                      id={`feature-${index}-title`}
                      className={`about-section__feature-title about-section__feature-title--${card.colorClass}`}
                    >
                      {card.title}
                    </h4>
                  </header>
                  <div className="about-section__feature-content">
                    <p
                      id={`feature-${index}-description`}
                      className={`about-section__feature-description about-section__feature-description--${card.colorClass}`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Status indicator for screen readers */}
                  <div className="sr-only">
                    Expertise area {index + 1} of {featureCards.length}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}