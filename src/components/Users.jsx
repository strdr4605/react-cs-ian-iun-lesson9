import styles from "./Users.module.css";
import { User } from "./User";
import { useUserContext } from "../context/userContext";

export function Users(props) {
  const { users } = props;

  const { selectedUser } = useUserContext();

  const filteredUsers = selectedUser
    ? users.filter((user) => user.id !== selectedUser.id)
    : users;

  return (
    <div className={styles.container}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <User key={user.id} user={user} />)
      ) : (
        <h3>Loading users</h3>
      )}
    </div>
  );
}
