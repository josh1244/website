import "../styles/components.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Unlock Your Potential</h1>
        <p>
          Welcome to my corner of the web. Here you'll find my thoughts,
          projects, and experiences in technology and development.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a href="/projects" className="button">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
