
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home" id="home">
      <section className="hero">
        <p className="hero-eyebrow">
          CREATIVE DEVELOPER · KENYA
        </p>

        <h1>
          Building digital
          <br />
          experiences with
          <br />
          <span>purpose & passion.</span>
        </h1>

        <p className="hero-description">
          Hi, I'm Zuena Wambui — an aspiring software developer
          passionate about creating thoughtful,
          functional and meaningful digital experiences.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="primary-btn">
            Explore my work ↗
          </Link>

          <Link to="/contact" className="secondary-btn">
            Let's connect
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
