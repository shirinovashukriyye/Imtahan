import React from 'react'
import "./Hero.css"
import { TbCarSuvFilled } from "react-icons/tb";
import children from "../../assets/image/children.jpg.webp"
import women from "../../assets/image/women.jpg.webp"
import men from "../../assets/image/men.jpg.webp"


const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt="" className='hero-image' />
                <div className="hero-text">
                    <h1>Finding Your Perfect Shoes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    <button className='button'>Shop now</button>
                </div>
            </div>
            <div className="boxes">
                <div className="box">
                    <div className="icon"><TbCarSuvFilled /></div>
                    <div className="icon-text">
                        <h3>FREE SHIPPING</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><TbCarSuvFilled /></div>
                    <div className="icon-text">
                        <h3>FREE SHIPPING</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><TbCarSuvFilled /></div>
                    <div className="icon-text">
                        <h3>FREE SHIPPING</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
            </div>
            <div className="images">
               <div className="image-box">
                 <img src={women} alt=""  className='image-item'/>
                 <p>collections</p>
                 <h4>Children</h4>
               </div>
                <div className="image-box">
                 <img src={children} alt=""  className='image-item'/>
                 <p>collections</p>
                 <h4>Children</h4>
               </div>
                <div className="image-box">
                 <img src={men} alt=""  className='image-item'/>
                 <p>collections</p>
                 <h4>Children</h4>
               </div>
               
                
                
            </div>
        </div>
    )
}

export default Hero
