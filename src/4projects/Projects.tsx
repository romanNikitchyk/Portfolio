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
                   discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.."}/>
          <Project link={'https://www.youtube.com/'} style={todoList} title={"To do list"}
                   discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.."}/>
          <Project link={'https://www.youtube.com/'} style={counter} title={"counter"}
                   discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.."}/>

        </div>
      </div>
    </div>
  );
}

export default Projects;
