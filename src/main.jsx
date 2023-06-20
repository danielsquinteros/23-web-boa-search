import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './views/Home'
import Users from './views/Users'
import User from './views/User'
import Error from './views/Error'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: 'user/:id',
    element: <User />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
