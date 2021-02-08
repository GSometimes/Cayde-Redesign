import React from 'react'
import './Hero.css';

import Fade from 'react-reveal/Fade';

// can add delay={seconds}

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="grid-container">
                <div className="header item">
                    <h1>Cayde-6: Hunter Vanguard, Legend</h1>
                </div>
                <div className="image item"></div>
                <div className="hunter-symbol item"></div>
                <div className="quote1 item">"...the Vanguard is the best bet I've ever lost..."</div>
            </div>
        </div>
    )
}

export default Hero
