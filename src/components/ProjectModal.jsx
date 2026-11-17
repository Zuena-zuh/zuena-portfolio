
import { X, Code, ExternalLink } from "lucide-react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={22} />
        </button>

        <p className="section-eyebrow">
          {project.category}
        </p>

        <h2>{project.name}</h2>

        <p className="modal-description">
          {project.description}
        </p>

        <div className="modal-technologies">
          <h3>Technologies used</h3>

          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <div className="modal-features">
          <h3>Project highlights</h3>

          <ul>
            {project.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="modal-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Code size={18} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
