import React, { useState } from "react";

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

  const techHigh = [
    "React",
    "React Native",
    "Node",
    "MongoDB",
    "ReduxTk",
    "Git",
    "MySQL",
  ];

  const techMed = [
    "Next",
    "Java",
    "C#",
    ".NET",
    "Python",
    "Django",
    "Angular",
    "PHP",
    "Laravel",
  ];

  return (
    <ul>
      <li>
        <label htmlFor="dropdownTouch1">
          <span className="dropdownSpan">Technologies ++</span>
        </label>
        <input
          type="checkbox"
          checked={checked1}
          onChange={handleCheck1}
          id="dropdownTouch1"
        />
        <ul className="dropdownSlide dropdownSlide1">
          <p className="dropdownP">
            Technologies that I can use without looking documentation in every
            step.
          </p>
          {techHigh.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </li>
      <li>
        <label htmlFor="dropdownTouch2">
          <span className="dropdownSpan">Technologies +-</span>
        </label>
        <input
          type="checkbox"
          checked={checked2}
          onChange={handleCheck2}
          id="dropdownTouch2"
        />
        <ul className="dropdownSlide dropdownSlide2">
          <p className="dropdownP">
            Technologies I can use but probably I have to look the documentation
            a little bit more.
          </p>
          {techMed.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </li>

      <li>
        <label htmlFor="dropdownTouch3">
          <span className="dropdownSpan">Soft skills</span>
        </label>
        <input
          type="checkbox"
          checked={checked3}
          onChange={handleCheck3}
          id="dropdownTouch3"
        />
        <ul className="dropdownSlide dropdownSlide3">
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
