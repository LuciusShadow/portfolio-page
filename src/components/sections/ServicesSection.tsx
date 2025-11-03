import { Eye, Lightbulb, Palette, Laptop, Rocket, ShieldCheck } from 'lucide-react';
import { getTexts } from '../../config/texts';
import type { Service } from '../../data/Service';

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

export default function ServicesSection(props: ServicesSectionProps = {}) {
  const texts = getTexts().services;
  const accessibilityTexts = getTexts().accessibility;

  // Use centralized texts as defaults, allow props to override  
  const {
    title = texts.title,
    subtitle = texts.subtitle,
    services = texts.serviceItems.map((service, index) => ({
      icon: [Eye, Palette, ShieldCheck, Laptop, Lightbulb, Rocket][index] || Eye,
      title: service.title,
      description: service.description,
      colorClass: ["primary", "secondary", "tertiary", "quaternary", "quinary", "senary"][index] || "primary"
    }))
  } = props;

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-section__container">
        {/* Section Header */}
        <header className="services-section__header">
          <h2 id="services-title" className="services-section__title">
            {title}
          </h2>
          <p className="services-section__subtitle">
            {subtitle}
          </p>
        </header>

        {/* Skip link for keyboard navigation */}
        <div className="services-section__skip">
          <a href="#skills" className="sr-only sr-only-focusable">
            {accessibilityTexts.skipLinks.skipToSkills}
          </a>
        </div>

        {/* Services Grid */}
        <div
          className="services-section__grid"
          role="region"
          aria-label="Professional services offered"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={`${service.title}-${service.colorClass}`}
                className={`services-section__card services-section__card--${service.colorClass}`}
                aria-labelledby={`service-${index}-title`}
                aria-describedby={`service-${index}-description`}
              >
                <header className="services-section__card-header">
                  <IconComponent
                    className={`services-section__icon services-section__icon--${service.colorClass}`}
                    aria-hidden="true"
                  />
                  <h3
                    id={`service-${index}-title`}
                    className={`services-section__card-title services-section__card-title--${service.colorClass}`}
                  >
                    {service.title}
                  </h3>
                </header>

                <div className="services-section__card-content">
                  <p
                    id={`service-${index}-description`}
                    className={`services-section__card-description services-section__card-description--${service.colorClass}`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Status indicator for screen readers */}
                <div className="sr-only">
                  Service {index + 1} of {services.length}
                </div>
              </article>
            );
          })}
        </div>

        {/* Services summary for screen readers */}
        <div className="services-section__summary sr-only" aria-live="polite">
          <p>
            Services overview: {services.length} professional services available.
            Use Tab to navigate between service cards for detailed information.
          </p>
        </div>
      </div>
    </section>
  );
}