import styles from "./Users.module.css";
import { User } from "./User";

export function Users(props) {
  const { users, onUserSelect } = props;

  return (
    <div className={styles.container}>
      {users.length > 0 ? (
        users.map((user) => (
          <User key={user.id} user={user} onUserSelect={onUserSelect} />
        ))
      ) : (
        <h3>Loading users</h3>
      )}
    </div>
  );
}
