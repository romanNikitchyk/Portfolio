import React from "react";
import style from "./MyWorks.module.css"
import Work from "./work/Work";

function MyWorks() {
    return (
        <div className={style.workBlock}>
            <div className={style.container}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.myWorks}>
                    <Work title={"TO DO LIST"} discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.."}/>
                    <Work title={"RePux"} discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.."}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
