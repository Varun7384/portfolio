import type { Experience } from "../../shared/types";
import { formatMonthYear, getExperienceDuration } from "../utilities/date";
import "./ExperienceCard.css";

interface Props {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="experience-card">
      <header>
        <h3>{experience.role}</h3>

        <p className="company">{experience.company}</p>

        <p className="duration">
          {formatMonthYear(experience.startDate)}
          {" – "}
          {experience.current
            ? "Present"
            : formatMonthYear(experience.endDate!)}

          {" • "}

          {getExperienceDuration(experience.startDate, experience.endDate)}
        </p>
      </header>

      <div className="tech-list">
        {experience.technologies.map((tech) => (
          <span key={tech} className="tech-chip">
            {tech}
          </span>
        ))}
      </div>

      <ul className="achievement-list">
        {experience.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
