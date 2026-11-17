
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    number: "01",
    name: "NyeriNest",
    category: "PROPERTY MARKETPLACE",
    description:
      "A Kenya-focused rental property marketplace designed to make finding and listing homes easier, safer and more accessible.",
    technologies: ["JavaScript", "CSS", "Supabase"],
    features: [
      "Tenant-focused property discovery",
      "Landlord registration and authentication",
      "Property listing submissions",
      "Landlord dashboard",
      "Property photo uploads",
    ],
    github: "",
    demo: "",
    status: "Featured project",
    className: "project-nyeri",
  },
  {
    number: "02",
    name: "Bloom Creative Studio",
    category: "CREATIVE AGENCY WEBSITE",
    description:
      "A welcoming digital home for a creative studio offering branding, graphic design, website design and social media services.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive website design",
      "Creative services showcase",
      "Contact form integration with Formspree",
      "Mobile-friendly navigation",
    ],
    github: "https://github.com/Zuena-zuh/Bloom",
    demo: "https://zuena-zuh.github.io/Bloom/",
    status: "Completed",
    className: "project-bloom",
  },
  {
    number: "03",
    name: "Zuena Portfolio 2.0",
    category: "PERSONAL PORTFOLIO",
    description:
      "A personal digital space bringing together my development journey, technical skills and creative perspective.",
    technologies: ["React", "Vite", "CSS"],
    features: [
      "Responsive portfolio layout",
      "Light and dark theme switching",
      "Interactive project showcase",
      "Integrated contact form",
    ],
    github: "",
    demo: "",
    status: "In development",
    className: "project-portfolio",
  },
  {
    number: "04",
    name: "SafiStay",
    category: "APPRO8 INTERNSHIP · TASK 1",
    description:
      "A responsive landing page for a Kenyan accommodation-discovery concept, designed to make exploring stays and destinations simple and engaging.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive landing page",
      "Accommodation discovery concept",
      "Clear calls to action",
      "Mobile-friendly layout",
    ],
    github: "https://github.com/Zuena-zuh/safistay-landing-page",
    demo: "https://zuena-zuh.github.io/safistay-landing-page/",
    status: "Completed · AppRo8",
    className: "project-safistay",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="projects-section" id="projects">
        <div className="projects-container">

          <div className="projects-heading">
            <div>
              <p className="section-eyebrow">SELECTED WORK</p>
              <h2>
                Ideas turned
                <br />
                <span>into reality.</span>
              </h2>
            </div>

            <p className="projects-intro">
              A collection of projects shaped by curiosity,
              creativity and a love for building useful things.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                    className={`project-card ${project.className}`}
                    key={project.number}
                    onClick={() => setSelectedProject(project)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                  >
                <div className="project-visual">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-visual-name">
                    {project.name}
                  </span>

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <div className="project-details">
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;
