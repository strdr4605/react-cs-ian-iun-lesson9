import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const { children } = props;

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw Error("useUserContext should be used inside UserProvider");
  }

  return userContext;
}
