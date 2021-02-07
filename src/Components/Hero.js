import React from 'react'
import './Hero.css';

import Fade from 'react-reveal/Fade';

// can add delay={seconds}

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="grid-container">
                <Fade left>
                <div className="image item"></div>
                </Fade>
                <div className="quote1 item">"...the Vanguard is the best bet I've ever lost..."</div>
                <div className="header item">
                    <h1>Cayde-6: Hunter Vanguard, Legend</h1>
                </div>
                <div className="hunter-symbol item"></div>
                {/* <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qopcxL2fa4g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
            </div>
        </div>
    )
}

export default Hero
