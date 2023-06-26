import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { NotFound } from "./components/NotFound.jsx";
import { UsersProvider } from "./context/usersContext.jsx";
import { UserPage } from "./components/UserPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "users/:userId",
    element: <UserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UsersProvider>
    <RouterProvider router={router} />
  </UsersProvider>
  // </React.StrictMode>,
);
