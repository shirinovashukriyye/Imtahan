import React from 'react'
import Hero from '../components/hero/Hero'
import Awesome from '../components/awesome/Awesome'
import Bestsellers from '../components/bestsellers/Bestsellers'
import Subscribe from '../components/subscribe/Subscribe'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Awesome/>
    <Bestsellers/>
    <Subscribe/>
    </div>
  )
}

export default Home
