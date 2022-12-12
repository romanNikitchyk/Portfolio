import React from "react";
import style from "./Main.module.scss"
import photo from "../assets/images/photoA.jpg"
import {Fade} from 'react-awesome-reveal';
import {Zoom} from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';

export const Main = () => (
  <div className={style.mainBlock} id={"1"}>
    <div className={style.container}>
      <div className={style.text}>
        <Zoom>
          <h3>Hello, my name is</h3>
          <h1>
            ROMAN NIKITCHYK
          </h1>
          <h3>FRONT-END DEVELOPER BASED IN #BREST</h3>
        </Zoom>
      </div>
      <div className={style.photoBlock}>
        <Fade>
          <Tilt>
            <img className={style.photo} src={photo} alt={'photo'}/>
          </Tilt>
        </Fade>
      </div>
    </div>
  </div>
);


