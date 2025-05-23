import React from 'react'
import Hero from '../components/hero/Hero'
import Products from '../components/products/Products'
import Jacket from '../components/jacket/Jacket'
import Bestseller from '../components/bestsellers/Bestseller'
import Denim from '../components/denim/Denim'

const Home = () => {
  return (
    <div>
      <Hero/>
     <Products/>
     <Jacket/>
     <Bestseller/>
     <Denim/>
    </div>
  )
}

export default Home
