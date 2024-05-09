import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import Home from "../Components/Pages/Home";
import JobDetails from "./Pages/JobDetails";
import ErrorPage from "./Pages/ErrorPage";
import AddJob from "./Pages/AddJob";
import MyPostedJobs from "./Pages/MyPostedJobs";
import PrivateRoute from "./PrivateRoute";
import MyBids from "./Pages/MyBids";
import AllJobs from "./Pages/AllJobs";
import BidRequests from "./Pages/BidRequests";

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
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-post-jobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-jobs",
        element: (
          <PrivateRoute>
            <AllJobs></AllJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/bid-request",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
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
