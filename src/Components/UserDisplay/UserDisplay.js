import { React } from "react";
import style from './UserDisplay.module.css'
import Card from "../Card/Card";


const UserDisplay = appsProps => {

  if (appsProps.userDatas.length === 0) {
    return (
      <Card className={style.userDisplay}>
        <div className={style.noExpensesDisplay}>No users were found.</div>
      </Card>
      )
  }
  //Else
  return (
    <Card className={style.userDisplay}>
      {appsProps.userDatas.map(user =>
        <div key={Math.random().toString()} className={style.userDisplayData}>{`${user.name} (${user.age} years old)`}</div>)}
    </Card>

  )
}

export default UserDisplay;