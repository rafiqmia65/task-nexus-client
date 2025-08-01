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
import Loading from "../components/Loading/Loading";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import UpdateTask from "../pages/UpdateTask";
import Contact from "../pages/Contact";
import DashboardLayout from "../pages/DashboardLayouts";
import DashboardOverview from "../pages/DashboardOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://task-nexus-server.vercel.app/allTasks/latest"),
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
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
        loader: () => fetch("https://task-nexus-server.vercel.app/allTasks"),
        Component: BrowseTasks,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "task/:id",
        loader: ({ params }) =>
          fetch(`https://task-nexus-server.vercel.app/allTasks/${params.id}`),
        element: (
          <PrivateRoutes>
            <TaskDetails></TaskDetails>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "updateTask/:id",
        loader: ({ params }) =>
          fetch(`https://task-nexus-server.vercel.app/allTasks/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateTask></UpdateTask>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "myPostedTasks",
        loader: () => fetch("https://task-nexus-server.vercel.app/allTasks"),
        element: (
          <PrivateRoutes>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "",
        Component: DashboardOverview,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },

      {
        path: "myPostedTasks",
        loader: () => fetch("https://task-nexus-server.vercel.app/allTasks"),
        element: <MyPostedTasks></MyPostedTasks>,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
