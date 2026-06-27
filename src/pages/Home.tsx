import { PortfolioProvider } from "../contexts/PortfolioContext";
import { usePortfolioData } from "../hooks/usePortfolioData";
import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

function Home() {
  const { data, isLoading, isError, error } = usePortfolioData();

  if (isLoading) {
    return <div>Loading Portfolio...</div>;
  }

  if (isError) {
    return (
      <div>
        <h1>Failed to load portfolio.</h1>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  if (!data) {
    return <div>No portfolio data.</div>;
  }

  return (
    <PortfolioProvider portfolio={data}>
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      {data.projects.length > 0 && <ProjectsSection />}
      <EducationSection />
      <ContactSection />
    </PortfolioProvider>
  );
}

export default Home;
