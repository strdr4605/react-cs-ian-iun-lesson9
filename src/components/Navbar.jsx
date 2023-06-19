import { CurrentUser } from "./CurrentUser";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Our users</h1>
      <CurrentUser />
    </nav>
  );
}
