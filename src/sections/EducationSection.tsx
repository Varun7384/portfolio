import Container from "../components/Container";
import Section from "../components/Section";
import EducationCard from "../components/EducationCard";

import { usePortfolio } from "../contexts/PortfolioContext";
import { SECTION_IDS } from "../components/Navbar/navigation";

import "./EducationSection.css";

function EducationSection() {
  const { education } = usePortfolio();

  return (
    <Section id={SECTION_IDS.EDUCATION}>
      <Container>
        <h2>Education</h2>

        <div className="education-list">
          {education.map((item) => (
            <EducationCard
              key={`${item.degree}-${item.startYear}`}
              education={item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default EducationSection;
