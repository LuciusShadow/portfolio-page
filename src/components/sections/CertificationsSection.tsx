import { Award } from 'lucide-react';
import type { Certification } from '../../data/Certification';

interface CertificationsSectionProps {
  title?: string;
  subtitle?: string;
  certifications?: Certification[];
}

export default function CertificationsSection({
  title = "Certifications & Achievements",
  subtitle = "My professional qualifications and continuous learning",
  certifications = [
    {
      name: "Prompt Engineering from Scratch",
      issuer: "Udemy",
      year: "2025",
      icon: ""
    },
    {
      name: "Understanding Typescript",
      issuer: "Udemy",
      year: "2025",
      icon: ""
    },
    {
      name: "Angular Step by Step",
      issuer: "Udemy",
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
}: CertificationsSectionProps) {
  // Sort certifications by year in descending order (newest first)
  const sortedCertifications = [...certifications].sort((a, b) => {
    return parseInt(b.year) - parseInt(a.year);
  });

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-section__container">
        {/* Section Header */}
        <div className="certifications-section__header">
          <h2 className="certifications-section__title">
            {title}
          </h2>
          <p className="certifications-section__subtitle">
            {subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-section__grid">
          {sortedCertifications.map((cert, index) => (
            <div key={index} className="certifications-section__card">
              <div className="certifications-section__card-header">
                {cert.icon ? (
                  <img
                    src={cert.icon}
                    alt={cert.issuer}
                    className="certifications-section__card-icon-image"
                  />
                ) : (
                  <Award className="certifications-section__card-icon" />
                )}
                <h3 className="certifications-section__card-title">{cert.name}</h3>
                <p className="certifications-section__card-issuer">{cert.issuer}</p>
              </div>
              <div className="certifications-section__card-content">
                <span className="certifications-section__card-badge">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
