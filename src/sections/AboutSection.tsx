import Container from "../components/Container";
import Section from "../components/Section";
import { usePortfolio } from "../contexts/PortfolioContext";
import { SECTION_IDS } from "../components/Navbar/navigation";

function AboutSection() {
  const { profile } = usePortfolio();

  return (
    <Section id={SECTION_IDS.ABOUT}>
      <Container>
        <div className="about">
          <div className="about-content">
            <h2>About</h2>

            <p>{profile.aboutSummary}</p>
          </div>
          {profile.strengths?.length > 0 && (
            <div className="about-strengths">
              <h3>Core Strengths</h3>

              {profile.strengths?.map((strength) => (
                <div key={strength} className="strength-chip">
                  {strength}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default AboutSection;
