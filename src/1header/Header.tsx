import React from "react";
import style from "./Header.module.scss"
import {Nav} from "./Nav";

export const Header = () => (
  <header className={style.header}>
    <Nav/>
  </header>
);


