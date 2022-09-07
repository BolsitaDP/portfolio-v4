import React from "react";
import "./Projects.css";
import Card3d from "card3d";
import image from "../../assets/placeholder.png";
import portfoliov3 from "../../assets/projectsImages/portfoliov3.png";
import fitnessapp from "../../assets/projectsImages/Fitnessapp.png";
import { FaReact, FaNodeJs, FaGitAlt, FaUnity, FaGit } from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiBlender,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Parallax } from "react-scroll-parallax";

// data-card3d="" data-card3d-reverse="true"

const Projects = () => {
  return (
    <section name="projects" id="projects" className="section">
      <div className="projectsContainer">
        <div className="projectsCards">
          <Parallax speed={0}>
            <div
              className="card card1"
              data-card3d=""
              data-card3d-reverse="true">
              <div className="cardImage">
                <img src={portfoliov3} alt="" />
              </div>
              <div className="cardText">
                <div className="cardTitle">Previous Portfolio</div>
                <div className="cardDescription">
                  Portfolio from 3 months ago, different style, much simpler.
                </div>
                <div className="cardLink">
                  <a
                    href="https://portfolio-santiago-giraldo.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <FaGit />
              </div>
            </div>
          </Parallax>
          <Parallax speed={0}>
            <div
              className="card card2"
              data-card3d=""
              data-card3d-reverse="true">
              <div className="cardImage">
                <img src={fitnessapp} alt="" />
              </div>
              <div className="cardText">
                <div className="cardTitle">Fitness App.</div>
                <div className="cardDescription">
                  Fitness application for personal use.
                </div>
                <div className="cardLink">
                  <a
                    href="https://santiagogiraldo-fitnessapp.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <FaGit />
                <TbApi />
              </div>
            </div>
          </Parallax>
          <Parallax speed={0}>
            <div
              className="card card3"
              data-card3d=""
              data-card3d-reverse="true">
              <div className="cardImage">
                <img src={image} alt="" />
              </div>
              <div className="cardText">
                <div className="cardTitle">Lorem ipsum dolor sit amet.</div>
                <div className="cardDescription">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vero, deserunt!
                </div>
                <div className="cardLink">
                  <a href="#3">Demo</a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <FaGit />
                <SiRedux />
              </div>
            </div>
          </Parallax>
          <Parallax speed={0}>
            <div
              className="card card4"
              data-card3d=""
              data-card3d-reverse="true">
              <div className="cardImage">
                <img src={image} alt="" />
              </div>
              <div className="cardText">
                <div className="cardTitle">Lorem ipsum dolor sit amet.</div>
                <div className="cardDescription">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vero, deserunt!
                </div>
                <div className="cardLink">
                  <a href="#3">Demo</a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <FaGit />
                <SiRedux />
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Projects;
