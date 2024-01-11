export default function Card(props) {
  const badges = props.language.map((badge) => <img src={badge} />);
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-context">
          <div className="card-img" style={{ backgroundImage: `url(${props.img})` }}></div>
          <h1>{props.title}</h1>
          <div className="card-info">
            <p className="card-publish">{props.published}</p>
            <div className="card-language">{badges}</div>
          </div>
          <p className="card-description">{props.description}</p>
        </div>
        <div className="card-buttons">
          <a href={props.link} target="_blank">
            <button>Visit Website</button>
          </a>
          <a href={props.github} target="_blank">
            <button>
              <i className="fa-brands fa-github fa-lg"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
