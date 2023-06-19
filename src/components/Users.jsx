import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Users.module.css";
import { User } from "./User";

const API_URL = "https://reqres.in/api/users";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      const { data: usersData } = await axios.get(API_URL);
      // console.log(usersData);
      const { data: usersData2 } = await axios.get(API_URL + "?page=2");
      // console.log(usersData2);

      const allUsers = [...usersData.data, ...usersData2.data];

      console.log(allUsers);
      setUsers(allUsers);
    }

    getAllUsers();
  }, []);

  return (
    <div className={styles.container}>
      {users.length > 0 ? (
        users.map((user) => <User key={user.id} user={user} />)
      ) : (
        <h3>Loading users</h3>
      )}
    </div>
  );
}
