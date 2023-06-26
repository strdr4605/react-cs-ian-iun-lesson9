import { useRouteError, useNavigate } from "react-router-dom";

export function NotFound() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="#" onClick={onClick}>
        Home
      </a>
    </div>
  );
}
