import React from "react";
import "./About.css";
import Dropdown from "./Dropdown";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <section name="about" id="about" className="section">
      <div className="aboutBackground"></div>
      <div className="aboutContainer">
        <div className="aboutLeft">
          <Parallax speed={30}>
            <Dropdown />
          </Parallax>
        </div>
        <div className="aboutRight">
          <Parallax speed={-30}>
            <p>
              I'm a 21-year-old web developer. I discovered my passion for
              programming few years ago. I am a software programming technician
              and, for 4 years, I have dedicated myself to learning different
              technologies, being everything that has to do with web development
              my favorite. Now I seek to develop my skills in a work environment
              that allows me to continue doing what I like. 
            </p>
            <span>
              Talking a little more about myself, I like origami, string
              instruments and reading philosophy especially when I don't
              understand it. I love challenges and I am too competitive. Finally
              I would like to add that I studied psychology for 4 years... long
              story.
            </span>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default About;
