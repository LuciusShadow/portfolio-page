import { Code, Laptop, Lightbulb, Palette, Rocket, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="services-section__icon" />,
      title: "Modern Framework Development",
      description: "Building scalable, maintainable web applications using Angular and React frameworks with TypeScript and modern development practices."
    },
    {
      icon: <Palette className="services-section__icon" />,
      title: "Responsive Web Design",
      description: "Creating mobile-first, responsive interfaces that provide optimal viewing experiences across all devices and screen sizes."
    },
    {
      icon: <ShieldCheck className="services-section__icon" />,
      title: "Cross-Browser Testing",
      description: "Ensuring consistent functionality and appearance across all major browsers including Chrome, Firefox, Safari, and Edge."
    },
    {
      icon: <Laptop className="services-section__icon" />,
      title: "Frontend Architecture",
      description: "Designing and implementing scalable frontend architectures with component-based development and modern tooling."
    },
    {
      icon: <Lightbulb className="services-section__icon" />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed and efficiency through code splitting, lazy loading, and performance best practices."
    },
    {
      icon: <Rocket className="services-section__icon" />,
      title: "Testing & Quality Assurance",
      description: "Implementing comprehensive testing strategies using Cypress for end-to-end testing and ensuring code quality."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-section__container">
        <div className="services-section__header">
          <h2 className="services-section__title">
            Services I Offer
          </h2>
          <p className="services-section__subtitle">
            Solutions tailored to your needs
          </p>
        </div>
        <div className="services-section__grid">
          {services.map((service, index) => (
            <div key={index} className="services-section__card">
              <div className="services-section__card-header">
                {service.icon}
                <h3 className="services-section__card-title">{service.title}</h3>
              </div>
              <div className="services-section__card-content">
                <p className="services-section__card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}