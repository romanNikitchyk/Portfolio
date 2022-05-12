import React from "react";
import style from "./Main.module.css"

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hello my name is</span>
                    <h1>
                        ROMAN
                    </h1>
                    <p>Yo</p>
                </div>
                <div className={style.photo}>photo</div>
            </div>
        </div>
    );
}

export default Main;
