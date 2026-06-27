import type { Education } from "../../shared/types";

import "./EducationCard.css";

interface EducationCardProps {
  education: Education;
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="education-card">
      <h3>{education.degree}</h3>

      <p className="institution">{education.institution}</p>

      <div className="education-footer">
        <span>
          {education.startYear} – {education.endYear}
        </span>

        {education.cgpa !== undefined && (
          <span className="cgpa">CGPA: {education.cgpa}</span>
        )}
      </div>
    </article>
  );
}

export default EducationCard;
