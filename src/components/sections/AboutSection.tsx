import { Code, Palette, ShieldCheck, Eye } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import FeatureCardsGrid from '../FeatureCardsGrid';
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
  const { texts: allTexts } = useLanguage();
  const texts = allTexts.about;
  const accessibilityTexts = allTexts.accessibility;

  // Use centralized texts as defaults, allow props to override
  const {
    name = texts.name,
    title = texts.title,
    subtitle = texts.subtitle,
    bio = texts.bio,
    profileImage = saschaImage,
    featureCards = texts.featureCards.map((card, index) => ({
      icon: [Code, Palette, ShieldCheck, Eye][index] || Code,
      title: card.title,
      description: card.description,
      colorClass: (["primary", "secondary", "tertiary", "quaternary"][index] || "primary") as "primary" | "secondary" | "tertiary" | "quaternary"
    }))
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
          <a href="#services" className="sr-only sr-only-focusable">
            {accessibilityTexts.skipLinks.skipToServices}
          </a>
        </div>

        {/* Personal Photo and Bio */}
        <main className="about-section__content" role="main">
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
                {bio.map((paragraph) => (
                  <p key={paragraph.substring(0, 50)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Feature Cards Grid */}
        <FeatureCardsGrid featureCards={featureCards} />
      </div>
    </section >
  );
}