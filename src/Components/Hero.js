import React from 'react'
import './Hero.css';

import Fade from 'react-reveal/Fade';

// can add delay={seconds}

// <p>Destiny has been apart of my life for over the last 6 years now. It's been an outlet for me to connect with old friends and make new friends. It has become a part of my everyday gaming life as an outlet for enjoyment, a way for me to escape, and as a way to connect with a lost loved one. It's a game that will hold a special place in my heart and it's something that I'll never stop playing. My inspiration for this app was to take a small part of something that I hold dearly and share it with whoever comes across it. It's something that will grow over time with me. I became a Guardian 6 years ago and I'll always be one.</p>


const Hero = () => {
    return (
        <div className="hero-container">
            <div className="grid-container">
                <Fade top delay={200}>
                    <div className="header item">
                        <h1>Cayde-6: Hunter Vanguard, Legend</h1>
                    </div>
                </Fade>
                <Fade left delay={100}>              
                    <div className="image item"></div>
                </Fade>
                <Fade delay={600}>              
                    <div className="about item">
                        <p>Cayde-6 was an Exo Guardian and the Vanguard for the Hunter class. He was, and still is, an icon within the community regardless of what class you main. He brought countless laughs, memorable moments, and tears with his tragic, heroic end that no Guardian will ever forget. The best way to describe him was laid-back, carefree, down-to-earth, reckless, adventurous, and cunning. He will be remembered as a piece of the vanguard puzzle that had the care and heart of a guardian, no matter how tough the times. </p>
                    </div>
                </Fade>
                <Fade  right delay={400}>              
                    <div className="hunter-symbol item"></div>
                </Fade>
                <Fade delay={600}>              
                    <div className="quote1 item">"A knife, thrown just right, can accomplish wonderful things."</div>
                </Fade>
                <Fade left delay={200}>
                    <div className="lore-title item">
                        <h1>The Man They Called Cayde</h1>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Hero
