import React from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about/About'
import Latest from './pages/latest/Latest'
import Category from './pages/category/Category'
import Men from './pages/men/Men'
import Basket from './pages/basket/Basket.jsx'
import NotFound from './pages/notfound/NotFound.jsx'


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
        {
          path:"/basket",
          element:<Basket/>
        },
        {
        path: '/detail/:id',
        element: <Detail/>
        
      },

      {
        path: '/admin',
        element: <AdminPanel/>
        
      },

   
      ],
      
    },
    {
    path: '*',
    element: <NotFound/>
  }])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App