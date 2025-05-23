import React from 'react'
import { Link } from 'react-router'
// import "./Navlist.css"

const Navlist = () => {
  return (
    <ul className='navlist'>
      <li className='navlist-item'><Link to={"/"}>HOME</Link></li>
      <li className='navlist-item'><Link to={"/about"}>Latest</Link></li>
      <li className='navlist-item'><Link to={"/shop"}>Men</Link></li>
      <li className='navlist-item'><Link to={"/catalogue"}>Women</Link></li>
      <li className='navlist-item'><Link to={"/newArrivals"}>Category</Link></li>
      <li className='navlist-item'><Link to={"/contact"}>About</Link></li>
    </ul>
  )
}

export default Navlist
