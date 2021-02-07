import React from 'react'
import './Hero.css';

import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <div className="hero-container">
            <div className="grid-container">
                <Fade left>
                <div className="image item"></div>
                </Fade>
                <div className="quote1 item"></div>
                <div className="hunter-image item"></div>
                {/* <div className="item"></div> */}
                {/* <div className="item"></div> */}
            </div>
        </div>
    )
}

export default Hero
