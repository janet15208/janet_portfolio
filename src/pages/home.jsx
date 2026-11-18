
function Home() {
  return (
    <section className="home" id="home">

      <div className="hero-content">

        <div className="hero-badge">
          <span className="status-dot"></span>
          Available for Opportunities
        </div>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          Muhongerwa <br />
          <span>Janet.</span>
        </h1>

        <h2>
          Full-Stack Developer
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web
          applications that solve real-world problems.
          Passionate about technology, creativity and innovation.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work ↗
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect
          </a>
        </div>

        <div className="hero-social">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>

      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>

        <div className="code-card">
          <div className="code-header">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>developer.js</p>
          </div>

          <div className="code-content">
            <p><span>const</span> developer = {"{"}</p>
            <p className="indent">name: <span>"Janet"</span>,</p>
            <p className="indent">role: <span>"Full-Stack Developer"</span>,</p>
            <p className="indent">passion: <span>"Building Ideas"</span>,</p>
            <p className="indent">creative: <span>true</span>,</p>
            <p>{"}"}</p>
            <br />
            <p><span>console</span>.log("Hello World!");</p>
          </div>

          <div className="code-footer">
            <span>●</span> Ready to build something amazing
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
