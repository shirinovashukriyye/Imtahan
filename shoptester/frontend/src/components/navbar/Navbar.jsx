import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector((state) => state.basket)
  const total = basket.reduce((acc, sum) => acc+ sum.count, 0)
  return (
    <div className='container'>
      <div className={styles.nav}>
        <div className={styles.leftnav}>
          <h1>DEALERS</h1>
        </div>
        <div className={styles.navright}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/catalogs">Catalogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </div>
        <div className={styles.shopping}>
          <Link to="/wishlist"><FaHeart /></Link>
          <Link to="/basket"><CiShoppingBasket/><sup>{total}</sup></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
