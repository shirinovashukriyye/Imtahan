
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Pages from './pages/Pages'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Wishlist from './pages/wishlist/Wishlist'
import NotFound from './pages/NotFound'
import AdminPanel from './pages/admin/AdminPanel'
import Productdetail from './pages/productdetail/Productdetail'

function App() {
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,

        },
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: '/pages',
          element: <Pages />,
        },
        {
          path: '/Blog',
          element: <Blog />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/wishlist',
          element: <Wishlist />,
        },
        {
          path: '/admin',
          element: <AdminPanel />,
        },
        {
          path: '/detail/:id',
          element: <Productdetail />,
        },
      ]
    },
    {
      path: '*',
      element: <NotFound/>,
    
    }

  ]
)
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
