import React from 'react';
import style from './Links.module.scss'
import {BlockTitle} from "../components/titles/BlockTitle";

export const Links = () => {
  return (
    <div className={style.container} id={"5"}>
      <BlockTitle text={"Roman Nikitchyk"}/>
      <div className={style.containerLinks}>
        <a href={'https://instagram.com/ramannikitchyk?r=nametag'} className={style.instagram}/>
        <a href={'https://www.linkedin.com/in/roman-nikitchyk-67b37a223/'} className={style.linkedIn}/>
        <a href={'https://t.me/romanNikitchyk'} className={style.telegram}/>
        <a href={'https://github.com/sssromaz'} className={style.github}/>
      </div>
    </div>
  );
};

