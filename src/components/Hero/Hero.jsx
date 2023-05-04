import React from "react";
import './Hero.css'
import CountUp from 'react-countup'

export default function Hero() {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left section */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="hero-circle" />
                        <h2>Elevate <br />
                            your Living <br />
                            Experience Today.</h2>
                    </div>
                    {/* Description */}
                    <div className="flexColStart hero-description">
                        <span>Discover Next-Gen Homes <br />
                            for a Technologically Advanced Lifestyle.</span>

                    </div>
                    {/* Explore Button */}
                    <div className="flexColStart hero-action-section">
                        <button className="button">Explore</button>
                    </div>
                    {/* Stats  */}
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={100} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span>
                                First Counter
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={100} end={1800} duration={4} />
                                <span>+</span>
                            </span>
                            <span>
                                Second Counter
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={100} end={10} duration={4} />
                                <span>+</span>
                            </span>
                            <span>
                                Third Counter
                            </span>
                        </div>
                    </div>
                </div>
                {/* right section */}
                <div className="hero-right flexCenter">
                    <div className="image-container">
                        <img src="./houseSketch.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
