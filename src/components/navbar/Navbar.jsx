import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={`navbar`}>
      <div className="navbarLeft">
        <div className="navbarLogo">Santiago Giraldo</div>
        <div className="navbarLinks">
          <Link activeClass="active" smooth spy to="home">
            Home
          </Link>
          <Link
            activeClass="active"
            smooth
            spy
            to="about"
            className="linkAbout">
            About
          </Link>
          <Link activeClass="active" smooth spy to="projects">
            Projects
          </Link>
          <Link activeClass="active" smooth spy to="contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarSocials">
          <a
            href="https://www.linkedin.com/in/santiago-giraldo-2a6b1114a/"
            target="_blank"
            rel="noopener noreferrer">
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/BolsitaDP"
            target="_blank"
            rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
