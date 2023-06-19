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

  return (
    <>
      <Navbar currentUser={selectedUser} />
      <Users users={users} onUserSelect={onUserSelect} />
    </>
  );
}

export default App;
