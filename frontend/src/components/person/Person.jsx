import React from 'react'
import "./Person.css"
import person from "../../assets/images/avatar-04.jpg.webp"
import { FaStar } from "react-icons/fa";


const Person = () => {
    return (
        <section id="person-area">
            <div className="container">
                <div className="person">
                    <div className="person-title">
                        <h3>Italian Restaurant</h3>
                        <h1>WELCOME</h1>
                        <img src={person} alt="" />
                        <p> “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
                        <span><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></span>
                        <p className='name'>Marie Simmons - New York</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Person