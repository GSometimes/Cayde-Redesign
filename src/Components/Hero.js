import React, {useState, useEffect} from 'react'
import './Hero.css';

import Fade from 'react-reveal/Fade';

// can add delay={seconds}

// <p>Destiny has been apart of my life for over the last 6 years now. It's been an outlet for me to connect with old friends and make new friends. It has become a part of my everyday gaming life as an outlet for enjoyment, a way for me to escape, and as a way to connect with a lost loved one. It's a game that will hold a special place in my heart and it's something that I'll never stop playing. My inspiration for this app was to take a small part of something that I hold dearly and share it with whoever comes across it. It's something that will grow over time with me. I became a Guardian 6 years ago and I'll always be one.</p>

const Hero = (props) => {

    const loreURL =
    "https://spreadsheets.google.com/feeds/list/17OpZuW9qKQqkapxYbDgNsCPxZ2HVk8r8RRGc6-_YouI/od6/public/values?alt=json";

    const [lore, setLore] = useState([]);

    useEffect(() => {
        const makeApiCall = async () => {
        const response = await fetch(loreURL);
        const json = await response.json();
        console.log(json);
        setLore(json.feed.entry);
        console.log(json.feed.entry);
        };
        makeApiCall();
    }, []);


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

                <Fade right delay={400}>
                    <div className="deal item">
                        <h1>Deal</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="dealEntry item">
                        {lore.filter((props, index) => index === 0).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="call item">
                        <h1>Call</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="callEntry item">
                        {lore.filter((props, index) => index === 1).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="firstStake item">
                        <h1>First Stake</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="firstStakeEntry item">
                        {lore.filter((props, index) => index === 2).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade right delay={400}>
                    <div className="fold item">
                        <h1>Fold</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="foldEntry item">
                        {lore.filter((props, index) => index === 3).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="flop item">
                        <h1>Flop</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="flopEntry item">
                        {lore.filter((props, index) => index === 4).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="raise item">
                        <h1>Raise</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="raiseEntry item">
                        {lore.filter((props, index) => index === 5).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade right delay={400}>
                    <div className="turn item">
                        <h1>Turn</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="turnEntry item">
                        {lore.filter((props, index) => index === 6).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="all-in item">
                        <h1>All-In</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="all-inEntry item">
                        {lore.filter((props, index) => index === 7).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="river item">
                        <h1>River</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="riverEntry item">
                        {lore.filter((props, index) => index === 8).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade right delay={400}>
                    <div className="showdown item">
                        <h1>Showdown</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="showdownEntry item">
                        {lore.filter((props, index) => index === 9).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="winnerTakeAll item">
                        <h1>Winner Takes All</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="winnerTakeAllEntry item">
                        {lore.filter((props, index) => index === 10).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade left delay={400}>
                    <div className="bluff item">
                        <h1>Bluff</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="bluffEntry item">
                        {lore.filter((props, index) => index === 11).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade right delay={400}>
                    <div className="badBeat item">
                        <h1>Bad Beat</h1>
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="badBeatEntry item">
                        {lore.filter((props, index) => index === 12).map((filteredStory) => (
                            <p>{filteredStory.gsx$entry.$t}</p>
                            ))}
                    </div>
                </Fade>

                <Fade delay={600}>
                    <div className="aceInTheHole item">
                        <h1>"Every story has an end...this is mine."</h1>
                    </div>
                </Fade>

                {/* <div className="aceInTheHoleEntry item">
                    {lore.filter((props, index) => index === 13).map((filteredStory) => (
                        <p>{filteredStory.gsx$entry.$t}</p>
                        ))}
                </div> */}
            </div>
        </div>
    )
}

export default Hero
