import React, { useState } from 'react';
import UserForm from "./Components/UserForm/UserForm";
import UserDisplay from "./Components/UserDisplay/UserDisplay";

const dummy_data = [
  // { name: "Max", age: 12 },
  // { name: "Hary", age: 18 },
  // { name: "Leo", age: 32 }
]

function App() {
  const [userDataArr, setUserDataArr] = useState(dummy_data);

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
