import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Command.scss";

function Command() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <section className="command bordered">
            <h1>Вокруг меня коллектив профессионалов</h1>
            <p>
                Я работаю в команде с флористами, фотографами, ведущими, осветителями,
                другими дизайнерами, настоящими мастерами своего дела
            </p>
        </section>
    );
}

export default Command;