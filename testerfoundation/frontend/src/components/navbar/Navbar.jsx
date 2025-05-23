import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
<div >
<div className='container'>
   <div className={styles.nav}>
   <div className={styles.leftnav}>
      <h1>Foundation</h1>
    </div>
    <div className={styles.rightnav}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/discover'>Discover</Link></li>
      <li><Link to='/donate'>Donate</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/admin'>Admin</Link></li>
    </div>
    <div className={styles.wishlist}>
      <Link to='/wishlist'><FaHeart /></Link>
    </div>
   </div>
    </div>
</div>
  )
}

export default Navbar
