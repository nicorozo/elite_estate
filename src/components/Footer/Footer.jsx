import React from "react";
import { BsGithub } from "react-icons/bs"
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container paddings innerWidth flexCenter">
                {/* Left */}
                <div className="flexColStart footer-left">
                    <div className="flexCenter signature-container">
                        <div className="signature"><a href="https://github.com/nicorozo">nicorozo</a></div>
                        <div className="github-logo"><BsGithub /></div>
                    </div>
                    <div className="complementary-text">Front End Developer and Photographer</div>
                </div>
                {/* Right */}
                <div className="flexColEnd">
                    <div className="information"></div>
                </div>
            </div>
        </div>
    )
}