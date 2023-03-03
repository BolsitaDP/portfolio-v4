import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <nav className="navbar">
      <div className="navbarName">Santiago Giraldo</div>
      <div className="navbarLinks">
        {links.map((el, index) => {
          return (
            <li key={index}>
              <Link
                className="navbarLinkBtn"
                activeClass="active"
                to={el}
                spy={true}
                smooth={true}
                // offset={50}
                duration={700}
                // onSetActive={this.handleSetActive}
                activeStyle={{
                  textDecoration: "underline",
                  transition: "1s",
                }}>
                {el}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="navbarIcons">
        <a href="https://www.linkedin.com/in/santiago-giraldo-dev/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/BolsitaDP">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
