import "./App.css";
import React, { CSSProperties } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Projects from "./pages/projectsPage/Projects";
import Contact from "./pages/contactPage/Contact";

function App() {
  // var scroll = Scroll.animateScroll;
  // const scrollMore = ({ data }) => {
  //   scroll.scrollMore(data);
  // };

  const random = Math.floor((Math.random() + 1) * 3);
  console.log("Loading time: " + random + "s");

  return (
    <div className="App" style={{ "--animationTime": random + "s" }}>
      <div className="loading"></div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
