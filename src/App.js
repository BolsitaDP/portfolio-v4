import "./App.css";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/aboutPage/About";
import Contact from "./pages/contactPage/Contact";
import Home from "./pages/homePage/Home";
import Projects from "./pages/projectsPage/Projects";
import Skills from "./pages/skillsPage/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
