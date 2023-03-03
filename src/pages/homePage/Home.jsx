import React from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { Parallax } from "react-scroll-parallax";

import image from "../../assets/PersonalImage.jpg";

const Home = () => {
  return (
    <Element name="Home">
      <div className="homeSection">
        <Parallax speed={-30}>
          <div className="homeLeft">
            <AnimatePresence>
              {isVisible && (
                <motion.img
                  key={image}
                  src={image}
                  width={450}
                  className="homeImg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    default: {
                      duration: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              )}
            </AnimatePresence>
          </div>
        </Parallax>
        <Parallax speed={-50}>
          <div className="homeRight">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <span>Hey! I'm Santiago</span> <br />
              I'm a web developer and this is my portfolio.
            </motion.div>
          </div>
        </Parallax>
      </div>
    </Element>
  );
};

export default Home;
