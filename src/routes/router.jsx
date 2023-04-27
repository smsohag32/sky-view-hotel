import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Book from "../pages/Book/Book";
import Login from "../pages/Login/Login";
import Contact from "../components/Contact";
import Rooms from "../components/Rooms/Rooms";
import Room from "../components/Rooms/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
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
]);

export default router;
