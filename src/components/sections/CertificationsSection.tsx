import { Award } from 'lucide-react';
import { getTexts } from '../../config/texts';
import type { Certification } from '../../data/Certification';

interface CertificationsSectionProps {
  title?: string;
  subtitle?: string;
  certifications?: Certification[];
}

export default function CertificationsSection(props: CertificationsSectionProps = {}) {
  const texts = getTexts().certifications;

  // Use centralized texts as defaults, allow props to override  
  const {
    title = texts.title,
    subtitle = texts.subtitle,
    certifications = [
      {
        name: "Practical Prompt Engineering Masterclass: Hands-On Learning",
        issuer: "Udemy Lecture - Asif Farooqi, Abdullah Dar",
        year: "2025",
        icon: ""
      },
      {
        name: "Understanding Typescript",
        issuer: "Udemy Lecture - Maximilian Schwarzmüller",
        year: "2025",
        icon: ""
      },
      {
        name: "Angular Step by Step",
        issuer: "Udemy Lecture - Shivprasad Koirala",
        year: "2020",
        icon: ""
      },
      {
        name: "Angular and Typescript",
        issuer: "LinkedIn TestDome",
        year: "2020",
        icon: ""
      },
      {
        name: "Bachelor of Science in Computer Science",
        issuer: "TU Darmstadt",
        year: "2015",
        icon: ""
      }
    ]
  } = props;

  // Sort certifications by year in descending order (newest first)
  const sortedCertifications = [...certifications].sort((a, b) => {
    return Number.parseInt(b.year) - Number.parseInt(a.year);
  });

  return (
    <section id="certifications" className="certifications-section" aria-labelledby="certifications-title">
      <div className="certifications-section__container">
        {/* Section Header */}
        <header className="certifications-section__header">
          <h2 id="certifications-title" className="certifications-section__title">
            {title}
          </h2>
          <p className="certifications-section__subtitle">
            {subtitle}
          </p>
        </header>

        {/* Skip link for keyboard navigation */}
        <div className="certifications-section__skip">
          <a href="#contact" className="sr-only sr-only-focusable">
            Skip to contact section
          </a>
        </div>

        {/* Certifications sorting info for screen readers */}
        <div className="certifications-section__info sr-only">
          <p>
            Certifications are sorted by year, showing the most recent first.
            Total: {sortedCertifications.length} certifications and qualifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <section
          className="certifications-section__grid"
          aria-label="Professional certifications and qualifications"
        >
          {sortedCertifications.map((cert, index) => (
            <div
              key={`${cert.name}-${cert.year}-${cert.issuer}`}
              className="certifications-section__card"
              aria-labelledby={`cert-${index}-title`}
              aria-describedby={`cert-${index}-details`}
            >
              <header className="certifications-section__card-header">
                {cert.icon ? (
                  <img
                    src={cert.icon}
                    alt={`${cert.issuer} logo`}
                    className="certifications-section__card-icon-image"
                    loading="lazy"
                  />
                ) : (
                  <Award
                    className="certifications-section__card-icon"
                    aria-hidden="true"
                    aria-label="Certification award icon"
                  />
                )}
                <h3
                  id={`cert-${index}-title`}
                  className="certifications-section__card-title"
                >
                  {cert.name}
                </h3>
                <p
                  className="certifications-section__card-issuer"
                  aria-label={`Issued by ${cert.issuer}`}
                >
                  {cert.issuer}
                </p>
              </header>

              <div className="certifications-section__card-content">
                <span
                  className="certifications-section__card-badge"
                  aria-label={`Completed in ${cert.year}`}
                >
                  {cert.year}
                </span>
              </div>

              {/* Hidden details for screen readers */}
              <div id={`cert-${index}-details`} className="sr-only">
                Certification {index + 1} of {sortedCertifications.length}.
                {cert.name} from {cert.issuer}, completed in {cert.year}.
              </div>
            </div>
          ))}
        </section>
        {/* Certifications summary for screen readers */}
        <div className="certifications-section__summary sr-only" aria-live="polite">
          <p>
            Certifications timeline: Spanning from {sortedCertifications.at(-1)?.year} to {sortedCertifications.at(0)?.year},
            including {sortedCertifications.filter(cert => cert.issuer.includes('Udemy')).length} online courses and
            {sortedCertifications.filter(cert => cert.issuer.includes('TU Darmstadt')).length} academic degree.
          </p>
        </div>
      </div>
    </section>
  );
}