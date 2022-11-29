
import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import style from "./Warning.module.css";

const Warning = props => {
  
  return (
    <div>
      <div className={style.backdrop}></div>
      <Card className={style.modal}>

        <header>
          <h2 className={style.header}>{props.about}</h2>
        </header>
        <div className={style.content}>
          <p>{props.children}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Card>
    </div>

  )
}

export default Warning;