import cardData from "../projectData";
import { Card } from "../components/Card";

function Projects(props) {
  return (
    <section>
      <div className="container">
        <h1 className="section-title">Things i have build.</h1>
        <div className="overflow">
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
