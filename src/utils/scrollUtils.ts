import type { NavigateFunction } from 'react-router-dom';

export function scrollToSection(
  sectionId: string,
  currentPath: string,
  navigate?: NavigateFunction
): void {
  // If we're on the homepage, scroll directly to the section
  if (currentPath === '/') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else if (navigate) {
    // If we're on another page, navigate to homepage with hash
    navigate(`/#${sectionId}`);
  } else {
    // Fallback: direct navigation without router
    globalThis.location.href = `/#${sectionId}`;
  }
}

export function scrollToProjects(
  currentPath: string,
  navigate?: NavigateFunction
): void {
  scrollToSection('projects', currentPath, navigate);
}
