
import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import style from "./Warning.module.css";

const Backdrop = props => {
  return <div onClick={props.onClick} className={style.backdrop}></div>
}

const ModalOverlay = props => {
  return (
    < React.Fragment>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2 >{props.about}</h2>
        </header>
        <div className={style.content}>
          <p>{props.children}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>)
}

const Warning = props => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onOkay} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay about={props.about} onOkay={props.onOkay} children={props.children} />, document.getElementById('overlay-root'))}
    </React.Fragment>

  )
}

export default Warning;