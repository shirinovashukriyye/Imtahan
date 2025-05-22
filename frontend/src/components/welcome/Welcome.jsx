import React from 'react'
import "./Welcome.css"
import welcomeImg from "../../assets/images/our-story-01.jpg.webp"

const Welcome = () => {
    return (
        <section id="welcome-area">
            <div className="container">
                <div className="welcome">
                    <div className="welcome-title">
                        <h3>Italian Restaurant</h3>
                        <h1>WELCOME</h1>
                        <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                    </div>
                    <div className="welcome-img">
                        <img src={welcomeImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome