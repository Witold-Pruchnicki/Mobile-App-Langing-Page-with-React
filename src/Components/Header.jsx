import React from "react";
import Navbar from "./Navbar";
import headerPhone from '../images/header-phone.png'

function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <header className='main-header'>
                <div className="header-text">
                    <h1>Look Always</h1>
                    <h2>THE BEST TECHNOLOGY TODAY</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout</p>
                    <button className='header-button'>Buy Now</button>
                </div>
                <div className="header-img">
                    <img src={headerPhone} alt=""/>
                </div>
            </header>
        </div>
    )
}

export default Header