import React from "react";
import Card from '../Card/Card'
import style from "./UserForm.module.css";

//Create a userForm which has two input values(userName and userAge)
const UserForm = () => {
  return (
    <Card className={style.userFormCard}>
      <form>
        <div>
          <label htmlFor="user-name">Username</label>
          <input type='text' id='user-name' />
        </div>

        <div>
          <label htmlFor="user-age">Age (Years)</label>
          <input type='number' id='user-age' />
        </div>

        <button type="submit">Add User</button>
      </form>
    </Card>
  )
}

export default UserForm;