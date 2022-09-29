import React from "react";
import style from "./Projects.module.scss"
import Project from "./project/Project";
import BlockTitle from "../components/titles/BlockTitle";
import todo from './../assets/images/todo.png'
import socialNetwork from './../assets/images/network.png'
import count from './../assets/images/counter.png'

function Projects() {
  const social = {
    backgroundImage: `url(${socialNetwork})`,
  }
  const todoList = {
    backgroundImage: `url(${todo})`,
  }
  const counter = {
    backgroundImage: `url(${count})`,
  }
  return (
    <div className={style.projectBlock} id={"3"}>
      <div className={style.container}>
        <BlockTitle text={"Projects"}/>
        <div className={style.myWorks}>
          <Project link={'https://www.youtube.com/'} style={social} title={"social network"}
                   discription={"Social network: research project, sharpening skills"}/>
          <Project link={'https://sssromaz.github.io/todoList-React-Redux'} style={todoList} title={"To do list"}
                   discription={"To do list for every day on the week"}/>
          <Project link={'https://sssromaz.github.io/Counter'} style={counter} title={"counter"}
                   discription={"My first study project"}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
