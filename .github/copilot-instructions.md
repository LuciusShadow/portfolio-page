# Portfolio Codebase Instructions

## Architecture Overview

This is a **React + TypeScript portfolio website** with a unique modular SCSS theme system and full-stack contact functionality. The project follows a strict separation between presentation (React components), styling (SCSS modules), configuration (TypeScript configs), and data models.

### Key Architectural Patterns

- **Theme-driven SCSS**: All styling uses CSS custom properties via `@include t.theme-vars()` in `src/scss/themes/`. Never hardcode colors - use theme variables.
- **Configuration-driven content**: Personal info, texts, and data models live in `src/config/` and `src/data/` - modify these instead of components for content changes.
- **Hash-based navigation**: Uses React Router with hash fragments (`#about`, `#projects`) for smooth scrolling between sections on the homepage.
- **Centralized personal data**: All contact info, social links, and professional details in `src/config/personal.ts`.

## Critical Development Workflows

### Development Setup

```bash
npm run dev          # Start Vite dev server
npm run build        # TypeScript compile + Vite build
npm run deploy       # Build + custom SFTP deployment via deploy.js
```

### Theme System Workflow

1. Define theme variables in `src/scss/themes/_base.scss` (light) and corresponding dark theme
2. Import themes via `src/scss/themes/_index.scss`
3. Apply themes with `@include t.theme-vars(t.$light-theme)` in components
4. Theme switching handled by `AppRouter.tsx` via `data-theme` attribute

### Backend Integration

- Contact form uses Node.js/Express backend in `backend/` directory
- GDPR-compliant with rate limiting, validation, and email obfuscation
- Email service via Nodemailer with Gmail SMTP (configured via `.env`)

## Project-Specific Conventions

### File Organization

- **Components**: `src/components/sections/` for page sections, `src/components/layout/` for navigation/footer
- **Styling**: Mirror component structure in `src/scss/sections/` and `src/scss/layout/`
- **Data Models**: TypeScript interfaces in `src/data/` (Project.ts, Skill.ts, etc.)
- **Configuration**: All content configuration in `src/config/` (personal.ts, texts.ts, api.ts)

### SCSS Architecture

```scss
// Always use theme variables - example from any component:
@use '../../scss/themes/index' as t;

.component {
  background: var(--background);
  color: var(--text);
  box-shadow: var(--shadow-card);
}
```

### Data Model Pattern

- All content interfaces defined in `src/data/`
- Use `src/config/texts.ts` for all displayable text (i18n preparation)
- Personal/contact data centralized in `src/config/personal.ts` with helper functions

### Component Props Pattern

```tsx
// All sections follow this pattern for text overrides:
interface SectionProps {
  title?: string; // Allow text overrides
  subtitle?: string; // for customization
}

export default function Section(props: SectionProps = {}) {
  const texts = getTexts().sectionName;
  const { title = texts.title, subtitle = texts.subtitle } = props;
}
```

## Integration Points

### Theme System Integration

- `AppRouter.tsx` manages global theme state and localStorage persistence
- Theme switching via CSS custom properties, not CSS-in-JS
- All components must use theme variables, never hardcoded colors

### Contact Form Flow

1. Frontend form in `ContactSection.tsx`
2. Validates and posts to `/api/contact` endpoint
3. Backend in `backend/routes/contact.js` handles GDPR compliance, rate limiting, validation
4. Email sent via `backend/services/emailService.js` using Nodemailer

### Deployment Process

- Custom SFTP deployment via `deploy.js` script
- Prompts for credentials, uploads `dist/` contents
- Vercel config available as alternative in `vercel.json`

## Common Pitfalls

- **Never bypass theme variables** - always use CSS custom properties from theme system
- **Don't edit component text directly** - update `src/config/texts.ts` instead
- **Personal data changes** - modify `src/config/personal.ts`, not component files
- **SCSS imports** - use `@use` not `@import` for better performance and scoping
- **Hash navigation** - remember hash-based routing for section navigation on homepage

## Key Files for AI Context

- `src/app/AppRouter.tsx` - Theme management and routing logic
- `src/config/personal.ts` - All personal/professional data
- `src/scss/themes/_base.scss` - Theme variable definitions
- `backend/routes/contact.js` - Contact form API with GDPR compliance
- `deploy.js` - Custom deployment automation
