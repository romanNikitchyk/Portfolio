import React from "react";
import style from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {BlockTitle} from "../components/titles/BlockTitle";
import develop from "../assets/images/development.png";
import progr from "../assets/images/programming.png";
import test from "../assets/images/test.png";
import des from "../assets/images/design.png";
import languages from "../assets/images/languages.png"
export const Skills = () => {
  const development = {
    backgroundImage: `url(${develop})`,
  }
  const foundation = {
    backgroundImage: `url(${progr})`,
  }
  const testing = {
    backgroundImage: `url(${test})`,
  }
  const design = {
    backgroundImage: `url(${des})`,
  }
  const language = {
    backgroundImage: `url(${languages})`
  }
  return (
    <div className={style.skillsBlock} id={"2"}>
      <BlockTitle text={"skills"}/>
      <div className={style.container}>
        <div className={style.skills}>
          <Skill style={development} title={"Development"}
                 discription={"React, Redux/Redux Toolkit, AXIOS, React-Hook-Form, Formik etc"}/>
          <Skill style={foundation} title={"Foundation"}
                 discription={"JavaScript, TypeScript, HTML5, CSS3"}/>
          <Skill style={testing} title={"Testing"} discription={"Unit Tests, Storybook"}/>
          <Skill style={design} title={"Design"} discription={"Material UI etc"}/>
          <Skill style={language} title={"Languages"}
                 discription={"English-intermediate, Polish-intermediate, Russian-native"}/>
        </div>
      </div>
    </div>
  );
};


