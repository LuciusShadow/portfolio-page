import { Code, Palette, ShieldCheck } from 'lucide-react';
import type { SkillBadge } from '../../data/SkillBadge';
import type { FeatureCard } from '../../data/FeatureCard';
import saschaImage from '../../assets/sascha.png';

interface AboutSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  bio?: string;
  profileImage?: string;
  skillBadges?: SkillBadge[];
  featureCards?: FeatureCard[];
}

export default function AboutSection({
  name = "Sascha Bach",
  title = "About Me",
  subtitle = "Frontend developer specializing in modern web technologies. Since 2020, I've been building efficient, scalable solutions – from complex Angular applications to creative React projects. My focus is on clean, maintainable code that solves real-world problems.",
  bio = "As a dedicated frontend developer, I specialize in creating modern, responsive web applications using both Angular and React frameworks with TypeScript. I'm passionate about writing clean, maintainable code and ensuring exceptional user experiences across all devices and browsers. I have extensive experience with Angular and am actively developing my React expertise, while maintaining proficiency in SCSS, testing with Cypress, and working with XSLT templates.",
  profileImage = saschaImage,
  skillBadges = [
    { text: "Angular & React Developer", colorClass: "blue" },
    { text: "Responsive Design Expert", colorClass: "green" },
    { text: "Cross-Browser Compatible", colorClass: "purple" },
    { text: "Continuous Learner", colorClass: "orange" }
  ],
  featureCards = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building modern web applications with Angular and React frameworks, leveraging TypeScript and JavaScript for robust, scalable solutions.",
      colorClass: "blue"
    },
    {
      icon: Palette,
      title: "Responsive Design",
      description: "Creating pixel-perfect, responsive interfaces that work seamlessly across all devices and screen sizes.",
      colorClass: "purple"
    },
    {
      icon: ShieldCheck,
      title: "Cross-Browser Compatibility",
      description: "Ensuring consistent user experiences across all major browsers with thorough testing and optimization.",
      colorClass: "teal"
    }
  ]
}: AboutSectionProps) {
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
              alt={`${name} - Full Stack Developer`}
              className="about-section__image"
            />
            <div className="about-section__image-overlay"></div>
          </div>

          <div className="about-section__bio-section">
            <div className="about-section__bio-content">
              <h3 className="about-section__greeting">
                Hi, I'm {name}!
              </h3>
              <p className="about-section__bio-text">
                {bio}
              </p>
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