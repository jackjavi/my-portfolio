import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Portfolio />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
