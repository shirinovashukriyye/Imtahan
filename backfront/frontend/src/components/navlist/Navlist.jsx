import React from 'react'
import "./Navlist.css"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";


const Navlist = () => {
    return (
        <div>
            <ul className='list'>
                <li><Link to="/" className="list-link">Home</Link></li>
                <li><Link to="/menu" className="list-link">Menu</Link></li>
                <li><Link to="/reservation" className="list-link">Reservation</Link></li>
                <li><Link to="/gallery" className="list-link">Gallery</Link></li>
                <li><Link to="/about" className="list-link">About</Link></li>
                <li><Link to="/blog" className="list-link">Blog</Link></li>
                <li><Link to="/contact" className="list-link">Contact</Link></li>
            </ul>
            <div className="burger">
                <RxHamburgerMenu />
            </div>
        </div>
    )
}

export default Navlist