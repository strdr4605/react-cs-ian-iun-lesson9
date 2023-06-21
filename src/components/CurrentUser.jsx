import styles from "./CurrentUser.module.css";
import { useUserContext } from "../context/userContext";

export function CurrentUser() {
  const userContext = useUserContext();
  const user = userContext.selectedUser;

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
