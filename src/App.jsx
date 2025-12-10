import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
      <hr className="border-gray-700 " />
      <Footer />
      <BackToTop />
    </div>
  );
}
export default App;
