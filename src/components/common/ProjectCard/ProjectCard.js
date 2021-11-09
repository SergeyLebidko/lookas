import React, {useContext} from "react";
import PropTypes from "prop-types";
import {appContext} from "../../../utils/context";
import "./ProjectCard.scss";

function ProjectCard({title, description, img}) {
    const {imgLoadHandler} = useContext(appContext);

    return (
        <div className="project_card">
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={img} onLoad={imgLoadHandler}/>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
}

export default ProjectCard;