import React from 'react';
import type { Skill } from '../../data/Skill';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
  skillCategories?: SkillCategory[];
}

// Helper function to calculate skill level based on value
const calculateSkillLevel = (value: number): string => {
  if (value >= 90) return "Expert";
  if (value >= 75) return "Advanced";
  if (value >= 50) return "Intermediate";
  return "Beginner";
};

// Helper function to get color based on array position
const getColorByPosition = (index: number): string => {
  const colors = ["primary", "secondary", "tertiary", "quaternary", "quinary", "senary"];
  return colors[index % colors.length];
};

export default function SkillsSection({
  title = "Skills & Technologies",
  subtitle = "Technologies I work with to build amazing web experiences",
  skillCategories = [
    {
      title: "Web Frameworks",
      skills: [
        { skill: "Angular", value: 90 },
        { skill: "React", value: 70 },
        { skill: "Next.js", value: 70 },
        { skill: "TypeScript", value: 95 }
      ]
    },
    {
      title: "Styling & Design",
      skills: [
        { skill: "SCSS/Sass", value: 95 },
        { skill: "CSS3", value: 90 },
        { skill: "Accessibility (a11y) Standards", value: 45 },
        { skill: "Bootstrap", value: 65 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { skill: "Node.js", value: 65 },
        { skill: "Express.js", value: 25 },
        { skill: "REST APIs", value: 70 },
        { skill: "MongoDB", value: 50 }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { skill: "Git & GitHub", value: 90 },
        { skill: "Visual Studio Code", value: 75 },
        { skill: "Vite", value: 80 },
        { skill: "NPM", value: 85 }
      ]
    },
    {
      title: "Testing & Quality",
      skills: [
        { skill: "Cypress", value: 85 },
        { skill: "Jasmine/Karma", value: 75 },
        { skill: "ESLint", value: 90 },
        { skill: "Prettier", value: 95 }
      ]
    },
    {
      title: "AI-Tools",
      skills: [
        { skill: "GitHub Copilot", value: 85 },
        { skill: "Prompt Engineering", value: 45 },
        { skill: "Prototyping / MVP-Building with AI", value: 45 }
      ]
    }
  ]
}: SkillsSectionProps) {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__container">
        <div className="skills-section__header">
          <h2 className="skills-section__title">
            {title}
          </h2>
          <p className="skills-section__subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="skills-section__grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-section__category">
              <h3 className="skills-section__category-title">
                {category.title}
              </h3>
              <div className="skills-section__skills">
                {category.skills.map((skillItem, skillIndex) => {
                  // Use provided level or calculate from value
                  const displayLevel = skillItem.level || calculateSkillLevel(skillItem.value);
                  // Use provided color or get color based on position in array
                  const colorClass = skillItem.color || getColorByPosition(skillIndex);
                  
                  return (
                    <div key={skillIndex} className="skills-section__skill">
                      <div className="skills-section__skill-header">
                        <span className="skills-section__skill-name">
                          {skillItem.skill}
                        </span>
                        <div className="skills-section__skill-info">
                          <span className="skills-section__skill-level">
                            {displayLevel}
                          </span>
                          <span className="skills-section__skill-percentage">
                            {skillItem.value}%
                          </span>
                        </div>
                      </div>
                      <div className="skills-section__progress">
                        <div 
                          className={`skills-section__progress-bar skills-section__progress-bar--${colorClass}`}
                          style={{ width: `${skillItem.value}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}