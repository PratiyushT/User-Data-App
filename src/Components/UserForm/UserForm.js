import React, { useState, useRef } from "react";
import Card from '../Card/Card'
import style from "./UserForm.module.css";
import Button from "../Button/Button";
import Warning from '../Warning/Warning';

//Create a userForm which has two input values(userName and userAge)
const UserForm = appProps => {

  const inputNameRef = useRef('');
  const inputAgeRef = useRef('');

  const [errorObjHeading, setErrorObjHeading] = useState('');
  const [notError, setNotError] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    const userName = inputNameRef.current.value;
    const userAge = inputAgeRef.current.value;

    if (appProps.userDatas.some(e => e.name === userName && e.age === userAge)) {
      setNotError(false);
      return setErrorObjHeading('User already exists');
    }

    if (userName.trim().length === 0 || (userAge < 1)) {
      setNotError(false);
      if (userName.trim().length === 0 && (userAge < 1)) return setErrorObjHeading('Enter username and age.')
      if (userName.trim().length === 0) return setErrorObjHeading('Please enter a username.')
      if ((userAge <= 0)) return setErrorObjHeading('Age must be greater than zero.')
      return;
    };
    let userData = { name: userName, age: userAge }
    appProps.onSubmitUserForm(userData);

    inputNameRef.current.value = '';
    inputAgeRef.current.value = '';
  }

  const closeErrorHandler = () => {
    setNotError(true);
  }


  return (
    <div>
      {!notError && <Warning onOkay={closeErrorHandler} about="Oops an error occured">{errorObjHeading}</Warning>}
      <Card className={style.userFormCard}>
        <form>
          <div>
            <label htmlFor="user-name">Username</label>
            <input type='text' id='user-name' ref={inputNameRef} />
          </div>

          <div>
            <label htmlFor="user-age">Age (Years)</label>
            <input type='number' min='1' id='user-age' ref={inputAgeRef} />
          </div>

          <Button type="submit" onClick={submitHandler}>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default UserForm;