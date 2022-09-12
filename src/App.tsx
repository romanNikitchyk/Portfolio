import React from 'react';
import Main from "./2main/Main";
import Skills from "./3skills/Skills";
import Projects from "./4projects/Projects";
import DistansWork from "./5distaceWork/DistansWork";
import Contacts from "./6contacts/Contacts";
import Footer from "./8footer/Footer";
import Header from "./1header/Header";
import style from './App.module.scss'
import Links from "./7links/Links";

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <DistansWork/>
      <Contacts/>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
