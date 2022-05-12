import React from "react";
import style from "./Skill.module.css"

type PropsSkillType = {
    title:string
    discription:string
}
function Skill(props:PropsSkillType) {
    return (
        <div className={style.skill}>
            <div className={style.container}>
            <div className={style.icon}>pic</div>
            <h3>{props.title}</h3>
            <span className={style.discription}>
                {props.discription}
            </span>
            </div>
        </div>
    );
}

export default Skill;