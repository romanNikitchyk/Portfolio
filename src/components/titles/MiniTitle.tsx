import React from 'react';
import style from "./MiniTitle.module.scss"

type MiniTitlePropsType = {
  title: string
}
export const MiniTitle = (props: MiniTitlePropsType) => {
  return (
    <div className={style.miniTitle}>
      <h3>{props.title}</h3>
    </div>
  );
};

