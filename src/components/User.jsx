import { useParams, useNavigate } from "react-router-dom";
import { useUsersContext } from "../context/usersContext";
import styles from "./User.module.css";

export function User(props) {
  const params = useParams();
  const navigate = useNavigate();
  const userId = Number(params.userId) || props.userId;

  const { setSelectedUser, state } = useUsersContext();

  const user = state.users.find((u) => u.id === userId);

  if (!user) {
    return null;
  }

  const handleOnClick = () => {
    setSelectedUser(user);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.left_side}
        onClick={() => navigate(`/users/${userId}`)}
      >
        <img className={styles.avatar} src={user.avatar} />
        <a className={styles.email} href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </div>
      <div className={styles.right_side}>
        <div className={styles.name} onClick={handleOnClick}>
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
        </div>
      </div>
    </div>
  );
}
