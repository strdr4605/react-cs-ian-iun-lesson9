import { Users } from "./components/Users";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { useUsers } from "./hooks/useUsers";
import { useState } from "react";

function App() {
  const users = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  const onUserSelect = (user) => {
    setSelectedUser(user);
  };

  const filteredUsers = selectedUser
    ? users.filter((user) => user.id !== selectedUser.id)
    : users;

  return (
    <>
      <Navbar currentUser={selectedUser} />
      <Users users={filteredUsers} onUserSelect={onUserSelect} />
    </>
  );
}

export default App;
