import React, { useRef } from "react";
import projects from "../../data/Projects";
import { FaReact, FaNodeJs, FaGit, FaMobile } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiMysql,
  SiFlutter,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Projects = () => {
  const contraintsRef = useRef(null);

  const icons = {
    React: <FaReact />,
    Node: <FaNodeJs />,
    Git: <FaGit />,
    Typescript: <SiTypescript />,
    MongoDB: <SiMongodb />,
    Express: <SiExpress />,
    Api: <TbApi />,
    Next: <SiNextdotjs />,
    Redux: <SiRedux />,
    Mysql: <SiMysql />,
    Mobile: <FaMobile />,
    Flutter: <SiFlutter />,
  };
  return (
    <Element name="Projects">
      <motion.div className="projectsSection" ref={contraintsRef}>
        {projects.map((pro) => {
          return (
            <motion.div
              className="projectsCard"
              key={pro.name}
              drag
              dragConstraints={contraintsRef}>
              <img
                className="projectsCardImg"
                src={pro.img}
                alt={pro.name}
                width={150}
                height={100}
              />
              <p className="projectsCardTitle">{pro.name}</p>
              <div className="projectsCardIcons">
                {pro.techs.map((tec) => {
                  return icons[tec];
                })}
              </div>
              <a href={pro.url} className="projectsCardUrl">
                Repo
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </Element>
  );
};

export default Projects;
