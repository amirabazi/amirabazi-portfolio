import React from 'react'
import { FaGithub } from "react-icons/fa";

const Project = (props) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={props?.image} alt="projectimg" />
            </div>
            <div className="project-content">
                <h3>{props?.title || "Project title"}</h3>
                <div className="project-description">
                    <p>{props?.description || "description"}</p>
                </div>
                <div className="card-footer">
                    <a href={props?.link} target="_blank" rel="noreferrer">
                        <FaGithub className='icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project