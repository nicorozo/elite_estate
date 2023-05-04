import React from "react";
import './Shapes.css'

export default function Shapes() {
    return (
        <section className="shapes-wrapper">
            <div className="paddings innerWidth flexCenter shapes-container">
                <img src="https://raw.githubusercontent.com/ZainRk/RealEstate-web-starterpack/master/public/equinix.png" alt="" width={130} />
                <img src="https://raw.githubusercontent.com/ZainRk/RealEstate-web-starterpack/master/public/realty.png" alt="" width={130} />
                <img src="https://real-estate-web.pages.dev/tower.png" alt="" width={130} />
                <img src="https://real-estate-web.pages.dev/prologis.png" alt="" width={130} />
            </div>
        </section>
    )
}