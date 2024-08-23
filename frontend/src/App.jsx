import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Donors from './Pages/Donors'
import Prospects from './Pages/Prospects'
import Menu from './Components/Menu'
import NewDonor from './Pages/NewDonor'
import ProspectPage from './Pages/ProspectPage'
import DonorPage from './Pages/DonorPage'

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
        },
        {
          path: "/admin/newdonor",
          element: <NewDonor />
        },
        {
          path: "/admin/donor/:id",
          element: <DonorPage />
        },
        {
          path: "/admin/prospect/:id",
          element: <ProspectPage />
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App