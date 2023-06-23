import styles from "./CurrentUser.module.css";
import { useUsersContext } from "../context/usersContext";

export function CurrentUser() {
  const userContext = useUsersContext();
  const user = userContext.state.selectedUser;

  if (!user) {
    return <div>No user</div>;
  }

  return (
    <div className={styles.container}>
      {user.first_name}
      <img className={styles.current_avatar} src={user.avatar} />
    </div>
  );
}
