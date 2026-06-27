import Container from "../components/Container";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

import { usePortfolio } from "../contexts/PortfolioContext";
import { SECTION_IDS } from "../components/Navbar/navigation";

import "./ProjectsSection.css";

function ProjectsSection() {
  const { projects } = usePortfolio();

  if (projects.length === 0) {
    return null;
  }

  return (
    <Section id={SECTION_IDS.PROJECTS}>
      <Container>
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProjectsSection;
