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
                <img src={image} alt="" />
              </div>
              <div className="cardText">
                <div className="cardTitle">Food Delivery App</div>
                <div className="cardDescription">
                  Food Delivery App made with ReduxTk consuming fake data.
                </div>
                <div className="cardLink">
                  <a
                    href="https://github.com/BolsitaDP/food-delivery-v1"
                    target="_blank"
                    rel="noopener noreferrer">
                    Repository
                  </a>
                  <a
                    href="https://food-delivery-sg.netlify.app/home"
                    target="_blank"
                    rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <SiRedux />
                <TbApi />
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
                <img src={image} alt="" />
              </div>
              <div className="cardText">
                <div className="cardTitle">Ecommerce</div>
                <div className="cardDescription">
                  Ecommerce made with ReduxTk consuming a free API.
                </div>
                <div className="cardLink">
                  <a
                    href="https://github.com/BolsitaDP/generic-ecommerce-redux"
                    target="_blank"
                    rel="noopener noreferrer">
                    Repository
                  </a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <SiRedux />
                <TbApi />
                <FaGit />
              </div>
            </div>
          </Parallax>
          <Parallax speed={0}>
            <div
              className="card card3"
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
              className="card card4"
              data-card3d=""
              data-card3d-reverse="true">
              <div className="cardImage">
                <img src={image} alt="" />
              </div>
              <div className="cardText">
                <div className="cardTitle">CRUD Todo list.</div>
                <div className="cardDescription">
                  Todo List made with ReduxTk.
                </div>
                <div className="cardLink">
                  <a href="https://github.com/BolsitaDP/crud-reduxtoolkit">
                    Repository
                  </a>
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
                <div className="cardTitle">Nextjs github store clone</div>
                <div className="cardDescription">
                  Kind of ecommerce made with ReduxTk and consuming a free API.
                </div>
                <div className="cardLink">
                  <a href="https://github.com/BolsitaDP/nextjs-1-github-store">
                    Repository
                  </a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <FaGit />
                <SiRedux />
                <TbApi />
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
                <div className="cardTitle">MoviePage</div>
                <div className="cardDescription">
                  Movie page clone with ReduxTk consuming a free API.
                </div>
                <div className="cardLink">
                  <a href="https://github.com/BolsitaDP/PaginaPeliculas">
                    Repository
                  </a>
                </div>
              </div>
              <div className="cardTechnologies">
                <FaReact />
                <FaGit />
                <SiRedux />
                <TbApi />
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Projects;
