import React from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about/About'
import Latest from './pages/latest/Latest'
import Category from './pages/category/Category'
import Men from './pages/men/Men'


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
          element:<Latest/>
        },
           {
          path:"/catalogue",
          element:<Category/>
        },
           {
          path:"/newArrivals",
          element:<Men/>
        },
   
      ]
    }])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App