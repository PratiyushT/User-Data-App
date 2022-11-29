import React, { useState } from "react";
import Card from '../Card/Card'
import style from "./UserForm.module.css";

//Create a userForm which has two input values(userName and userAge)
const UserForm = appProps => {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const nameChangeHandler = event => setUserName(event.target.value);
  const ageChangeHandler = event => setUserAge(event.target.value);


  const submitHandler = event => {
    event.preventDefault();
    let userData = { name: userName, age: userAge }
    appProps.onSubmitUserForm(userData);
    setUserAge('');
    setUserName('');
  }

  return (
    <Card className={style.userFormCard}>
      <form>
        <div>
          <label htmlFor="user-name">Username</label>
          <input type='text' id='user-name' value={userName} onChange={nameChangeHandler} />
        </div>

        <div>
          <label htmlFor="user-age">Age (Years)</label>
          <input type='number' id='user-age' value={userAge} onChange={ageChangeHandler} />
        </div>

        <button type="submit" onClick={submitHandler}>Add User</button>
      </form>
    </Card>
  )
}

export default UserForm;