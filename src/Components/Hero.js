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
                {/* Lore Entries */}
                <div className="dealEntry item">
                    <p>All joking aside—maybe I've made mistakes. Maybe some more recently than others. Hard to believe, I know, but maybe it's true. Maybe. Here's the thing about mistakes: you learn from them. Again, this is assuming the theoretical concept of me having made some mistakes is true. So, yeah, maybe that's what I'm doing. Trying to learn from these very hypothetical slipups. Turning inward, they call it. "They" being Ikora. Eris calls it something different. Eris calls a lotta things something different. I miss that girl. But here I am stalling—buying time. This ain't easy for me. Thought it would be. Easy, I mean. Or, at least… easier than this. Thought a lot of things would be easier. Hell… Thought a lotta things about a lotta things. But maybe that's what makes me the person I am. Makes any of us part of humanity—all our big thoughts and big plans, hopes and dreams and all that squishy nonsense. OK, fine, look: If I'm playing at honesty, and I think that's what I'm doing here, maybe those hopes and dreams are all that really matters. Just, not losing sight of them is the hard part. Life is full of those little distractions that fudge the edges, make those hopes and dreams a little blurrier. That's the power of "maybes," I suppose—the temptation of… playing both ends against the middle. Maybes provide… wiggle room. And I like my edges fudgy. And I loooooves me some wiggle room. But if I'm gonna stay true to this whole rambling "dear diary" how-do-ya-do business, guess what I'm sayin' is… Guess what I'm saying is, I'm sick of "maybes." And, if I'm a straight shooter—and I'm nothing if not—then I gotta shoot straight… even when there ain't a gun in my hand. So, let's… let's keep this between me and you, OK? Here's the deal: My name is Cayde-6… And this is my story.</p>
                </div>
                <div className="deal item">
                    <h1>Deal</h1>
                </div>
                <div className="call item">
                    <h1>Call</h1>
                </div>
                <div className="callEntry item">
                    <p>Now, to be clear, yeah, the plan is to tell it like it is, but don't expect every little detail to play out. I'm gonna hit the important stuff, sure, but what I'm really after here is a sense of… a sense of me. Because once you understand me, you just might understand where I'm coming from, why I do the things I do, and why I've done the things I've done. So, read between the lines if you have to, but end of the day? Everything that matters should be readily apparent. If not, you're not paying attention. So here goes… Us Exos are haunted. Sounds ominous, I know, and maybe a bit of a stretch. But really, it's the best word—kinda sets the stage in a way the raw facts don't. See, Guardians have all got past lives. But unless you returned with any definitive info on your person or in proximity (I'm looking at you, Bray), that past life, or lives, was, or were, wiped clean. Gone. Reborn in the Light and all, you become what you become. Exos, though? We've got ghosts in our machines. Not capital-G "open doors and know things" Ghosts. I mean, like fragments of— I don't know, pieces of something that could be memory. Whatever it is, it's enough to give us a starting point to maybe, possibly, imagine who we were before we became who we are. And then there's the dreams—but I ain't touching that with a ten-foot Arc Staff. Me? I'm one of the lucky few. The fudgy flashes of that old Exo life weren't all I had to go on. See, the "me" that was in my life before my trusty capital-G Ghost found me kept journals, like mementos—fragments of my prior life that give me a baseline of who I was. The journals are personal, and I keep personal close to the chest. I've shared a few pages, sure, but only with right-minded types who could find a little value in seeing the man behind the myth. Yeah, "myth," I said it. Who are we kidding? You've heard of me. Who hasn't? Point is… I don't make a show of personal business. First, because it's MY fuel to burn. Second, because Big Blue ain't a big fan of his Guardians poking around what they used to be—something about duty, rules, not losing sight of why we were chosen. But more than any of that… most of us "Chosen Ones" don't have the luxury of a past, so rubbing it in doesn't seem right. Look, all I know is… When I rejoined the land of the living, the pre-Light version of me was kind enough to lend a guiding hand. I took that hand, gave it a high five, and followed its example the best I could. All this time later, I may not know my true purpose—I leave the big-ticket, existential questions to the Warlocks—but I know this… My calling is to do good. Maybe not always to "be" good, ya know, but do good. There's a difference. And if I don't always go about it in a manner that fits the textbook definitions of "hero" or "team player"—I'm looking at you, Big Blue—just know… I might dance to my own tune, but we're all at the same hoedown… Or something like that.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
