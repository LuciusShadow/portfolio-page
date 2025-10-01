import { Code, Palette, ShieldCheck, Eye } from 'lucide-react';
import { getTexts } from '../../config/texts';
import type { SkillBadge } from '../../data/SkillBadge';
import type { Service } from '../../data/Service';
import saschaImage from '../../assets/sascha.png';

interface AboutSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  bio?: string[];
  profileImage?: string;
  skillBadges?: SkillBadge[];
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
    skillBadges = [
      { text: "Angular & React Developer", colorClass: "primary" },
      { text: "Responsive Design Expert", colorClass: "secondary" },
      { text: "Cross-Browser Compatible", colorClass: "tertiary" },
      { text: "Continuous Learner", colorClass: "quaternary" }
    ],
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
    <section id="about" className="about-section">
      <div className="about-section__container">
        {/* Section Header */}
        <div className="about-section__header">
          <h2 className="about-section__title">
            {title}
          </h2>
          <p className="about-section__subtitle">
            {subtitle}
          </p>
        </div>

        {/* Personal Photo and Bio */}
        <div className="about-section__content">
          <div className="about-section__image-wrapper">
            <img
              src={profileImage}
              alt={`${name} - Web Developer`}
              className="about-section__image"
            />
            <div className="about-section__image-overlay"></div>
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

            <div className="about-section__skill-badges">
              {skillBadges.map((badge, index) => (
                <span
                  key={index}
                  className={`about-section__skill-badge about-section__skill-badge--${badge.colorClass}`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="about-section__features">
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`about-section__feature-card about-section__feature-card--${card.colorClass}`}
              >
                <div className="about-section__feature-header">
                  <IconComponent className={`about-section__feature-icon about-section__feature-icon--${card.colorClass}`} />
                  <h3 className={`about-section__feature-title about-section__feature-title--${card.colorClass}`}>
                    {card.title}
                  </h3>
                </div>
                <div className="about-section__feature-content">
                  <p className={`about-section__feature-description about-section__feature-description--${card.colorClass}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}