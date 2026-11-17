
const skillGroups = [
  {
    title: "Programming",
    number: "01",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Web Development",
    number: "02",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Databases",
    number: "03",
    skills: ["MySQL", "Supabase"],
  },
  {
    title: "Development Tools",
    number: "04",
    skills: ["VS Code", "Git", "GitHub", "XAMPP"],
  },
  {
    title: "Currently Exploring",
    number: "05",
    skills: ["DevOps", "CI/CD"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="section-eyebrow">WHAT I WORK WITH</p>

        <h2>
          Tools, technologies
          <br />
          <span>& Skills.</span>
        </h2>

        <p className="skills-intro">
          Technologies I've worked with, tools I use,
          and areas I'm continually exploring as I grow
          as a developer.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
