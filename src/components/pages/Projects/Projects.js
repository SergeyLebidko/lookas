import React from "react";
import {PROJECTS} from "../../../constants/settings";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import "./Projects.scss";

function Projects() {
    return (
        <section className="projects">
            {PROJECTS.map(project => <ProjectCard key={project.title} {...project}/>)}
        </section>
    );
}

export default Projects;