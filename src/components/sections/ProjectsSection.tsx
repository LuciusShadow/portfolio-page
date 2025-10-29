import { Github, ExternalLink } from 'lucide-react';
import { personalConfig } from '../../config/personal';
import { getTexts } from '../../config/texts';
import type { Project } from '../../data/Project';
import ergoVRImage from '../../assets/ErgoVR.PNG';
import portfolioImage from '../../assets/portfolio.PNG'
import icaraceImage from '../../assets/icarace.PNG'


interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

export default function ProjectsSection(props: ProjectsSectionProps = {}) {
  const texts = getTexts().projects;

  // Use centralized texts as defaults, allow props to override
  const {
    title = texts.title,
    subtitle = texts.subtitle,
    projects = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my skills, projects, and experience.",
        image: portfolioImage,
        technologies: ["React", "TypeScript", "SCSS", "Vercel", "Github Copilot"],
        github: personalConfig.gitProjects.portfolio,
        live: personalConfig.projectsUrls.portfolio
      },
      {
        id: 2,
        title: "ErgoVR",
        description: "A virtual reality application for analysis of motion sickness in VR environments from 2015.",
        image: ergoVRImage,
        technologies: ["Unity3D", "C#", "Oculus SDK"],
        github: personalConfig.gitProjects.ergoVR
      },
      {
        id: 3,
        title: "Icarace",
        description: "Participated in the development of a web-platform for a fitness racing game for Icaros GmbH until 2018.",
        image: icaraceImage,
        technologies: ["Angular 4", "Typescript", "HTML", "CSS"],
        github: personalConfig.gitProjects.ergoVR
      }
    ]
  } = props;
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">
        {/* Section Header */}
        <div className="projects-section__header">
          <h2 className="projects-section__title">
            {title}
          </h2>
          <p className="projects-section__subtitle">
            {subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-section__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects-section__card">
              <div className="projects-section__image-container">
                <img
                  src={project.image || "/api/placeholder/400/200"}
                  alt={project.title}
                  className="projects-section__image"
                />
                <div className="projects-section__overlay">
                  <div className="projects-section__actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-section__action-button projects-section__action-button--secondary"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github className="projects-section__action-icon" />
                        {texts.codeButtonText}
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-section__action-button projects-section__action-button--primary"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="projects-section__action-icon" />
                        {texts.liveButtonText}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="projects-section__content">
                <div className="projects-section__header-content">
                  <h3 className="projects-section__card-title">{project.title}</h3>
                  <p className="projects-section__card-description">{project.description}</p>
                </div>

                <div className="projects-section__technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="projects-section__tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
