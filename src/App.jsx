import { Users } from "./components/Users";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { useUsers } from "./hooks/useUsers";
import { UsersProvider } from "./context/usersContext";
import { Counter, CounterWithReducer } from "./components/Counter";

function App() {
  return (
    <>
      {/* <Counter />
      <CounterWithReducer /> */}
      <UsersProvider>
        <Navbar />
        <Users />
      </UsersProvider>
    </>
  );
}

export default App;
