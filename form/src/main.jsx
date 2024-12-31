import React from 'react';

import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Profile from './components/Profile/Profile'
import { store } from './redux/store';
import {Provider} from 'react-redux'

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
  <Provider store ={store}>
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
  </Provider>
)
