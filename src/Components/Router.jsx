import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import Home from "../Components/Pages/Home";
import JobDetails from "./Pages/JobDetails";
import ErrorPage from "./Pages/ErrorPage";
import AddJob from "./Pages/AddJob";
import MyPostedJobs from "./Pages/MyPostedJobs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>,
      },
      {
        path: "/my-post-jobs",
        element: <MyPostedJobs></MyPostedJobs>,
      },
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
