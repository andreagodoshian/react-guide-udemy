import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (xName, xAge) => {
    setUsersList((y) => {
      return [...y, {name: xName, age: xAge, id: Math.random().toString()}]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );

}

export default App;