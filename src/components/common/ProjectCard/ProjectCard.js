import React, {useContext, useRef, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {appContext} from "../../../utils/context";
import "./ProjectCard.scss";
import {useVisibleControl} from "../../../utils/hooks";

function ProjectCard({title, description, img}) {
    const [hasTitle, setHasTitle] = useState(false);
    const [hasDescription, setHasDescription] = useState(false);
    const [hasImage, setHasImage] = useState(false);

    const elementRef = useRef(null);

    const {imgLoadHandler, line, direction} = useContext(appContext);

    useVisibleControl(elementRef, line, direction, 1 / 2, setHasTitle, hasTitle);
    useVisibleControl(elementRef, line, direction, 1 / 2, setHasDescription, hasDescription);
    useVisibleControl(elementRef, line, direction, 1 / 2, setHasImage, hasImage);

    const titleClasses = classNames('project_card__title', {'project_card__title_rise': hasTitle});
    const descriptionClasses = classNames('project_card__description', {'project_card__description_rise': hasDescription});
    const imageClasses = classNames('project_card__image_block', {'project_card__image_block_rise': hasImage});

    return (
        <div className="project_card" ref={elementRef}>
            <h1 className={titleClasses}>{title}</h1>
            <p className={descriptionClasses}>{description}</p>
            <div className={imageClasses}>
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