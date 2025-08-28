# Portfolio Page

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases professional skills, projects, certifications, and services in an elegant and interactive interface.

## About This Project

This portfolio website serves as a comprehensive showcase of professional experience and capabilities. It features:

- **Modern Design**: Clean, responsive design that works seamlessly across all devices
- **Interactive Sections**: Engaging hero section, about me, skills showcase, project gallery, certifications, and services
- **Theme Support**: Built-in light/dark theme toggle for enhanced user experience
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **TypeScript**: Fully typed codebase for better development experience and code reliability

## Features

- **Hero Section**: Eye-catching introduction with personal branding and smooth scroll to projects
- **About Section**: Professional background and personal story
- **Skills Section**: Technical expertise with visual skill indicators
- **Projects Section**: Portfolio of completed projects with descriptions and links
- **Certifications Section**: Professional certifications and achievements
- **Services Section**: Available professional services
- **Contact Section**: Functional contact form with backend email integration
- **Multi-page Routing**: React Router with smooth hash navigation between sections
- **Legal Compliance**: German Impressum page for legal requirements
- **Theme Support**: Built-in light/dark theme toggle with persistence
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Backend Integration**: Node.js/Express server with Gmail SMTP for contact form
- **Enhanced UX**: Detailed error handling, loading states, and user feedback

## Technology Stack

### Frontend

- **React 18** with TypeScript for type-safe component development
- **Vite** for fast development and optimized production builds
- **React Router Dom** for multi-page navigation and hash-based scrolling
- **SCSS** with modular architecture and theme system
- **Lucide React** for consistent iconography

### Backend

- **Node.js** with Express.js for RESTful API
- **Nodemailer** with Gmail SMTP integration for contact form
- **Joi** for request validation and data sanitization
- **Express Rate Limit** for API protection and spam prevention
- **CORS** for secure cross-origin requests

### Development & Quality

- **TypeScript** for enhanced developer experience and code reliability
- **ESLint** for consistent code standards and best practices
- **Vite HMR** for instant development feedback

## Planned Additions

### Protected Admin Panel

A secure, password-protected administrative interface is planned for future releases. This admin panel will provide:

- **Content Management**: Easy editing of personal information, skills, and project details
- **Project Management**: Add, edit, and remove projects from the portfolio
- **Skills Management**: Update technical skills and proficiency levels
- **Certifications Management**: Maintain and update professional certifications
- **Real-time Updates**: Changes will be reflected immediately on the public portfolio
- **Secure Authentication**: Protected access to prevent unauthorized modifications

This feature will enable dynamic content updates without requiring code changes, making the portfolio easily maintainable and always up-to-date.

### Language Localization (i18n)

Multi-language support to make the portfolio accessible to an international audience:

- **Primary Languages**: English and German localization
- **Extensible Framework**: Architecture designed to support additional languages easily
- **Dynamic Language Switching**: Real-time language toggle in the navigation
- **Localized Content**: All text content, including:
  - Navigation labels and menu items
  - Section titles and descriptions
  - Button text and form labels
  - Error messages and status notifications
  - Project descriptions and technical details
  - Skills and certifications descriptions
- **Browser Language Detection**: Automatic language selection based on user's browser settings
- **Persistent Language Preference**: User's language choice saved and remembered across sessions
- **SEO Optimization**: Proper language meta tags and hreflang attributes for better search engine visibility
- **Professional Translation**: Native-quality translations for both English and German content

The localization system will be implemented using React Context and TypeScript for type-safe translations, ensuring consistent and maintainable multi-language support.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LuciusShadow/portfolio-page.git
cd portfolio-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Set up the backend (for contact form functionality):

```bash
cd backend
npm install
```

5. Create a `.env` file in the backend directory with your Gmail credentials:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
RECIPIENT_NAME=Your Name
FRONTEND_URL=http://localhost:5173
```

6. Start the backend server:

```bash
node server.js
```

7. Open your browser and navigate to `http://localhost:5173`

### Backend Setup Notes

- The contact form requires a Gmail account with an app-specific password
- Generate an app password in your Google Account settings (2-factor authentication required)
- The backend server runs on port 3002 by default
- CORS is configured to allow requests from the frontend development server

### Building for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Project Structure

```
portfolio-page/
├── backend/                    # Node.js Express backend for contact form
│   ├── middleware/            # Validation and security middleware
│   ├── routes/               # API route handlers (contact form)
│   ├── services/             # Email service with Gmail integration
│   ├── server.js             # Express server configuration
│   └── .env                  # Environment variables (Gmail credentials)
├── src/
│   ├── app/                  # Main application components
│   │   ├── page.tsx         # HomePage component with all sections
│   │   └── AppRouter.tsx    # React Router setup with hash navigation
│   ├── assets/              # Static assets (images, icons)
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Navigation, Footer, MobileMenu
│   │   ├── sections/       # Hero, About, Skills, Projects, etc.
│   │   └── ThemeToggle.tsx # Dark/light theme switcher
│   ├── config/             # Configuration files
│   │   ├── api.ts         # API endpoints configuration
│   │   └── personal.ts    # Personal information and social links
│   ├── data/               # TypeScript type definitions
│   │   ├── Project.ts     # Project data structure
│   │   ├── Skill.ts       # Skills and proficiency levels
│   │   ├── Service.ts     # Professional services offered
│   │   └── Certification.ts # Professional certifications
│   ├── pages/              # Page components for routing
│   │   └── ImprintPage.tsx # German legal compliance page
│   ├── scss/               # Modular SCSS styling
│   │   ├── themes/        # Light/dark theme variables
│   │   ├── layout/        # Navigation, footer styling
│   │   ├── sections/      # Individual section styles
│   │   ├── globals.scss   # Global styles and resets
│   │   ├── variables.scss # SCSS variables and breakpoints
│   │   └── mixins.scss    # Reusable SCSS mixins
│   ├── utils/              # Utility functions
│   │   └── scrollUtils.ts # Smooth scrolling navigation helpers
│   └── main.tsx           # Application entry point
├── dist/                   # Production build output
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Contributing

This is a personal portfolio project. While contributions are not expected, suggestions and feedback are always welcome!

## License

This project is for personal use and portfolio demonstration purposes.
