import React, { useState } from 'react';
import UserForm from "./Components/UserForm/UserForm";
import UserDisplay from "./Components/UserDisplay/UserDisplay";


function App() {
  const [userDataArr, setUserDataArr] = useState([]);

  const addUserHandler = user => {
    setUserDataArr(prevUsers => [...prevUsers, user])
  }

  return (

    <div>
      <UserForm onSubmitUserForm={addUserHandler} />
      <UserDisplay userDatas={userDataArr} />

    </div>
  );
}

export default App;
