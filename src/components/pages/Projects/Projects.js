import React from "react";
import {PROJECTS} from "../../../constants/settings";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import "./Projects.scss";

function Projects() {
    return (
        <div className="projects">
            {PROJECTS.map(project => <ProjectCard key={project.title} {...project}/>)}
        </div>
    );
}

export default Projects;