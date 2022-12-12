import React from "react";
import style from "./Projects.module.scss"
import {Project} from "./project/Project";
import {BlockTitle} from "../components/titles/BlockTitle";
import todo from './../assets/images/todo.png'
import count from './../assets/images/counter.png'
import cardGame from '../assets/images/cardGame.png'
import task from '../assets/images/tasks.png'

export const Projects = () => {
  const cardsGame = {
    backgroundImage: `url(${cardGame})`
  }
  const todoList = {
    backgroundImage: `url(${todo})`,
  }
  const counter = {
    backgroundImage: `url(${count})`,
  }
  const tasks = {
    backgroundImage: `url(${task})`
  }
  return (
    <div className={style.projectBlock} id={"3"}>
      <div className={style.container}>
        <BlockTitle text={"Projects"}/>
        <div className={style.myWorks}>
          <Project link={'https://sssromaz.github.io/Cards'} style={cardsGame} title={"cards Game"}
                   discription={"Cards with questions to which you must know the answer"}/>
          <Project link={'https://sssromaz.github.io/todoList-React-Redux'} style={todoList} title={"To do list"}
                   discription={"To do list for every day on the week"}/>
          <Project link={'https://sssromaz.github.io/Counter'} style={counter} title={"counter"}
                   discription={"My first study project"}/>
          <Project link={'https://sssromaz.github.io/HW_Ignat'} style={tasks} title={"React tasks"}
                   discription={"Tasks from my teacher"}/>
        </div>
      </div>
    </div>
  );
};


