

import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomePage/Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../DashboardPage/Dashboard/Dashboard";
import AddTask from "../DashboardPage/AddTask/AddTask";
import ErrorPage from "../ErrorPage/ErrorPage";
import PreviousTask from "../DashboardPage/PreviousTAsk/PreviousTask";
import ManageTask from "../DashboardPage/ManageTask/ManageTask";
import Contact from "../HomePage/Contact/Contact";
import About from "../HomePage/About/About";
import DetailTask from "../DashboardPage/DetailTask/DetailTask";
import MyProfile from "../DashboardPage/MyProfile/MyProfile";
import EditProfile from "../DashboardPage/MyProfile/EditProfile";
  
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
          path: "/contact",
          element:<Contact></Contact>,
        },
        {
          path: "/about",
          element:<About></About>,
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
          path: "/dashboard",
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        },
        {
          path: "/dashboard/editProfile/:id",  
          element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
        },
        {
          path: "/dashboard/createTask",
          element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
        },
        {
          path: "/dashboard/previousTask",  
          element: <PrivateRoute><PreviousTask></PreviousTask></PrivateRoute>,
        },
        {
          path: "/dashboard/mangeTask",    
          element: <PrivateRoute><ManageTask></ManageTask></PrivateRoute>,
        },
        {
          path: "/dashboard/detailTask/:id",  
          element: <PrivateRoute><DetailTask></DetailTask></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`)
        },
        
      ]
    }
  ]);

export default router;