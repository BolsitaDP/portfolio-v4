import React, { useRef } from "react";
import { Element } from "react-scroll";
import Dropdown from "./Dropdown";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const About = () => {
  const contraintsRef = useRef(null);
  return (
    <Element name="About">
      <div className="aboutSection">
        <div className="aboutLeft">
          <Dropdown />
        </div>
        <div className="aboutRight">
          <Parallax speed={40}>
            <motion.div className="aboutMotionContainer" ref={contraintsRef}>
              <motion.div
                className="aboutMotionItem1"
                drag
                dragConstraints={contraintsRef}>
                <p className="aboutRightMain">
                  I am a 21 year old web developer. I discovered my passion for
                  programming a few years ago. I am a software programming
                  technician and for the last 4 years I have been dedicated to
                  learning different technologies, my favorite being everything
                  that has to do with web development. Now I am looking to
                  develop my skills in a professional environment that allows me
                  to continue doing what I like.
                </p>
              </motion.div>
              <motion.div
                className="aboutMotionItem2"
                drag
                dragConstraints={contraintsRef}>
                <p className="aboutRightComp">
                  Talking a little more about myself, I like origami, string
                  instruments and reading philosophy especially when I don't
                  understand it. I love challenges and I am very competitive.
                  Finally I would like to add that I studied psychology for 4
                  years... long story.
                </p>
              </motion.div>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </Element>
  );
};

export default About;
