
function Projects() {

  const projects = [
    {
      title: "School Management System",
      category: "Education Technology",
      description:
        "A system designed to manage students, teachers, classes and academic records efficiently.",
      technologies: ["React", "Node.js", "MySQL"]
    },
    {
      title: "Employee Payroll Management",
      category: "Business Management",
      description:
        "An application designed to manage employee information, salary calculations and payroll records.",
      technologies: ["PHP", "MySQL", "JavaScript"]
    },
    {
      title: "SmartPark",
      category: "Parking Management",
      description:
        "A smart parking management solution designed to organize parking operations and employee management.",
      technologies: ["React", "Node.js", "MySQL"]
    },
    {
      title: "Car Wash Management System (CWMS)",
      category: "Service Management",
      description:
        "A digital system designed to manage car wash services, packages, payments and reports.",
      technologies: ["React", "Express", "MySQL"]
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <p className="section-subtitle">
          MY RECENT WORK
        </p>

        <h2>
          My <span>Projects</span>
        </h2>

        <p>
          Some of the software solutions I have
          worked on as a developer.
        </p>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <a href="#contact" className="project-link">
              Discuss this project →
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
