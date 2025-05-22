import React from 'react'
import blog1 from "../../assets/images/blog-01.jpg.webp"
import blog2 from "../../assets/images/blog-02.jpg.webp"
import blog3 from "../../assets/images/blog-03.jpg.webp"
import "./Blogs.css"

const Blogs = () => {
    return (
        <section id="blog-area">
            <div className="container">
                    <div className="blog-title">
                        <h3>Latest News</h3>
                        <h1>The Blog</h1>
                    </div>
                <div className="blogs">
                    <div className="blog">
                        <img src={blog1} alt="" />
                        <h5>BEST PLACES FOR WINE</h5>
                        <p className='desc'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                        <p>CONTINUE READING </p>
                    </div>
                    <div className="blog">
                        <img src={blog2} alt="" />
                        <h5>BEST PLACES FOR WINE</h5>
                        <p className='desc'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                        <p>CONTINUE READING </p>
                    </div>
                    <div className="blog">
                        <img src={blog3} alt="" />
                        <h5>BEST PLACES FOR WINE</h5>
                        <p className='desc'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                        <p>CONTINUE READING </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs