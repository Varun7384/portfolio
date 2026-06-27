import Container from "../components/Container";
import Section from "../components/Section";
import SkillCard from "../components/SkillCard";

import { usePortfolio } from "../contexts/PortfolioContext";
import { SECTION_IDS } from "../components/Navbar/navigation";

import "./SkillsSection.css";

function SkillsSection() {
  const { skills } = usePortfolio();

  return (
    <Section id={SECTION_IDS.SKILLS}>
      <Container>
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((category) => (
            <SkillCard key={category.category} skillCategory={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default SkillsSection;
