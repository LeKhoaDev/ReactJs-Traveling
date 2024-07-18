import React, { useState } from 'react'
import './Navbar.css'

//Import Icon
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

export const Navbar = () => {
    //State to track and update navbar

    const [navBar, setNavBar] = useState('menu')

    //Function show navbar

    const showNavBar = () => {
        setNavBar('menu showNavbar')
    }

    //Function show navbar
    const removeNavBar = () => {
        setNavBar('menu')
    }

    return (
        <div className='navBar'>
            <div className="logoDiv">
                <BiLogoMediumOld className='icon' />
                <span>OU-Trips</span>
            </div>

            <div className={navBar}>
                <ul>
                    <li className="navList">Destination</li>
                    <li className="navList">About Us</li>
                    <li className="navList">Testimonial</li>
                    <li className="navList">Gallery</li>
                </ul>

                {/* Icon to remove Navbar */}
                <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
            </div>
            <button className="signUpBtn btn">Sign up</button>
            {/* Icon to toggle Navbar */}
            <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
        </div>
    )
}
