import { React } from "react";
import style from './UserDisplay.module.css'
import Card from "../Card/Card";


//Display data received from the userDatas array (App.js).
const UserDisplay = props => {
  return (

    <Card className={style.userDisplay}>
      {props.userDatas.map(user =>
        <div className={style.userDisplayData}>{`${user.name} (${user.age} years old)`}</div>)}
    </Card>

  )
}

export default UserDisplay;