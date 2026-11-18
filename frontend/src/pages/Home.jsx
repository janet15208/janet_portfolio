
function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <p className="welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Muhongerwa Janet</span>
        </h1>

        <h2>Full-Stack Developer</h2>

        <p className="description">
          I am a passionate Full-Stack Developer who
          enjoys creating modern websites, powerful
          applications and innovative digital solutions.
        </p>

        <div className="home-buttons">

          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>

        </div>

      </div>

      <div className="home-image">
        <div className="developer-card">
          <h3>JANET.DEV</h3>
          <p>Turning ideas into digital reality.</p>
          <div className="developer-icon">{"</>"}</div>
          <p>Code • Create • Innovate</p>
        </div>
      </div>

    </section>
  );
}

export default Home;
