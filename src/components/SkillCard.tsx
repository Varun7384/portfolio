import type { SkillCategory } from "../../shared/types";

import "./SkillCard.css";

interface SkillCardProps {
  skillCategory: SkillCategory;
}

function SkillCard({ skillCategory }: SkillCardProps) {
  return (
    <article className="skill-card">
      <h3>{skillCategory.category}</h3>

      <div className="skill-items">
        {skillCategory.items.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;
