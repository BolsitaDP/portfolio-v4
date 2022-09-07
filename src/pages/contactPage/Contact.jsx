import React from "react";
import "./Contact.css";
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  return (
    <section name="contact" id="contact" className="section">
      <div className="contactBackground"></div>
      <div className="contactContainer">
        <Parallax speed={-50}>
          <div className="contactInfo">
            <div className="contactTitle">You can contact me at:</div>
            <div className="infoEmail">sgiraldo118@gmail.com</div>
            <a
              href="https://www.linkedin.com/in/santiago-giraldo-2a6b1114a/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              href="https://github.com/BolsitaDP"
              target="_blank"
              rel="noopener noreferrer">
              Github
            </a>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Contact;
