
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Catalogs from './pages/Catalogs'
import Contact from './pages/Contact'
import Wishlist from './pages/wishlist/Wishlist'
import Basket from './pages/basket/Basket'
import NotFound from './pages/NotFound'
import Detail from './pages/detail/Detail'
import AdminPanel from './pages/admin/AdminPanel'

function App() {

const productRouter = createBrowserRouter(
[
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
        
      },
      {
        path: '/shop',
        element: <Shop/>
        
      },
      {
        path: '/catalogs',
        element: <Catalogs/>
        
      },
      {
        path: '/contact',
        element: <Contact/>
        
      },
      {
        path: '/wishlist',
        element: <Wishlist/>
        
      },
      {
        path: '/basket',
        element: <Basket/>
        
      },
      {
        path: '/detail/:id',
        element: <Detail/>
        
      },

      {
        path: '/admin',
        element: <AdminPanel/>
        
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
     <RouterProvider router={productRouter}/>
    </>
  )
}

export default App
