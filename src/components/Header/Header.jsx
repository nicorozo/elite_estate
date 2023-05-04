import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { RiMenu5Fill } from "react-icons/ri"
import './Header.css'

export default function Header() {

    const closedIcon = <GiHamburgerMenu size={30} />
    const openIcon = <RiMenu5Fill size={30} />
    const [menuOpened, setMenuOpened] = useState(false)
    function menuOperator() {
        if (menuOpened) {
            setMenuOpened(false)
            console.log(menuOpened)
            return
        } else {
            setMenuOpened(true)
            console.log(menuOpened)
            return
        }
    }
    const burgerIcon = menuOpened ? openIcon : closedIcon




    return (
        <section className="header-wrapper">
            <div className="flexCenter paddings  innerWidth header-container">
                <img src="./logo RealState.png" alt="Logo" width={100} />
                <div className="header-menu flexCenter" style={{ right: menuOpened ? '1rem' : '100rem' }}>
                    <a href="">
                        Residencies
                    </a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className="button">
                        <a href="">Contact</a>
                    </button>
                </div>
                <div className="menu-icon" onClick={menuOperator}>
                    {burgerIcon}
                </div>
            </div>
        </section>
    )
}