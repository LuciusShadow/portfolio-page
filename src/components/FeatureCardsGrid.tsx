import type { Service } from '../data/Service';

interface FeatureCardsGridProps {
  featureCards: Service[];
}

export default function FeatureCardsGrid({ featureCards }: FeatureCardsGridProps) {
  return (
    <div
      id="features"
      className="about-section__features"
      aria-labelledby="features-heading"
    >
      <h3 id="features-heading" className="sr-only">My Areas of Expertise</h3>

      <div className="about-section__features-grid">
        {featureCards.map((card, index) => {
          const IconComponent = card.icon;
          const cardId = card.title.toLowerCase().replaceAll(/\s+/g, '-');
          return (
            <article
              key={cardId}
              className={`about-section__feature-card about-section__feature-card--${card.colorClass}`}
              aria-labelledby={`feature-${cardId}-title`}
              aria-describedby={`feature-${cardId}-description`}
            >
              <header className="about-section__feature-header">
                <IconComponent
                  className={`about-section__feature-icon about-section__feature-icon--${card.colorClass}`}
                  aria-hidden="true"
                />
                <h4
                  id={`feature-${cardId}-title`}
                  className={`about-section__feature-title about-section__feature-title--${card.colorClass}`}
                >
                  {card.title}
                </h4>
              </header>
              <div className="about-section__feature-content">
                <p
                  id={`feature-${cardId}-description`}
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
  );
}
