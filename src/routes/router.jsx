import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Book from "../pages/Book/Book";
import Login from "../pages/Login/Login";
import Rooms from "../components/Rooms/Rooms";
import Room from "../components/Rooms/Room";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import EditAccount from "../pages/Dashboard/EditAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`/roomsData.json`),
      },
      {
        path: "book",
        element: (
          <PrivateRoute>
            <Book />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "room/:id",
        element: <Room />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/edit",
        element: <EditAccount />,
      },
    ],
  },
]);

export default router;
