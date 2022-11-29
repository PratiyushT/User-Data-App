import { React } from "react";
import style from './UserDisplay.module.css'
import Card from "../Card/Card";


//Display data received from the userDatas array (App.js).
const UserDisplay = appsProps => {
  return (
    <Card className={style.userDisplay}>
      {appsProps.userDatas.map(user =>
        <div key={Math.random().toString()} className={style.userDisplayData}>{`${user.name} (${user.age} years old)`}</div>)}
    </Card>

  )
}

export default UserDisplay;