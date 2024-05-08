import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default Router;
