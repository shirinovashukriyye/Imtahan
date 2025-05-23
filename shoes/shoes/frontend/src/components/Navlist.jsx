import React from 'react'
import { Link } from 'react-router'
import "./Navlist.css"

const Navlist = () => {
  return (
    <ul className='navlist'>
      <li className='navlist-item'><Link to={"/"}>HOME</Link></li>
      <li className='navlist-item'><Link to={"/about"}>ABOUT</Link></li>
      <li className='navlist-item'><Link to={"/shop"}>SHOP</Link></li>
      <li className='navlist-item'><Link to={"/catalogue"}>CATALOGUE</Link></li>
      <li className='navlist-item'><Link to={"/newArrivals"}>NEW ARRIVALS</Link></li>
      <li className='navlist-item'><Link to={"/contact"}>CONTACT</Link></li>
    </ul>
  )
}

export default Navlist
