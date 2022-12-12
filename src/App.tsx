import React from 'react';
import {Main} from "./2main/Main";
import {Skills} from "./3skills/Skills";
import {Projects} from "./4projects/Projects";
import {Contacts} from "./6contacts/Contacts";
import {Footer} from "./8footer/Footer";
import {Header} from "./1header/Header";
import style from './App.module.scss'
import {Links} from "./7links/Links";

export const App = () => (
  <div className={style.App}>
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Links/>
    <Footer/>
  </div>
);


