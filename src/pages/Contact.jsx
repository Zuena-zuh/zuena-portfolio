
function Contact() {
  return (
    <section className="contact-section" id="contact">

      <p className="section-eyebrow">LET'S CONNECT</p>

      <h2>
        Have an idea?
        <br />
        <span>Let's make it happen.</span>
      </h2>

      <p className="contact-intro">
        I'm always open to meaningful opportunities,
        collaborations and conversations about
        technology, creativity and building useful things.
      </p>

      <div className="contact-content">

        {/* Contact details */}
        <div className="contact-details">

          <p className="contact-label">GET IN TOUCH</p>

          <a
            href="mailto:damariscawambui@gmail.com"
            className="contact-email"
          >
            <span>✉</span>
            damariscawambui@gmail.com
          </a>

          <a
            href="tel:+254743289173"
            className="contact-email"
          >
            <span>☎</span>
            +254 743 289 173
          </a>

        </div>

        {/* Contact form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xqpqelpj"
          method="POST"
        >
          <p className="contact-label">SEND ME A MESSAGE</p>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me a little about your idea..."
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message ↗
          </button>

        </form>

        {/* Social links */}
        <div className="social-links">

          <a
            href="https://github.com/Zuena-zuh"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/zuena-macharia-b5a15b2b3"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn ↗
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
