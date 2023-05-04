import React from "react";
import data from "../../utils/contactInfo";
import './Contact.css'

export default function Contact() {
    return (
        <section className="contact-wrapper">
            <div className="paddings flexCenter innerWidth contact-container">
                {/* left section */}
                <div className="flexColStart contact-left">
                    <span className="small-head-span">Our Value</span>
                    <span className="big-head-span">Value We Give To You</span>
                    <span className="right-small-text">We always ready to help by providijng the best services for you.<br />
                        We beleive a good blace to live can make your life better</span>
                    <div className="contact-grid">
                        {
                            data.map(item => (
                                <div className="flexColStart grid-container">
                                    <div className="flexCenter upper-division innerWidth">
                                        <div className="icon contact-icon flexCenter">{item.icon}</div>
                                        <div className="flexColStart grid-text">
                                            <div className="flexColCenter innerWidth">
                                                <span>{item.action}</span>
                                                <span>{item.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="flexCenter innerWidth button">{`${item.action} Now`}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* right section */}
                <div className="contact-right">
                    <div className="contact-image-container">
                        <img src="squareHouse.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}