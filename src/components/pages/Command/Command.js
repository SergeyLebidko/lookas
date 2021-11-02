import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Command.scss";

function Command() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <main className="command">
            <h1>Вокруг меня коллектив профессионалов</h1>
            <p>
                Я работаю в команде с флористами, фотографами, ведущими, осветителями,
                другими дизайнерами, настоящими мастерами своего дела
            </p>
        </main>
    );
}

export default Command;