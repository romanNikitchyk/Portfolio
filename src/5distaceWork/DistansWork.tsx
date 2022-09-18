import React from "react";
import style from "./DistansWork.module.scss"
import BlockTitle from "../components/titles/BlockTitle";
import {Button} from "@mui/material";

function DistansWork() {
  return (
    <div className={style.distansWork}>
      <div className={style.container}>
        <BlockTitle text={"I AM AVAILABLE FOR freelance"}/>
        <Button className={style.button} variant="contained" color={"inherit"}>hire me</Button>
      </div>
    </div>
  );
}

export default DistansWork;
