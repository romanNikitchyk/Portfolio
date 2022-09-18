import React from "react";
import style from "./Skills.module.scss"
import Skill from "./skill/Skill";
import BlockTitle from "../components/titles/BlockTitle";
import develop from "../assets/images/development.png";
import progr from "../assets/images/programming.png";
import t from "../assets/images/test.png";
import des from "../assets/images/design.png";

function Skills() {
  const development = {
    backgroundImage: `url(${develop})`,
  }
  const foundation = {
    backgroundImage: `url(${progr})`,
  }
  const testing = {
    backgroundImage: `url(${t})`,
  }
  const design = {
    backgroundImage: `url(${des})`,
  }
  return (
    <div className={style.skillsBlock} id={"2"}>
      <BlockTitle text={"skills"}/>
      <div className={style.container}>
        <div className={style.skills}>
          <Skill style={development} title={"Development"}
                 discription={"React, Redux/Redux Toolkit, AXIOS, React-Hook-Form, Formik etc"}/>
          <Skill style={foundation} title={"Foundation"}
                 discription={"JavaScript, TypeScript, HTML5, CSS3, English - Intermediate , Polish - Intermediate  "}/>
          <Skill style={testing} title={"Testing"} discription={"Unit Tests, Storybook"}/>
          <Skill style={design} title={"Design"} discription={"Material UI etc"}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
