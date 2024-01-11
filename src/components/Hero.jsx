export default function Hero() {
  return (
    <section className="section-hero flex">
      <div className="hero-container flex">
        <h1 className="hero-title">A Keen Front-end Developer From Belgium</h1>
        <p className="hero-text">
          A beginning Front-end Developer, Currently learning on{" "}
          <a className="hero-link" href="https://scrimba.com/" target="_blank">
            @Scrimba
          </a>
        </p>
        <div className="hero-buttons flex">
          <button className="nav-button">Let's chat!</button>
          <button className="resume">Resume</button>
        </div>
      </div>
    </section>
  );
}
