import Navbar from "./structures/Navbar";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Skills } from "./sections/Skills";
import Footer from "./structures/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
