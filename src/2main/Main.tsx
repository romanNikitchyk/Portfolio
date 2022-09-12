import React from "react";
import style from "./Main.module.scss"
import photo from "../assets/images/photoA.jpg"

function Main() {
    return (
        <div className={style.mainBlock} id={"1"}>
            <div className={style.container}>
                <div className={style.text}>
                    <h3>Hello, my name is</h3>
                    <h1>
                        ROMAN NIKITCHYK
                    </h1>
                    <h3>FRONT-END DEVELOPER BASED IN #BREST</h3>
                </div>
                <div className={style.photoBlock}>
                    <img className={style.photo} src={photo}/>
                </div>


            </div>
        </div>
    );
}

export default Main;
