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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/StudentDashboard/Payment";
import PaymentHistory from "../pages/Dashboard/StudentDashboard/PaymentHistory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UpdateClassInfo from "../pages/Dashboard/InstructorDashboard/UpdateClassInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
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
        path: 'myPaymentHistory',
        element: <PrivateRoute><PaymentHistory/></PrivateRoute>
      },
      {
        path: 'payment/:id',
        element: <Payment/>,
        loader: ({ params }) =>
          fetch(`https://school-server-gamma.vercel.app/selectedClass/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          }),
      },
      {
        path: 'addAClass',
        element: <InstructorRoute><AddAClass/></InstructorRoute>
      },
      {
        path: 'myClasses',
        element: <InstructorRoute><MyClasses/></InstructorRoute>
      },
      {
        path: 'updateClass/:id',
        element: <InstructorRoute><UpdateClassInfo/></InstructorRoute>,
        // loader: ({params}) => fetch(`https://school-server-gamma.vercel.app/updateOne/${params.id}`)

      },
      {
        path: 'manageClasses',
        element: <AdminRoute><ManageClasses/></AdminRoute>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUser/></AdminRoute>
      },
    ]
  }
]);
