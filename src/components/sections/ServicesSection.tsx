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

  // Use centralized texts as defaults, allow props to override  
  const {
    title = texts.title,
    subtitle = texts.subtitle,
    services = [
      {
        icon: Eye,
        title: "Web Accessibility",
        description: "Building inclusive and accessible web applications by implementing Web Content Accessibility Guidelines, semantic HTML, and support for assistive technologies.",
        colorClass: "primary"
      },
      {
        icon: Palette,
        title: "Responsive Web Design",
        description: "Creating mobile-first, responsive interfaces that provide optimal viewing experiences across all devices and screen sizes.",
        colorClass: "secondary"
      },
      {
        icon: ShieldCheck,
        title: "Cross-Browser Testing",
        description: "Ensuring consistent functionality and appearance across all major browsers including Chrome, Firefox, Safari, and Edge.",
        colorClass: "tertiary"
      },
      {
        icon: Laptop,
        title: "Frontend Architecture",
        description: "Designing and implementing scalable frontend architectures with component-based development and modern tooling.",
        colorClass: "quaternary"
      },
      {
        icon: Lightbulb,
        title: "Performance Optimization",
        description: "Optimizing web applications for speed and efficiency through code splitting, lazy loading, and performance best practices.",
        colorClass: "quinary"
      },
      {
        icon: Rocket,
        title: "Testing & Quality Assurance",
        description: "Implementing comprehensive testing strategies using Cypress for end-to-end testing and ensuring code quality.",
        colorClass: "senary"
      }
    ]
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
          <a href="#certifications" className="sr-only sr-only-focusable">
            Skip to certifications section
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
                key={index}
                className={`services-section__card services-section__card--${service.colorClass}`}
                tabIndex={0}
                role="group"
                aria-labelledby={`service-${index}-title`}
                aria-describedby={`service-${index}-description`}
              >
                <header className="services-section__card-header">
                  <IconComponent
                    className={`services-section__icon services-section__icon--${service.colorClass}`}
                    aria-hidden="true"
                    role="img"
                    aria-label={`${service.title} service icon`}
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