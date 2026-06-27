import Container from "../components/Container";
import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";

import { usePortfolio } from "../contexts/PortfolioContext";
import { SECTION_IDS } from "../components/Navbar/navigation";

import "./ExperienceSection.css";

function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <Section id={SECTION_IDS.EXPERIENCE}>
      <Container>
        <h2>Experience</h2>

        <div className="experience-list">
          {experience.map((job) => (
            <ExperienceCard
              key={`${job.company}-${job.startDate}`}
              experience={job}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ExperienceSection;
