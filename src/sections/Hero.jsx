import { Button } from "../components/Button";

const adjective = ["Devoted", "Passionate", "Eager", "Dedicated", "Commited"];
const random = Math.floor(Math.random() * adjective.length);

export function Hero() {
  return (
    <section className="section-hero flex">
      <div className="hero-container flex">
        <h1 className="hero-title">A {adjective[random]} Front-end Developer From Belgium</h1>
        <p className="hero-text">
          A beginning Front-end Developer, Currently learning on{" "}
          <a className="hero-link" href="https://scrimba.com/" target="_blank">
            @Scrimba
          </a>
        </p>
        <div className="hero-buttons flex">
          <a className="nav-button" href="mailto:maniixer@hotmail.com">Let's chat!</a>
          <Button as="a" variant="secondary">
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
