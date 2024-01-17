import { Button } from "./Button";

export function Card({ as = "div", title, img, github, published, description, link, language, ...rest }) {
  const Comp = as;
  const badges = language.map((badge) => <img src={badge} key={badge} />);

  return (
    <Comp className="card" {...rest}>
      <div className="card-container">
        <div className="card-context">
          <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
          <h1>{title}</h1>
          <div className="card-info">
            <p className="card-publish">{published}</p>
            <div className="card-language">{badges}</div>
          </div>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-buttons">
          <Button as="a" fullWidth href={link} target="_blank">
            Visit Website
          </Button>
          {github && (
            <Button as="a" variant="secondary" href={github} target="_blank">
              <i className="fa-brands fa-github fa-lg"></i>
            </Button>
          )}
        </div>
      </div>
    </Comp>
  );
}
