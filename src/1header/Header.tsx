import React from "react";
import style from "./Header.module.scss"
import Nav from "./Nav";
function Header() {
    return (
        <div className={style.header} style={{background: '#f5f5f5'}}>
            <Nav/>
        </div>
    );
}

export default Header;
