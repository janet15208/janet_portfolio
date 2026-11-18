
function Skills() {

  const skills = [
    {
      name: "HTML",
      category: "Frontend Development",
      level: "Web Structure"
    },
    {
      name: "CSS",
      category: "Frontend Development",
      level: "Web Styling"
    },
    {
      name: "JavaScript",
      category: "Frontend Development",
      level: "Programming"
    },
    {
      name: "React",
      category: "Frontend Development",
      level: "UI Development"
    },
    {
      name: "PHP",
      category: "Backend Development",
      level: "Server-side Programming"
    },
    {
      name: "Laravel",
      category: "Backend Development",
      level: "PHP Framework"
    },
    {
      name: "Node.js",
      category: "Backend Development",
      level: "Runtime Environment"
    },
    {
      name: "MySQL",
      category: "Database",
      level: "Database Management"
    }
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <p className="section-subtitle">
          MY TECHNICAL ABILITIES
        </p>

        <h2>
          My <span>Skills</span>
        </h2>

        <p>
          Technologies I use to transform ideas
          into functional digital solutions.
        </p>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <h3>{skill.name}</h3>

            <p>{skill.category}</p>

            <span>{skill.level}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
