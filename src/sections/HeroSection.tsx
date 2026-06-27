import "./HeroSection.css";

import { DownloadIcon, LinkedinIcon, MyWorkIcon } from "../components/icons";
import Container from "../components/Container";
import Section from "../components/Section";
import { usePortfolio } from "../contexts/PortfolioContext";
import { SECTION_IDS } from "../components/Navbar/navigation";

function HeroSection() {
  const { projects, profile } = usePortfolio();

  const { name, title, heroSummary, linkedinUrl, resumeUrl } = profile;

  return (
    <Section id={SECTION_IDS.HERO}>
      <Container>
        <div className="hero">
          <div className="hero-content">
            <p className="hero-tag">{title}</p>

            <h1 className="hero-name">{name}</h1>

            <p className="hero-description">{heroSummary}</p>

            <div className="hero-actions">
              <a href={resumeUrl} download className="btn-primary">
                <DownloadIcon size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              {projects?.length > 0 && (
                <a href={`#${SECTION_IDS.PROJECTS}`} className="btn-secondary">
                  <MyWorkIcon size={18} />
                  <span>My Work</span>
                </a>
              )}
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>20+</h3>
              <p>APIs Delivered</p>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <p>Microservices</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
