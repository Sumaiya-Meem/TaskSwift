

import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomePage/Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Dashboard from "../DashboardPage/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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
  ]);

export default router;