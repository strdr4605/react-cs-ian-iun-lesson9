import styles from "./CurrentUser.module.css";

export function CurrentUser(props) {
  const { user } = props;

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
