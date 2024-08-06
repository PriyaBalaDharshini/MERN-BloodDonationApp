import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Donors from './Pages/Donors'
import Prospects from './Pages/Prospects'
import Menu from './Components/Menu'

function App() {
  const Layout = () => {
    return (
      <div className='flex'>
        <div>
          <h1> <Menu /></h1>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Admin />
        },
        {
          path: "/admin/donors",
          element: <Donors />
        },
        {
          path: "/admin/prospects",
          element: <Prospects />
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App