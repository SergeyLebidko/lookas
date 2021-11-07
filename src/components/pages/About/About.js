import React from "react";
import Avatar from "../../common/Avatar/Avatar";
import AboutMyself from "../../common/AboutMyself/AboutMyself";
import "./About.scss";

function About() {
    return (
        <section className="about">
            <Avatar/>
            <AboutMyself/>
        </section>
    );
}

export default About;