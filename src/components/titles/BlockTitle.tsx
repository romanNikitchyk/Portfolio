import React from 'react';
import style from './BlockTitle.module.scss'
import {Bounce} from 'react-awesome-reveal';

type TitlePropsType = {
  text: string
}

export const BlockTitle = (props: TitlePropsType) => {
  return (
    <Bounce>
      <div className={style.title}>
        <h2 className={style.text}>{props.text}</h2>
      </div>
    </Bounce>
  );
};

