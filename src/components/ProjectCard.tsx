import type { Project } from "../../shared/types";

import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
