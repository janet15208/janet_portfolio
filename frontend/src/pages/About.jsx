
function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">

        <div className="about-card">
          <div className="about-icon">{"</>"}</div>
          <h3>Who Am I?</h3>
          <p>
            My name is Muhongerwa Janet. I am a passionate
            Full-Stack Developer interested in creating
            modern, useful and innovative software solutions.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">{"{ }"}</div>
          <h3>What I Do</h3>
          <p>
            I develop web applications using technologies
            such as React, JavaScript, PHP, Laravel,
            Node.js and MySQL.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">✦</div>
          <h3>My Vision</h3>
          <p>
            My goal is to become an innovative software
            engineer who uses technology and artificial
            intelligence to solve real-world problems.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;
