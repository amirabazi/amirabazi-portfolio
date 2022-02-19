import React from "react";
import Fade from 'react-reveal/Fade';
import Avatar from '../../assets/img/emoji.png'
const Homepage = () => {
    return (
        <div className="homepage">
            <div id="about" className="homepage-about">
                <Fade bottom cascade>
                    <div className="about-left">
                        <h3>HI THERE I'M</h3>
                        <h1>AMIR ABAZI</h1>
                        <h3>WEB DEVELOPER</h3>
                        <p>I'm web developer working with React and Node, willing to work with other technologies and learn new things.</p>
                    </div>
                    <div className="about-right">
                        <img src={Avatar} alt="" />
                    </div>
                </Fade>
            </div>
            <div id="services" className="homepage-services">
                <Fade left>
                    <h1>Services</h1>
                </Fade>
            </div>
        </div>
    );
};

export default Homepage;
