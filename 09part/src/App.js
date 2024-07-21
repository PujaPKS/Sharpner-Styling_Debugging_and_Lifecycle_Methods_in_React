// Write your code at relevant places in the code below:

import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {/* <UsersList users={[]}/> */}

      {/* In the empty variable in users we will push the updated values in it */}
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;