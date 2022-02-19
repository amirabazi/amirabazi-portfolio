import React from "react";
import Fade from 'react-reveal/Fade';
import Avatar from '../../assets/img/emoji.png'
import Project from "../../components/project";

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
                        <h3>Where I've Worked:</h3>
                        <div className="about-expiriance">
                            <div className="companies">
                                <p>COMP-2000</p>
                                <p>ProceraSoft</p>
                            </div>
                            <div className="objective">
                                <div className="objective-top">
                                    <h4>Frontend developer <span>@Company</span></h4>
                                    <p>June 2021 - Present</p>
                                </div>
                                <div className="objective-bottom">
                                    <p>Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                                    <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript</p>
                                    <p>Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, Node</p>
                                    <p>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <img src={Avatar} alt="avatar" />
                    </div>
                </Fade>
            </div>
            <div id="services" className="homepage-services">
                <Fade left>
                    <h1>Services</h1>
                    <Project />
                </Fade>
            </div>
        </div>
    );
};

export default Homepage;
