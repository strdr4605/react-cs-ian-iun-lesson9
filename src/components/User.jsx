import styles from "./User.module.css";

export function User(props) {
  const { user } = props;
  return (
    <div className={styles.card}>
      <div className={styles.left_side}>
        <img className={styles.avatar} src={user.avatar} />
        <a className={styles.email} href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </div>
      <div className={styles.right_side}>
        <span>{user.first_name}</span>
        <span>{user.last_name}</span>
      </div>
    </div>
  );
}
