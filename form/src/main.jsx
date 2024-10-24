import React from 'react';

import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import Profile from './Profile/Profile'

import './index.css'
// import App from './App.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<SignUp  />
  },
  {
  path:'/signin',
  element:<SignIn />
  },
  {
    path:'/profile',
    element:<Profile />
  }

])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
