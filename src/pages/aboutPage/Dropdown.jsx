import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const handleCheck1 = () => {
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
  };
  const handleCheck2 = () => {
    setChecked1(false);
    setChecked2(true);
    setChecked3(false);
  };
  const handleCheck3 = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(true);
  };

  return (
    <ul>
      <li>
        <label htmlFor="touch1">
          <span className="span1">Technologies I use</span>
        </label>
        <input
          type="checkbox"
          checked={checked1}
          onChange={handleCheck1}
          id="touch1"
        />
        <ul className="slide1">
          <li>React</li>
          <li>Node</li>
          <li>Git</li>
          <li>Redux TK</li>
          <li>Next.js</li>
          <li>MongoDb</li>
          <li>FireBase</li>
          <li>React Native</li>
          <li>Unity</li>
          <li>GameMaker Studio 2</li>
          <li>Blender</li>
        </ul>
      </li>
      <li>
        <label htmlFor="touch2">
          <span className="span2">Technologies I prefer</span>
        </label>
        <input
          type="checkbox"
          checked={checked2}
          onChange={handleCheck2}
          id="touch2"
        />
        <ul className="slide2">
          <li>
            Currently my main interest is React, although I also love UX/UI
            designs and making beautiful things with CSS. <br /> Anyway, I don't
            rule out the idea of ​​becoming a full stack developer in the near
            future.
          </li>
        </ul>
      </li>

      <li>
        <label htmlFor="touch3">
          <span className="span3">Soft skills</span>
        </label>
        <input
          type="checkbox"
          checked={checked3}
          onChange={handleCheck3}
          id="touch3"
        />
        <ul className="slide3">
          <li>
            Without boasting… well, maybe a little, I consider myself a quick
            learner, with a high tolerance for frustration and I am good at
            teamwork, however I consider that I do not have an innate leadership
            but I am working on it.
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Dropdown;
