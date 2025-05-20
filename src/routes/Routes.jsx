import { createBrowserRouter } from "react-router";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import BrowseTasks from "../pages/BrowseTasks";
import MyPostedTasks from "../pages/MyPostedTasks";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "addTask",
        element: (
          <PrivateRoutes>
            <AddTask></AddTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "BrowseTasks",
        Component: BrowseTasks,
      },
      {
        path: "myPostedTasks",
        element: (
          <PrivateRoutes>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoutes>
        ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
