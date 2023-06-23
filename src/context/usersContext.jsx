import { createContext, useContext, useReducer, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const UsersContext = createContext();

const initialState = {
  users: [],
  selectedUser: null,
};

function usersReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_SELECTED_USER":
      const selectedUser = action.payload;

      return {
        ...state,
        selectedUser,
      };
    default:
      return state;
  }
}

export function UsersProvider(props) {
  const { children } = props;

  const [state, dispatch] = useReducer(usersReducer, initialState);

  const setUsers = (users) => dispatch({ type: "SET_USERS", payload: users });

  const setSelectedUser = (user) =>
    dispatch({ type: "SET_SELECTED_USER", payload: user });

  useUsers(setUsers);

  return (
    <UsersContext.Provider
      value={{
        state,
        setSelectedUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsersContext() {
  const usersContext = useContext(UsersContext);

  if (usersContext === undefined) {
    throw Error("useUserContext should be used inside UserProvider");
  }

  return usersContext;
}
