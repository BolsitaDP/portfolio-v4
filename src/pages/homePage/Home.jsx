import React from "react";
import "./Home.css";
import image from "../../assets/Personal.jpg";
import Card3d from "card3d";
import { Parallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <section name="home" id="home" className="section">
      <div className="homeContainer">
        <Parallax speed={30}>
          <div className="homeLeft slow">
            Hey! I'm Santiago, I'm a web developer and this is my portfolio.
          </div>
        </Parallax>
        <Parallax speed={-20}>
          <div className="homeRight slow">
            <div data-card3d="" data-card3d-reverse="true">
              <img src={image} alt="" />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Home;
