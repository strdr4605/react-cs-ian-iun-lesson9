import { useNavigate } from "react-router-dom";
import { User } from "./User";

export function UserPage() {
  const navigate = useNavigate();
  const onHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <User />
      <a href="#" onClick={onHomeClick}>
        Home
      </a>
    </div>
  );
}
