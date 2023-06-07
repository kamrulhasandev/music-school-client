import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/SignIn/Login";
import Register from "../pages/SignUp/Register";
import Dashboard from "../layout/Dashboard";
import MySelectionClasses from "../pages/Dashboard/StudentDashboard/MySelectionClasses";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/instructor',
          element: <Instructors/>
        },
        {
          path: '/classes',
          element: <Classes/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: 'mySelectionClasses',
        element: <PrivateRoute><MySelectionClasses/></PrivateRoute>
      },
      {
        path: 'myEnrolledClasses',
        element: <PrivateRoute><MyEnrolledClasses/></PrivateRoute>
      }
    ]
  }
]);
