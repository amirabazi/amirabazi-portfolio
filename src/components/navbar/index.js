import { React, useState, useEffect } from 'react';
import ZendevLogo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div className={navbar ? "navbar active" : "navbar"}>
            <Link to="/"><img className='navbar-logo' src={ZendevLogo} alt="logo" /></Link>
            <div className="navbar-navigation">
                <p>About me</p>
                <p>Services</p>
                <Link to="/contact"><p>Contact</p></Link>
            </div>
        </div>
    )
}

export default Navbar;
