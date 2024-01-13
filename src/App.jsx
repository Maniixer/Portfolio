import Navbar from "./structures/Navbar";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
