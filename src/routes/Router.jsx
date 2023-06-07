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
import AddAClass from "../pages/Dashboard/InstructorDashboard/AddaClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUser from "../pages/Dashboard/AdminDashboard/ManageUser";

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
      },
      {
        path: 'addAClass',
        element: <PrivateRoute><AddAClass/></PrivateRoute>
      },
      {
        path: 'myClasses',
        element: <PrivateRoute><MyClasses/></PrivateRoute>
      },
      {
        path: 'manageClasses',
        element: <PrivateRoute><ManageClasses/></PrivateRoute>
      },
      {
        path: 'manageUsers',
        element: <PrivateRoute><ManageUser/></PrivateRoute>
      },
    ]
  }
]);
