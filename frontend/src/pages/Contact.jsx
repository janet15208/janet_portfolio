
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p className="section-subtitle">GET IN TOUCH</p>

        <h2>
          Let's Work <span>Together</span>
        </h2>

        <p>
          Have a project idea or an opportunity?
          I would love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's talk about your project</h3>

          <p>
            I am open to discussing web development,
            software projects and collaboration opportunities.
          </p>

          <div className="contact-item">
            <span>Email</span>
            <p>Add your email address here</p>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Write your message..."
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
