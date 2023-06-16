import { useEffect, useState } from "react";
import styles from "./Users.module.css";
import { User } from "./User";

const API_URL = "https://reqres.in/api/users";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      const usersData = await fetch(API_URL).then((res) => res.json());
      // console.log(usersData);
      const usersData2 = await fetch(API_URL + "?page=2").then((res) =>
        res.json()
      );
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
