import { Users } from "./components/Users";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { useUsers } from "./hooks/useUsers";
import { UserProvider } from "./context/userContext";

function App() {
  const users = useUsers();

  

  return (
    <>
      <UserProvider>
        <Navbar />
        <Users users={users} />
      </UserProvider>
    </>
  );
}

export default App;
