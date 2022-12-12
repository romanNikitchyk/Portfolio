import React from 'react';
import style from "./Project.module.scss"
import {MiniTitle} from "../../components/titles/MiniTitle";
import {Zoom} from 'react-awesome-reveal';

type WorkPropsType = {
  title: string
  discription: string
  style: any
  link: string
}
export const Project = (props: WorkPropsType) => {
  return (
    <div className={style.container}>
      <Zoom>
        <a href={props.link}>
          <div className={style.image} style={props.style}/>
        </a>
        <MiniTitle title={props.title}/>
        <div className={style.description}>
          <span>{props.discription}</span>
        </div>
      </Zoom>
    </div>
  );
};
