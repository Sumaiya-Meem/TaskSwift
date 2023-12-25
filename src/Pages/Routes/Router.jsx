

import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomePage/Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../DashboardPage/Dashboard/Dashboard";
import AddTask from "../DashboardPage/AddTask/AddTask";
import ErrorPage from "../ErrorPage/ErrorPage";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/dashboard",
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
    ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "",
          element: <AddTask></AddTask>,
        },
      ]
      }
  ]);

export default router;