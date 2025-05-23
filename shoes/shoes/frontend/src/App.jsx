import React, { Children } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Catalogue from './pages/Catalogue'
import NewArrivals from './pages/NewArrivals'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App(){
  const productRouter=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
           {
          path:"/about",
          element:<About/>
        },
           {
          path:"/shop",
          element:<Shop/>
        },
           {
          path:"/catalogue",
          element:<Catalogue/>
        },
           {
          path:"/newArrivals",
          element:<NewArrivals/>
        },
           {
          path:"/contact",
          element:<Contact/>
        }
      ]
    }
  ])




  return (
    <>
      <RouterProvider router={productRouter}/>
    </>
  )
}

export default App
