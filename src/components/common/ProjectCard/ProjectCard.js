import React, {useContext} from "react";
import PropTypes from "prop-types";
import {appContext} from "../../../utils/context";
import "./ProjectCard.scss";

function ProjectCard({title, description, img}) {
    const {imgLoadHandler} = useContext(appContext);

    return (
        <div className="project_card">
            <h1 className="project_card__title">{title}</h1>
            <p className="project_card__description">{description}</p>
            <div className="project_card__image_block">
                <img className="project_card__image" src={img} onLoad={imgLoadHandler}/>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
}

export default ProjectCard;