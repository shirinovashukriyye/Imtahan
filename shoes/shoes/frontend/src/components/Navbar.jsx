import React from 'react'
import { FaSearch } from "react-icons/fa";
import Logo from './logo/Logo';
import Wrapper from './wrapper/Wrapper';
import "./Navbar.css"
import Navlist from './Navlist';


const Navbar = () => {
  return (
    <div className="container">
        <div className="basliq">
          <div><FaSearch />
      <input type="search" placeholder='search' /></div>
      <Logo/>
      <Wrapper/>
    </div>
    <Navlist/>
    </div>
  )
}

export default Navbar
