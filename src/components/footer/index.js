import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <p>amirabazi</p>
            <div className="footer-socials">
                <a href="https://www.linkedin.com/in/amir-abazi-2882921b3/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn className='icon' />
                </a>
                <a href="https://www.instagram.com/abaziamirr/" target="_blank" rel="noreferrer">
                    <FaInstagram className='icon' />
                </a>
                <a href="https://github.com/amirabazi" target="_blank" rel="noreferrer">
                    <FaGithub className='icon' />
                </a>
            </div>
            <p>2022</p>
        </div>
    )
}

export default Footer;
