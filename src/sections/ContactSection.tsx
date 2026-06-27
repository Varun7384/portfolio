import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  DownloadIcon,
  ArrowUpIcon,
} from "../components/icons";

import Container from "../components/Container";
import Section from "../components/Section";

import { usePortfolio } from "../contexts/PortfolioContext";
import { SECTION_IDS } from "../components/Navbar/navigation";

import "./ContactSection.css";

function ContactSection() {
  const { profile } = usePortfolio();

  return (
    <Section id={SECTION_IDS.CONTACT}>
      <Container>
        <div className="contact">
          <h2>Contact</h2>

          <p className="contact-text">
            I'm always open to discussing backend engineering, software
            development, and new opportunities.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <MailIcon size={20} />

              <span>{profile.email}</span>
            </a>

            <a href={`tel:${profile.phone}`} className="contact-link">
              <PhoneIcon size={20} />

              <span>{profile.phone}</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <LinkedinIcon size={20} />

              <span>LinkedIn</span>
            </a>

            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <GithubIcon size={20} />

                <span>GitHub</span>
              </a>
            )}
          </div>

          <a
            href={profile.resumeUrl}
            className="resume-button btn-primary"
            // className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            <DownloadIcon size={18} />
            Download Resume
          </a>
        </div>

        <footer className="contact-footer">
          <p>© {new Date().getFullYear()} Varun Boddula</p>

          <p>Built with React • TypeScript • Node.js</p>

          <a href="#hero" className="back-to-top">
            <ArrowUpIcon size={18} />
            Back to Top
          </a>
        </footer>
      </Container>
    </Section>
  );
}

export default ContactSection;
