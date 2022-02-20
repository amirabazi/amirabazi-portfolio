import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Avatar from '../../assets/img/emoji.png'
import Project from "../../components/project";
import { comp2000, proceraSoft, projects } from "../../projectData";
import { FaCheck } from "react-icons/fa";

const Homepage = () => {

    const [active, setActive] = useState(0);
    const [companyData, setCompanyData] = useState({
        company: String,
        time: String,
        tasks: [""],
    });

    useEffect(() => {
        setCompanyData(comp2000);
    }, []);

    return (
        <div className="homepage">
            <div id="about" className="homepage-about">
                <Fade bottom cascade>
                    <div className="about-left">
                        <div>
                            <h3>HI THERE I'M</h3>
                            <h1>AMIR ABAZI</h1>
                            <h3>WEB DEVELOPER</h3>
                            <p>working with React and Node, willing to work with other technologies and learn new things.</p>
                        </div>
                        <div>
                            <h3>Where I've Worked:</h3>
                            <div className="about-expiriance">
                                <div className="companies">
                                    <p className={active === 0 ? 'clicked' : ''}
                                        onClick={() => {
                                            setCompanyData(comp2000)
                                            setActive(0);
                                        }}>COMP-2000</p>
                                    <p className={active === 1 ? 'clicked' : null}
                                        onClick={() => {
                                            setCompanyData(proceraSoft)
                                            setActive(1);
                                        }}>ProceraSoft</p>
                                </div>
                                <div className="objective">
                                    <div className="objective-top">
                                        <h4>Frontend developer <span>@{companyData.company}</span></h4>
                                        <p>{companyData.time}</p>
                                    </div>
                                    <div className="objective-bottom">
                                        {
                                            companyData.tasks.map((data, i) => {
                                                return (
                                                    <p key={i}><FaCheck className="tick" />{data}</p>
                                                )
                                            })
                                        }
                                    </div>
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
                <Fade bottom>
                    <h1>Some Things I'v Built</h1>
                    <div className="services-content">
                        {projects.map((data, i) => {
                            return <Project key={i}
                                image={data.img}
                                title={data.title}
                                description={data.description}
                                link={data.link} />
                        })
                        }
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Homepage;
