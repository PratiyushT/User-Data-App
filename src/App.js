import React from 'react';
import UserForm from "./Components/UserForm/UserForm";
import UserDisplay from "./Components/UserDisplay/UserDisplay";

const dummy_data = [
  { name: "Max", age: 12 },
  { name: "Hary", age: 18 },
  { name: "Leo", age: 32 }
]

function App() {
  let userDatasArr = [...dummy_data]
  console.log(userDatasArr);
  return (

    <div>
      <UserForm />
      <UserDisplay userDatas={userDatasArr} />
    </div>
  );
}

export default App;
