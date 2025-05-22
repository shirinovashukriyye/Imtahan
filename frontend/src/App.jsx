import './App.css'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Detail from './pages/detail/Detail'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/reservation",
        element: <Reservation />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/basket",
        element: <Basket />
      },
      {
        path: "/detail/:id",
        element: <Detail />
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
