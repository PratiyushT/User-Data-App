import React, { useState } from "react";
import Card from '../Card/Card'
import style from "./UserForm.module.css";
import Button from "../Button/Button";
import Warning from '../Warning/Warning';

//Create a userForm which has two input values(userName and userAge)
const UserForm = appProps => {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const nameChangeHandler = event => setUserName(event.target.value);
  const ageChangeHandler = event => setUserAge(event.target.value);


  const [notError, setNotError] = useState(true)

  const submitHandler = event => {
    event.preventDefault();
    if (userName.trim().length === 0 || (userAge < 1)) {
      setNotError(false);
      return
    };
    let userData = { name: userName, age: userAge }
    appProps.onSubmitUserForm(userData);

    setUserAge('');
    setUserName('');
  }

  return (
    <div>
      {!notError && <Warning about="Oops an notError Occured">No there is an issue</Warning>}
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

          <Button type="submit" onClick={submitHandler}>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default UserForm;