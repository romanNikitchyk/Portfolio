import React from 'react';
import style from "./Work.module.css"
type WorkPropsType={
    title:string
    discription:string
}
const Work = (props:WorkPropsType) => {
    return (
            <div className={style.container}>
            <a href={"https://www.youtube.com/watch?v=RVqe0uBMzS0&ab_channel=%D0%98%D1%80%D0%B8%D0%BD%D0%B0%D0%A0%D0%B8%D1%81"}>
                <img src={"https://cdn1.ozone.ru/s3/multimedia-6/6023010126.jpg"}/>
            </a>
            <h2>{props.title}</h2>
            <span>{props.discription}</span>
            </div>
    );
};

export default Work;