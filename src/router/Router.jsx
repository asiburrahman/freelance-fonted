import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React, { Children, Component } from "react";
  import ReactDOM from "react-dom/client";
import Root from "../lyout/Root";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import PrivetRoutes from "../Routes/PrivetRoutes";
import Error from "../component/Error/Error";
import Loading from "../component/Loading/Loading";
import LoginProtectedRouts from "../Routes/LoginProtectedRouts";
import AddTask from "../component/Pages/AddTask";
import BrowseTask from "../component/Pages/BrowseTask";
import MyPostedTask from "../component/Pages/MyPostedTask";
  
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            Component: Home,
            hydrateFallbackElement: <Loading></Loading>,
        },
    

        {
          path: '/login',
          element: <LoginProtectedRouts><Login></Login></LoginProtectedRouts>
        },
        {
          path: '/register',
          element: <LoginProtectedRouts><Register></Register></LoginProtectedRouts>
        },

        {
          path:'/browseTask',
          Component: BrowseTask
        },
        
        {
          path: '/addTask',
          element: <PrivetRoutes><AddTask></AddTask></PrivetRoutes>
        },

        {
          path: '/myTask',
          element: <PrivetRoutes><MyPostedTask></MyPostedTask></PrivetRoutes>
        },

        
      ]

    },
    
   
  ]);

  export default router