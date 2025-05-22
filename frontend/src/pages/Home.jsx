import React from 'react'
import Hero from '../components/hero/Hero'
import Welcome from '../components/welcome/Welcome'
import Products from '../components/products/Products'
import Person from '../components/person/Person'
import Blogs from '../components/blogs/Blogs'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <div><Hero /><Welcome /><Products /><Person /><Blogs/><Contact/></div>
  )
}

export default Home