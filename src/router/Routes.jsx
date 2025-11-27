import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../context/PrivateRoute";
import SignUp from "../pages/SignUp";
import Services from "../pages/Services";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp/> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "services", element: <Services /> },


      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      
      {
        path: "service/:serviceId",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },

     
    ],
  },
]);

export default router;
