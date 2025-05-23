import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Diiscover from './pages/Diiscover'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Wishlist from './pages/wishlist/Wishlist'
import Detail from './pages/detail/Detail'
import AdminPanel from './pages/admin/AdminPanel'

function App() {
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>,
        
        },
        {
          path: '/about',
          element: <About/>,
        
        },
        {
          path: '/discover',
          element: <Diiscover/>,
        
        },
        {
          path: '/donate',
          element: <Donate/>,
        
        },
        {
          path: '/blog',
          element: <Blog/>,
        
        },
        {
          path: '/contact',
          element: <Contact/>,
        
        },
        {
          path: '/wishlist',
          element: <Wishlist/>,
        
        },
        {
          path: '/detail/:id',
          element: <Detail/>,
        
        },
        {
          path: '/admin',
          element: <AdminPanel/>,
        
        },
      ]
    },
    {
      path: '*',
      element: <NotFound/>
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
