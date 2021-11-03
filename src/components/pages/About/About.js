import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./About.scss";

function About() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <section className="about bordered">
            <h1>Привет! Меня зовут Таня!</h1>
            <p>Я дизайнер-декоратор с более чем десятилетним опытом работы</p>
        </section>
    );
}

export default About;