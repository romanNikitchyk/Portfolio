import React from "react";
import style from "./Skill.module.scss"
import {MiniTitle} from "../../components/titles/MiniTitle";
import {Zoom} from 'react-awesome-reveal';

type PropsSkillType = {
  title: string
  discription: string
  style: any
}

export const Skill = (props: PropsSkillType) => (
  <Zoom>
    <div className={style.skill}>
      <div className={style.container}>
        <div className={style.icon} style={props.style}/>
        <MiniTitle title={props.title}/>
        <span className={style.discription}>
                {props.discription}
            </span>
      </div>
    </div>
  </Zoom>
);


