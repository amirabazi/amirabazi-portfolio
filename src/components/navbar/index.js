import { React, useState, useEffect } from 'react';
import ZendevLogo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
    const [activateHamMenu, setActivateHamMenu] = useState(false);
    const [open, setOpen] = useState(false);

    const handleResize = () => {
        let width = (window.innerWidth);
        if (width < 650) {
            setActivateHamMenu(true);
        } else {
            setOpen(false);
            setActivateHamMenu(false);
        }
    };
    window.addEventListener("resize", handleResize);

    useEffect(() => {
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [activateHamMenu]);


    return (
        <div className="navbar">
            <Link to="/">
                <img className='navbar-logo' src={ZendevLogo} alt="logo" />
            </Link>

            {activateHamMenu === false ?
                <div className="navbar-navigation">
                    <HashLink to="/#about">
                        <p>ABOUT ME</p>
                    </HashLink>
                    <HashLink to="/#services">
                        <p>SERVICES</p>
                    </HashLink>
                    <Link to="/contact">
                        <p>CONTACT</p>
                    </Link>
                </div>
                :
                <div className="navbar-hamburger-container"
                    onClick={() => setOpen(!open)}>
                    <div className="navbar-hamburger">
                        {[...Array(4)].map((x, i) =>
                            <span key={i}
                                className={open ? "open" : ""} />)}
                    </div>
                </div>
            }

            <div className={open
                ? "navbar-links-mobile open"
                : "navbar-links-mobile"}>
                <div className="hamburger-navigation">
                    <HashLink to="/#about">
                        <p onClick={() => { setOpen(false); }}>ABOUT ME</p>
                    </HashLink>
                    <HashLink to="/#services">
                        <p onClick={() => { setOpen(false); }}>SERVICES</p>
                    </HashLink>
                    <Link to="/contact">
                        <p onClick={() => { setOpen(false); }}>CONTACT</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
