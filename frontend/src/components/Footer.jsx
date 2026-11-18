
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          JANET<span>.DEV</span>
          <p>Building ideas into digital solutions.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} JANET.DEV.
          All rights reserved.
        </p>
        <p>Designed and developed with passion.</p>
      </div>
    </footer>
  );
}

export default Footer;
