import { GitBranch, ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { getTexts } from '../../config/texts';
import { projectsData } from '../../config/projects-config';
import type { Project } from '../../data/Project';


interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

export default function ProjectsSection(props: ProjectsSectionProps = {}) {
  const texts = getTexts().projects;
  const accessibilityTexts = getTexts().accessibility;
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [focusedActionIndex, setFocusedActionIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const actionRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Use centralized texts as defaults, allow props to override
  const {
    title = texts.title,
    subtitle = texts.subtitle,
    projects = [...projectsData].sort((a, b) => {
      const yearA = parseInt(a.year || '0');
      const yearB = parseInt(b.year || '0');
      return yearB - yearA; // Descending order (newest first)
    })
  } = props;

  // Get available actions for a project
  const getProjectActions = (project: Project) => {
    const actions = [];
    if (project.github) actions.push({ type: 'github', url: project.github });
    if (project.live) actions.push({ type: 'live', url: project.live });
    return actions;
  };

  // Handle card selection
  const handleCardSelect = (index: number) => {
    setActiveCardIndex(index);
    setFocusedActionIndex(0);

    // Announce to screen readers
    const project = projects[index];
    const actions = getProjectActions(project);
    const announcement = `${project.title} card selected. ${actions.length} actions available. ${accessibilityTexts.navigation.useTabToNavigate}, Escape to close.`;
    announceToScreenReader(announcement);
  };

  // Handle keyboard navigation within cards
  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, cardIndex: number) => {
    const project = projects[cardIndex];
    const actions = getProjectActions(project);

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleCardSelect(cardIndex);
        break;
      case 'Escape':
        if (activeCardIndex === cardIndex) {
          event.preventDefault();
          setActiveCardIndex(null);
          setFocusedActionIndex(0);
          cardRefs.current[cardIndex]?.focus();
          announceToScreenReader(`${project.title} card closed.`);
        }
        break;
      case 'Tab':
        if (activeCardIndex === cardIndex && actions.length > 0) {
          event.preventDefault();
          const nextActionIndex = event.shiftKey
            ? (focusedActionIndex - 1 + actions.length) % actions.length
            : (focusedActionIndex + 1) % actions.length;
          setFocusedActionIndex(nextActionIndex);

          // Focus the action button
          const actionButton = actionRefs.current[cardIndex * 2 + nextActionIndex];
          actionButton?.focus();
        }
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        if (activeCardIndex !== null) {
          event.preventDefault();
          const direction = event.key === 'ArrowDown' ? 1 : -1;
          const nextCardIndex = (cardIndex + direction + projects.length) % projects.length;

          // Close current card and move to next
          setActiveCardIndex(null);
          setFocusedActionIndex(0);
          cardRefs.current[nextCardIndex]?.focus();
          announceToScreenReader(`Moved to ${projects[nextCardIndex].title} card.`);
        }
        break;
    }
  };

  // Handle action button keyboard navigation
  const handleActionKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, cardIndex: number, actionIndex: number) => {
    const actions = getProjectActions(projects[cardIndex]);

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setActiveCardIndex(null);
        setFocusedActionIndex(0);
        cardRefs.current[cardIndex]?.focus();
        announceToScreenReader(`${projects[cardIndex].title} card closed.`);
        break;
      case 'Tab':
        if (event.shiftKey && actionIndex === 0) {
          // Tab back to card
          event.preventDefault();
          cardRefs.current[cardIndex]?.focus();
        } else if (!event.shiftKey && actionIndex === actions.length - 1) {
          // Tab forward to next card
          event.preventDefault();
          const nextCardIndex = (cardIndex + 1) % projects.length;
          setActiveCardIndex(null);
          setFocusedActionIndex(0);
          cardRefs.current[nextCardIndex]?.focus();
          announceToScreenReader(`Moved to ${projects[nextCardIndex].title} card.`);
        }
        break;
    }
  };

  // Announce to screen readers
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.setAttribute('class', 'sr-only');
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => {
      announcement.remove();
    }, 1000);
  };

  // Focus management effect
  useEffect(() => {
    if (activeCardIndex !== null) {
      const firstActionRef = actionRefs.current[activeCardIndex * 2];
      if (firstActionRef) {
        firstActionRef.focus();
      }
    }
  }, [activeCardIndex]);

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

        {/* Keyboard navigation instructions */}
        <div className="projects-section__instructions sr-only" aria-live="polite">
          <p>{accessibilityTexts.navigation.useTabToNavigateCards}</p>
        </div>

        {/* Global keyboard shortcuts info - MOVED BEFORE CARDS */}
        <div className="projects-section__help" id="keyboard-help">
          <details className="projects-section__help-details">
            <summary className="projects-section__help-summary">Keyboard Navigation Help</summary>
            <div className="projects-section__help-content">
              <ul>
                <li><kbd>Tab</kbd> - Navigate between cards and actions</li>
                <li><kbd>Enter</kbd> or <kbd>Space</kbd> - Select/activate a card</li>
                <li><kbd>Escape</kbd> - Close selected card</li>
                <li><kbd>↑</kbd><kbd>↓</kbd> - Move between cards when one is selected</li>
              </ul>
            </div>
          </details>
        </div>

        {/* Skip link for keyboard navigation help */}
        <div className="projects-section__skip">
          <a href="#contact" className="sr-only sr-only-focusable">
            {accessibilityTexts.skipLinks.skipToContact}
          </a>
        </div>

        {/* Projects Grid */}
        <div className="projects-section__grid" role="grid" aria-label="Projects grid">
          {projects.map((project, cardIndex) => {
            const actions = getProjectActions(project);
            const isActive = activeCardIndex === cardIndex;

            return (
              <article
                key={project.id}
                className={`projects-section__card ${isActive ? 'projects-section__card--active' : ''}`}
                ref={(el) => { cardRefs.current[cardIndex] = el; }}
                aria-describedby={`project-${project.id}-description project-${project.id}-metadata`}
                aria-label={`${accessibilityTexts.screenReader.projectCard}: ${project.title}. ${cardIndex + 1} of ${projects.length}`}
                onKeyDown={(e) => handleCardKeyDown(e, cardIndex)}
                onClick={() => handleCardSelect(cardIndex)}
              >
                <div className="projects-section__image-container">
                  <img
                    src={project.image || "/api/placeholder/400/200"}
                    alt={`Screenshot showing the user interface of ${project.title} project${project.description ? ': ' + project.description.substring(0, 50) + '...' : ''}`}
                    className="projects-section__image"
                  />

                  {/* Add this overlay div */}
                  <div className="projects-section__overlay" aria-hidden="true"></div>

                  {/* Conditionally visible action buttons */}
                  <fieldset
                    className={`projects-section__actions ${isActive ? 'projects-section__actions--visible' : ''}`}
                    aria-label={`Actions for ${project.title}`}
                    aria-hidden={!isActive}
                  >
                    {project.github && (
                      <a
                        ref={(el) => { actionRefs.current[cardIndex * 2] = el }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-section__action-button projects-section__action-button--secondary"
                        aria-label={`${accessibilityTexts.screenReader.viewSourceCode} ${project.title} source code on GitHub (opens in new tab)`}
                        tabIndex={isActive ? 0 : -1}
                        onKeyDown={(e) => handleActionKeyDown(e, cardIndex, 0)}
                      >
                        <GitBranch className="projects-section__action-icon" aria-hidden="true" />
                        <span className="projects-section__action-text">{texts.codeButtonText}</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        ref={(el) => { actionRefs.current[cardIndex * 2 + 1] = el }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-section__action-button projects-section__action-button--primary"
                        aria-label={`${accessibilityTexts.screenReader.viewLiveDemo} ${project.title} live demo (opens in new tab)`}
                        tabIndex={isActive ? 0 : -1}
                        onKeyDown={(e) => handleActionKeyDown(e, cardIndex, project.github ? 1 : 0)}
                      >
                        <ExternalLink className="projects-section__action-icon" aria-hidden="true" />
                        <span className="projects-section__action-text">{texts.liveButtonText}</span>
                      </a>

                    )}
                  </fieldset>
                </div>

                <div className="projects-section__content">
                  <div className="projects-section__header-content">
                    <h3 className="projects-section__card-title">{project.title}</h3>
                    <p
                      id={`project-${project.id}-description`}
                      className="projects-section__card-description"
                    >
                      {project.description}
                    </p>

                    {/* Add project metadata for screen readers */}
                    <div className="projects-section__metadata sr-only">
                      Project {cardIndex + 1} of {projects.length}.
                      {actions.length > 0 ? `${actions.length} actions available.` : 'No actions available.'}
                      {project.year && `Created in ${project.year}.`}
                    </div>
                  </div>

                  <ul className="projects-section__technologies" aria-label="Technologies used">
                    {project.technologies.map((tech, index) => (
                      <li
                        key={tech}
                        className="projects-section__tech-badge"
                        aria-label={`Technology ${index + 1}: ${tech}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced status indicator for active card */}
                  {isActive && (
                    <div className="projects-section__status sr-only" aria-live="polite" aria-atomic="true">
                      {project.title} card selected. {actions.length} actions available.
                      {accessibilityTexts.navigation.useTabToNavigate}, Escape to close, Arrow keys to move between cards.
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
