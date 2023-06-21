import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://reqres.in/api/users";

export function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      const { data: usersData } = await axios.get(API_URL);
      const { data: usersData2 } = await axios.get(API_URL + "?page=2");

      const allUsers = [...usersData.data, ...usersData2.data];

      setUsers(allUsers);
    }

    getAllUsers();
  }, []);

  return users;
}
