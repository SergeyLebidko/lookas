import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./About.scss";

function About() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <main className="about">
            <h1>Привет! Меня зовут Таня!</h1>
            <p>Я дизайнер-декоратор с более чем десятилетним опытом работы</p>
        </main>
    );
}

export default About;