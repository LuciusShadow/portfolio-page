import { useLanguage } from '../../contexts/LanguageContext';
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

export default function SkillsSection(props: SkillsSectionProps = {}) {
  const { texts: allTexts } = useLanguage();
  const texts = allTexts.skills;
  const accessibilityTexts = allTexts.accessibility;

  // Use centralized texts as defaults, allow props to override
  const {
    title = texts.title,
    subtitle = texts.subtitle,
    skillCategories = texts.skillCategories
  } = props;

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-section__container">
        {/* Section Header */}
        <header className="skills-section__header">
          <h2 id="skills-title" className="skills-section__title">
            {title}
          </h2>
          <p className="skills-section__subtitle">
            {subtitle}
          </p>
        </header>

        {/* Skip link for keyboard navigation */}
        <div className="skills-section__skip">
          <a href="#certifications" className="sr-only sr-only-focusable">
            {accessibilityTexts.skipLinks.skipToCertifications}
          </a>
        </div>

        {/* Skills Grid */}
        <div
          className="skills-section__grid"
          role="region"
          aria-label="Technical skills organized by category"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colorClass = getColorByPosition(categoryIndex);
            return (
              <fieldset
                key={category.title}
                className={`skills-section__category skills-section__category--${colorClass}`}
                aria-labelledby={`category-${categoryIndex}-title`}
              >
                <header className="skills-section__category-header">
                  <h3
                    id={`category-${categoryIndex}-title`}
                    className="skills-section__category-title"
                  >
                    {category.title}
                  </h3>
                  <div className="sr-only">
                    Skill category {categoryIndex + 1} of {skillCategories.length}.
                    Contains {category.skills.length} skills.
                  </div>
                </header>

                <ul
                  className="skills-section__skills-list"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skillItem, skillIndex) => {
                    const displayLevel = calculateSkillLevel(skillItem.value);
                    return (
                      <li
                        key={skillItem.skill}
                        className="skills-section__skill-item"
                        aria-label={`${skillItem.skill}: ${displayLevel} level`}
                      >
                        <div className="skills-section__skill-header">
                          <h4 className="skills-section__skill-name">
                            {skillItem.skill}
                          </h4>
                          <div className="skills-section__skill-info">
                            <span
                              className="skills-section__skill-level"
                              aria-live="polite"
                            >
                              {displayLevel}
                            </span>
                            <span
                              className="skills-section__skill-percentage"
                              aria-hidden="true"
                            >
                              {skillItem.value}%
                            </span>
                          </div>
                        </div>

                        <div className="skills-section__progress-container">
                          <div
                            className="skills-section__progress"
                            role="progressbar"
                            aria-valuenow={skillItem.value}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${skillItem.skill} proficiency: ${skillItem.value} percent`}
                          >
                            <div
                              className={`skills-section__progress-bar skills-section__progress-bar--${colorClass}`}
                              style={{ width: `${skillItem.value}%` }}
                              aria-hidden="true"
                            ></div>
                          </div>

                          {/* Screen reader description */}
                          <div className="sr-only">
                            Skill {skillIndex + 1} of {category.skills.length} in {category.title}.
                            Proficiency level: {displayLevel} at {skillItem.value} percent.
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>

              </fieldset>
            );
          })}
        </div>

        {/* Skills summary for screen readers */}
        <div className="skills-section__summary sr-only" aria-live="polite">
          <p>
            Skills overview: {skillCategories.length} categories with a total of{' '}
            {skillCategories.reduce((total, category) => total + category.skills.length, 0)} skills.
            Use Tab to navigate between categories and individual skills.
          </p>
        </div>
      </div>
    </section>
  );
}