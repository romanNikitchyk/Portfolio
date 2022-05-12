import React from "react";
import style from "./Skills.module.css"
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod "}/>
                    <Skill title={"React"} discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod "}/>
                    <Skill title={"Redux"} discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod "}/>


                </div>
            </div>

        </div>
    );
}

export default Skills;
