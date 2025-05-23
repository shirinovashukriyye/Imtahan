import React from 'react'
import styles from "./Navbar.module.css"
import { FaHeart } from "react-icons/fa";  
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <div className={styles.nav}>
        <div className={styles.leftnav}>
          <h1>Aranoz.</h1>
        </div>
        <div className={styles.rightnav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin">AdminPanel</Link></li>
        </div>
        <div className={styles.endnav}>
     <Link to="/wishlist">   <FaHeart /></Link>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar
