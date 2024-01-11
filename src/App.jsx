import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import cardData from "./data";
import Card from "./components/Card";

function App() {
  const cards = cardData.map((card) => <Card key={card.id} {...card} />);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section>
          <div className="container">
            <h1 className="scrimba">@Scrimba projects</h1>
            <div className="overflow">{cards}</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
