import React from "react";
import style from "./Nav.module.scss"
function Nav() {
    return (
        <div className={style.nav}>
            <a href ={"#1"}>Main</a>
            <a href ={"#2"}>Skils</a>
            <a href ={"#3"}>Projects</a>
            <a href ={"#4"}>Contacts</a>
            <a href ={"#5"}>Links</a>
        </div>
    );
}

export default Nav;