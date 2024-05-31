import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contract from './components/Contract/Contract.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Profile from './components/Profile/Profile.jsx';
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Details from './components/Details/Details.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import MyOffers from './components/MyOffers/MyOffers.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contract',
        element: <Contract></Contract>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: '/update',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path:'/details/:id',
        element : <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('/data.json'),
      },
      {
        path:'/myoffers',
        element : <PrivateRoute><MyOffers></MyOffers></PrivateRoute>,
        loader: () => fetch('/data.json'),
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>,
)
