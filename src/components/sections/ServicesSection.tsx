import { Code, Laptop, Lightbulb, Palette, Rocket, ShieldCheck } from "lucide-react";
import type { Service } from '../../data/Service';

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

export default function ServicesSection({
  title = "Services I Offer",
  subtitle = "Solutions tailored to your needs",
  services = [
    {
      icon: Code,
      title: "Modern Framework Development",
      description: "Building scalable, maintainable web applications using Angular and React frameworks with TypeScript and modern development practices.",
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
}: ServicesSectionProps) {
  return (
    <section id="services" className="services-section">
      <div className="services-section__container">
        <div className="services-section__header">
          <h2 className="services-section__title">
            {title}
          </h2>
          <p className="services-section__subtitle">
            {subtitle}
          </p>
        </div>
        <div className="services-section__grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`services-section__card services-section__card--${service.colorClass}`}>
                <div className="services-section__card-header">
                  <IconComponent className={`services-section__icon services-section__icon--${service.colorClass}`} />
                  <h3 className={`services-section__card-title services-section__card-title--${service.colorClass}`}>
                    {service.title}
                  </h3>
                </div>
                <div className="services-section__card-content">
                  <p className={`services-section__card-description services-section__card-description--${service.colorClass}`}>
                    {service.description}
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