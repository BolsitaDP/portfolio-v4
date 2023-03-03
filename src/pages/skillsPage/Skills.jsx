import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

import certificates from "../../data/Certificates";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Element name="Skills">
      <div className="skillsSection">
        <div className="skillsSlider">
          <div className="skillsSliderContainer">
            {certificates.map((slide, index) => (
              <motion.div
                key={slide.name}
                className="skillsSliderItem"
                animate={{
                  x: (index / 2 - currentSlide) * 100 + "%",
                }}>
                <AnimatePresence>
                  {isVisible && (
                    <motion.div
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
                      className="skillsSliderItemContent">
                      <div className="skillsSliderItemTitle">{slide.name}</div>
                      <div className="skillsSliderItemProvider">
                        {slide.provider}
                      </div>
                      <div className="skillsSliderItemDate">{slide.date}</div>
                      <a href={slide.url} className="skillsSliderItemUrl">
                        Url
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="skillsBns">
            <button
              className={`skillsSliderBtnPrev ${
                currentSlide <= 0 ? "disabled" : "enabled"
              }`}
              onClick={() => setCurrentSlide(currentSlide - 1)}>
              Prev
            </button>
            <button
              className={`skillsSliderBtnNext ${
                currentSlide >= certificates.length - 1 ? "disabled" : "enabled"
              }`}
              onClick={() => setCurrentSlide(currentSlide + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
