import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import "./Wrapper.css"
import { useSelector } from 'react-redux';

const Wrapper = () => {
  let { basket } = useSelector((state) => state.basket)
  let basketCount = basket.reduce((sum, item) => sum + item.count, 0)
  return (
    <div className='wrapper'>
      <Link className='list-link'><FaHeart size={23} /></Link>
      <Link className='list-link' to="/basket"><IoIosBasket size={23} /><sup>{basketCount}</sup></Link>
      <Link className='list-link' to="/admin"><button className='admin-btn'>Admin</button></Link>
    </div>
  )
}

export default Wrapper